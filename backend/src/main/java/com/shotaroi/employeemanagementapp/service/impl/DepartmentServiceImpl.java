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
        Department department = findDepartment(departmentId);

        return DepartmentMapper.toDTO(department);
    }

    @Override
    public DepartmentDTO updateDepartment(Long departmentId, DepartmentDTO updatedDepartmentDTO) {
        Department department = findDepartment(departmentId);
        department.setName(updatedDepartmentDTO.getName());
        department.setDescription(updatedDepartmentDTO.getDescription());

        Department savedDepartment = departmentRepository.save(department);

        return DepartmentMapper.toDTO(savedDepartment);
    }

    @Override
    public void deleteDepartment(Long id) {
        findDepartment(id);
        departmentRepository.deleteById(id);
    }

    public Department findDepartment(Long id) {
        return departmentRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Department with id " + id + " not found"));
    }
}
