'use strict'

const Employee = require("../models/employee_model")

exports.findAll = (req, res)=>{
  Employee.findAll((err, employee)=>{
    if(err) res.send(err)

    console.log('res', employee)
    res.send(employee)
  })
}

exports.create = (req, res)=>{
  const newEmployee = new Employee(req.body)

  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true, 
      message: 'Please provide all required field'
    })
  }
  else{
    Employee.create(newEmployee, function(err, employee){
      if(err){
        res.send(err)
      }
      else{
        res.json({
          error: false,
          message:"Employee added successfully!",
          data:employee
        })
      }
    })
  }
}

exports.findById = (req, res)=>{
  Employee.findByID(req.params.id, (err, employee)=>{
    if(err) res.send(err)
    res.json(employee)
  })
}

exports.update = (req, res)=>{
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true, 
      message: 'Please provide all required field'
    })
  }
  else{
    Employee.update(req.params.id, new Employee(req.body), (err, employee)=>{
      if(err){
        res.send(err)
      }
      else{
        console.log({
          error: false,
          message: 'employee successfully updated'
        })
      }
    })
  }
}

exports.delete = (req, res)=>{
  Employee.delete(req.params.id, (err, employee)=>{
    if(err) res.send(err)
    res.json({error: false, message: "Employee deleted"})
  })
}
