package com.health.controller;

import com.health.entity.Product;
import com.health.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by yaohandong on  2019/6/26 15:37
 */
@Controller
public class ProductController {

    @Autowired
    private ProductService productService;


    @RequestMapping("pall")
    @ResponseBody
    public List<Product> findAll(){
        return productService.findAll();
    }

    @RequestMapping("count_product")
    @ResponseBody
    private int count(){
        return productService.count();
    }


    @RequestMapping("findProductById")
    @ResponseBody
    public Product findById(@RequestParam("id") Integer pid){
        return productService.findById(pid);
    }

    @RequestMapping("findByPname")
    @ResponseBody
    public List<Product> findByPname(@RequestParam("pname") String pname){
        return productService.findByPname(pname);
    }


}
