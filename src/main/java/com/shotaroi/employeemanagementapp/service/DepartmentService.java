package com.shotaroi.employeemanagementapp.service;

import com.shotaroi.employeemanagementapp.dto.DepartmentDTO;

import java.util.List;

public interface DepartmentService {
    DepartmentDTO createDepartment(DepartmentDTO departmentDTO);

    List<DepartmentDTO> getAllDepartments();
    DepartmentDTO getDepartmentById(Long departmentId);

    DepartmentDTO updateDepartment(Long departmentId, DepartmentDTO updatedDepartmentDTO);

    void deleteDepartment(Long departmentId);
}
