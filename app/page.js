'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function page() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    // Fetch data when the component mounts
    getHandler();
  }, []);

  const submitHandler = async () => {
    const ageNumber = parseInt(age, 10);

    const student = {
      name,
      age: ageNumber,
    };

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

    try {
      // Send the POST request
      const response = await fetch("http://localhost:3000/api/students", requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data received from server:', data);
      alert('Student has been added successfully');

      // Clear the form fields after submission (optional)
      setName('');
      setAge('');
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Error adding student. Please check the console for details.');
    }
  };

  const getHandler = async () => {

  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   try {
  //     // Send the GET request
  //     const response = await fetch("http://localhost:3000/api/students", requestOptions);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     console.log('Data received from server:', data);
  //     setStudents(data);
  //   } catch (error) {
  //     console.error('Error fetching students:', error);
  //     alert('Error fetching students. Please check the console for details.');
  //   }
  };
  const [data , setData]= useState([])
 const getData= async()=>{
 const date  = true

 try {
  const response = await fetch('http://localhost:3000/api/students')
  const result =await response.json()
  console.log('result',result);
  setData(result)
 } catch (error) {
  console.log(error);
 }
 }


  return (
    <div className="bg-blue-500 ">
      <h1 className="text-4xl text-center font-bold mt-5 py-3 ">Add Students Data</h1>

      <div>
        <label htmlFor="name" className="text-xl font-semibold">Enter Name : </label>
        <input type="text" className="border-red-500 border-2" id="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br />
        <label htmlFor="age" className="text-xl font-semibold">Enter Age : </label>
        <input type="number" className="border-red-500 border-2" id="age" onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />

        <br />
        <button onClick={submitHandler} className="bg-red-600 text-white font-bold py-1 ml-10 px-2 rounded-lg">Submit</button>
        <button onClick={getData} className="bg-green-600 text-white font-bold py-1 ml-10 px-2 rounded-lg">See Students</button>

        {/* Display the fetched students */}
        <div>
          <h2>Fetched Students:</h2>
          <ul>
            {data.map((student,index) => (
              <li key={student._id}>
                Name: {student.name}, Age: {student.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
