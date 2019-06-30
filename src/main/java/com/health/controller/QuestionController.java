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
                return check_istop(list, user);
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

    @RequestMapping("solved_questions")
    @ResponseBody
    public List<Question> findByAdopt(String flag, HttpSession session) {

        if (session.getAttribute("user") != null) {
            User user = (User) session.getAttribute("user");
            if (user.getIstop() == null || "".equals(user.getIstop())) {
                if (flag.equals("200")) {
                    return questionService.findByAdopt(1);
                } else {
                    return questionService.findByAdopt(0);
                }
            } else {
                List<Question> list = new ArrayList<>();
                if (flag.equals("200")) {
                    list = questionService.findByAdopt(1);
                } else {
                    list = questionService.findByAdopt(0);
                }
                return check_istop(list, user);
            }
        }

        if (flag.equals("200")) {
            return questionService.findByAdopt(1);
        }

        return questionService.findByAdopt(0);
    }

    @RequestMapping("type_questions")
    @ResponseBody
    public List<Question> findByType(String type, HttpSession session) {

        if (session.getAttribute("user") != null) {
            User user = (User) session.getAttribute("user");
            if (user.getIstop() == null || "".equals(user.getIstop())) {
                return questionService.findByType(type);
            } else {
                List<Question> list = questionService.findByType(type);
                return check_istop(list, user);
            }
        }

        return questionService.findByType(type);
    }

    @RequestMapping("find_title")
    @ResponseBody
    public List<Question> findByTitle(String qtitle, HttpSession session) {

        if (session.getAttribute("user") != null) {
            User user = (User) session.getAttribute("user");
            if (user.getIstop() == null || "".equals(user.getIstop())) {
                return questionService.findByQtitle(qtitle);
            } else {
                List<Question> list = questionService.findByQtitle(qtitle);
                return check_istop(list, user);
            }
        }

        return questionService.findByQtitle(qtitle);
    }


    private List<Question> check_istop(List<Question> list, User user) {
        List<Question> ilist = new ArrayList<>();
        ilist.add(questionService.findByQid(user.getIstop()));
        for (Question question : list) {
            if (question.getQid() != user.getIstop()) {
                continue;
            }
            ilist.add(question);
        }
        return ilist;
    }
}