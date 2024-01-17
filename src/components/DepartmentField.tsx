import { useState, useEffect } from "react";

type SubDepartment = string[];

interface IDepartment {
  department: string;
  sub_departments: SubDepartment;
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

const DepertmentField = () => {
  const [departmets, setDepartments] = useState<IDepartment[]>([]);

  useEffect(() => {
    setDepartments(Departments);
  }, []);
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
      {/* departmets  */}
      <div style={{ margin: "20px" }}>
        <form>
          {departmets.map((department: IDepartment, index) => (
            <div style={{ marginBottom: "15px" }} key={index}>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                <input type="checkbox" name="" id="" />
                <label>{department?.department}</label>
              </div>
              {department?.sub_departments?.map(
                (sub_department: string, index) => (
                  <div key={index} style={{ marginLeft: "10px" }}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">{sub_department}</label>
                  </div>
                )
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default DepertmentField;
