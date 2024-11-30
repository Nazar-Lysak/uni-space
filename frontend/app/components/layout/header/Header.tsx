
import style from "./Header.module.scss";
import LoginButton from '@/app/features/login-button/LoginButton';

export default function Header() {
  return (
    <header className={style.header}>
      <div>
        nav
      </div>
      <LoginButton />
    </header>
  );
}
