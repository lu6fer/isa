
"use client";
import { useState, useEffect } from "react";
import clx from 'classnames';
import Image from "next/image";
import NavItem from "./NavItem";
import CloseButton from "./CloseButton";
import Drawer from "./Drawer";
import logo from "../../public/images/Logo-transparent.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const handleScroll = () => {
    setShrink(window.scrollY > 96);
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className='z-40 transition-all fixed w-screen top-0 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg'>
        <nav className={clx('mx-5 ', {
          "h-16": shrink,
          "h-24": !shrink
        })}>
          <div className="flex items-center justify-start h-full">
            <Image src={logo} alt="logo" height={shrink ? 64 : 96} />
            <ul className="lg:flex flex-1 justify-end gap-10 hidden">
              <NavItem to='/'>accueil</NavItem>
              <NavItem to='/shiatsu'>le shiatsu</NavItem>
              <NavItem to='/a-propos'>a porpos</NavItem>
              <NavItem>contact</NavItem>
            </ul>
            <div className="flex-1 lg:hidden flex items-center justify-end">
              <CloseButton onClick={handleClick} status={open} />
            </div>
          </div>
        </nav>
      </header>
      <Drawer open={open}>
        <div className="flex flex-col justify-start items-center my-16">
          <CloseButton onClick={handleClick} status={open} />
        </div>

        <ul className="flex flex-col justify-start items-center gap-10">
          <NavItem to='/'>accueil</NavItem>
          <NavItem to='/shiatsu'>le shiatsu</NavItem>
          <NavItem to='/a-propos'>a porpos</NavItem>
          <NavItem>contact</NavItem>
        </ul>
      </Drawer>
    </>
  );
}
