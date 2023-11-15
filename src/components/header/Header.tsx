import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";

const Header = () => {
  return (
    <div className='header'>
      <Link href='/'>
        <Image
          priority={false}
          src={logo}
          alt='Rick and Morty logo'
          width={300}
          height={90}
        />
      </Link>
    </div>
  );
};

export default Header;
