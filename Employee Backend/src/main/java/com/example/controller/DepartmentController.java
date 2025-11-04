package com.example.controller;

import com.example.dto.DepartmentDto;
import com.example.exception.DepartmentNotFoundException;
import com.example.service.DepartmentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class DepartmentController {

    private final DepartmentService deptService;

    public DepartmentController(DepartmentService deptService) {
        this.deptService = deptService;
    }

    @GetMapping("deptall")
    public ResponseEntity<List<DepartmentDto>> getAllDepartments() {
        return new ResponseEntity<>(deptService.findAllDepartments(), HttpStatus.OK);
    }

    @GetMapping("dept/{id}")
    public ResponseEntity<DepartmentDto> getAllDepartmentsByIds(@PathVariable Integer id) {
        System.out.println("GET DEPARTMENT HIT");
        return new ResponseEntity<>(deptService.findDepartmentById(id)
                .orElseThrow(()->new DepartmentNotFoundException("DepartmentController","id",id)),HttpStatus.OK);
    }

    @PostMapping("deptcreate")
    public ResponseEntity<DepartmentDto> createDepartment(@Valid @RequestBody DepartmentDto departmentDto) {
        System.out.println("CREATE DEPARTMENT HIT");
        return new ResponseEntity<>(deptService.createDepartment(departmentDto), HttpStatus.CREATED);
    }
    @PutMapping("deptupdate/{id}")
    public ResponseEntity<DepartmentDto> updateDepartment( @PathVariable Integer id,@Valid @RequestBody DepartmentDto departmentDto) {
        return new ResponseEntity<>(deptService.updateDepartment(id, departmentDto)
                .orElseThrow(()->new DepartmentNotFoundException("DepartmentController","id",id)),HttpStatus.CREATED);
    }
    @DeleteMapping("deptdelete/{id}")
    public ResponseEntity<String> deleteDepartment( @PathVariable Integer id) {
        return new ResponseEntity<>(deptService.deleteDepartmentById(id)
                .orElseThrow(()->new DepartmentNotFoundException("DepartmentController","id",id)),HttpStatus.OK);
    }
}
