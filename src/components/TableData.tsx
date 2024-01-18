/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { CircularProgress } from "@mui/material";
import { IUser } from "../inferfaces/interface";

const TableData = () => {
  const [user, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: IUser[]) => setUser(data));
  }, []);

  if (!user.length) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  console.log(user);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User Name",
      width: 130,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 170,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "website",
      headerName: "Website",
      type: "string",
      width: 120,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 170,
      editable: true,
    },
    {
      field: "address",
      headerName: "City",
      width: 130,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.address ? params.row.address.city : ""} `,
    },

    {
      field: "company",
      headerName: "Company",
      width: 170,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.company ? params.row.company.name : ""} `,
    },
  ];

  return (
    <div>
      <div>
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "#e7fef9",
            padding: "10px 0",
            borderRadius: "10px",
          }}
        >
          Displaying json Data
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={user}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TableData;
