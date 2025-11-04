package com.example.converter;

import com.example.dto.DepartmentDto;
import com.example.dto.EmployeeDto;
import com.example.entity.Department;
import com.example.entity.Employee;

public class Mapper {

    public static EmployeeDto convertEmployeeToEmployeeDto(Employee employee) {
//        EmployeeDto employeeDto=new EmployeeDto();
//        employeeDto.setId(employee.getId());
//        employeeDto.setFirstName(employee.getFirstName());
//        employeeDto.setLastName(employee.getLastName());
//        employeeDto.setEmail(employee.getEmail());
//        return employeeDto;

        return new EmployeeDto(
                employee.getId(), employee.getFirstName(),
                employee.getLastName(), employee.getEmail()
        );
    }

    public static Employee convertEmployeeDtoToEmployee(EmployeeDto employeeDto) {
//        Employee employee=new Employee();
//        employee.setId(employeeDto.getId());
//        employee.setFirstName(employeeDto.getFirstName());
//        employee.setLastName(employeeDto.getLastName());
//        employee.setEmail(employeeDto.getEmail());
//        return employee;

        return new Employee(
                employeeDto.getId(), employeeDto.getFirstName(),
                employeeDto.getLastName(), employeeDto.getEmail()
        );
    }

    //      ========================================================================

    public static Department convertDepartmentDtoToDepartment(DepartmentDto departmentDto) {
        return new Department(
                departmentDto.getId(), departmentDto.getName(), departmentDto.getDescription()
        );
    }

    public static DepartmentDto convertDepartmentToDepartmentDto(Department department) {
        DepartmentDto departmentDto = new DepartmentDto();
        departmentDto.setId(department.getId());
        departmentDto.setName(department.getName());
        departmentDto.setDescription(department.getDescription());
        return departmentDto;
    }
}
