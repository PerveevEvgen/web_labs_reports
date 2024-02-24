import styles from "./WelcomePage.module.scss";
import {Link} from "react-router-dom";

export function WelcomePage() {
  return (
    <main>
      <div className="header_info_wrapper">
        <h1 style={styles.h1}>
          ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ &quot;ІНТЕРНЕТ-ТЕХНОЛОГІЇ ТА
          ПРОЕКТУВАННЯ WEB-ЗАСТОСУВАНЬ&quot;
        </h1>
        <h2>Студента групи ІM-13 Первєєва Євгенія Олексійовича</h2>
      </div>
      <Link to="/main"><button>ДО ЛАБОРАТОРНИХ</button></Link>
    </main>
  );
}
