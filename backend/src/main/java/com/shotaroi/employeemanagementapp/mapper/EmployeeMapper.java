package com.shotaroi.employeemanagementapp.mapper;

import com.shotaroi.employeemanagementapp.dto.EmployeeDTO;
import com.shotaroi.employeemanagementapp.entity.Department;
import com.shotaroi.employeemanagementapp.entity.Employee;
import com.shotaroi.employeemanagementapp.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeMapper {
    private final DepartmentRepository departmentRepository;

    @Autowired
    public EmployeeMapper(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

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

        return employee;
    }
}
