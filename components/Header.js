import styled from "styled-components";
import Link from "next/link";

const StyHeader = styled.header`
  padding: 4rem 4rem 1rem 4rem;

  margin: 0 0;
  text-transform: uppercase;
  padding: 20px 20px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: ${props => props.theme.breakpoint.w[1]}) {
    padding: 10px 10px;
  }
`;

const Logo = styled.h1`
  display: inline;
  text-transform: uppercase;
  font-weight: 300;
  font-family: ${props => props.theme.muli};
  letter-spacing: 1.8rem;
  font-size: 3rem;
  cursor: pointer;
  @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    letter-spacing: 0.8rem;
    font-size: 2rem;
  }
`;

const MenuLink = styled.a`
  margin: auto;
  text-decoration: none;
  font-weight: ${props => (props.active ? 400 : 300)};
  font-family: ${props => props.theme.opensans};
  font-size: 2rem;
  cursor: pointer;
  color ${props => (props.active ? "black" : "grey")};
  :hover{
    text-decoration:underline;
  }
  @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    font-size: 1.3rem;
  }
`;

export default ({ active, setActive }) => {
  return (
    <StyHeader>
      <Link href="/">
        <Logo onClick={() => setActive("work")}>Lok</Logo>
      </Link>

      <Link href="/">
        <MenuLink active={active === "work"} onClick={() => setActive("work")}>
          work
        </MenuLink>
      </Link>
      <Link href="/dissertation">
        <MenuLink
          active={active === "philosophy"}
          onClick={() => setActive("philosophy")}
        >
          philosophy
        </MenuLink>
      </Link>
      <Link href="/about">
        <MenuLink
          active={active === "about"}
          onClick={() => setActive("about")}
        >
          about
        </MenuLink>
      </Link>

      <MenuLink href="mailto:me@lokchan.com">contact</MenuLink>
    </StyHeader>
  );
};
