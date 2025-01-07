import styled from 'styled-components'
import Section from '../components/Section'
import ProfilePhoto from '../assets/placeholders/profilephoto.jpeg'
import { presentacionUno, presentacionDos } from '../constants/Presentacion.constants'


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50vh;
`

const TopProfileContainer = styled(ProfileContainer)`
  justify-content: flex-start;
`

const BottomProfileContainer = styled(ProfileContainer)`
  justify-content: flex-end;
`
const Photo = styled.img`
  max-height: 45vh;
  width: 45vw;
  margin: 0 4rem; 
`
const TextContainer = styled.p`
  height: 60%;
  width: 100%;
  margin: 0 2rem; 
`
export default function Presentacion() {
  return (
    <Section>
        <TopProfileContainer>
          <Photo src={ProfilePhoto} />
          <TextContainer>{presentacionUno}</TextContainer>
        </TopProfileContainer>
        <BottomProfileContainer>
          <TextContainer>{presentacionDos}</TextContainer>
          <Photo src={ProfilePhoto} />
        </BottomProfileContainer>
    </Section>
  )
}
