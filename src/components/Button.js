import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background-image: ;

  background: ${({ primary }) =>
    primary
      ? "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
      : "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  font-weight: 100;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) =>
      primary
        ? "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
        : "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"};
    transform: translateY(-2px);
  }
`
