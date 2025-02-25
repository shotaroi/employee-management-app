package com.shotaroi.employeemanagementapp.mapper;

import com.shotaroi.employeemanagementapp.dto.DepartmentDTO;
import com.shotaroi.employeemanagementapp.entity.Department;

public class DepartmentMapper {

    public static DepartmentDTO toDTO(Department department) {
        return new DepartmentDTO(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    public static Department toEntity(DepartmentDTO departmentDTO) {
        return new Department(
                departmentDTO.getId(),
                departmentDTO.getDepartmentName(),
                departmentDTO.getDepartmentDescription()
        );
    }
}
