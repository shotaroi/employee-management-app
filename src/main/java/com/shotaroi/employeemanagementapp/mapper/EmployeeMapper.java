package com.shotaroi.employeemanagementapp.mapper;

import com.shotaroi.employeemanagementapp.dto.EmployeeDTO;
import com.shotaroi.employeemanagementapp.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO toDTO(Employee employee) {
        return new EmployeeDTO(
                employee.getEmployeeId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getJoiningDate(),
                employee.getDepartment().getDepartmentId()
                );
    }

    public static Employee toEntity(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setEmployeeId(employeeDTO.getEmployeeId());
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setEmail(employeeDTO.getEmail());
        employee.setJoiningDate(employeeDTO.getJoiningDate());
        employee.setDepartment( employeeDTO.getDepartmentId());
        return employee;
    }
}
