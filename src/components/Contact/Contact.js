/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Container>
      <Map />
      <Form />
    </Container>
    <footer>
      <p>
        &copy; 2023 Muscle Nation. All Rights Reserved.
      </p>
      <p>
        Designed by <a href="https://pratikpz18.github.io/portfolio/" target="_blank" rel="noopener noreferrer">pratikpz</a>
      </p>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
  }
  footer {
    text-align: center;
    padding: 12px 0;
    p {
      font-size: 14px;
      color: #232d39;
      a {
        text-decoration: none;
        color: #ed563b;
        font-weight: 500;
        &:hover {
          color: #ed563b;
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;
