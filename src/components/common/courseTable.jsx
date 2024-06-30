import React from "react";

const CourseTable = ({ data }) => {
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Name</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((course, index) => (
          <tr key={index}>
            <td>{course.ID}</td>
            <td>{course.Name}</td>
            <td>{course.Grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h5>Connected by FastAPI on Lambda<br />
    Stored on DynamoDB</h5>
    </div>
  );
};

export default CourseTable;