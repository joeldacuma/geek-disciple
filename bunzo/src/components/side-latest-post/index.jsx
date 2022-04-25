import { Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleLatestPost,
    LatestPostThum,
    LatestPostContent,
    Title,
    LatestPostMeta,
    PostDate,
    BlogPostAuthor
} from "./style";
import * as moment from "moment";

const SideLatestPosts = ({ title, date, thume_image, slug, author }) => {
    const image = getImage(thume_image);
    return (
        <SingleLatestPost>
            <LatestPostThum>
                <Link to={`/blog/${slug}`}>
                    <GatsbyImage image={image} alt="" />
                </Link>
            </LatestPostThum>
            <LatestPostContent>
                <Title>
                    <Link to={`/blog/${slug}`}>{title}</Link>
                </Title>
                <LatestPostMeta>
                    <PostDate>
                        <i className="icofont-ui-calendar"></i>
                        {moment(date, 'YYYYMMDD').format('MM/DD/YYYY')}
                    </PostDate>
                </LatestPostMeta>
                <LatestPostMeta>
                  <BlogPostAuthor>
                    By {" "}
                    {author}
                  </BlogPostAuthor>
                </LatestPostMeta>
            </LatestPostContent>
        </SingleLatestPost>
    );
};

export default SideLatestPosts;
