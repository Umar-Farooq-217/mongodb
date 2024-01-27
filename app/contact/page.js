import { studentModel } from '@/model/students'
import React from 'react'
import StudentButton from '../components/studentsButton/StudentButton';

const getHandler=async()=>{
  const data =await studentModel.find();
  console.log('data',data);
  return data

}




export default function page() {

  return (
    <div>
<StudentButton submit={getHandler}/>
    
    
    
    </div>
  )
}
