package com.training.fullstack.dto;

public class EmployeeDto {
	private Integer id;
	private String fname;
	private String lname;
	private String email;
	
	
	public EmployeeDto(Integer id, String fname, String lname, String email) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
	}


	public EmployeeDto() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Integer getId() {
		return id;
	}


	public String getFname() {
		return fname;
	}


	public String getLname() {
		return lname;
	}


	public String getEmail() {
		return email;
	}
}
