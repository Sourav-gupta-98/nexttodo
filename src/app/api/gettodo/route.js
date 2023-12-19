import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todoModel";

connect();

export async function POST(request) {
  const reqBody = await request.json();
  console.log(reqBody);
  const data = await Todo.find({ _id: reqBody.id });
  console.log(data);
  return NextResponse.json({ status: 200, data });
}

export async function PUT(request) {
  const reqBody = await request.json();
  console.log(reqBody);
  const data = await Todo.updateOne(
    { _id: reqBody.id },
    {
      $set: {
        title: reqBody.data.title,
        todo: reqBody.data.todo,
      },
    }
  );
  return NextResponse.json({
    success: true,
    message: "Data Updated Successfully!",
    data,
  });
}
