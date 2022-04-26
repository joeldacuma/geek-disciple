import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    PostThum,
    PostContent,
    BlogPostAuthor,
    BlogPostTitle,
    ReadMoreBtn,
    PostMeta,
    PostDate,
    ReadTime,
} from "./style";
import * as moment from "moment";

const HeroSixPost = ({ title, thume_image, date, postAuthor, slug }) => {
    const images = getImage(thume_image);
    return (
        <Row className="align-items-center">
            <Col lg={6} md={6}>
                <PostThum>
                    <Link to={`/${slug}`}>
                        <GatsbyImage image={images} alt="" />
                    </Link>
                </PostThum>
            </Col>
            <Col lg={6} md={6}>
                <PostContent>
                    <PostMeta>
                        <BlogPostAuthor>
                            By{" "}
                            {postAuthor}
                        </BlogPostAuthor>
                        <PostDate>
                           {moment(date, 'YYYYMMDD').format('MM/DD/YYYY')}
                        </PostDate>
                    </PostMeta>

                    <BlogPostTitle>
                        <Link to={`/blog/${slug}`}>{title}</Link>
                    </BlogPostTitle>

                    <ReadMoreBtn>
                        <Link to={`/blog/${slug}`}>
                            Read more{" "}
                            <i className="icofont-long-arrow-right"></i>
                        </Link>
                    </ReadMoreBtn>
                </PostContent>
            </Col>
        </Row>
    );
};
HeroSixPost.propTypes = {
    title: PropTypes.string,
    thume_image: PropTypes.object,
    slug: PropTypes.string,
    dateSlug: PropTypes.string,
    body: PropTypes.string,
    authorSlug: PropTypes.string,
};
export default HeroSixPost;
