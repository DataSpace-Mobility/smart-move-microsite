import styled from 'styled-components';

export const CardConatiner = styled.div`
display:flex;
flex-direction:column;
width:30%;
padding:10px;
@media screen and (max-width: 768px) {
    font-size: 1.2em;
    width:auto;
    padding:10px;
}
`;

export const CardHeading = styled.h1`
color:#DC4351;
background-color:#F4C75B;
text-align: left;
height:150px;
font-size:32px;
padding-left:15px;
padding-right:10px;
padding-top:15px;
font-family: 'Montserrat', sans-serif;
@media screen and (max-width: 768px) {
    font-size:1.2em;
    height:100px;
}
`;

export const CardPara = styled.p`
background: #DC4351;
color:#fff;
font-weight:500;
height:80%;
text-align: left;
padding:20px;
font-family: 'Montserrat', sans-serif;
font-size:1.2em;
line-height:1.8em;
@media screen and (max-width: 768px) {
    font-size:0.8em;

}
`;
