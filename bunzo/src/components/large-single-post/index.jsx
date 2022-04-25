import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { slugify } from "../../utils/functions";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    LargeBlogPostWrap,
    LargeThum,
    AuthorBlogPostContent,
    BlogDetailsMetaBox,
    PostMetaLeftSide,
    BlogPostCategory,
    BlogPostAuthor,
    PostMetaRightSide,
    PostDate,
    PostReadTime,
    Title,
    DescText,
    LargeBlogPostbottom,
    LargeBlogPostAction,
    AuthorAction,
    CountNumber,
} from "./style";
import * as moment from "moment";

const LargeSinglePosts = ({
    title,
    thumb_image,
    slug,
    body,
    date,
    categories,
    authorName,
    dateSlug,
    authorId,
}) => {
    const image = getImage(thumb_image);
    return (
        <LargeBlogPostWrap>
            <LargeThum>
                <GatsbyImage image={image} alt={title} />
            </LargeThum>
            <AuthorBlogPostContent>
                <BlogDetailsMetaBox>
                    <PostMetaLeftSide>
                        <BlogPostCategory>
                            {categories.name}
                        </BlogPostCategory>
                        <BlogPostAuthor>
                            By{" "}
                          {authorName}
                        </BlogPostAuthor>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <PostDate>
                          <i className="icofont-ui-calendar"></i>
                         {moment(date, 'YYYYMMDD').format('MM/DD/YYYY')}
                        </PostDate>
                    </PostMetaRightSide>
                </BlogDetailsMetaBox>
                <Title>
                    <Link to={`/blog/${slug}`}>{title}</Link>
                </Title>
                <DescText>
                    {body}
                </DescText>
            </AuthorBlogPostContent>
        </LargeBlogPostWrap>
    );
};
LargeSinglePosts.propTypes = {
    title: PropTypes.string,
    thume_image: PropTypes.object,
    video_link: PropTypes.object,
    date: PropTypes.string,
    slug: PropTypes.string,
    dateSlug: PropTypes.string,
    categories: PropTypes.object,
    body: PropTypes.string,
    authorSlug: PropTypes.string,
    authorId: PropTypes.string,
};
export default LargeSinglePosts;
