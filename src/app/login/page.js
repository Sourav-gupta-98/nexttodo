"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [data, setdata] = useState({});

  const getdata = async () => {
    console.log(data);
    const data1 = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post("/api/userlogin", data1);
      console.log(response);
      toast.success("login Success");
      if (response.data.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
    }
  };

  return (
    <div className="container">
      <Card className="mt-5">
        <CardHeader>
          <span>Login</span>
        </CardHeader>
        <CardBody>
          <input
            placeholder="email"
            className="form-control mb-3"
            value={data.email || ""}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />

          <input
            placeholder="password"
            className="form-control mb-2"
            value={data.password || ""}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />

          <button
            className="btn btn-sm btn-outline-info w-100"
            onClick={getdata}
          >
            Login
          </button>
        </CardBody>
        <CardFooter>
          <span>
            New User <Link href="/register">Register Now</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
