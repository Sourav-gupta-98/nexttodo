import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request) {
  try {
    const username = await getDataFromToken(request);
    // console.log(username);
    const user = await User.find({ username }).select("-password");
    console.log(user);
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    console.log("error1");
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
