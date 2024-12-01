"use client"

import { Modal } from 'antd';

import SignInForm from "@/app/forms/auth/sign-in-form/SignInForm";
import SignUpForm from "@/app/forms/auth/sign-up-form/SignUpForm";

import { useLoginPopupStore } from "@/app/store/store";

const AuthPopup: React.FC = () => {

    const {isOpen, closePopup} = useLoginPopupStore(state => state);

    return (
        <Modal
            title="Basic Modal"
            open={isOpen}
            onOk={closePopup}
            onCancel={closePopup}
        >
            <SignInForm />
            <SignUpForm />
        </Modal>
    );
  };

  export default AuthPopup;