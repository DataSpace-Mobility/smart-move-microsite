import React from 'react'
import { CardContainer, CardHeading, CardLine, CardPara } from './BenefitsCard.elements'

const BenefitsCard = (props) => {
    return (
        <CardContainer lightBg={props.lightBg}>
            <CardLine />
            <CardHeading>{props.heading}</CardHeading>
            <CardPara>{props.para}</CardPara>
        </CardContainer>
    )
}

export default BenefitsCard
