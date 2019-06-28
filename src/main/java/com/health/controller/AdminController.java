package com.health.controller;

import com.health.entity.Admin;
import com.health.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by yaohandong on  2019/6/25 10:11
 */
@Controller
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping("admin_login")
    @ResponseBody
    public int findByaname(String aname,String password, HttpSession session) {
        System.out.println(aname);
        Admin admin = adminService.findByaname(aname);
        if(admin!=null){
            if (admin.getPassword().equals(password)) {
                session.setAttribute("admin", admin);
                return 200;
            } else {
                return 400;
            }
        }else{
            return 500;
        }
    }

    @RequestMapping("check_admin")
    @ResponseBody
    public Admin session(HttpSession session, HttpServletRequest request) {
        session = request.getSession();
        Admin admin = (Admin) session.getAttribute("admin");
        System.out.println(admin);
        return admin;
    }

    @RequestMapping("admin_reg")
    @ResponseBody
    public int reg(Admin admin) {
        boolean isok = adminService.save(admin);
        if (isok) {
            return 200;
        } else {
            return 400;
        }
    }

    @RequestMapping("admin_exit")
    @ResponseBody
    public int exit(HttpSession session, HttpServletRequest request) throws IOException {
        session = request.getSession();
        session.removeAttribute("admin");
        session.invalidate(); //让session失效
        //session.setAttribute("register", null);
        //System.out.println(session);
        int msg = 400;
        return msg;
    }

}
