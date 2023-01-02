import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Nav } from "./styled";

function Header() {
  return (
    <Nav>
      <Link href="">
        <FaHome size={24} />
      </Link>
      <Link href="">
        <FaUserAlt size={24} />
      </Link>
      <Link href="">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}

export default Header;
