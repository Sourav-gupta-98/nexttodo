/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Navbar1 from "@/components/Navbar1";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import Alert from "react-bootstrap/Alert";

const page = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [btnStatus, setBtnStatus] = useState(false);
  const [alert, setalert] = useState("info");
  const [messgae, setmessgae] = useState("Please Add Todo");
  const getTodo = async () => {
    console.log(data);
    try {
      setBtnStatus(true);
      setalert("secondary");
      setmessgae("Processing...");
      let entry = new FormData();
      entry.set("title", data.title);
      entry.set("todo", data.todo);
      entry.set("photo", data.photo);
      const response = await axios.post("/api/createtodo", entry);
      setData({});

      console.log(response);
      // setmessgae(response.data.message);
      if (response.data.success) {
        setalert("primary");
      } else {
        setalert("danger");
      }
    } catch (error) {
      setalert("danger");
      // setmessgae(error.data.message);
      console.log(error);
    } finally {
      setBtnStatus(false);
    }
    // router.push("/dashboard");
  };
  return (
    <div>
      <Navbar1 />

      <center>
        <div className="container mt-5">
          <Alert variant={alert}>{messgae}</Alert>

          <Card>
            <CardHeader>
              <span>Add TODO</span>
            </CardHeader>
            <CardBody>
              <input
                className={`form-control mb-3 border-${alert}`}
                placeholder="title"
                value={data.title || ""}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              <textarea
                rows={4}
                className={`form-control mb-3 border-${alert}`}
                placeholder="TODO..."
                value={data.todo || ""}
                onChange={(e) => setData({ ...data, todo: e.target.value })}
              ></textarea>
              <input
                type="file"
                name="file"
                onChange={(e) =>
                  setData({ ...data, photo: e.target.files?.[0] })
                }
              />
              <button
                className="btn btn-sm btn-outline-success w-100"
                onClick={getTodo}
                disabled={btnStatus}
              >
                {btnStatus ? "Processing..." : "Add New TODO ✔"}
              </button>
            </CardBody>
          </Card>
        </div>
      </center>
    </div>
  );
};

export default page;
