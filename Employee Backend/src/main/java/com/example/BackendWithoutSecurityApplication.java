package com.example;

import com.example.entity.Department;
import com.example.entity.Employee;
import com.example.repository.DepartmentRepository;
import com.example.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;


@SpringBootApplication
public class BackendWithoutSecurityApplication implements CommandLineRunner {

	private  EmployeeRepository empRepo;
	private  DepartmentRepository deptRepo;

	public BackendWithoutSecurityApplication(EmployeeRepository empRepo, DepartmentRepository deptRepo) {
		this.empRepo = empRepo;
		this.deptRepo = deptRepo;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendWithoutSecurityApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		empRepo.saveAll(
				List.of(
						new Employee("Rishin","Dutta","rishu@gmail.com"),
						new Employee("Debdeep","Das","dev2003@gmail.com"),
						new Employee("Akash King","Majhi","kingakash@gmail.com"),
						new Employee("Rajendra Fadnavis","Karmakar","karma007@gmail.com"),
						new Employee("Bapi","Poddar","bapiofficial@gmail.com"),
						new Employee("Daniel","Reynolds","dani@486@gmail.com"),
						new Employee("Sayeed Rashid ","Ali Khan","khansayed88@gmail.com")
				));
		System.out.println("All employees saved.....");
		deptRepo.saveAll(
				List.of(
						new Department("Finance","Taka Poisar Khela Kakaa"),
						new Department("HR","Human Resource Manager, concerned with recruitment of employees"),
						new Department("Tech Support","To provide with any kind of technical assistance"),
						new Department("Supply Chain & Logistics","Deals with the supply channels through which company can make maximum profit")
				));

		System.out.println("All departments saved.....");
	}

}
