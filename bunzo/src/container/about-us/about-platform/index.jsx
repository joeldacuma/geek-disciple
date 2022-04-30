import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";

import {
    AboutHistoryArea,
    SinglePlatformBox,
    PlatformIcon,
    PlatformContent,
    Title,
    TextDec,
    TextDec2,
    PlatformContentBox,
    PlateformImageBox,
    PlateforemImage,
    PlatformBoxButton,
} from "./style";

const AboutPlatform = () => {
    const aboutPlatformQuery = useStaticQuery(graphql`
        query AboutPlatformQuery {
            strapiAbout {
                goal
                childStrapiAboutContactusbannertextTextnode {
                  contactUsBannerText
                }
                missionVision
                aboutSectionOneTitle
                contactUsSectionOneDescription
              }
        }
    `);
    
    const aboutData = aboutPlatformQuery.strapiAbout;

    return (
        <AboutHistoryArea>
            <Container>
                <Row className="gx-5">
                    <Col lg={12}>
                        <SinglePlatformBox>
                            <PlatformContent>
                                <Title>{aboutData.aboutSectionOneTitle}</Title>
                                <TextDec>
                                       {aboutData.contactUsSectionOneDescription}
                                </TextDec>
                            </PlatformContent>
                        </SinglePlatformBox>
                    </Col>
                </Row>
            </Container>
        </AboutHistoryArea>
    );
};

export default AboutPlatform;
