const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (req, res)=>{
  res.send('nice')
})

const employeeRoutes = require('./src/routes/employee_routes')

app.use('/api', employeeRoutes)

app.listen(PORT, ()=>{
  console.log('server is running')
})