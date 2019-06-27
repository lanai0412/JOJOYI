package com.health.service;

import com.health.entity.Question;

import java.util.List;

/**
 * Created by yaohandong on  2019/6/24 15:41
 */
public interface QuestionService {
    List<Question> findAll();

    boolean save(Question question);

    boolean update(Question question);

    boolean delete(Integer qid);

    Question findByQid(Integer qid);
}
