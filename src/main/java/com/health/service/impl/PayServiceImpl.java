package com.health.service.impl;

import com.alipay.api.AlipayApiException;
import com.health.others.Alipay;
import com.health.others.AlipayBean;
import com.health.service.PayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PayServiceImpl implements PayService {

    @Autowired
    private Alipay alipay;

    @Override
    public String aliPay(AlipayBean alipayBean) throws AlipayApiException {
        return alipay.pay(alipayBean);
    }

}