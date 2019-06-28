package com.health.controller;

import com.health.entity.Question;
import com.health.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("qadd.do")
    public String AddQuestion(Question question) {
        boolean b = questionService.save(question);
        if (b) {

        }
        return null;
    }
}
