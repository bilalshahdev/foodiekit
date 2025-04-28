"use client";

import Brand from "./brand";
import Container from "./container";
import Menu from "./menu";

const Navbar = () => {
  return (
    <div id="home" className="sticky top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b h-16 flex justify-center">
      <Container className="w-full h-full flex items-center justify-between">
        <Brand />
        <Menu />
      </Container>
    </div>
  );
};

export default Navbar;
