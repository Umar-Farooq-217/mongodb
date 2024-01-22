// components/StudentList.js
'use client'
import React, { useState } from 'react';

const StudentList = ({ students, onUpdate, onDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');

  const handleEditClick = (id, name, age) => {
    setEditId(id);
    setEditName(name);
    setEditAge(age);
  };

  const handleCancelClick = () => {
    setEditId(null);
    setEditName('');
    setEditAge('');
  };

  const handleUpdateClick = (id) => {
    onUpdate(id, editName, editAge);
    handleCancelClick();
  };

  return (
    <ul className="list-decimal pl-4">
      {students.map((student) => (
        <li key={student.id} className="mb-2">
          {student.id === editId ? (
            <div>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="form-input mt-1 block w-full mb-2  border-red-700 border-2"
              />
              <input
                type="number"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
                className="form-input mt-1 block w-full mb-2  border-red-700 border-2"
              />
              <button
                onClick={() => handleUpdateClick(student.id)}
                className="bg-green-500 text-white py-1 px-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={handleCancelClick}
                className="bg-gray-500 text-white py-1 px-2 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              {student.name} - {student.age} years old
              <button
                onClick={() => handleEditClick(student.id, student.name, student.age)}
                className="ml-2 text-white bg-blue-500 py-2 px-2 rounded-lg"
              >
                Update
              </button>
              <button
                onClick={() => onDelete(student.id)}
                className="ml-2 text-white bg-red-500 py-2 px-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
