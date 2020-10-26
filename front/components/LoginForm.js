import React, {useState, useCallback, useMemo} from 'react';
import propTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import Link from 'next/link'
import styled from 'styled-components';
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
    margin-top: 10px; 
`

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // 컴포넌트에 넣는거는 usecallback으로 감싼다.
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    },[]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} requried />
            </div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} requried />
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입하기</Button></a></Link>
            </ButtonWrapper>
            <div>

            </div>
        </FormWrapper>
    );
};

LoginForm.propTypes = {
    setIsLoggedIn: propTypes.func.isRequired
};

export default LoginForm;