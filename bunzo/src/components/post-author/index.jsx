/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../components/shared/button";
import Social, { SocialLink } from "../../components/social";
import {
    FollowingAuthorArea,
    AuthorImage,
    AuthorTitle,
    AuthorName,
    AuthorDegination,
    AuthorDetails,
    AuthorDetailsText,
    AuthorPostShare,
    ButtonBox,
} from "./style";

const PostAuthorBox = ({
    postAuthorName,
    postAuthordescription,
    postAuthorImage,
    postAuthorBio,
    authorSlug,
    authorSocial
}) => {
    const image = getImage(postAuthorImage);

    return (
        <FollowingAuthorArea>
            <AuthorImage>
                <GatsbyImage image={image} alt="" />
            </AuthorImage>
            <AuthorTitle>
                <AuthorName>
                    <Link to={`/profile/${authorSlug}`}>{postAuthorName}</Link>
                </AuthorName>
                <AuthorDegination>{postAuthordescription}</AuthorDegination>
            </AuthorTitle>
            <AuthorDetails>
                <AuthorDetailsText>{postAuthorBio}</AuthorDetailsText>

                <AuthorPostShare>
                    <Social sx={{ mt: "20px" }} shape="rounded-5" space={15}>
                        {(authorSocial.length > 0) && authorSocial.map((link, i) => {
                            return (
                              <SocialLink key={i} href={link.iconLink}>
                                <i className={`icofont-${link.icon}`}></i>
                              </SocialLink>
                            )
                        })
                        }
                        {/* {facebook !== 'none' && 
                        (<SocialLink href={facebook}>
                            <i className="icofont-facebook"></i>
                        </SocialLink>)}
                        {instagram !== 'none' && 
                        (<SocialLink href={instagram}>
                            <i className="icofont-instagram"></i>
                        </SocialLink>)}
                        {linkedin !== 'none' && 
                        (<SocialLink href={linkedin}>
                            <i className="icofont-linkedin"></i>
                        </SocialLink>)} */}
                    </Social>
                </AuthorPostShare>
            </AuthorDetails>
        </FollowingAuthorArea>
    );
};

export default PostAuthorBox;
