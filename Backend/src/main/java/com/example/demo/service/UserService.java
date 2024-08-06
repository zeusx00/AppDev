package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
    
    @Autowired
    UserRepo ur;
    
    public User create(User ue) {
        return ur.save(ue);
    }

    public List<User> getAll() {
        return ur.findAll();
    }
}
