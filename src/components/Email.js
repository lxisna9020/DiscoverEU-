import React from "react"
import styled from "styled-components"
import EmailImg from "../assets/email/emailImg.jpg"
import { Button } from "./Button"
import "../styles/index.css"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>
          Sign up for your newsletter below to get $100 off your first trip!
        </p>
        <form action="#">
          <Formwrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button id="emailbtn" primary="true" round="true" to="/signUp">
              Sign up
            </Button>
          </Formwrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  width: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailImg}) no-repeat center;
  background-size: cover;
  height: 570px;
  padding: 5rem calc((100vw-1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-item: center;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1.2rem, 5vw, 2.5rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1.2rem, 5vw, 1.2rem);
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  form {
    z-index: 10;
  }
`

const Formwrap = styled.div`
  display: flex;
  flex-direction: row;

  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
