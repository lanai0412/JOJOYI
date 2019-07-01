package com.health.service;

import com.health.entity.ShoppingCar;

import java.util.List;

/**
 * Created by wenxinyan on 2019/07/01 8:48
 */
public interface ShoppingCarService {
    public List<ShoppingCar> findAll();
    public List<ShoppingCar> findByUser(Integer userid);
}
