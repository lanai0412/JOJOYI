package com.health.service;

import com.health.entity.Question;

import java.util.List;

/**
 * Created by yaohandong on  2019/6/24 15:41
 */
public interface QuestionService {
    public List<Question> findAll();

    public boolean save(Question question);

    public boolean update(Question question);

    public boolean delete(Integer qid);
}
