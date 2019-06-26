package com.health.service.impl;

import com.health.dao.ArticlesDAO;
import com.health.entity.Articles;
import com.health.service.ArticlesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yaohandong on  2019/6/24 20:34
 */
@Service
public class ArticlesServiceImpl implements ArticlesService {

    @Autowired
    private ArticlesDAO articlesDAO;

    @Override
    public List<Articles> findAll() {
        return articlesDAO.selectList(null);
    }

    @Override
    public boolean save(Articles articles) {
        int i = articlesDAO.insert(articles);
        return i==1?true:false;
    }

    @Override
    public boolean update(Articles articles) {
        int i = articlesDAO.updateById(articles);
        return i==1?true:false;
    }

    @Override
    public boolean delete(Integer tid) {
        int i = articlesDAO.deleteById(tid);
        return i==1?true:false;
    }
}
