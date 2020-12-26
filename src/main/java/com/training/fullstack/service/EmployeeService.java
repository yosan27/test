package com.training.fullstack.service;

import java.util.List;

import com.training.fullstack.dto.EmployeeDto;
import com.training.fullstack.entity.EmployeeEntity;

public interface EmployeeService {
	List<EmployeeEntity> getAll();
	List<EmployeeEntity> getActive();
	EmployeeEntity getById(Integer id);
	EmployeeEntity post(EmployeeDto dto);
	EmployeeEntity update(EmployeeDto dto, Integer id);
	EmployeeEntity delete(Integer id);
}
