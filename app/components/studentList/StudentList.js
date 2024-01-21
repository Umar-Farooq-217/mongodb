// components/StudentList.js
'use client'
import React from 'react';

const StudentList = ({ students, onUpdate, onDelete }) => {
  return (
    <ul className="list-decimal pl-4">
      {students.map((student) => (
        <li key={student.id} className="mb-2">
          {student.name} - {student.age} years old
          <button
            onClick={() => onUpdate(student.id)}
            className="ml-2 text-blue-500"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="ml-2 text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
