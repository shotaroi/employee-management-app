package com.shotaroi.employeemanagementapp.repository;

import com.shotaroi.employeemanagementapp.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
