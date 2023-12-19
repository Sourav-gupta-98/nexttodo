"use client";
import { set } from "mongoose";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [data, setdata] = useState({});

  const getData = async () => {
    console.log(data);
    // return;
    if (data.username != "" && data.email != "" && data.password != "") {
      const user = {
        username: data.username,
        email: data.email,
        password: data.password,
      };
      try {
        const response = await axios.post("/api/userregister", user);
        console.log("signup success", response.data);
        router.push("/login");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
      }
    }
  };

  return (
    <div className="container">
      <Card className="mt-5">
        <CardHeader>
          <span>Register</span>
        </CardHeader>
        <CardBody>
          <input
            placeholder="name"
            className="form-control mb-3"
            value={data.username || ""}
            onChange={(e) => setdata({ ...data, username: e.target.value })}
          />
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
            onClick={getData}
          >
            Register
          </button>
        </CardBody>
        <CardFooter>
          <span>
            Existing User <Link href="/login">Login</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
