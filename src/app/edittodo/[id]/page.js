/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Navbar1 from "@/components/Navbar1";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import Alert from "react-bootstrap/Alert";

const page = ({ params }) => {
  const id = params.id;
  const router = useRouter();
  const [data, setData] = useState({});
  const [btnStatus, setBtnStatus] = useState(false);
  const [alert, setalert] = useState("info");
  const [messgae, setmessgae] = useState("Please Edit Todo");

  useEffect(() => {
    async function get() {
      console.log(id);
      const response = await axios.post("/api/gettodo", { id });
      console.log(response.data.data[0].title);
      setData({
        ...data,
        title: response.data.data[0].title,
        todo: response.data.data[0].todo,
        status: response.data.data[0].status,
      });
    }
    get();
  }, []);

  const getTodo = async () => {
    console.log(data);
    try {
      setBtnStatus(true);
      setalert("secondary");
      setmessgae("Processing...");
      const response = await axios.put("/api/gettodo", { data, id });
      setData({});

      console.log(response);
      setmessgae(response.data.message);
      if (response.data.success) {
        setalert("primary");
        router.push("/todoView");
      } else {
        setalert("danger");
      }
    } catch (error) {
      setalert("danger");
      setmessgae(error.data.message);
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
              <span>Edit TODO</span>
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

              <button
                className="btn btn-sm btn-outline-success w-100"
                onClick={getTodo}
                disabled={btnStatus}
              >
                {btnStatus ? "Processing..." : "Edit Existing TODO ✔"}
              </button>
            </CardBody>
          </Card>
        </div>
      </center>
    </div>
  );
};

export default page;
