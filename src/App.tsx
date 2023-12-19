import styled from 'styled-components'
import './App.css'
import { StyledBtn } from './components/button.styled'
import { Link } from './components/Link.styled'
import { myTheme } from './styles/Theme.styled'

function App() {
  return (
    <div className="App">
      <Box>
        <StyledBtn $btnType={'primary'} color={myTheme.colors.primary} $active>
          Hello
        </StyledBtn>
        <StyledBtn $btnType={'outlined'} color={myTheme.colors.secondary}>
          Hello
        </StyledBtn>
      </Box>
    </div>
  )
}

export default App

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* flex-wrap: wrap;
  align-content: center; */

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`
