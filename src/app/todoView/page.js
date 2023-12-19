/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Navbar1 from "@/components/Navbar1";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function page() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getdata() {
      const response = await axios.get("/api/createtodo");
      console.log(response);
      setdata(response.data.data);
    }
    getdata();
  }, []);

  async function getdata1() {
    const response = await axios.get("/api/createtodo");
    console.log(response);
    setdata(response.data.data);
  }

  const deletetodo = async (id) => {
    console.log(id);
    const response = await axios.put("/api/createtodo", { id });
    console.log(response);
    getdata1();
  };

  const editItem = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Navbar1 />
      <div className="container mt-5">
        <Card>
          <CardHeader>
            <span>Your Todos List</span>
          </CardHeader>
        </Card>
        <>
          <Table striped bordered hover className="table-responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Todo</th>
                <th>Status</th>
                <th>created At</th>
                <th>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0
                ? data.map((item, index) => (
                    <tr key={index} varient={"primary"}>
                      <td>
                        <Image
                          alt="img"
                          src={require(`../../../public/imguploads/${item.photo}`)}
                          width={50}
                          height={50}
                        />
                      </td>
                      <td>{++index}</td>
                      <td>{item.title}</td>
                      <td>{item.todo}</td>
                      <td>{item.status}</td>
                      <td>
                        {new Date(item.created_at).toLocaleDateString("en-US")}
                      </td>
                      <td>
                        {" "}
                        {new Date(item.updated_at).toLocaleDateString("en-US")}
                      </td>
                      <th>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deletetodo(item._id)}
                        >
                          Delete
                        </button>
                        &nbsp;
                        <Link
                          href={`edittodo/${item._id}`}
                          className="btn btn-sm btn-outline-warning"
                        >
                          Edit
                        </Link>
                      </th>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        </>
      </div>
    </div>
  );
}

export default page;
