package com.shotaroi.employeemanagementapp.mapper;

import com.shotaroi.employeemanagementapp.dto.DepartmentDTO;
import com.shotaroi.employeemanagementapp.entity.Department;

public class DepartmentMapper {

    public static DepartmentDTO toDTO(Department department) {
        return new DepartmentDTO(
                department.getDepartmentId(),
                department.getName(),
                department.getDescription()
        );
    }

    public static Department toEntity(DepartmentDTO departmentDTO) {
        return new Department(
                departmentDTO.getDepartmentId(),
                departmentDTO.getName(),
                departmentDTO.getDescription()
        );
    }
}
