/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/shared/button";
import Social, { SocialLink } from "../../components/social";
import { StaticImage } from "gatsby-plugin-image";
import {
    FooterWrap,
    FooterTopArea,
    FooterWidget,
    FooterDec,
    FooterLogo,
    FooterMenuWidget,
    FooterSubscribeWrap,
    SingleInput,
    Input,
    ButtonBox,
    SingleFooterMenu,
    FooterWidgetTitle,
    WidgetTitle,
    FooterWidgetMenuList,
    NavItem,
    FooterBottomArea,
    FooterBottomInner,
    CopyrightText,
    ButtonRightBox,
} from "./style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Footer = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterQuery {
            strapiFooter {
                footerLogo {
                    localFile{
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                copyrightText
                footerTitle
                links {
                  icon
                  iconLink
                }
                tagline
            }
        }
    `);
    
    const footerData = footerQuery.strapiFooter;
    const footerSocialLinks = footerData.links;
    const footerLogo = getImage(footerData.footerLogo.localFile);

    return (
        <FooterWrap>
            <FooterTopArea>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <FooterWidget>
                                <FooterLogo>
                                    <Link to="/">
                                        <GatsbyImage
                                            image={footerLogo}
                                            alt="footer-logo"
                                        />
                                    </Link>
                                </FooterLogo>
                                <FooterDec>{footerData.tagline}</FooterDec>
                            </FooterWidget>
                        </Col>
                        <Col lg={6}>
                            <FooterMenuWidget>
                                <SingleFooterMenu>
                                    <FooterWidgetTitle>
                                        <WidgetTitle>Quick Links</WidgetTitle>
                                    </FooterWidgetTitle>
                                    <Social
                                        sx={{ mt: "30px" }}
                                        shape="rounded-5"
                                        space={15}
                                        bgColor="black"
                                    >
                                      {(footerSocialLinks.length > 0) 
                                       && footerSocialLinks.map((link, i) => {
                                          return (
                                            <SocialLink key={i} href={link.iconLink}>
                                                <i className={`icofont-${link.icon}`}></i>
                                            </SocialLink>
                                          )  
                                      })
                                      }
                                    </Social>
                                    <FooterWidgetMenuList>
                                        <CopyrightText>
                                            &copy; {new Date().getFullYear()}
                                            {` ${footerData.copyrightText}`}
                                        </CopyrightText>
                                    </FooterWidgetMenuList>
                                </SingleFooterMenu>
                            </FooterMenuWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTopArea>
        </FooterWrap>
    );
};

export default Footer;
