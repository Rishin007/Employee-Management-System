package com.example.controller;

import com.example.dto.EmployeeDto;
import com.example.exception.EmployeeNotFoundException;
import com.example.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class EmployeeController {

    private final EmployeeService employeeService;


    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("empall")
    public ResponseEntity<List<EmployeeDto>> findAllEmployees() {
        return new ResponseEntity<>(employeeService.findAllEmployees(), HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> findEmployeeById(@PathVariable Integer id) {
        return new ResponseEntity<>(employeeService.findEmployeeById(id)
                .orElseThrow(()->new EmployeeNotFoundException("Employee","id",id)), HttpStatus.OK);
    }
    @PostMapping("empcreate")
    public ResponseEntity<EmployeeDto> createEmployee(@Valid @RequestBody EmployeeDto employeeDto) {
        return new ResponseEntity<>(employeeService.createEmployee(employeeDto), HttpStatus.CREATED);
    }
    @PutMapping("empupdate/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee( @PathVariable Integer id,@Valid @RequestBody EmployeeDto employeeDto ) {
        return new ResponseEntity<>(employeeService.updateEmployee(id,employeeDto)
                .orElseThrow(()->new EmployeeNotFoundException("Employee","id",id)),
                HttpStatus.CREATED);
    }
    @DeleteMapping("empdelete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Integer id) {
        return new ResponseEntity<>(employeeService.deleteEmployeeById(id)
                .orElseThrow(()-> new EmployeeNotFoundException("Employee","id",id)),HttpStatus.OK);
    }
}
