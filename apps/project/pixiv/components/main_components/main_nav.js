import styles from "./styles/main_nav.module.css"
import classnames from 'classnames'

function MainNav() {
    return (
        <div className={styles["main-nav-wrapper"]}>
            <nav className={styles["main-nav"]}>
                <a className={classnames(styles["nav-item"], styles["nav-focus"])} href="/" aria-current="page">插画</a>
                <a className={styles["nav-item"]} href="/">漫画</a>
                <a className={styles["nav-item"]} href="/">小说</a>
            </nav>
        </div>
    )
}

export default MainNav