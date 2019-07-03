package com.health.service;

import com.health.entity.userinfo;

import java.util.List;

public interface UserinfoService {

    int save(userinfo userinfo);

    List<userinfo> findByPid(Integer pid);

    List<userinfo> findAll();
}
