package com.alibaba.dingtalk.openapi.servlet;

import com.alibaba.dingtalk.openapi.demo.auth.AuthHelper;
import com.alibaba.dingtalk.openapi.demo.user.UserHelper;
import com.alibaba.fastjson.JSON;
import com.dingtalk.open.client.api.model.corp.CorpUserDetail;
import org.apache.commons.lang3.StringUtils;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 根据免登授权码查询免登用户信息
 */
public class UserInfoServlet extends HttpServlet {


    /**
     * 根据免登授权码获取免登用户userId
     *
     * @param request
     * @param response
     * @throws IOException
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Map<String, Object> rs = new HashMap<>();
        // 获取免登授权码
        String code = request.getParameter("code");
        System.out.println("authCode:" + code);
        try {
            response.setContentType("application/json; charset=utf-8");
            response.setHeader("Access-Control-Allow-Origin", "*");

            // 免登授权码不能为空
            if (StringUtils.isBlank(code)) {
                rs.put("errcode", -1);
                String userJson = JSON.toJSONString(rs);
                response.getWriter().append(userJson);
                return;
            }

            String accessToken = AuthHelper.getAccessToken();
            System.out.println("access token:" + accessToken);
            CorpUserDetail user = UserHelper.getUser(accessToken, UserHelper.getUserInfo(accessToken, code).getUserid());

            rs.put("errcode", 0);
            rs.put("userid", user.getUserid());
            String userJson = JSON.toJSONString(rs);
            response.getWriter().append(userJson);
            System.out.println("userjson:" + userJson);
        } catch (Exception e) {
            e.printStackTrace();
            rs.put("errcode", -1);
            String userJson = JSON.toJSONString(rs);
            response.getWriter().append(userJson);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        doGet(request, response);
    }

}
