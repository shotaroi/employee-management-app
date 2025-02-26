import { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";
import { Link, useNavigate } from "react-router-dom";
import { getDepartment } from "../services/DepartmentService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  // const getAllEmployees = () => {
  //     listEmployees().then(response => {
  //         setEmployees(response.data);
  //     }).catch(error => {
  //         console.error(error);
  //     })
  // }

  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`);
  };

  const removeEmployee = (id) => {
    deleteEmployee(id)
      .then(() => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const fetchDepartment = (deptId) => {
  //      getDepartment(deptId)
  //     .then(response => {
  //         setDepartment(response.data)
  //     }).catch(error => console.error(error));
  // }

  const getAllEmployees = async () => {
    try {
      const response = await listEmployees();
      const employeeData = response.data;
      setEmployees(employeeData);

      // Fetch departments only once per employee
      const deptPromises = employeeData.map((emp) =>
        getDepartment(emp.departmentId).then((res) => ({
          id: emp.departmentId,
          name: res.data.name,
        }))
      );

      const deptData = await Promise.all(deptPromises);

      // Convert array to object for easier lookup
      const departmentMap = {};
      deptData.forEach((dept) => {
        departmentMap[dept.id] = dept.name;
      });

      setDepartments(departmentMap);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
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
          {employees.map((emp) => {
            return (
              <tr key={emp.employeeId}>
                <td>{emp.employeeId}</td>
                <td>{departments[emp.departmentId] || "Loading..."}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.joiningDate}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateEmployee(emp.employeeId)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeEmployee(emp.employeeId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button> */}
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
    </div>
  );
};

export default EmployeeList;
