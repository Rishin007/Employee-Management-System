package com.example.service;

import com.example.dto.EmployeeDto;
import com.example.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<EmployeeDto> findAllEmployees();
    Optional<EmployeeDto> findEmployeeById(Integer id);
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    Optional<EmployeeDto> updateEmployee( Integer id,EmployeeDto employeeDto);
    Optional<String> deleteEmployeeById(Integer id);

//    Employee reassignEmployee(Integer empId, Integer newDeptId);
}
