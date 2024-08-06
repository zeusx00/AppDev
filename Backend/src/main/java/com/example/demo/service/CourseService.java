package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Course;
import com.example.demo.repository.CourseRepo;

@Service
public class CourseService {
    
    @Autowired
    CourseRepo cr;
    
    public Course create(Course course) {
        return cr.save(course);
    }

    public List<Course> getAll() {
        return cr.findAll();
    }
}
