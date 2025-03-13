import React from "react";
import "./App.css";

function Practise() {
  const students = [2];
  return (
    <>
      <p>{students.length && "No students found"}</p>{" "}
      {/* if student.length value is false then it will not print the right value that is no student found*/}
      {/*1st solution */}
      <p>{students.length === 0 && "No students found"}</p>
      <p>Number of students.{students.length}</p>
      {/*2nd solution */}
      <p>{!students.length && "No students found"}</p>
      <p>Number of students.{students.length}</p>
      {/*true hota hai to right hand side mai jata hai and operator mai */}
      {/*3rd tarika */}
      <p>{!Boolean(students.length) && "No students found"}</p>
      <p>Number of students.{students.length}</p>
    </>
  );
}

export default Practise;
