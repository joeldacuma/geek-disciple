import styled, { device, themeGet } from "@theme/utils";

export const Form = styled.form`
    max-width: 60%;
`;
export const SingleInputBox = styled.div`
    margin-bottom: 20px;
`;
export const Input = styled.input`
    border: 1px solid #efefef;
    width: 100%;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #fafafa;
    font-weight: 500;
    height: 50px;
`;
export const Textarea = styled.textarea`
    border: 1px solid #efefef;
    width: 100%;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #fafafa;
    font-weight: 500;
    height: 200px;
`;
export const ContactMessage = styled.p`
    .success-contact {
      color: #222;
    }
    .failure-contact {
      color: red;
    }
`;
