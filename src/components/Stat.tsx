import styled from 'styled-components'

interface IStat {
    value: string, 
    label: string
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content; center;
    gap: 0.5rem;
`
const Label = styled.p`
  font-size: 28px;
  margin: 0;
`

const Value = styled.p`
   font-size: 32px;
  margin: 0;
`
export default function Stat({ label, value }: IStat) {

  return (
    <Container>
        <Label>{label}</Label>
        <Value>{value}</Value>
    </Container>
  )
}
