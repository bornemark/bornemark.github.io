import React from 'react'
import styled, { keyframes } from 'styled-components'
import vars from '../styles/vars'

const eq = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`

const SpinnerContainer = styled.div`
  width: 70px;
  text-align: center;

  div {
    width: 12px;
    height: 12px;
    background-color: ${vars.colors.primaryFaded};

    border-radius: 100%;
    display: inline-block;
    animation: ${eq} 1.4s infinite ease-in-out both;

    &:not(:last-child) {
      margin-right: 5px;
    }

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
`

export default function Spinner({ className }) {
  return (
    <SpinnerContainer className={className}>
      <div />
      <div />
      <div />
    </SpinnerContainer>
  )
}
