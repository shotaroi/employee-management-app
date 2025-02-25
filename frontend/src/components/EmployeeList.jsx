import { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee } from '../services/EmployeeService';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeList = () => {

    const[employees, setEmployees] = useState([]);
    const navigator = useNavigate();
    
    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        listEmployees().then(response => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    // const addEmployee = () => {
    //     navigator('/add-employee');
    // }

    const updateEmployee = (id) => {
        navigator(`/edit-employee/${id}`);
    }

    const removeEmployee = (id) => {
        deleteEmployee(id).then(() => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        });
    }

  return (
    <div className='container'>
        <h2 className="text-center">Employee List</h2>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Department</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Joining Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp => 
                        <tr key={emp.employeeId}>
                            <td>{emp.employeeId}</td>
                            <td>{emp.department.name}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.joiningDate}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateEmployee(emp.employeeId)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => removeEmployee(emp.employeeId)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        {/* <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button> */}
        <Link to='/add-employee' className='btn btn-primary mb-2'>Add Employee</Link>
    </div>
  )
}

export default EmployeeList