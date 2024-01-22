// components/StudentForm.js
'use client'
import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    if(!age || !name){
      alert('Fill All Fields')
      return
    }
    e.preventDefault();
    onSubmit({ name, age });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input mt-1 block w-full border-red-700 border-2"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2 ">
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-input mt-1 block w-full  border-red-700 border-2"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;

