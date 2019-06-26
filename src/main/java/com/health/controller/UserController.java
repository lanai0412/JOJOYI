package com.health.controller;

import com.health.entity.User;
import com.health.service.UserService;
import com.health.verification.Verification;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;
import java.util.Random;


/**
 * Created by yaohandong on  2019/6/24 18:10
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("alluser")
    @ResponseBody
    public List<User> findAll() {
        return userService.findAll();
    }

    //注册
    @RequestMapping("userreg")
    @ResponseBody
    public int save(User user) {
        boolean isok = userService.save(user);

        int msg = 0;
        if (isok) {
            msg = 200;
        } else {
            msg = 400;
        }
        return msg;

    }

    //登录
    @RequestMapping("userlogin")
    @ResponseBody
    public int findByUname(String uname, String password, HttpSession session) {
        User user = userService.findByUname(uname);
        int msg = 0;
        if (user != null) {
            if (user.getPassword().equals(password)) {
                user.setPassword("");
                session.setAttribute("user", user);
                msg = 200;
            } else {
                msg = 400;
            }
        } else {
            msg = 500;
        }

        return msg;
    }

    //校验登录
    @RequestMapping("login_exita")
    @ResponseBody
    public User session(HttpSession session, HttpServletRequest request) {
        session = request.getSession();
        User user = (User) session.getAttribute("user");
        if (user != null) {
            return user;
        } else {
            return null;
        }
    }

    //校验用户名
    @RequestMapping("checkuname")
    @ResponseBody
    public int countByUname(String uname) {
        int msg = 0;
        boolean isok = userService.CountByUname(uname);

        if (isok) {
            msg = 200;
        } else {
            msg = 400;

        }
        System.out.println(msg);
        return msg;
    }

    //校验电话号码
    @RequestMapping("checkphone")
    @ResponseBody
    public int countByPhone(String phone) {
        int msg = 0;
        boolean isok = userService.CountByPhone(phone);
        if (isok) {
            msg = 200;
        } else {
            msg = 400;
        }
        return msg;
    }

    //验证码
    @RequestMapping("captcha")
    @ResponseBody
    public int captcha(String phone) {
        String cap = "";
        Random random = new Random();
        for (int i = 0; i < 6; i++) {
            int t = random.nextInt(10);
            cap += String.valueOf(t);
        }
        // Verification.sendOne("注册", cap, phone);
        int capt = Integer.parseInt(cap);
        return capt;
    }

    //退出
    @RequestMapping("login_exit")
    @ResponseBody
    public int exit(HttpSession session, HttpServletRequest request) throws IOException {
        session = request.getSession();
        session.removeAttribute("user");
        session.invalidate();
        //session.setAttribute("register", null);
        //System.out.println(session);
        int msg = 400;
        return msg;
    }
}
