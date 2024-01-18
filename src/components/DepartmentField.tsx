import { useState, useEffect } from "react";

type SubDepartment = string[];

interface IDepartment {
  department: string;
  sub_departments: SubDepartment;
  isChecked?: boolean;
  subDept?: boolean;
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
  const [clickedDept, setClickedDept] = useState<string[]>([]);
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  useEffect(() => {
    setDepartments(Departments);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    console.log(checked);

    if (!checked) {
      const updatedDepartments = departments.map((department) =>
        department.department === name
          ? { ...department, isChecked: undefined, subDept: undefined }
          : department
      );

      setDepartments(updatedDepartments);
    }
    if (checked) {
      const updatedDepartments = departments.map((department) =>
        department.department === name
          ? { ...department, isChecked: checked, subDept: checked }
          : department
      );

      setDepartments(updatedDepartments);
    }
  };

  const handleSubDepartment = (
    e: React.ChangeEvent<HTMLInputElement>,
    dept: IDepartment
  ) => {
    const { name, checked } = e.target;

    const subDepartments = dept?.sub_departments;

    let data: string[] = [];

    if (checked) {
      data = [...clickedDept, name];
      setClickedDept(data);
    }
    if (!checked) {
      data = [...clickedDept, name];
      setClickedDept(data);
      const newData = data?.filter((element) => element !== name);
      console.log(newData);
      data = newData;
      setClickedDept(data);
    }
    console.log(data);
    if (clickedDept.length) {
      const allSubDepartmentClicked = subDepartments.every((element) =>
        data.includes(element)
      );

      if (allSubDepartmentClicked) {
        const updatedDepartments = departments.map((department) =>
          department.department === dept.department
            ? { ...department, isChecked: checked }
            : department
        );

        setDepartments(updatedDepartments);
      } else {
        const updatedDepartments = departments.map((department) =>
          department.department === dept.department
            ? { ...department, isChecked: undefined }
            : department
        );

        setDepartments(updatedDepartments);
      }
    }
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
                checked={department.isChecked}
                onChange={handleChange}
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
                    checked={department?.subDept}
                    onChange={(e) => handleSubDepartment(e, department)}
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
