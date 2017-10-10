package com.alibaba.dingtalk.openapi.servlet;

import com.alibaba.dingtalk.openapi.demo.auth.AuthHelper;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 获取企业应用的jsapi的签名数据
 */
public class JsAPIServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        response.setContentType("text/html; charset=utf-8");
        response.setHeader("Access-Control-Allow-Origin", "*");

        Map<String, Object> config = AuthHelper.getConfig(request);
        Map<String, Object> rs = new HashMap<>();
        rs.put("errcode", 0);
        rs.putAll(config);
        String signConfig = JSON.toJSONString(rs);
        System.out.println("JsAPI:" + signConfig);

        response.getWriter().append(signConfig);
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
