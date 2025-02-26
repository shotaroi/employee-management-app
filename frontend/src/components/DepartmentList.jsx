import { useState, useEffect } from "react";
import {
  getAllDepartments,
  deleteDepartment,
} from "../services/DepartmentService";
import { Link, useNavigate } from "react-router-dom";

const ListDepartments = () => {
  const [departments, setDepartments] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllDepartments()
      .then((response) => {
        // console.log(response.data);
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateDepartment = (id) => {
    navigator(`/edit-department/${id}`);
  };

  const removeDepartment = (id) => {
    deleteDepartment(id)
      .then(() => {
        getAllDepartments();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Department List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.departmentId}>
              <td>{dept.departmentId}</td>
              <td>{dept.name}</td>
              <td>{dept.description}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateDepartment(dept.departmentId)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeDepartment(dept.departmentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-department" className="btn btn-primary mb-2">
        Add Department
      </Link>
    </div>
  );
};

export default ListDepartments;
