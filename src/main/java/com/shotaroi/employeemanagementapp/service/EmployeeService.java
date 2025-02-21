package com.shotaroi.employeemanagementapp.service;

import com.shotaroi.employeemanagementapp.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(Long id);

    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updateEmployee);

    void deleteEmployee(Long employeeId);
}
