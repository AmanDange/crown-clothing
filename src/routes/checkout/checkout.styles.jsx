import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    width: 80vw; //vw - view width (80%)
    font-size: 12px;
  }
  @media screen and (max-width: 400px) {
    font-size: 10.5px;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  &:nth-child(2) {
    margin-left: -20px;
  }
  &:nth-child(3) {
    margin-left: -50px;
  }
  &:nth-child(4) {
    padding-left: 20px;
  }

  @media screen and (max-width: 800px) {
    &:first-child {
      margin-left: -15px;
    }
  }

  @media screen and (max-width: 1130px) {
    &:nth-child(3) {
      margin-left: unset;
    }
    &:nth-child(4) {
      padding-left: 5px;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-top: 5px;
    padding-left: 120px;
    display: inline-block;
  }
`;