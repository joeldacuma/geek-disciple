import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsletterSubscribeTwo from "../../../components/newsletter-subscribe-two";
import { NewsletterSubscribeWrap } from "./style";
import { graphql, useStaticQuery, Link } from "gatsby";

const NewsLettersArea = () => {
    const newsLetter = useStaticQuery(graphql`
    query NewsLetterQuery {
        strapiHome {
                midBannerAds {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                        relativePath
                    }
                    url
                }
                midBannerAdsButtonText
                midBannerAdsButtonLink
            }
        }      
    `);

    const newsLetterData = newsLetter.strapiHome;
    const newsLetterImage = newsLetterData.midBannerAds;
    const midBannerButtonText = newsLetterData.midBannerAdsButtonText;
    const midBannerButtonLink = newsLetterData.midBannerAdsButtonLink;

    return (
        <NewsletterSubscribeWrap>
            <Container>
                <Row>
                    <Col>
                        <NewsletterSubscribeTwo
                         image={newsLetterImage}
                         link={midBannerButtonLink}
                         buttonText={midBannerButtonText}
                         />
                    </Col>
                </Row>
            </Container>
        </NewsletterSubscribeWrap>
    );
};

export default NewsLettersArea;
