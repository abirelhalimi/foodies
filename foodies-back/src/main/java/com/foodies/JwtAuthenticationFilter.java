package com.foodies;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;

        setFilterProcessesUrl(SecurityConstants.AUTH_LOGIN_URL);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        Authentication authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain filterChain, Authentication authentication) throws IOException {
        User user = ((User) authentication.getPrincipal());

        List<String> roles = user.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        byte[] signingKey = SecurityConstants.JWT_SECRET.getBytes();

        String token = Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(signingKey), SignatureAlgorithm.HS512)
                .setHeaderParam("typ", SecurityConstants.TOKEN_TYPE)
                .setIssuer(SecurityConstants.TOKEN_ISSUER)
                .setAudience(SecurityConstants.TOKEN_AUDIENCE)
                .setSubject(user.getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + 864000000))
                .claim("rol", roles)
                .compact();

        response.addHeader(SecurityConstants.TOKEN_HEADER, SecurityConstants.TOKEN_PREFIX + token);
//        String userData = user.getUsername();
//        response.getWriter().write(String.valueOf(user));
//        response.getWriter().flush();
//        response.getWriter().close();
        response.getWriter().println("{\n" +
                "    \"id\": 1,\n" +
                "    \"email\": \"reginaphalange@gmail.com\",\n" +
                "    \"password\": \"$2a$10$CqSf46uRvjvicccBXSZZTutM43Qhdc/mGfILav/FMpCz7j5ZgvR2q\",\n" +
                "    \"role\": \"USER\",\n" +
                "    \"bio\": \"null\",\n" +
                "    \"cuisines\": \"[]\",\n" +
                "    \"followers\": \"[]\",\n" +
                "    \"followingRestaurant\": \"[]\",\n" +
                "    \"enabled\": false,\n" +
                "    \"username\": \"reginaphalange\",\n" +
                "    \"authorities\": [\n" +
                "        {\n" +
                "            \"authority\": \"ROLE_USER\"\n" +
                "        }\n" +
                "    ],\n" +
                "    \"accountNonExpired\": false,\n" +
                "    \"accountNonLocked\": false,\n" +
                "    \"credentialsNonExpired\": false\n" +
                "}");
    }
}


