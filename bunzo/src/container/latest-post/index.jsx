import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import SideLatestPosts from "../../components/side-latest-post";
import { LatestPostInnerWrap, LatestPostHeader, LatestPostBox } from "./style";
const LatestPostArea = (props) => {
    const sideLatestPostsQuery = useStaticQuery(graphql`
        query SideLatestPostsQuery {
            latestPost: allStrapiBlog(sort: 
                {fields: createdAt, order: DESC},
                limit: 5
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
    const sideLatestPostsData = sideLatestPostsQuery.latestPost.edges;

    return (
        <LatestPostInnerWrap>
            <LatestPostHeader>
                <div className="section-title">
                    <h3>Latest Post</h3>
                </div>
            </LatestPostHeader>
            <LatestPostBox>
                {sideLatestPostsData &&
                    sideLatestPostsData.map((latestPosts, i) => {
                        return (
                            <SideLatestPosts
                                key={i}
                                title={latestPosts.node.title}
                                thume_image={
                                    latestPosts.node.cover.localFile
                                }
                                date={latestPosts.node.createdAt}
                                slug={latestPosts.node.slug}
                                author={`${latestPosts.node.authors.firstName} ${latestPosts.node.authors.lastName}`}
                            />
                        );
                    })}
            </LatestPostBox>
        </LatestPostInnerWrap>
    );
};

LatestPostArea.propTypes = {};

export default LatestPostArea;
