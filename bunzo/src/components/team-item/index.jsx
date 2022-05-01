import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Social, { SocialLink } from "../../components/social";

import {
    SingleTeamArea,
    TeamThum,
    TeamContent,
    TeamShareTop,
    TeamMemberInfo,
    NameTitle,
    Desination,
} from "./style";

const TeamItems = ({ name, designation, images, social }) => {
    const ThumImage = getImage(images);
    console.log(social);
    return (
        <SingleTeamArea>
            <TeamThum>
                <GatsbyImage image={ThumImage} alt="profile-image" />
            </TeamThum>
            <TeamContent className="hover-action">
                <TeamShareTop>
                    <Social
                        sx={{ mt: "30px" }}
                        shape="rounded-5"
                        space={10}
                        bgColor="bgWhite"
                        size="sm"
                    >
                        {(social.length > 0) && social.map((link, i) => {
                            return (
                              <SocialLink key={i} href={link.iconLink}>
                                <i className={`icofont-${link.icon}`}></i>
                              </SocialLink>
                              )
                        })
                        }
                    </Social>
                </TeamShareTop>
                <TeamMemberInfo>
                    <NameTitle>{name}</NameTitle>
                    <Desination>{designation}</Desination>
                </TeamMemberInfo>
            </TeamContent>
        </SingleTeamArea>
    );
};

export default TeamItems;
