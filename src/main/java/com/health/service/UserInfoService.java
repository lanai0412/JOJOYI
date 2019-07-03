package com.health.service;

import com.health.entity.UserInfo;

import java.util.List;

public interface UserInfoService {

    int save(UserInfo userinfo);

    List<UserInfo> findByPid(Integer pid);

    List<UserInfo> findAll();

}
