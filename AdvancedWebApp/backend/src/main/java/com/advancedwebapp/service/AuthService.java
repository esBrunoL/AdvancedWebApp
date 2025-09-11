package com.advancedwebapp.service;

import com.advancedwebapp.model.User;
import com.advancedwebapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public boolean validateUser(String userId, String password, String givenName, String familyName, String phoneNumber) {
        if (!isValidEmail(userId) || !isValidPassword(password) || !isValidPhoneNumber(phoneNumber)) {
            return false;
        }
        return true;
    }

    public void registerUser(User user) {
        user.setPassword(encryptPassword(user.getPassword()));
        userRepository.save(user);
    }

    public String encryptPassword(String password) {
        return passwordEncoder.encode(password);
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
        return Pattern.compile(emailRegex).matcher(email).matches();
    }

    private boolean isValidPassword(String password) {
        return password.length() >= 6 && 
               Pattern.compile("[A-Z]").matcher(password).find() && 
               Pattern.compile("[a-z]").matcher(password).find() && 
               Pattern.compile("[0-9]").matcher(password).find();
    }

    private boolean isValidPhoneNumber(String phoneNumber) {
        String phoneRegex = "^(\\+\\d{1,3}[- ]?)?\\d{10}$"; // Example regex for phone number
        return Pattern.compile(phoneRegex).matcher(phoneNumber).matches();
    }
}