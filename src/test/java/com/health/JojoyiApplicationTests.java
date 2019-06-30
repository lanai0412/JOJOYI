package com.health;

import com.health.entity.Product;
import com.health.service.ProductService;
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

}
