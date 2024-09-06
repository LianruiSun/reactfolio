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
            <td>{course.CourseName}</td>
            <td>{course.Grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h5>Connected by Lambda<br />
    Stored on S3</h5>
    </div>
  );
};

export default CourseTable;