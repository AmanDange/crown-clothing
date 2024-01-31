import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 340px;
  padding-top: 50px;
  @media screen and (max-width: 800px) {
    padding: 8px;
    width: 92vw;
    padding-top: 100px;

    h2 {
      font-size: 11px;
    }
    h3 {
      font-size: 10px;
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 15px;
      margin-bottom: 12px;
    }
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const WarningContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 320px;
  h3 {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 10px;
    padding-top: 0px;
    margin-top: unset;

    h3 {
      font-size: 12px;
    }

    span {
      font-size: 11px;
      display: block;
      margin-bottom: 10px;
      width: 50%;
    }
  }
`;
