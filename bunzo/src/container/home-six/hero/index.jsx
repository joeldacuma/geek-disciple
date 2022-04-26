import React from "react";
import { Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Swiper, { SwiperSlide } from "@components/swiper";
import HeroSixPost from "../../../components/hero-six";
import { HeroSection, SliderNavigation } from "./style";

const HeroArea = () => {
    const heroSixQuery = useStaticQuery(graphql`
        query HeroSixQuery {
            HeroPost: allStrapiBlog {
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

    const heroData = heroSixQuery.HeroPost.edges;
    const featuredHeroData = heroData.filter(({ node }) => node.is_featured === true);

    return (
        <HeroSection>
            <Container>
                <Row>
                    <Swiper
                        layout={{
                            nav: "hero-navigation",
                            dots: "hero-dots-style",
                        }}
                        navigation={{
                            nextEl: ".hero-slider-button-next",
                            prevEl: ".hero-slider-button-prev",
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {featuredHeroData &&
                            featuredHeroData.map((item, i) => {
                                return (
                                    <SwiperSlide key={`trending-${i}`}>
                                        <HeroSixPost
                                            title={item.node.title}
                                            thume_image={
                                                item.node.cover.localFile
                                            }
                                            slug={item.node.slug}
                                            postAuthor={
                                                `${item.node.authors.firstName} ${item.node.authors.lastName}`
                                            }
                                            date={item.node.createdAt}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </Row>
            </Container>
            <SliderNavigation>
                <div className="hero-slider-button-next navigation-button">
                    <i className="icofont-long-arrow-left"></i>
                </div>
                <div className="hero-slider-button-prev navigation-button">
                    <i className="icofont-long-arrow-right"></i>
                </div>
            </SliderNavigation>
        </HeroSection>
    );
};

export default HeroArea;
