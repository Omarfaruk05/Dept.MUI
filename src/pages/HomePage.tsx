import DepertmentField from "../components/DepartmentField";
import TableData from "../components/TableData";

const HomePage = () => {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <TableData />
      <DepertmentField />
    </div>
  );
};

export default HomePage;
