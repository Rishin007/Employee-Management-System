package com.example.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "departments")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "deptno")
    private Integer id;
    @Column(name = "deptname")
    private String name;
    @Column(name = "deptdescription")
    private String description;

    // One department → many employees
//    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Employee> employees = new ArrayList<>();


    public Department(String name, String description) {
        this.name = name;
        this.description = description;
    }

//    // helper method to add employee
//    public void addEmployee(Employee employee) {
//        employees.add(employee);
//        employee.setDepartment(this);
//    }
//
//    // helper method to remove employee
//    public void removeEmployee(Employee employee) {
//        employees.remove(employee);
//        employee.setDepartment(null);
//    }
}
