package com.training.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.fullstack.dto.EmployeeDto;
import com.training.fullstack.entity.EmployeeEntity;
import com.training.fullstack.service.EmployeeServiceImplement;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeController {

	@Autowired
	EmployeeServiceImplement service;
	
	@GetMapping("/employees")
	List<EmployeeEntity> getActive(){
		return service.getActive();
	}
	
	@GetMapping("/employees/{id}")
	EmployeeEntity getById(@PathVariable Integer id){
		return service.getById(id);
	}
	
	@PostMapping("/employees")
	EmployeeEntity post(@RequestBody EmployeeDto dto){
		return service.post(dto);
	}
	
	@PutMapping("/employees/{id}")
	EmployeeEntity update(@RequestBody EmployeeDto dto, @PathVariable Integer id){
		return service.update(dto, id);
	}
	
	@DeleteMapping("/employees/{id}")
	EmployeeEntity delete(@PathVariable Integer id){
		return service.delete(id);
	}
}
