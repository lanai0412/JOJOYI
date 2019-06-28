package com.health.controller;

import com.health.entity.Question;
import com.health.entity.User;
import com.health.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Date;

@Controller
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("add_question")
    @ResponseBody
    public Integer AddQuestion(Question question, HttpSession session) {
        User user = (User) session.getAttribute("user");

        question.setQid(1);
        question.setTime(new Date());
        question.setUname(user.getUname());
        //0表示未采纳，1表示采纳
        question.setAdopt(0);
        boolean b = questionService.save(question);
        if (b) {
            return 200;
        }
        return 400;
    }
}
