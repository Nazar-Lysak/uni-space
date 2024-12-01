"use client";

import { useState } from "react";
import { Modal, Button, Flex } from 'antd';

import SignInForm from "@/app/forms/auth/sign-in-form/SignInForm";
import SignUpForm from "@/app/forms/auth/sign-up-form/SignUpForm";
import ForgotPasswordForm from "@/app/forms/auth/forgot-password-form/ForgotPasswordForm";

import { useLoginPopupStore } from "@/app/store/store";

const AuthPopup: React.FC = () => {

  const { isOpen, closePopup } = useLoginPopupStore((state) => state);
  const [currentForm, setCurrentForm] = useState<"signIn" | "signUp" | "forgotPassword">("signIn");

  const formComponents: Record<string, React.ReactNode> = {
    signIn: <SignInForm />,
    signUp: <SignUpForm />,
    forgotPassword: <ForgotPasswordForm />,
  };

  return (
    <Modal
      destroyOnClose
      open={isOpen}
      onOk={closePopup}
      onCancel={closePopup}
      footer={null}
    >
      {formComponents[currentForm]}

      <Flex justify={'center'} align={'center'}>
        <Button
          type={currentForm === "signIn" ? "link" : "text"}
          onClick={() => setCurrentForm("signIn")}
        >
          Sign In
        </Button>
        <Button
          type={currentForm === "signUp" ? "link" : "text"}
          onClick={() => setCurrentForm("signUp")}
        >
          Sign Up
        </Button>
        <Button
          type={currentForm === "forgotPassword" ? "link" : "text"}
          onClick={() => setCurrentForm("forgotPassword")}
        >
          Forgot Password
        </Button>
      </Flex>
    </Modal>
  );
};

export default AuthPopup;
