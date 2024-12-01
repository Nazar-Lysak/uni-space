
import style from "./Header.module.scss";
import LoginButton from '@/app/features/login-button/LoginButton';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div>
        nav
      </div>
      <LoginButton />
    </header>
  );
}

export default Header;
