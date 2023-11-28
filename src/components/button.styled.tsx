import { type } from '@testing-library/user-event/dist/type'
import { css, styled } from 'styled-components'
import { MyAnimation } from '../styles/animations/Animations'

type StyledBtnPropsType = {
  color?: string
  fontSize?: string
  outlined?: boolean
  primary?: boolean
  $btnType: 'primary' | 'outlined'
  $active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || '2rem'};
  font-weight: bold;

  ${(props) =>
    props.$btnType === 'outlined' &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || 'red'};
      color: ${(props) => props.color || 'red'};
      background-color: transparent;

      &:hover {
        border-color: #1a8a80;
        color: #1a8a80;
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.$btnType === 'primary' &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || 'red'};
      color: snow;

      &:hover {
        background-color: #1a8a80;
      }
    `}

  ${(props) =>
    props.$active &&
    css<StyledBtnPropsType>`
      box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6);
    `}
`
