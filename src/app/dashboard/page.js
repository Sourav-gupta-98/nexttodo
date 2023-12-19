"use client";
import Navbar1 from "@/components/Navbar1";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";

const DashBoard = () => {
  // const [data, setdata] = useState({});

  const getUserDetails = async () => {
    const res = await axios.get("/api/me");
    console.log(res.data);
  };

  return (
    <div>
      <Navbar1 />
      <h1 className="text-center mt-2">DashBoard</h1>
      {/* <button onClick={getUserDetails}>Get Me</button> */}

      <Container className="mt-5 row m-3">
        <Card className="col-4 m-1" style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Total</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Todos</Card.Subtitle>
            <Card.Text>{"1"}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-4 m-1" style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Total Completed</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Todos</Card.Subtitle>
            <Card.Text>{"1"}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-4 m-1" style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Total Pending</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Todos</Card.Subtitle>
            <Card.Text>{"1"}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DashBoard;
