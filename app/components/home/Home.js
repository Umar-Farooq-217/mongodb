// pages/index.
'use client'
import React, { useState } from 'react';
import StudentForm from '../studentForm/StudentForm';
import StudentList from '../studentList/StudentList';

const Home = () => {
  const [students, setStudents] = useState([]);
  const handleAddStudent = (student) => {
    // Update the state
    setStudents([...students, { ...student, id: Date.now() }]);
  
    // Prepare the request
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify(student);
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    // Send the POST request
    fetch("http://localhost:3000/api/students", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received from server:', data);
        alert('Student has been added successfully');
      })
      .catch((error) => {
        console.error('Error adding student:', error);
        alert('Error adding student. Please check the console for details.');
      });
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
