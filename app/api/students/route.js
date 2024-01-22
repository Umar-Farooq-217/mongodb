import { NextResponse } from "next/server";
import dbConnect from "@/config/db";
import { studentModel } from "@/model/students";
dbConnect()

export const POST = async (req) =>{
    try {
        const body = await req.json(body)
        console.log('body',body);
        
            const student= new studentModel(body)
            await student.save()
            return NextResponse.json('student has added')
        
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
    };
export const GET = async(req)=>{
    try {
        return NextResponse.json('submit')
    } catch (error) {
        return NextResponse.json('something went wrong')
    }
}