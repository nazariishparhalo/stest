import styled from "styled-components";

export const Auth = styled.div`
    padding: 30px;
    width: 450px;
    border: 1px solid #3D3F43;
    border-radius: 5px;
    color: #fff;

    .login-error {
        color: red;
    }
`;

export const AuthTitle = styled.span`
    font-size: 25px;
`;

export const AuthInput = styled.div`
    margin-top: 15px;
    label {
        font-size: 15px;
        color: #fff; 
    }
    input {
        height: 30px;
        width: 100%;
        margin-top: 5px;
        padding-left: 10px;
        background-color: #1B1D24;
        border: 1px solid #3D3F43;
        color: #fff;
        border-radius: 5px;
        &:focus {
            outline: none;
        }
    }
`;

export const AuthSubmitBtn = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    input {
        display: block;
        width: 80px;
        height: 30px;
        background-color: #159DE0;
        color: #fff;
        border: none;
        border-radius: 5px;
    }
`;
