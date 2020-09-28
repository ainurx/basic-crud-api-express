'user strict'

const conn = require('../../config/database')

var Employee = function(employee){
  this.first_name     = employee.first_name;
  this.last_name      = employee.last_name;
  this.email          = employee.email;
  this.phone          = employee.phone;
  this.organization   = employee.organization;
  this.designation    = employee.designation;
  this.salary         = employee.salary;
  this.status         = employee.status ? employee.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
}

Employee.create = (newEmp, result)=>{
  conn.query('INSERT INTO employees SET ?', newEmp, (err, res)=>{
    if(err){
      console.log("error: ",err)
      result(err, null)
    }
    else{
      console.log(res.insertID)
      result(null, res.insertID)
    }
  })
}

Employee.findByID = (id, result)=>{
  conn.query(`SELECT * FROM employees WHERE id = ${id}`, (err, res)=>{
    if(err){
      console.log("error: ", err)
      result(null, err)
    }
    else{
      console.log(" employee: ", res)
      result(null, res)
    }
  })
}

Employee.findAll = (result) =>{
  conn.query("SELECT * FROM employees", (err, res)=>{
    if(err){
      console.log("Error: ", err)
      result(null, err)
    }
    else{
      console.log("Result: ", res)
      result(null, res)
    }
  })
}

Employee.update = (id, employee, result)=>{
  conn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?",
  [employee.first_name, employee.last_name, employee.email, employee.phone,
    employee.organization, employee.designation, employee.salary, id ], (err, res)=>{
      if(err){
        console.log("Error: ", err)
        result(null, err)
      }
      else{
        result(null, res)
      }
    }  
  )
}

Employee.delete = (id, result)=>{
  conn.query(`DELETE FROM employees WHERE id = ${id}`, (err, res)=>{
    if(err){
      console.log("Error: ", err)
      result(null, err)
    }
    else{
      console.log("result: ", res)
      result(null, res)
    }
  })
}

module.exports = Employee