package com.example.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DepartmentDto {

    private Integer id;
   @NotNull(message = "Please give a valid DepartmentController name")
   @NotBlank(message = "Please give a valid DepartmentController name")
    private String name;
    @NotNull(message = "Try to write something in the description")
    @NotBlank(message = "Try to write something in the description")
    private String description;

    public DepartmentDto(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
