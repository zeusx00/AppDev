package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Course;

public interface CourseRepo extends JpaRepository<Course, Long> {
    
}
