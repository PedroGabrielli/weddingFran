import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    height: 100vh;
    width: 100vw;
`
interface SectionProps {
    children: React.ReactNode;
    className?: string;
  }  

export default function Section({ children, className }: SectionProps) {
  return (
    <Container className={className}>{children}</Container>
  )
}
