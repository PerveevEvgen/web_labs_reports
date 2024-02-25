import styles from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={styles.navbar_container}>
           <div className={styles.navbar_element}>Лаба №1</div>
           <div className={styles.navbar_element}>Лаба №2</div>
           <div className={styles.navbar_element}>Лаба №3</div>
           <div className={styles.navbar_element}>Лаба №4</div>
           <div className={styles.navbar_element}>Лаба №5</div>
           <div className={styles.navbar_element}>Лаба №6</div>
           <div className={styles.navbar_element}>Лаба №7</div>
           <div className={styles.navbar_element}>Лаба №8</div>
           <div className={styles.navbar_element}>Лаба №9</div>
        </div>
    )

}