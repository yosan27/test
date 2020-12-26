package com.training.fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.training.fullstack.dto.EmployeeDto;
import com.training.fullstack.entity.EmployeeEntity;
import com.training.fullstack.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeServiceImplement implements EmployeeService{

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public List<EmployeeEntity> getAll() {
		List<EmployeeEntity> employeeEntity = employeeRepository.findAll();
		return employeeEntity;
	}
	
	@Override
	public List<EmployeeEntity> getActive() {
		List<EmployeeEntity> employeeEntity = employeeRepository.findAllByActive();
		return employeeEntity;
	}

	@Override
	public EmployeeEntity getById(Integer id) {
		EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
		return employeeEntity;
	}

	@Override
	public EmployeeEntity post(EmployeeDto dto) {
		EmployeeEntity employeeEntity = new EmployeeEntity();
		employeeEntity.setStatus("Active");
		employeeEntity.setFname(dto.getFname());
		employeeEntity.setLname(dto.getLname());
		employeeEntity.setEmail(dto.getEmail());
		employeeRepository.save(employeeEntity);
		return employeeEntity;
	}

	@Override
	public EmployeeEntity update(EmployeeDto dto, Integer id) {
		EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
		employeeEntity.setFname(dto.getFname());
		employeeEntity.setLname(dto.getLname());
		employeeEntity.setEmail(dto.getEmail());
		employeeRepository.save(employeeEntity);
		return employeeEntity;
	}

	@Override
	public EmployeeEntity delete(Integer id) {
		EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
		employeeEntity.setStatus("Deleted");
		employeeRepository.save(employeeEntity);
		return employeeEntity;
	}

}
