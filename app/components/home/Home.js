// pages/index.
'use client'
import React, { useState } from 'react';
import StudentForm from '../studentForm/StudentForm';
import StudentList from '../studentList/StudentList';

const Home = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };
  const handleUpdateStudent = (id, updatedName, updatedAge) => {
    // Update the student in the state
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, name: updatedName, age: updatedAge } : student
      )
    );
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Student Admission</h1>
      <StudentForm onSubmit={handleAddStudent} />
      <StudentList
        students={students}
        onUpdate={handleUpdateStudent}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
};

export default Home;
