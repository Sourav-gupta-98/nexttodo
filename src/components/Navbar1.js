"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar1() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>TODOs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <li className="p-2">
              <Link href="/">Home</Link>
            </li>
            <li className="p-2">
              <Link href={"/create"}>Add Todo</Link>
            </li>
            <li className="p-2">
              <Link href={"/todoView"}>All Todos</Link>
            </li>
            <li className="p-2">
              <Link href={"#"} onClick={logout}>
                logout
              </Link>
            </li>
            <li className="p-2">Welcome {"Sourav"}</li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
