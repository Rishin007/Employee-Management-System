package com.example.service.impl;

import com.example.converter.Mapper;
import com.example.dto.DepartmentDto;
import com.example.entity.Department;
import com.example.entity.Employee;
import com.example.repository.DepartmentRepository;
import com.example.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private final DepartmentRepository deptRepo;

    @Override
    public List<DepartmentDto> findAllDepartments() {
       List<Department> departments = deptRepo.findAll();
       List<DepartmentDto> departmentDtos = new ArrayList<>();
       for(Department dept:departments){
           departmentDtos.add(Mapper.convertDepartmentToDepartmentDto(dept));
       }
       return  departmentDtos;
    }

    @Override
    public Optional<DepartmentDto> findDepartmentById(Integer id) {
        if(deptRepo.findById(id).isPresent()) {
            return Optional.of(Mapper.convertDepartmentToDepartmentDto(deptRepo.findById(id).get()));
        }
        else
            return Optional.empty();
    }

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department dept = Mapper.convertDepartmentDtoToDepartment(departmentDto);
        deptRepo.save(dept);
        return Mapper.convertDepartmentToDepartmentDto(dept);
    }

    @Override
    public Optional<DepartmentDto> updateDepartment(Integer id, DepartmentDto departmentDto) {
        if(deptRepo.findById(id).isPresent()) {
            Department dept = deptRepo.findById(id).get();
            dept.setId(id);
            dept.setName(departmentDto.getName());
            dept.setDescription(departmentDto.getDescription());
            deptRepo.save(dept);
            return Optional.of(Mapper.convertDepartmentToDepartmentDto(dept));
        }
        return Optional.empty();
    }

    @Override
    public Optional<String> deleteDepartmentById(Integer id) {
        if(deptRepo.findById(id).isPresent()) {
            deptRepo.deleteById(id);
            return Optional.of("Department with id " + id + " has been deleted....");
        }
        return Optional.empty();
    }

//    @Override
//    public Optional<DepartmentDto> addEmployeeToDepartment(Integer deptId, Employee employee) {
//        Department dept = deptRepo.findById(deptId).get();
//        dept.addEmployee(employee);       // keeps both sides in sync
//        return Optional.of(Mapper.convertDepartmentToDepartmentDto(deptRepo.save(dept)));
//    }
//
//    @Override
//    public void removeEmployeeFromDepartment(Integer deptId, Integer empId) {
//
//    }
}
