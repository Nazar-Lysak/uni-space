"use client"

import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import style from './LoginButton.module.scss';

export default function LoginButton() {
    const handleLogin = () => {
        console.log('click login button')
    }

  return (
    <Button
        className={style.btnLogin}
        icon={<UserOutlined />}
        onClick={handleLogin}
    />
  );
}
