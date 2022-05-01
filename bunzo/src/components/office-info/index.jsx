import React from "react";
import PropTypes from "prop-types";
import Social, { SocialLink } from "../../components/social";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleOfficeInfowrap,
    OfficeThum,
    OfficeTitle,
    SingleOfficeInfoBox,
    SingleContactInfo,
    IconBox,
    ContactText,
    NavLink,
    ShareWrap,
    Title,
} from "./style";

const SingleOfficeInfo = ({
    contactNumber,
    contactEmail,
    addressText,
    description
}) => {

    return (
        <SingleOfficeInfowrap>
            <SingleOfficeInfoBox>
                <SingleContactInfo>
                    <IconBox>
                        <StaticImage
                            src="../../data/images/icons/phone-contact.png"
                            alt=""
                        />
                    </IconBox>
                    <ContactText>
                        <NavLink href={`tel:${contactNumber}`}>
                            {contactNumber}
                        </NavLink>
                    </ContactText>
                </SingleContactInfo>
                <SingleContactInfo>
                    <IconBox>
                        <StaticImage
                            src="../../data/images/icons/emaill-contact.png"
                            alt=""
                        />
                    </IconBox>
                    <ContactText>
                        <NavLink href={`mailto:${contactEmail}`}>
                            {contactEmail}
                        </NavLink>
                    </ContactText>
                </SingleContactInfo>
                <SingleContactInfo>
                    <IconBox>
                        <StaticImage
                            src="../../data/images/icons/map-contact.png"
                            alt=""
                        />
                    </IconBox>
                    <ContactText>
                        <p>{addressText}</p>
                    </ContactText>
                </SingleContactInfo>
                <ShareWrap>
                    <Title>Connect With Us:</Title>
                    <p>{description}</p>
                </ShareWrap>
            </SingleOfficeInfoBox>
        </SingleOfficeInfowrap>
    );
};
SingleOfficeInfo.propTypes = {
    officeName: PropTypes.string,
    image: PropTypes.object,
    contactNumber: PropTypes.string,
    contactEmail: PropTypes.string,
    addresText: PropTypes.string,
};
export default SingleOfficeInfo;
