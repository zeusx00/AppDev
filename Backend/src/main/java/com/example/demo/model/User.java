package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Date;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int age;
    private String department;
    private String contest;
    private String phoneNumber;
    private String email;
    private String password;
    private String city;
    private String country;
    private String role;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Comment> comments = new ArrayList<>();

    // Empty constructor
    public User() {}

    // Parameterized constructor
    public User(Long id, String name, String email, String phoneNumber, String password, int age, String contest, String city, String country, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.age = age;
        this.city = city;
        this.country = country;
        this.contest = contest;
        this.role = role;
    }
}
