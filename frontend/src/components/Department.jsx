import {  useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createDepartment, getDepartment, updateDepartment } from "../services/DepartmentService";

const Department = () => {
  const { id } = useParams();
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    // setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (department) => {
    if (id) {
      updateDepartment(id, department)
        .then(() => {
          navigator("/departments");
        })
        .catch((error) => console.error(error));
    } else {
      createDepartment(department)
        .then(() => {
          navigator("/departments");
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
      return <h2 className="text-center m-4">Edit Department</h2>;
    } else {
      return <h2 className="text-center m-4">Add Department</h2>;
    }
  };

  useEffect(() => {
    if (id) {
      getDepartment(id)
        .then((response) => {
          const { name, description } = response.data;
          reset({ name, description });
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
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  {...register("name", {
                    required: "Name required",
                  })}
                />
                {errors.name && (
                  <p style={{ color: "red" }}>{errors.name.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  {...register("description", {
                    required: "Description required",
                  })}
                />
                {errors.description && (
                  <p style={{ color: "red" }}>{errors.description.message}</p>
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

export default Department;
