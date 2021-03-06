import React , {useState, useCallback} from 'react';
import AppLayout from "../components/AppLayout";
import {Form, Input, Checkbox, Button} from "antd";
import styled from 'styled-components';
import Head from "next/head";
import useInput from "../hooks/useInput";

const ErrorMessage = styled.div`
    color : red;
`;
const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);

    },[password]);

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.value);
        setTermError(false);
    },[]);

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck ){
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
    },[password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | Node Bird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nickname} onChange={onChangeNickname} required />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" value={password} onChange={onChangePassword} required />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 체크</label>
                    <br />
                    <Input name="user-password-check" value={passwordCheck} onChange={onChangePasswordCheck} required />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
                </div>
                <div><Button type="primary" htmlType="submit">가입하기</Button></div>
            </Form>
        </AppLayout>
    );
};

export default Signup