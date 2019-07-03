package com.health.controller;

import com.health.entity.Comment;
import com.health.entity.User;
import com.health.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by yaohandong on  2019/7/3 13:32
 */
@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;
    @RequestMapping("save")
    @ResponseBody
    public String save(String content, Integer pid, HttpSession session){
        Date date=new Date();
        SimpleDateFormat times=new SimpleDateFormat();
        String time = times.format(date);
        User user = (User) session.getAttribute("user");
        Comment comment =new Comment();
            comment.setCid(0);
            comment.setContent(content);
            comment.setTime(time);
            comment.setUname(user.getUname());
            comment.setUurl(user.getPsrc());
            comment.setPid(pid);
        boolean isok = commentService.save(comment);
        if(isok){
            return "评论成功";
        }
        return "评论失败";
    }


    @RequestMapping("findByPid")
    @ResponseBody
    public List<Comment> findByPid(Integer pid){
        return commentService.findByPid(pid);
    }
}
