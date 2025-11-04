package com.example.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployeeDto {
    private Integer id;
    @Size(min = 3, max = 20,message = "Name must be min. of 3 and maximum of 20 characters")
    @NotNull(message = "Please give a valid name")
    private String firstName;
    @Size(min = 3, max = 20,message = "Surname must be min. of 5 and maximum of 20 characters")
    @NotNull(message = "Please give a valid surname")
    private String lastName;
    @Email(message = "Please provide a valid E-mail ID")
    @NotEmpty(message = "Email cannot be empty !!!")
    private String email;

    public EmployeeDto(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
