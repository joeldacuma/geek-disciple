import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamItems from "../../../components/team-item";
import { graphql, useStaticQuery } from "gatsby";
import { TeamArea } from "./style";
import { flatDeep } from "../../../utils/functions";

const TeamMembersArea = () => {
    // const teamMemberQuery = useStaticQuery(graphql`

    // `)

    const teamMembersQuery = useStaticQuery(graphql`
        query TeamMembersQuery {
            allStrapiAuthor {
                edges {
                  node {
                    firstName
                    lastName
                    profession
                    social {
                        icon
                        iconLink
                    }
                    profile {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                  }
                }
              }
        }
    `);
    
    const authors = teamMembersQuery.allStrapiAuthor.edges;
    const authorsData = [
        ...new Set(flatDeep(authors.map((td) => td.node))),
    ];

    return (
        <TeamArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="section-title text-center">
                            <h2 className="title">Our Content Creators</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="gx-5">
                    {authorsData &&
                        authorsData.map((author, i) => (
                            <Col sm={6} md={6} lg={3} key={i}>
                                <TeamItems
                                    images={author.profile.localFile}
                                    name={`${author.firstName} ${author.lastName}`}
                                    designation={author.profession}
                                    social={author.social}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        </TeamArea>
    );
};

export default TeamMembersArea;
