import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import HistoryItem from "@components/history-item";
import {
    BunzoHistoryWrap,
    BunzoRow,
    BunzoCol6,
    BunzoHistoryTitle,
} from "./style";

const BunzoHistoryArea = () => {
    const bunzoHistoryAreaQery = useStaticQuery(graphql`
        query BunzoHistoryAreaQery {
            strapiAbout {
                goal
                childStrapiAboutContactusbannertextTextnode {
                  contactUsBannerText
                }
                missionVision
              }
        }
    `);
    const aboutData = bunzoHistoryAreaQery.strapiAbout;
    const aboutDataRichText = aboutData.childStrapiAboutContactusbannertextTextnode.contactUsBannerText;

    return (
        <BunzoHistoryWrap>
            <Container>
                <Row>
                    <Col>
                        <BunzoRow>
                            <BunzoCol6>
                                <BunzoHistoryTitle
                                    dangerouslySetInnerHTML={{
                                        __html: aboutDataRichText,
                                    }}
                                />
                            </BunzoCol6>
                            {/* <BunzoCol6>
                                {history.map((itemData) => (
                                    <HistoryItem
                                        key={itemData.id}
                                        title={itemData.title}
                                        decText={itemData.decText}
                                    />
                                ))}
                            </BunzoCol6> */}
                            <BunzoCol6>
                                <HistoryItem
                                    key={'mission-vision'}
                                    title={'Mission & Vision'}
                                    decText={aboutData.missionVision}
                                />
                                <HistoryItem
                                    key={'goal'}
                                    title={'Our Goal'}
                                    decText={aboutData.goal}
                                />
                            </BunzoCol6>
                        </BunzoRow>
                    </Col>
                </Row>
            </Container>
        </BunzoHistoryWrap>
    );
};

export default BunzoHistoryArea;
