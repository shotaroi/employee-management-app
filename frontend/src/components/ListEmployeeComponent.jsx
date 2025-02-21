import React from 'react'

const ListEmployeeComponent = () => {

    const testEmployees = [
        {
            "id": 1,
            "firstName": "Adam",
            "lastName": "Smith",
            "email": "Adam@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Ayn",
            "lastName": "Rand",
            "email": "Ayn@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Immanuel",
            "lastName": "Kant",
            "email": "Immanuel@gmail.com"
        }
        

    ]

  return (
    <div>
        <h2>Employees</h2>
        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    testEmployees.map(emp => 
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent