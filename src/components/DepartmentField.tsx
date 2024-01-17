import { useState, useEffect } from "react";

type SubDepartment = string[];

interface IDepartment {
  department: string;
  sub_departments: SubDepartment;
  isChecked?: boolean;
}

const Departments: IDepartment[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
  {
    department: "engineering",
    sub_departments: ["frontend", "backend", "devops"],
  },
  {
    department: "marketing",
    sub_departments: ["digital_marketing", "content_marketing", "social_media"],
  },
  {
    department: "sales",
    sub_departments: ["inside_sales", "outside_sales"],
  },
];

const DepartmentField = () => {
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  useEffect(() => {
    setDepartments(Departments);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(checked);
    const updatedDepartments = departments.map((department) =>
      department.department === name
        ? { ...department, isChecked: checked }
        : department
    );

    setDepartments(updatedDepartments);
  };

  const handleSubDepartment = (e, dept: IDepartment) => {
    const { name, checked } = e.target;
    const subDepartments = dept?.sub_departments;

    const subDept = [];

    if (name && checked === true) {
      subDept.push(name);
    }
    console.log(subDept);
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          backgroundColor: "#e7fef9",
          padding: "10px 0",
          borderRadius: "10px",
        }}
      >
        Department Field
      </h2>
      {/* departments  */}
      <div style={{ margin: "20px" }}>
        {departments?.map((department: IDepartment, departmentIndex) => (
          <div style={{ marginBottom: "15px" }} key={departmentIndex}>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
              <input
                type="checkbox"
                name={department.department}
                id={department.department}
                onClick={handleChange}
              />
              <label htmlFor={department.department}>
                {department?.department}
              </label>
            </div>
            {department?.sub_departments?.map(
              (sub_department: string, subDepartmentIndex) => (
                <div key={subDepartmentIndex} style={{ marginLeft: "10px" }}>
                  <input
                    type="checkbox"
                    name={sub_department}
                    id={sub_department}
                    checked={department?.isChecked}
                    onClick={(e) => handleSubDepartment(e, department)}
                  />
                  <label htmlFor={sub_department}>{sub_department}</label>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentField;
