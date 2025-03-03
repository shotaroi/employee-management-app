package com.shotaroi.employeemanagementapp.repository;

import com.shotaroi.employeemanagementapp.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
