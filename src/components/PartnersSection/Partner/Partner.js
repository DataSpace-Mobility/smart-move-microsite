import React from 'react'
import { PartnerContainer, PartnerHeading, PartnerPara, PartnerSubHeading , PartnerImage } from './Partner.elements'

const Partner = (props) => {
    return (
        <PartnerContainer>
            <PartnerImage src={props.image} alt={props.heading} />
            <PartnerHeading>{props.heading}</PartnerHeading>
            <PartnerSubHeading>{props.subheading}</PartnerSubHeading>
            <PartnerPara>{props.para}</PartnerPara>
        </PartnerContainer>
    
    )
}

export default Partner
