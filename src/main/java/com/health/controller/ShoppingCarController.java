package com.health.controller;

import com.health.entity.ShoppingCar;
import com.health.service.ShoppingCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by wenxinyan on 2019/07/01 10:14
 */
@Controller
public class ShoppingCarController {
    @Autowired
    private ShoppingCarService shoppingCarService;

    @RequestMapping("findShoppingByUser")
    @ResponseBody
    public List<ShoppingCar> findByUser(@RequestParam("userId") Integer userId){
        return shoppingCarService.findByUser(userId);
    }
}
