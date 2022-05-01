import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import SingleOfficeInfo from "../../../components/office-info";
import { ContactUsPageArea } from "./style";

const OurOffices = () => {
    const officeinfoQuery = useStaticQuery(graphql`
        query OfficeinfoQuery {
            strapiContact {
                contactNumber
                contactEmail
                contactDescription
                companyAddress
              }
        }
    `);

    //const { officeWrap } = officeinfoQuery.contactUsJson;
    const contactUsData = officeinfoQuery.strapiContact;

    return (
        <ContactUsPageArea>
            <Container>
                <Row className="gx-5">
                <Col lg={6} md={7}>
                    <SingleOfficeInfo
                        contactNumber={contactUsData.contactNumber}
                        contactEmail={contactUsData.contactEmail}
                        addressText={contactUsData.companyAddress}
                        description={contactUsData.contactDescription}
                    />
                 </Col>
                </Row>
            </Container>
        </ContactUsPageArea>
    );
};

export default OurOffices;
