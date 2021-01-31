import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
  span {
    opacity: 0.5;
    font-size: 12px;
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://mateusrios.com.br/">
        <img src="https://mateusrios.com.br/assets/mr.png" alt="Logo Mateus Rios" />
      </a>
      <p>
        Mateus Rios
        <br />
        <span>Todos os direitos reservados</span>
      </p>
    </FooterWrapper>
  );
}
