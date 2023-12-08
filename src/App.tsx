import React from 'react'
import styled from 'styled-components'
import './App.css'
import { StyledBtn } from './components/button.styled'
import { Link } from './components/Link.styled'
import { Menu } from './components/Menu.styled'
import { myTheme } from './styles/Theme.styled'

function App() {
  return (
    <div className="App">
      {/* <Menu>
        <ul>
          <li>
            <a href="">menu item 1</a>
          </li>
          <li>
            <a href="">menu item 2</a>
          </li>
          <li>
            <a href="">menu item 3</a>
          </li>
        </ul>
      </Menu> */}
      <Box>
        {/* <StyledBtn as={Link} href="#">
          Link component
        </StyledBtn>
        <StyledBtn as="a" href="#">
          Link
        </StyledBtn> */}
        {/* <StyledBtn color="blue" fontSize ="20px">Hello</StyledBtn>
        <StyledBtn color="brown">Hello</StyledBtn> */}
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
