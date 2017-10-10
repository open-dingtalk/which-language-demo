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
 * 根据用户id查询用户信息
 */
public class UserIdServlet extends HttpServlet {

    /**
     * 根据userId查询用户信息
     *
     * @param request
     * @param response
     * @throws IOException
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Map<String, Object> rs = new HashMap<>();
        String userid = request.getParameter("userid");
        System.out.println("userid:" + userid);
        try {
            response.setContentType("application/json; charset=utf-8");
            response.setHeader("Access-Control-Allow-Origin", "*");

            if (StringUtils.isBlank(userid)) {
                rs.put("errcode", -1);
                String userJson = JSON.toJSONString(rs);
                response.getWriter().append(userJson);
                return;
            }

            String accessToken = AuthHelper.getAccessToken();
            System.out.println("access token:" + accessToken);
            CorpUserDetail user = UserHelper.getUser(accessToken, userid);

            if (user != null) {
                rs.put("errcode", 0);
                // user信息字段写在根字段上
                rs.putAll(JSON.parseObject(JSON.toJSONString(user)));
                String userJson = JSON.toJSONString(rs);
                response.getWriter().append(userJson);
                System.out.println("userjson:" + userJson);
                return;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        rs.put("errcode", -1);
        String userJson = JSON.toJSONString(rs);
        response.getWriter().append(userJson);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        doGet(request, response);
    }
}
