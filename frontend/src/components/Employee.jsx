import { useState, useEffect } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAllDepartments } from "../services/DepartmentService";

const Employee = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [departments, setDepartments] = useState([]);

  const {
    register,
    handleSubmit,
    // setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      department: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (employee) => {
    if (id) {
      updateEmployee(id, employee)
        .then(() => {
          navigator("/employees");
        })
        .catch((error) => console.error(error));
    } else {
      createEmployee(employee)
        .then(() => {
          navigator("/employees");
        })
        .catch((error) => {
          console.log("hmm?");
          console.error(
            "Axios Error:",
            error.response ? error.response.data : error.message
          );
        });
    }
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center m-4">Edit Employee</h2>;
    } else {
      return <h2 className="text-center m-4">Add Employee</h2>;
    }
  };

  useEffect(() => {
    getAllDepartments()
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error(error));

    if (id) {
      getEmployee(id)
        .then((response) => {
          const { department, firstName, lastName, email } = response.data;
          reset({ department, firstName, lastName, email });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, reset]);

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group m-3">
                <label className="form-label">Department</label>
                <select className="form-control" {...register("department", {required: "Department is required"})}>
                  <option value="" disabled selected>Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.departmentId} value={dept}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <p style={{ color: "red" }}>{errors.department.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstName"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p style={{ color: "red" }}>{errors.firstName.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="lastName"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p style={{ color: "red" }}>{errors.lastName.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label className="form-label">Joning Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Choose Date"
                  name="joiningDate"
                  {...register("joiningDate", {
                    required: "Date is required",
                  })}
                />
                {errors.joiningDate && (
                  <p style={{ color: "red" }}>{errors.joiningDate.message}</p>
                )}
              </div>
              <button className="btn btn-success m-3" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
