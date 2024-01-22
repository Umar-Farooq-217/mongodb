import { NextResponse } from "next/server";
import dbConnect from "@/config/db";
import { studentModel } from "@/model/students";


dbConnect();

export const POST = async (req) => {
    try {
        const body = await req.json();
        console.log('body', body);

        const student = new studentModel(body);
        await student.save();
        return NextResponse.json({ message: 'student has added' });

    } catch (error) {
        console.error('Error:', error);
    return NextResponse.json({
        message: "something went wrong",
        error: JSON.stringify(error)
    });
    }
};

export const GET = async (req) => {
    try {
        return NextResponse.json({ message: 'submit' });
    } catch (error) {
        return NextResponse.json({ message: 'something went wrong' });
    }
};
