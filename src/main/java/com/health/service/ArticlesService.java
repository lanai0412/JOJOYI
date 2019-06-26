package com.health.service;

import com.health.entity.Articles;


import java.util.List;

/**
 * Created by yaohandong on  2019/6/24 15:42
 */
public interface ArticlesService {

    public List<Articles> findAll();

    public boolean save(Articles articles);

    public boolean update(Articles articles);

    public boolean delete(Integer tid);
}
