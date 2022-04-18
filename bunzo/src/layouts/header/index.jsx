/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import MainMenu from "../../components/menu/main-menu";
import MobileNavMenu from "../../components/menu/mobile-menu";
import {
    HeaderWrap,
    HeaderTopArea,
    Logo,
    HeaderMidRightSide,
    MainMenuArea,
    HeaderActionArea,
    MobileMenuArea,
    OffCanvasInner,
    MobileMenuBtn,
    OffCanvasContent,
    OffCanvasHeader,
    CloseAction,
    ButtonClose,
} from "./style";

const Header = () => {
    const allmenuData = useStaticQuery(graphql`
        query AllmenuSixQuery {
            allMenuJson {
                edges {
                    node {
                        id
                        text
                        link
                        isSubmenu
                        submenu {
                            link
                            text
                        }
                    }
                }
            }
        }
    `);
    const menuData = allmenuData.allMenuJson.edges;

    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    return (
        <HeaderWrap>
            <HeaderTopArea>
            <Container>
                    <Row className="align-items-center">
                        <Col lg={3} md={3} xs={5}>
                            <Logo>
                                <Link to="/">
                                    <StaticImage
                                        src="../../data/images/logo/logo-5-black.png"
                                        alt=""
                                    />
                                </Link>
                            </Logo>
                        </Col>
                        <Col lg={9} md={9} xs={7}>
                            <HeaderMidRightSide>
                                <MainMenuArea className="navigation-menu-black">
                                    <MainMenu allmenuData={menuData} />
                                </MainMenuArea>
                                <HeaderActionArea>
                                    <MobileMenuBtn
                                        onClick={ofcanvasHandaler}
                                        onKeyDown={ofcanvasHandaler}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </MobileMenuBtn>
                                </HeaderActionArea>
                                <MobileMenuArea
                                    className={`${
                                        ofcanvasOpen ? "mobile-menu-open" : ""
                                    }`}
                                >
                                    <OffCanvasInner>
                                        <div
                                            className="OffCanvasContent"
                                            onClick={ofcanvasHandaler}
                                            onKeyDown={ofcanvasHandaler}
                                            role="button"
                                            tabIndex={0}
                                        ></div>
                                        <OffCanvasContent>
                                            <OffCanvasHeader>
                                                <CloseAction>
                                                    <ButtonClose
                                                        onClick={
                                                            ofcanvasHandaler
                                                        }
                                                        onKeyDown={
                                                            ofcanvasHandaler
                                                        }
                                                    >
                                                        <i className="icofont-close"></i>
                                                    </ButtonClose>
                                                </CloseAction>
                                            </OffCanvasHeader>

                                            <MobileNavMenu
                                                MobilemenuData={menuData}
                                            />
                                        </OffCanvasContent>
                                    </OffCanvasInner>
                                </MobileMenuArea>
                            </HeaderMidRightSide>
                        </Col>
                    </Row>
                </Container>
            </HeaderTopArea>
        </HeaderWrap>
    );
};

export default Header;
