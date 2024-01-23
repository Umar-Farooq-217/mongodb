'use client'
import Image from "next/image";
import StudentForm from './components/studentForm/StudentForm';
import Home from "./components/home/Home";
import { useState } from "react";
export default function page() {
const [name,setName]= useState('')
const [age,setAge]=useState('')


const submitHandler = ()=>{
  const ageNumber = parseInt(age, 10);

const student = {
  name,
  age:ageNumber,

}
console.log('Student Object:', student);
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify(student);

const requestOptions = {
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

// Clear the form fields after submission (optional)
setName('');
setAge('');
setPhone('');
}
  return (
    <div className="bg-blue-500 ">
    <h1 className="text-4xl text-center font-bold mt-5 py-3 ">Add Students Data</h1>

    <div >
    <label htmlFor="name" className="text-xl font-semibold">Enter Name : </label> 
    <input type="text" className="border-red-500 border-2" id="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" /><br />
    <label htmlFor="age" className="text-xl font-semibold">Enter Age : </label> 
    <input type="number" className="border-red-500 border-2" id="age" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
 
<br />
    <button onClick={submitHandler} className="bg-red-600 text-white font-bold py-1 ml-10 px-2 rounded-lg">Submit</button>
    
    </div>
    
    </div>
  );
}
