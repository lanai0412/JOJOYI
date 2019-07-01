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

        List<Question> list = questionService.findAll();

        session.setAttribute("qlist", list);

        return list;
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

    @RequestMapping("solved_questions")
    @ResponseBody
    public List<Question> findByAdopt(String flag, HttpSession session) {

        List<Question> list = new ArrayList<>();

        if (flag.equals("200")) {
            list = questionService.findByAdopt(1);
        } else {
            list = questionService.findByAdopt(0);
        }

        session.setAttribute("qlist", list);

        return list;
    }

    @RequestMapping("type_questions")
    @ResponseBody
    public List<Question> findByType(String type, HttpSession session) {

        List<Question> list = questionService.findByType(type);

        session.setAttribute("qlist", list);

        return list;
    }

    @RequestMapping("find_title")
    @ResponseBody
    public List<Question> findByTitle(String qtitle, HttpSession session) {

        List<Question> list = questionService.findByQtitle(qtitle);

        session.setAttribute("qlist", list);

        return list;
    }

    @RequestMapping("get_questions")
    @ResponseBody
    public List<Question> getQuestion(HttpSession session) {

        List<Question> list = (List<Question>) session.getAttribute("qlist");
        return list;

    }

}