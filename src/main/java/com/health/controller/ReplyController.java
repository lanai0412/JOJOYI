package com.health.controller;

import com.health.entity.Reply;
import com.health.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ReplyController {

    @Autowired
    private ReplyService replyService;

    @RequestMapping("reply_all")
    @ResponseBody
    public List<Reply> reply_all() {
        return replyService.findAll();
    }
}
