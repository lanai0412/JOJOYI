package com.health.controller;

import com.health.entity.Question;
import com.health.entity.User;
import com.health.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("find_questions")
    @ResponseBody
    public List<Question> findAll(HttpSession session) {
        if (session.getAttribute("user") != null) {
            User user = (User) session.getAttribute("user");
            if (user.getIstop() == null || "".equals(user.getIstop())) {
                return questionService.findAll();
            } else {
                List<Question> list = questionService.findAll();
                List<Question> ilist = new ArrayList<Question>();
                ilist.add(questionService.findByQid(user.getIstop()));
                for (Question question : list) {
                    if (question.getQid() != user.getIstop()) {
                        continue;
                    }
                    ilist.add(question);
                }
            }
        }

        return questionService.findAll();
    }

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

    @RequestMapping("detail_question")
    @ResponseBody
    public Question findQuestionByQid(Integer qid) {

        return questionService.findByQid(qid);

    }
}
