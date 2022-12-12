import axios from "axios";
import { useEffect, useState } from "react";

const ApplicationList = () => {
  const [applicationList, setApplicationList] = useState([]);
  useEffect(() => {
    axios
      .get("https://yogaform-g5lcgbvxna-ue.a.run.app/api/application")
      .then((res) => setApplicationList(res.data))
      .catch((err) => {});
  }, []);

  return (
    <div>
      <h1>Application List</h1>
      <table class="text-sm ml-6 ">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Age</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Batch No</th>
        </tr>
        {applicationList.map((application) => (
          <tr>
            <td>{application.firstName}</td>
            <td>{application.lastName}</td>
            <td>{application.mobile}</td>
            <td>{application.age}</td>
            <td>{application.address}</td>
            <td>{application.city}</td>
            <td>{application.state}</td>
            <td>{application.zip}</td>
            <td>{application.batch}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ApplicationList;
