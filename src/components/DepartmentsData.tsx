import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const DepartmentsData = ({
  department,
  handleChange,
  handleSubDepartment,
}: any) => {
  const [colaps, setColaps] = useState(false);
  return (
    <div style={{ marginBottom: "15px" }}>
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        <label onClick={() => setColaps(!colaps)}>{colaps ? "+" : "—"}</label>
        <input
          type="checkbox"
          name={department.department}
          id={department.department}
          checked={department.isChecked}
          onChange={handleChange}
        />
        <label htmlFor={department.department}>{department?.department}</label>
      </div>
      {department?.sub_departments?.map(
        (sub_department: string, index: number) => (
          <div
            key={index}
            style={{
              marginLeft: "23px",
              display: colaps ? "none" : "block",
              transitionDuration: "5s",
            }}
          >
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
  );
};

export default DepartmentsData;
