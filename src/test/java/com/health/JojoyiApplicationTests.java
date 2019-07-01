package com.health;

import com.health.entity.Product;
import com.health.entity.ShoppingCar;
import com.health.service.ProductService;
import com.health.service.ShoppingCarService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JojoyiApplicationTests {

    @Autowired
    private ProductService productService;

    @Autowired
    private ShoppingCarService shoppingCarService;

    @Test
    public void contextLoads() {
    }

    @Test
    public void findByName(){
        List<Product> list = productService.findByPname("天");
        for (Product product : list) {
            System.out.println(product);
        }
    }

    @Test
    public void findByUser(){
        List<ShoppingCar> user = shoppingCarService.findByUser(1);
        user.forEach(System.out::println);
    }

    @Test
    public void ShoppingFindAll(){
        List<ShoppingCar> list = shoppingCarService.findAll();
        list.forEach(System.out::println);
    }

}
