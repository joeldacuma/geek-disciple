/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../../components/shared/button";
import {
    NewsletterSubscribeInner,
    Title,
    SectionTitle,
    NewsletterInputBox,
    ButtonBox,
} from "./style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NewsletterSubscribeTwo = ({ image, link, buttonText }) => {
    const backgroundImage = getImage(image.localFile);

    return (
        <NewsletterSubscribeInner>
            <NewsletterInputBox>
                <GatsbyImage className="background-newsletter" alt="newsletter" image={backgroundImage} />
                {buttonText && 
                (<ButtonBox>
                    <Button
                        sx={{ mt: "30px", color: "#fff" }}
                        path={link}
                        size="large"
                        color="primary"
                        shape="rounded-10"
                    >
                        {" "}
                        {buttonText}
                    </Button>
                </ButtonBox>)}
            </NewsletterInputBox>
        </NewsletterSubscribeInner>
    );
};

export default NewsletterSubscribeTwo;
