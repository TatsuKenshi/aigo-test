// import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TeamMember from "../components/TeamMember";
// import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const Team = ({ t }) => {
  // const { people } = useOutletContext();
  const [employees, setEmployees] = useState([]);
  const employeesUrl = process.env.REACT_APP_EMPLOYEES_URL;

  const getAllEmployees = async () => {
    try {
      const response = await axios.get(employeesUrl);
      const data = response.data.employees;
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEmployees();
  });

  return (
    <section className="pb-8 px-8 pt-8">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("AigoTimNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("AigoTimText")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto mt-8">
        <div className="grid gap-8 md:grid-cols-2">
          {employees.map((employee) => {
            return <TeamMember key={employee._id} {...employee} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default withNamespaces()(Team);
