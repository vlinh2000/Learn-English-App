import { Button, Form } from "antd";
import styled from "styled-components";

const Title = styled.h3`
    color:#0074D9;
    text-align:center;
`;

const ButtonStyled = styled(Button)`
    color:${props => props.color};
    box-shadow:1px 1px 10px 0px #AAA;
    border:1px solid ${props => props.color};
    
    &:hover,&:active{
        color:${props => props.color};
        border:1px solid ${props => props.color};
        box-shadow:5px 5px 1px 5px #EEE;
    }
`;

const FormItemStyled = styled(Form.Item)`
    .ant-form-item-explain-error{
        font-size:80%;
        margin-top:3px;
    }

   margin-bottom:14px;
   label{
       font-size:15px;
       font-style:italic;
   } 

`;

export { Title, ButtonStyled, FormItemStyled }