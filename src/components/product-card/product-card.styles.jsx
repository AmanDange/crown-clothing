import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw; //vw - view width (40%)
    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }
        button {
          opacity: unset;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 80vw; //vw - view width (80%)
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const LinkToDetails = styled(Link)`
  width: 100%;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  font-size: 15px;
`;

export const Price = styled.span`
  width: 20%;
  font-size: 15px;
`;