import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todoModel";
import { writeFile } from "fs/promises";

connect();

export async function GET() {
  const data = await Todo.find().sort({ _id: -1 });
  //   console.log(data);
  return NextResponse.json({ status: 200, data });
}

export async function POST(request) {
  const reqBody = await request.formData();
  console.log(reqBody);
  const title = reqBody.get("title");
  const todo = reqBody.get("todo");
  const photo = reqBody.get("photo");

  if (title != undefined && todo != undefined) {
    if (!photo) {
      return NextResponse.json({ message: "no image found", success: false });
    }
    const byteData = await photo.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/imguploads/${photo.name}`;
    await writeFile(path, buffer);

    const img1 = String(photo.name);

    try {
      const todo1 = new Todo({
        title: title,
        todo: todo,
        created_at: new Date(),
        updated_at: new Date(),
        status: "0",
        photo: img1,
      });
      const savedData = todo1.save();
      return NextResponse.json({
        status: 201,
        success: true,
        message: "todo Added successfully",
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        status: 500,
        success: false,
        message: "All Fields are Required",
      });
    }
  } else {
    return NextResponse.json({
      status: 400,
      success: false,
      message: "All Fields are Required",
    });
  }
}

export async function PUT(request) {
  const reqBody = await request.json();
  console.log(reqBody);
  const deleted = await Todo.deleteOne({ _id: reqBody.id });
  return NextResponse.json({ success: true });
}
