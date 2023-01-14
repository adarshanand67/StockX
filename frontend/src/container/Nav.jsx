import { Button, Navbar } from "flowbite-react";
import React from "react";

const NavigationBar = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <div
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            href="/"
          >
            StockX
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-5">
          <Button.Group>
            <Button gradientMonochrome="info" href="/signup">
              Sign Up
            </Button>
            <Button gradientMonochrome="info" href="/signin">
              Sign In
            </Button>
          </Button.Group>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/company">Company</Navbar.Link>
          <Navbar.Link href="/stockExchange">Stock Exchange</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <h1
        className="text-2xl text-gray-700 m-10 font-semibold"
        style={{ textAlign: "center" }}
      >
        Select your option to get started
      </h1>
    </>
  );
};

export default NavigationBar;
