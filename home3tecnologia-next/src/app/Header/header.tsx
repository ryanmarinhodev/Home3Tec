"use client"; // Certifique-se de que está aqui, antes de qualquer outro código.

import React, { useEffect, useState } from "react";
import {
  GlobalStyle,
  HeaderStyle,
  Logo,
  NavItems,
  NavBar,
  User,
  LoginButton,
  IconLogin,
  Close,
} from "./header-Style";
import Image from "next/image"; // Componente Image do Next.js
import LogoHome3 from "/LogoHOME3.png"; // Referência correta para a imagem na pasta 'public'
import Link from "next/link";

interface HeaderProps {
  navItems?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const [navItem, setNavItem] = useState<boolean>(false);
  const [janela, setJanela] = useState<number>(0);

  const clickMenu = () => {
    setNavItem(!navItem);
  };

  useEffect(() => {
    const windowEffect = () => {
      if (typeof window !== "undefined") {
        setJanela(window.innerWidth);
      }
    };

    window.addEventListener("resize", windowEffect);

    windowEffect();

    return () => {
      window.removeEventListener("resize", windowEffect);
    };
  }, []);

  const clickMenuMobile = () => {
    if (janela <= 980) {
      setNavItem(!navItem);
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        {navItem ? (
          <Close onClick={clickMenu} />
        ) : (
          <NavBar onClick={clickMenu} />
        )}
        <Logo>
          {/* Usando o componente Image corretamente */}
          <Image
            src={LogoHome3} // Caminho correto para a imagem na pasta public
            alt="Logo home3"
            width={150} // Defina a largura da imagem
            height={150} // Defina a altura da imagem
          />
        </Logo>
        <User />

        <NavItems className={`navItem ${navItem ? "open" : "closed"}`}>
          <li onClick={clickMenuMobile}>
            <Link href="/">INÍCIO</Link>
          </li>
          <li onClick={clickMenuMobile}>
            <Link href="/sobre">SOBRE</Link>
          </li>
          <li onClick={clickMenuMobile}>
            <Link href="/projetos">PROJETOS</Link>
          </li>
          <li onClick={clickMenuMobile}>
            <Link href="/contato">CONTATO</Link>
          </li>
        </NavItems>

        <LoginButton>
          <IconLogin />
          Login
        </LoginButton>
      </HeaderStyle>
    </>
  );
};

export default Header;
