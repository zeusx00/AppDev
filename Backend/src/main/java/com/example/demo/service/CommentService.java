package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Comment;
import com.example.demo.repository.CommentRepo;

@Service
public class CommentService {
    
    @Autowired
    CommentRepo cr;
    
    public Comment create(Comment comment) {
        return cr.save(comment);
    }

    public List<Comment> getAll() {
        return cr.findAll();
    }
}
