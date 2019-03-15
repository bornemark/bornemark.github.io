import React from 'react'
import styled, { keyframes } from 'styled-components'
import vars from '../styles/vars'

const eq = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
`

const Container = styled.div`
  width: 50px;
  height: 40px;

  div {
    background-color: ${vars.colors.primaryFaded};
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: ${eq} 1.2s infinite ease-in-out;

    &:not(:last-child) {
      margin-right: 2px;
    }
    &:nth-child(2) {
      animation-delay: -1.1s;
    }
    &:nth-child(3) {
      animation-delay: -1s;
    }
    &:nth-child(4) {
      animation-delay: -0.9s;
    }
    &:nth-child(5) {
      animation-delay: -0.8s;
    }
  }
`

export default function Spinner({ className }) {
  return (
    <Container className={className}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </Container>
  )
}
