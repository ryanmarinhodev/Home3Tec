import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa6";
import { HiMiniUserPlus } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

// Reset Global Styles
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
`;

// Header Style
export const HeaderStyle = styled.nav`
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 100px;
  gap: 50px;
  position: fixed;
  z-index: 1000;
  width: 100%;

  @media (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
`;

// Logo
export const Logo = styled.img`
  height: 35px;

  @media (max-width: 980px) {
    height: 33px;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex: 1;
  padding-left: 40px;
  gap: 25px;
  transition: all 0.5s ease;

  &.open {
    flex-direction: column;
    position: fixed;
    top: 63px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1c1e1f;
    justify-content: center;
    align-items: center;
    animation: slideInFromLeft 0.5s ease-out forwards;

    @keyframes NavItems {
      0% {
        opacity: 0;
        transform: translateY(-100%); /* Começa fora da tela */
      }
      100% {
        opacity: 1;
        transform: translateY(0); /* Vai para a posição normal */
      }
    }
  }

  @media (max-width: 980px) {
    display: none;

    &.open {
      display: flex;
    }
  }

  li {
    list-style: none;
    padding: 0 15px;

    a {
      color: #fff;
      font-size: 23px;
      font-weight: 500;
      text-decoration: none;
      font-family: "Anton", sans-serif;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        color: #b79d57;
      }

      @media (max-width: 980px) {
        color: #fff;
        font-size: 20px;
        margin-right: 60px;
      }
    }
  }
`;

// Menu Hamburger (NavBar)
export const NavBar = styled(FaBars)`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    font-size: 22px;
    justify-content: end;
    align-items: end;
  }
`;

// Close Icon (X)
export const Close = styled(IoMdClose)`
  font-size: 28px;

  @media (min-width: 981px) {
    display: none;
  }

  @media (max-width: 980px) {
    display: flex;
    font-size: 22px;
  }
`;

// User Icon (Ícone de Usuário)
export const User = styled(HiMiniUserPlus)`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    font-size: 22px;
  }
`;

// Login Button (Botão de Login)
export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  gap: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  @media (max-width: 981px) {
    display: none;
  }

  &:hover {
    background-color: #b79d57;
    color: #fff;
    border-color: #000;
  }

  &:focus {
    outline: none;
  }
`;

// Icon for Login Button
export const IconLogin = styled(HiMiniUserPlus)`
  margin-right: 8px;
  font-size: 20px;
`;
