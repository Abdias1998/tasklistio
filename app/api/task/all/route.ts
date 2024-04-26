import Task from "@/models/tasks";
import { connectToDB } from "@/utils/db";

import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        await connectToDB();

        const tasks = await Task.find({});

        // Inverser l'ordre des tâches
        const reversedTasks = tasks.reverse();

        return NextResponse.json(
            reversedTasks,
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
           `Failed to fetch all tasks ${error}`,
            { status: 500 }
        );
    }
};
