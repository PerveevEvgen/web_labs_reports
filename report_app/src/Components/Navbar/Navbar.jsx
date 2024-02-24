import styles from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={styles.navbar_container}>
            <div className={styles.logo_wrapper}>
                <img src="./../src/assets/kpi-symbol.png" alt="kpi_logo" />
            </div>
            <div className={styles.main_content_wrapper}>
                <h1>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ &quot;ІНТЕРНЕТ-ТЕХНОЛОГІЇ ТАПРОЕКТУВАННЯ WEB-ЗАСТОСУВАНЬ&quot;</h1>
                <h2>Студента групи ІM-13 Первєєва Євгенія Олексійовича</h2>
            </div>
        </div>
    )

}