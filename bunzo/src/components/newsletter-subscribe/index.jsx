import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../components/shared/button";
import {
    NewsletterSubscribeInner,
    Title,
    SectionTitle,
    NewsletterInputBox,
    NewsletterInput,
    ButtonBox,
    NewsletterInnerImage,
    NewsLetterMessage
} from "./style";
import { handleSubmit } from "../../utils/utilities";
import axios from "axios";

const NewsletterSubscribeOne = () => {
    let initialNewsLetterSubscriberState = {
        subscriber: '',
        validated: false
    };
    let initialStateMessage = '';

    const [ newsLetterValues, setNewsLetterValues ] = useState(initialNewsLetterSubscriberState);
    const [ message, setMessage ] = useState(initialStateMessage);
    const MESSAGE = {
        success: 'You subscribed to our newsletter please check your email.',
        duplicate: 'Email address already registered.'
    };

    // const handleNewsLetterRequest = (values) => {
    //     const body = {
    //         "data": {
    //           "subscriber": values.subscriber
    //         }
    //       };

    //     // axios.post('https://geek-disciple.herokuapp.com/api/newsletters', body)
    //     // .then((res) => {
    //     //     isEmail = true;
    //     //     setMessage('Your are now subscribed to our newsletter. Please check your email.');
    //     //     setSubscriberEmail('');
    //     // })
    //     // .catch(error => {
    //     //     isEmail = false;
    //     //     setMessage(error.response.data.error.message);
    //     // });
    // };

    const handleNewsLetterSubmit = (event) => {
        if (!newsLetterValues.subscriber.match(/\S+@\S+\.\S+/)) {
            setNewsLetterValues({ 
                subscriber: newsLetterValues.subscriber,
                validated: false 
            });
        }

        if (newsLetterValues.subscriber.indexOf(' ')!=-1 || newsLetterValues.subscriber.indexOf('..')!=-1) {
            setNewsLetterValues({ 
                subscriber: newsLetterValues.subscriber,
                validated: false 
            });
        }

        const body = {
            "data": {
              "subscriber": newsLetterValues.subscriber
            }
          };

        axios.post('https://geek-disciple.herokuapp.com/api/newsletters', body)
        .then((res) => {
            setMessage(MESSAGE.success);
            setNewsLetterValues({
                subscriber: '',
                validated: true 
            });
        })
        .catch(error => {
            setNewsLetterValues({ 
                subscriber: newsLetterValues.subscriber,
                validated: false 
            });

            let _message = error.response.data.error.message;

            if (error.response.data.error.message.includes('unique')) {
                _message = MESSAGE.duplicate;
            }

            setMessage(_message);
        });
    };

    return (
        <NewsletterSubscribeInner>
            <Row className="align-items-center">
                <Col lg={3}>
                    <SectionTitle>
                        <Title>Subscribe For Newsletter</Title>
                    </SectionTitle>
                </Col>
                <Col lg={9}>
                    <NewsletterInputBox>
                        <NewsletterInput
                            type="text"
                            placeholder="Enter your email"
                            value={newsLetterValues.subscriber}
                            onChange={e => handleSubmit(setNewsLetterValues, { 
                                subscriber: e.target.value,
                                validated: false
                            })}
                        />
                        <ButtonBox>
                            <Button 
                            color={!newsLetterValues.subscriber ? "gray" : "primary"}
                            onClick={handleNewsLetterSubmit} 
                            size="large"
                            disabled={!newsLetterValues.subscriber ? true : false}
                            >
                                {" "}
                                {newsLetterValues.validated ? "Request Sent" : "Subscribe Now"}
                            </Button>
                        </ButtonBox>
                    </NewsletterInputBox>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col lg={12}>
                    {message && (
                        <NewsLetterMessage isEmail={newsLetterValues.validated}>
                          {message}
                        </NewsLetterMessage>
                    )}
                </Col>
            </Row>
            <NewsletterInnerImage>
                <StaticImage
                    className="newsletter-image-01"
                    src="../../data/images/shap/1-newsletter.png"
                    alt=""
                />
                <StaticImage
                    className="newsletter-image-02"
                    src="../../data/images/shap/2-newsletter.png"
                    alt=""
                />
            </NewsletterInnerImage>
        </NewsletterSubscribeInner>
    );
};

export default NewsletterSubscribeOne;
