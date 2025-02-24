import { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

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

    const addEmployee = () => {
        navigator('/add-employee');
    }

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
        <h2 className="text-center">List of Employees</h2>
        <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp => 
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateEmployee(emp.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => removeEmployee(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeList