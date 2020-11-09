import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const ParticipateConatiner = styled.section`
display:flex;
flex-direction:column;
`;

export const ParticipateHeading = styled.h1`
color:#3E3E3F;
font-size:3em;
border-bottom:7px solid #3E3E3F;
font-weight:700;
width:30%;
margin:auto;
text-align:center;
margin-bottom:10px;
padding-bottom:10px;
text-transform:uppercase;
font-family: 'Montserrat', sans-serif;
@media screen and (max-width: 768px) {
    font-size: 1.2em;
    width:40%;
    border-bottom:2px solid #3E3E3F;
    margin-top:20%;
}
`;

export const ParticipatePara = styled.p`
color:#3E3E3F;
font-size:1.5em;
line-height:1.8em;
text-align:center;
margin:auto;
padding:100px;
font-family: 'Montserrat', sans-serif;
@media screen and (max-width: 768px) {
    font-size: 1.2em;
    padding:15px;

}
`;

export const ParticipateContent = styled(Grid)`
display:flex;
justify-content: space-evenly;
@media screen and (max-width: 768px) {
    font-size: 1.2em;
    padding:15px;
    flex-direction:column;
}
`;
