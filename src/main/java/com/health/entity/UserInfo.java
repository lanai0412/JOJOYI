package com.health.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class UserInfo {
    @TableId("hid")
    private int hid;
    private int uname;
    private int address;
    private int phone;
    private int pid;
    private int number;

}
