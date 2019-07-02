package com.health.controller;

import com.health.entity.Reply;
import com.health.entity.User;
import com.health.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class ReplyController {

    @Autowired
    private ReplyService replyService;

    @RequestMapping("add_reply")
    @ResponseBody
    public Integer AddQuestion(Reply reply, HttpSession session) {
        User user = (User) session.getAttribute("user");

        reply.setRid(1);

        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        reply.setRtime(sf.format(new Date()));
        reply.setUname(user.getUname());

        reply.setUname(user.getUname());
        reply.setPsrc(user.getPsrc());

        boolean b = replyService.save(reply);
        if (b) {
            return 200;
        }
        return 400;
    }

}
