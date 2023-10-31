
import { colors } from '../../colors';
import styled from 'styled-components';
export const Modal = styled.div`
  display: none;
  ${({ open }) =>
open &&
    `
display: block;
border-radius: 8px;
background: #161F37;
padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: start;
     position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
`;
export const TextDropDown = styled.div`
color: ${colors.light};
width:100%;
font-weight: 500;
font-size: 14px;
  font-family: Manrope;
  margin-bottom: 38px;
  display: flex;
  justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
const btn = `
border: none;
border-radius: 42px; 
padding: 12px 45px;
font-weight: 600;
font-size: 14px;
font-family: Manrope;
`

export const LogOutBtn = styled.button`
${btn}
background-color: ${colors.light};
color: ${colors.secondaryDark};
`
export const LogOutWrapper = styled.div`
display:flex;
justify-content: space-between;
gap:8px;
`
export const CancelButton = styled.button`
${btn}
background-color: ${colors.disabled};
color: ${colors.light};
`
export const Text = styled.span`
text-align: center;
font-family: Manrope;
font-size: 14px;
color: ${colors.light};
line-height: 1.3;
letter-spacing: -0.28px;
margin: 0 auto 35px;
`
export const CloseBtn = styled.button`
margin-bottom: 12px;
position: relative;
right: calc(-100% + 20px);
background: none;
border: none;
top: -6px;
`
export const SaveBtn = styled.button`
${btn}
background-color: ${colors.light};
color: ${colors.secondaryDark};
width: 100%;
`
export const NameInput = styled.input`
${btn}
background-color: transparent;
color: ${colors.light};
border: 1px solid rgba(243, 243, 243, 0.50);
max-width: 100%;
margin-bottom: 18px;
`
export const PhotoWrapper = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
overflow:hidden;
`
export const AddBtn = styled.div`
width: 32px;
height: 32px;
border-radius:50%;
position: relative;
left: 50%;
transform: translate(-50%, -50%);
`
export const Photo = styled.div`
position: relative;
left: 50%;
transform: translate(-50%, 0);
margin-bottom: 50px;
`