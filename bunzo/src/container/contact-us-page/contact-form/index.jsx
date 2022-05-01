import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactFormBox from "../../../components/contact-form";
import {
    ContactFromWrapper,
    SectionTitle,
    Title,
    SubTitle
} from "./style";
import { useStaticQuery, graphql } from "gatsby";

const ContactFormArea = () => {
    const contactInfoQuery = useStaticQuery(graphql`
    query ContactInfoQuery {
        strapiContact {
            contactFormTitle
            contactFormSubtitle
          }
    }
   `);
    
   const contactFormData = contactInfoQuery.strapiContact;

    return (
        <ContactFromWrapper>
            <Container>
                <Row className="gx-4 align-items-center">
                    <SectionTitle>
                        <Title>{contactFormData.contactFormTitle}</Title>
                        <SubTitle>
                            {contactFormData.contactFormSubtitle}
                        </SubTitle>
                    </SectionTitle>
                    <ContactFormBox />
                </Row>
            </Container>
        </ContactFromWrapper>
    );
};

export default ContactFormArea;
