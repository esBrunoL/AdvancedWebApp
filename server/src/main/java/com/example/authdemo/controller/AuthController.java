package com.example.authdemo.controller;

import com.example.authdemo.model.User;
import com.example.authdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        boolean success = userService.register(user);
        Map<String, Object> resp = new HashMap<>();
        if (success) {
            resp.put("success", true);
            return ResponseEntity.ok(resp);
        } else {
            resp.put("success", false);
            resp.put("message", "User already exists");
            return ResponseEntity.badRequest().body(resp);
        }
    }

    private final Key jwtKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        User user = userService.authenticate(payload.get("userid"), payload.get("password"));
        Map<String, Object> resp = new HashMap<>();
        if (user != null) {
            // Generate JWT token, expires in 60 minutes
            long nowMillis = System.currentTimeMillis();
            long expMillis = nowMillis + 60 * 60 * 1000;
            String token = Jwts.builder()
                .setSubject(user.getUserid())
                .claim("givenName", user.getGivenName())
                .claim("familyName", user.getFamilyName())
                .setIssuedAt(new Date(nowMillis))
                .setExpiration(new Date(expMillis))
                .signWith(jwtKey)
                .compact();
            resp.put("token", token);
            return ResponseEntity.ok(resp);
        } else {
            resp.put("message", "Invalid credentials");
            return ResponseEntity.badRequest().body(resp);
        }
    }

    // OAuth login endpoints for Google, GitHub, Facebook will be added here
}
