package com.training.fullstack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.training.fullstack.entity.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer>{
	@Query(value = "select * from employee_entity where status = 'Active'", nativeQuery = true)
	List<EmployeeEntity> findAllByActive();
}
