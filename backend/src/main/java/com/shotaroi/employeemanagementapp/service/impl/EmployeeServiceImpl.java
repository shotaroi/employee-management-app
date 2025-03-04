package com.shotaroi.employeemanagementapp.service.impl;

import com.shotaroi.employeemanagementapp.dto.EmployeeDTO;
import com.shotaroi.employeemanagementapp.entity.Department;
import com.shotaroi.employeemanagementapp.entity.Employee;
import com.shotaroi.employeemanagementapp.exception.ResourceNotFoundException;
import com.shotaroi.employeemanagementapp.mapper.EmployeeMapper;
import com.shotaroi.employeemanagementapp.repository.DepartmentRepository;
import com.shotaroi.employeemanagementapp.repository.EmployeeRepository;
import com.shotaroi.employeemanagementapp.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.toEntity(employeeDTO);

        Department department = departmentRepository.findById(employeeDTO.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department id " + employeeDTO.getDepartmentId() + " not found"));

        employee.setDepartment(department);

        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.toDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long id) {
        Employee employee = findEmployee(id);
        return EmployeeMapper.toDTO(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeMapper::toDTO).collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO) {
        Employee employee = findEmployee(id);

        if (employeeDTO.getDepartmentId() != null) {
            Department department = departmentRepository.findById(employeeDTO.getDepartmentId())
                    .orElseThrow(() -> new RuntimeException("Department not found"));
            employee.setDepartment(department);
        }

//        employee.setDepartment(employeeDTO.getDepartment());
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setEmail(employeeDTO.getEmail());
        employee.setJoiningDate(employeeDTO.getJoiningDate());

        Employee updatedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.toDTO(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {
        findEmployee(id);

        employeeRepository.deleteById(id);
    }

    public Employee findEmployee(Long id) {
        return employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee with id " + id + " not found"));
    }
}
