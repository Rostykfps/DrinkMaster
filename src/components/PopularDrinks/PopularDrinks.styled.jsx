import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';
export const PopularDrinks = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap:40px;
@media only screen and (min-width: 768px) {
gap:80px;
}
@media only screen and (min-width: 1440px) {
width: 313px;
}
`

export const PopularTitle = styled.h2`
@media only screen and (max-width: 767.9px) {
font-size: 18px;
}
color: ${colors.light};
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 1.33;
margin-bottom: 28px;
@media only screen and (min-width: 768px) {
margin-bottom: 40px;
}
`

export const List = styled.ul`
display: flex;
width:100%;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 24px;
color: ${colors.light};
@media only screen and (min-width: 768px) {
gap: 32px;
}
@media only screen and (min-width: 1440px) {
gap: 28px;
}
`;
export const ListItem = styled.li`
width:100%; 
@media only screen and (min-width: 768px) {
width:336px;
}
@media only screen and (min-width: 1440px) {
width:100%; 
}
`;
export const Photo = styled.img`
width: 90px;
height: 90px;
border-radius: 12px;
`
export const DrinkDescr = styled.p`
overflow: hidden;
color: ${colors.disabled};
text-overflow: ellipsis;
white-space: nowrap;
font-size: 14px;
line-height: 1.3;
`
export const DrinkName = styled.h3`
color: ${colors.light};
font-size: 16px;
font-weight: 500;
line-height: 1.4;
`
export const DescrWrapper = styled.div`
display:flex;
flex-direction: column;
gap: 8px;
`
export const DrinkLink = styled(NavLink)`
width:100%;
height:100%;
display: flex;
justify-content:start;
align-items: center;
gap: 14px;
`