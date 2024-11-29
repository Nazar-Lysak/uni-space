import { Button } from "@/components/ui/button";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <Button className={style.btnLogin}>
        Log in
      </Button>
    </header>

  );
}
