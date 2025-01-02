import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    height: 100vh;
    width: 100vw;
`
interface SectionProps {
    children: React.ReactNode;
  }  

export default function Section({children}: SectionProps) {
  return (
    <Container>{children}</Container>
  )
}
