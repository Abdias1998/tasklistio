
import Task from "@/models/tasks";
import { connectToDB } from "@/utils/db";

import { NextResponse } from 'next/server'

import { IDeleteTaskRequestParam } from "@/types";

export const DELETE = async(request: Request, { params }: IDeleteTaskRequestParam) => {
    try {        
        await connectToDB();

        // Find the prompt by ID and remove it
        await Task.findByIdAndDelete(params.id);

        return NextResponse.json("Task deleted successfully", { status: 200 });
    } catch (error) {
        return NextResponse.json(`Error deleting task ${error}`, { status: 500 });
    }
}
