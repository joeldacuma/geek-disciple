import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleBannerBlogPost,
    SpecialBannerPostImage,
    SpecialBannerPostContent,
    BannerPostAuthor,
    Title,
    BannerPostMeta,
    PostDate,
    ReadTime,
    MetaBox,
    DescText
} from "./style";
import * as moment from "moment";

const SpecialBannerTwo = ({
    thume_image,
    title,
    date,
    author,
    slug,
    category,
    body
}) => {
    const image = getImage(thume_image);
    return (
        <SingleBannerBlogPost>
            <SpecialBannerPostImage>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={image} alt="Banner Blog image" />
                </Link>
            </SpecialBannerPostImage>

            <SpecialBannerPostContent>
                <BannerPostAuthor>
                    By {author}
                </BannerPostAuthor>
                <Title>
                    <Link to={`/blog/${slug}`}>{title}</Link>
                </Title>
                <BannerPostMeta>
                    <MetaBox>
                        <Link to={`/category/${category.slug}`} className="post-category">
                            {category.name}             
                        </Link>
                    </MetaBox>
                    <PostDate>
                        {moment(date, 'YYYYMMDD').format('MM/DD/YYYY')}
                    </PostDate>
                </BannerPostMeta>
                <DescText>
                    {body}
                </DescText>
            </SpecialBannerPostContent>
        </SingleBannerBlogPost>
    );
};

export default SpecialBannerTwo;
