package com.example.service.impl;

import com.example.converter.Mapper;
import com.example.dto.EmployeeDto;
import com.example.entity.Employee;
import com.example.repository.EmployeeRepository;
import com.example.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository empRepo;


    @Override
    public List<EmployeeDto> findAllEmployees() {
        List<Employee> emps = empRepo.findAll();
        List<EmployeeDto> employeeDtos = new ArrayList<>();
        for (Employee emp : emps) {
            employeeDtos.add(Mapper.convertEmployeeToEmployeeDto(emp));
        }
        return employeeDtos;
    }

    @Override
    public Optional<EmployeeDto> findEmployeeById(Integer id) {
        if(empRepo.findById(id).isPresent()) {
            return Optional.of(Mapper.convertEmployeeToEmployeeDto(empRepo.findById(id).get()));
        }
        else
            return Optional.empty();
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee emp = Mapper.convertEmployeeDtoToEmployee(employeeDto);
        empRepo.save(emp);
        return Mapper.convertEmployeeToEmployeeDto(emp);
    }

    @Override
    public Optional<EmployeeDto> updateEmployee(Integer id,EmployeeDto employeeDto ) {
        if (empRepo.findById(id).isPresent()) {
            Employee updatedEmployee=empRepo.findById(id).get();
            updatedEmployee.setId(id);
            updatedEmployee.setFirstName(employeeDto.getFirstName());
            updatedEmployee.setLastName(employeeDto.getLastName());
            updatedEmployee.setEmail(employeeDto.getEmail());
            empRepo.save(updatedEmployee);
            return Optional.of(Mapper.convertEmployeeToEmployeeDto(updatedEmployee));
        }
        else
            return Optional.empty();
    }

    @Override
    public Optional<String> deleteEmployeeById(Integer id) {
        if (empRepo.findById(id).isPresent()) {
            empRepo.deleteById(id);
            return Optional.of("The employee with id " + id + " has been deleted");
        }
        else
            return Optional.empty();
    }
}
