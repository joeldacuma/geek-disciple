import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import SpecialBannerTwo from "../../../components/special-for-beginner-two";
import { SpecialForBeginnerArea, SectionTitle, Title } from "./style";

const SpecialForBeginner = () => {
    const specialForBeginnerQuery = useStaticQuery(graphql`
        query SpecialTrendingQuery {
            TrendingBLog: allStrapiBlog(sort: 
                {
                 fields: createdAt, 
                 order: DESC,
                },
                filter: { is_trending_article: { eq: true } },
                limit: 6
                ) {
                edges {
                  node {
                    Videos {
                      youtube
                      vimeo
                      title
                    }
                    authors {
                      authorId
                      lastName
                      firstName
                      biography
                      email
                      profession
                      social {
                        facebook
                        instagram
                        linkedin
                      }
                      profile {
                          localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                          }
                      }
                    }
                    categories {
                      slug
                      name
                    }
                    is_trending_article
                    is_featured
                    introduction
                    slug
                    title
                    createdAt
                    cover {
                      localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                      }
                    }
                    content {
                      data {
                        content
                      }
                    }
                  }
                }
              }
        }
    `);
    const specialTrendingData =
          specialForBeginnerQuery.TrendingBLog.edges;

    return (
        <SpecialForBeginnerArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle>
                            <Title>Latest Article</Title>
                        </SectionTitle>
                    </Col>
                </Row>
                <Row className="row--35">
                    {specialTrendingData &&
                        specialTrendingData.map((item, i) => {
                            return (
                                <Col lg={4} md={6} sm={6} key={i}>
                                    <SpecialBannerTwo
                                        title={item.node.title}
                                        thume_image={
                                            item.node.cover.localFile
                                        }
                                        date={item.node.createdAt}
                                        slug={item.node.slug}
                                        author={`${item.node.authors.firstName} ${item.node.authors.lastName}`}
                                        category={item.node.categories}
                                        body={item.node.introduction}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SpecialForBeginnerArea>
    );
};

export default SpecialForBeginner;
