import styled, { device } from "@theme/utils";

import NewsletterBgTwo from "../../data/images/banners/home-two-newsletter-bg.jpg";

export const NewsletterSubscribeInner = styled.div`
   .background-newsletter {
      background-color: #ddd;
      position: relative;
      border-radius: 10px;
      background: url(${props => props.backgroundImage});
      background-size: cover;
      background-position: center;
   }
`;
export const Title = styled.h2`
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    .normal-width {
        font-weight: 500;
    }
    ${device.large} {
        font-size: 44px;
    }
`;
export const SectionTitle = styled.div``;
export const NewsletterInputBox = styled.div`
    margin: auto;
    text-align: center;
`;
export const ButtonBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
