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
    public List<ShoppingCar> findByUser(@RequestParam("userId") Integer userId) {
        return shoppingCarService.findByUser(userId);
    }

    @RequestMapping("findShoppingByUserId")
    @ResponseBody
    public List<ShoppingCar> findShoppingByUserId(@RequestParam("userId") Integer userId) {
        return shoppingCarService.findShoppingByUserId(userId);
    }

    @RequestMapping("saveShoppingCar")
    @ResponseBody
    public int saveShoppingCar(@RequestParam("productId") Integer productId, @RequestParam("userId") Integer userId,
                               @RequestParam("productNum") Integer productNum,
                               @RequestParam("producturl") String productUrl,
                               @RequestParam("productname") String productName,
                               @RequestParam("productprice") Double productprice) {
        ShoppingCar shoppingCar = new ShoppingCar();
        shoppingCar.setProductId(productId);
        shoppingCar.setUserId(userId);
        shoppingCar.setProductNum(productNum);
        shoppingCar.setProductState(0);
        shoppingCar.setProductUrl(productUrl);
        shoppingCar.setProductName(productName);
        shoppingCar.setProductPrice(productprice);
        boolean b = shoppingCarService.save(shoppingCar);
        if (b) {
            return 200;
        } else {
            return 400;
        }
    }


    @RequestMapping("deleteById")
    @ResponseBody
    public int deleteById(@RequestParam("productId") Integer productId) {
        System.out.println(productId);
        boolean i = shoppingCarService.delete(productId);
        return i == true ? 200 : 400;
    }

}
