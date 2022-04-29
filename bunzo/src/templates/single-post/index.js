/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import Social, { SocialLink } from "../../components/social";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import StayInTouchs from "@components/stay-in-touch";
import LatestPostArea from "../../container/latest-post";
import PostAuthorBox from "../../components/post-author";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    Content,
    BlogDetailsMetaBox,
    PostMetaLeftSide,
    BlogDetailsPostAuthor,
    PostMidSide,
    PostDate,
    PostTime,
    PostMetaRightSide,
    Title,
    MetaBox,
    CategorySocialContent,
    PostSocialItems,
    PostCategoryItems,
    CommentArea,
    CommentTitle,
} from "./style";
import * as moment from "moment";

const SinglePosts = ({ location, pageContext }) => {
const postsQuery = useStaticQuery(graphql`
query AllBlogsPost {
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
    const postData = posts.find(({ node }) => node.slug === pageContext.slug);
    const post = postData.node;
    const coverImage = getImage(post.cover.localFile);
    const authorImage = getImage(post.authors.profile.localFile);

    return (
        <Layout>
            <SEO title={post.title} pathname="/" />
            <PageBreadcrumb pageContext={pageContext} location={location} />
            <BlogDetailsArea>
                <Container>
                    <Row className="gx-5">
                      <Col lg={8}>
                          <PostDetailsContentWrap>
                              <PostDetailsBody>
                                  <Thumb>
                                      <GatsbyImage 
                                      image={coverImage}
                                      alt={post.title}
                                      />
                                  </Thumb>
                                  <Content>
                                      <BlogDetailsMetaBox>
                                          <PostMetaLeftSide>
                                              <MetaBox>
                                                <Link to={`/category/${post.categories.slug}`} className="post-category">
                                                    {post.categories.name}
                                                </Link>
                                              </MetaBox>
                                              <BlogDetailsPostAuthor>
                                                  <div className="post-author">
                                                  By {" "}
                                                  {post.authors.firstName} {post.authors.lastName}
                                                  </div>
                                              </BlogDetailsPostAuthor>
                                          </PostMetaLeftSide>
                                          <PostMetaRightSide>
                                            <div>
                                              <i className="icofont-ui-calendar"></i>
                                              <span className="post-date">{moment(post.createdAt, 'YYYYMMDD').format('MM/DD/YYYY')}</span>
                                            </div>  
                                          </PostMetaRightSide>
                                      </BlogDetailsMetaBox>
                                      <Title>{post.title}</Title>
                                      <SingleBlogContent 
                                        dangerouslySetInnerHTML={{
                                            __html: post.content.data.content
                                        }} 
                                      />
                                  </Content>
                              </PostDetailsBody>
                          </PostDetailsContentWrap>
                      </Col>
                      <Col lg={4}>
                          <div className="blog-details-sidebar">
                              {post.authors && (
                                  <PostAuthorBox
                                    postAuthorName={`${post.authors.firstName} ${post.authors.lastName}`}
                                    postAuthorImage={authorImage}
                                    postAuthorBio={post.authors.biography}
                                    postAuthordescription={post.authors.profession}
                                    authorSlug={post.authors.authorId}
                                    authorSocial={post.authors.social}
                                  />
                              )}
                              <LatestPostArea />
                          </div>
                      </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

SinglePosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default SinglePosts;
