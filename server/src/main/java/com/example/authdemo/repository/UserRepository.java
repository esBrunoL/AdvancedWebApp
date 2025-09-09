package com.example.authdemo.repository;

import com.example.authdemo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUserid(String userid);
}
