import styled, { themeGet, device } from "@theme/utils";

export const SingleBannerBlogPost = styled.div`
    margin-top: 30px;
`;
export const SpecialBannerPostImage = styled.div`
    a {
        display: block;
        img {
            border-radius: 10px;
        }
    }
`;
export const SingleSpecialBannerPost = styled.div``;
export const SpecialBannerPostContent = styled.div`
    margin-top: 20px;
`;
export const BannerPostAuthor = styled.div`
    color: #9b9ea1;
    font-weight: 600;
    margin-bottom: 10px;
`;
export const Title = styled.h3``;
export const DecText = styled.p`
    margin-top: 10px;
`;
export const BannerPostMeta = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
`;
export const PostDate = styled.span`
    position: relative;
    padding-right: 10px;
    margin-right: 10px;
    font-size: 13px;
    color: #0f034a;
`;
export const ReadTime = styled.span``;
export const MetaBox = styled.span`
  position: relative;
  align-items: center;
  display: flex;
  margin-right: 10px;
  justify-content: start;
    .post-category {
      min-width: 100px;
      text-align: center;
      padding: 4px 5px;
      border-radius: 10px;
      color: #ffff;
      background-color: #41273c;
    }
`;
export const DescText = styled.p``;
