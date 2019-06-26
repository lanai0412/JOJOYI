package com.health.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by yaohandong on  2019/6/24 14:29
 */
@Data
@TableName(value = "comment")
public class Comment implements Serializable {
    @TableId(value = "cid",type = IdType.AUTO)
    private Integer cid;
    private String uname;
    private Date time;
    private String content;
    private Integer uid;
    private Integer pid;
}
