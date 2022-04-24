/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, useStaticQuery } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import LargeSinglePosts from "../../components/large-single-post";
import LatestPostArea from "../../container/latest-post";
import { BlogDetailsArea, BlogDetailsRightSidebar } from "./style";
import { flatDeep } from "../../utils/functions";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

const CategoriesPosts = ({ data, location, pageContext }) => {
    const postsQuery = useStaticQuery(graphql`
    query AllCategoryPosts {
    allStrapiBlog {
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

    const posts = postsQuery.allStrapiBlog.edges;
    const postsData = [
        ...new Set(flatDeep(posts.map((td) => td.node))),
    ];

    console.log(postsData);

    return (
        <Layout>
            <SEO title={"Geek Disciple Categories"} pathname="/" />
            <PageBreadcrumb pageContext={pageContext} location={location} />
            <BlogDetailsArea>
                <Container>
                  <Row className="gx-5">
                    <Col lg={8} md={7}>
                        <Row>
                            {postsData.map((blog, i) => {
                                return (
                                  <Col lg={12} key={i}>
                                      <LargeSinglePosts
                                        title={blog.title}
                                        thumb_image={blog.cover.localFile}
                                        categories={blog.categories}
                                      />
                                  </Col>
                                );
                            })}
                        </Row>
                    </Col>
                  </Row>
                </Container>               
            </BlogDetailsArea>
        </Layout>
    );
};

CategoriesPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default CategoriesPosts;
