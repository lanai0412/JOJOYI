package com.health.service.impl;

import com.health.dao.QuestionDAO;
import com.health.entity.Question;
import com.health.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yaohandong on  2019/6/24 20:43
 */
@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionDAO questionDAO;

    @Override
    public List<Question> findAll() {
        return questionDAO.selectList(null);
    }

    @Override
    public boolean save(Question question) {
        int i = questionDAO.insert(question);
        return i == 1 ? true : false;
    }

    @Override
    public boolean update(Question question) {
        int i = questionDAO.updateById(question);
        return i == 1 ? true : false;
    }

    @Override
    public boolean delete(Integer qid) {
        int i = questionDAO.deleteById(qid);
        return i == 1 ? true : false;
    }
}
