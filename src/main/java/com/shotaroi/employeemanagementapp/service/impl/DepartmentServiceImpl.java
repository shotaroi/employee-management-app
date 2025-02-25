package com.shotaroi.employeemanagementapp.service.impl;

import com.shotaroi.employeemanagementapp.dto.DepartmentDTO;
import com.shotaroi.employeemanagementapp.entity.Department;
import com.shotaroi.employeemanagementapp.exception.ResourceNotFoundException;
import com.shotaroi.employeemanagementapp.mapper.DepartmentMapper;
import com.shotaroi.employeemanagementapp.repository.DepartmentRepository;
import com.shotaroi.employeemanagementapp.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDTO createDepartment(DepartmentDTO departmentDTO) {
        Department department = DepartmentMapper.toEntity(departmentDTO);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.toDTO(savedDepartment);
    }

    @Override
    public List<DepartmentDTO> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map(DepartmentMapper::toDTO).collect(Collectors.toList());
    }

    @Override
    public DepartmentDTO getDepartmentById(Long departmentId) {
        Department department = department = findDepartment(departmentId);

        return DepartmentMapper.toDTO(department);
    }

    @Override
    public DepartmentDTO updateDepartment(Long departmentId, DepartmentDTO updatedDepartmentDTO) {
        Department department = findDepartment(departmentId);
        department.setDepartmentName(updatedDepartmentDTO.getDepartmentName());
        department.setDepartmentDescription(updatedDepartmentDTO.getDepartmentDescription());

        Department savedDepartment = departmentRepository.save(department);

        return DepartmentMapper.toDTO(savedDepartment);
    }

    @Override
    public void deleteDepartment(Long departmentId) {

    }

    public Department findDepartment(Long departmentId) {
        return departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department with id " + departmentId + " not found"));
    }
}
