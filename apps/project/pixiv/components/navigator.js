import styles from "./styles/navigator.module.css"
import Image from "next/image"
import Searchbar from "./nav_components/searchbar"
import classnames from 'classnames'

function navigator() {
    return (
        <div className={styles["navigator-wrapper"]}>
            <div style={{position:"static", zIndex: "auto"}}>
                <div style={{position:"static", zIndex: "auto"}}>
                    <div className={styles.navigator}>
                        <div className={styles["nav-left"]}>
                            <div className={styles["sidebar-button-wrapper"]}>
                                <button title="菜单" className={classnames(styles["sidebar-button"], styles["nav-button"])}>
                                    <svg viewBox="0 0 24 24" className={styles["sidebar-button-icon"]}>
                                        <path d= "M 4 7 C 4 6.44772 4.44772 6 5 6 H 19 C 19.5523 6 20 6.44772 20 7 C 20 7.55228 19.5523 8 19 8 H 5 C 4.44772 8 4 7.55228 4 7 Z M 4 12 C 4 11.4477 4.44772 11 5 11 H 19 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 H 5 C 4.44772 13 4 12.5523 4 12 Z M 5 16 C 4.44772 16 4 16.4477 4 17 C 4 17.5523 4.44772 18 5 18 H 19 C 19.5523 18 20 17.5523 20 17 C 20 16.4477 19.5523 16 19 16 H 5 Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div size="24" className={styles["left-space"]}></div>
                            <a className={styles["nav-logo"]} href="/">
                                <Image src="/logo.svg" width="82" height="32" alt="pixiv" className={styles.logo} />
                            </a>
                        </div>
                        <Searchbar />
                        <div className={styles["nav-right"]}>
                            <div className={styles["user-info"]}>
                                <div className={styles["language"]}>
                                    <button className={classnames(styles["lang-button"], styles["nav-button"])}>
                                        <span className={styles["lang-chooser"]}>简体中文</span>
                                    </button>
                                </div>
                                <div className={classnames(styles["user-wrapper"], styles["upload-wrapper"])}>
                                    <div className={styles["upload-container"]}>
                                        <button type="button" aria-disabled="false" className={styles["upload-button"]}>
                                            <span className={styles["upload-inner"]}>
                                                投稿作品
                                                <span className={styles["upload-chooser"]}>
                                                    <svg viewBox="0 0 10 8" size="10" className={styles["upload-svg"]}>
                                                        <path d="M 5 4.58579 L 1.95711 1.54289 C 1.56658 1.15237 0.933418 1.15237 0.542893 1.54289 C 0.152369 1.93342 0.152369 2.56658 0.542893 2.95711 L 5 7.41421 L 9.45711 2.95711 C 9.84763 2.56658 9.84763 1.93342 9.45711 1.54289 C 9.06658 1.15237 8.43342 1.15237 8.04289 1.54289 L 5 4.58579 Z"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className={classnames(styles["user-wrapper"], styles["msg-wrapper"])}>
                                    <button title="消息" className={classnames(styles["user-button"], styles["msg-button"], styles["nav-button"])}>
                                        <svg viewBox="0 0 24 24" size="24" className={classnames(styles["user-icon"], styles["msg-icon"])}>
                                            <path d="M 21 7.79815 L 12 13.7981 L 3 7.79815 V 7.00028 C 3 5.89556 3.8957 5 4.99942 5 H 19.0006 C 20.1048 5 21 5.89439 21 7.00028 V 7.79815 Z M 21 9.7 V 16.9997 C 21 18.1044 20.1043 19 19.0006 19 H 4.99942 C 3.89517 19 3 18.1056 3 16.9997 V 9.7 L 12 15.7 L 21 9.7 Z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className={classnames(styles["user-wrapper"], styles["note-wrapper"])}>
                                    <button title="通知" className={classnames(styles["user-button"], styles["note-button"], styles["nav-button"])}>
                                        <svg viewBox="0 0 24 24" size="24" className={classnames(styles["user-icon"], styles["note-icon"])}>
                                            <path d="M 18 9.25 V 12 L 19.5613 16.6838 C 19.5952 16.7857 19.6126 16.8925 19.6126 17 C 19.6126 17.5523 19.1649 18 18.6126 18 H 5.38742 C 4.83514 18 4.38742 17.5523 4.38742 17 C 4.38742 16.8925 4.40475 16.7857 4.43874 16.6838 L 5.99999 12 V 9.25 C 5.99999 5.79822 8.68629 3 12 3 C 15.3137 3 18 5.79822 18 9.25 Z M 12 21 C 10.6938 21 9.58254 20.1652 9.1707 19 H 14.8293 C 14.4175 20.1652 13.3062 21 12 21 Z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className={classnames(styles["user-wrapper"], styles["user-account-wrapper"])}>
                                    <button className={styles["account-button"]}>
                                        <div className={styles["account"]}>
                                            <div size="40" role="img" title="emiya_lxy" className={styles["avatar-wrapper"]}>
                                                <Image src="/users/emiya_lxy.png" width="40" height="40" alt="emiya_lxy" className={styles["avatar"]} />
                                            </div>
                                            <svg viewBox="0 0 16 16" size="16" className={styles["account-more"]}>
                                                <path d="M 8 9.08579 L 4.95711 6.04289 C 4.56658 5.65237 3.93342 5.65237 3.54289 6.04289 C 3.15237 6.43342 3.15237 7.06658 3.54289 7.45711 L 8 11.9142 L 12.4571 7.45711 C 12.8476 7.06658 12.8476 6.43342 12.4571 6.04289 C 12.0666 5.65237 11.4334 5.65237 11.0429 6.04289 L 8 9.08579 Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className={styles["related-wrapper"]}>
                                <div className={styles.related}>
                                    <button title="相关服务" className={classnames(styles["related-button"], styles["nav-button"])}>
                                        <svg viewBox="0 0 24 24" className={styles["related-icon"]}>
                                            <path d="M 2 3 C 2 2.44772 2.44772 2 3 2 H 7 C 7.55228 2 8 2.44772 8 3 V 7 C 8 7.55228 7.55228 8 7 8 H 3 C 2.44772 8 2 7.55228 2 7 V 3 Z M 9 3 C 9 2.44772 9.44772 2 10 2 H 14 C 14.5523 2 15 2.44772 15 3 V 7 C 15 7.55228 14.5523 8 14 8 H 10 C 9.44772 8 9 7.55228 9 7 V 3 Z M 17 2 C 16.4477 2 16 2.44772 16 3 V 7 C 16 7.55228 16.4477 8 17 8 H 21 C 21.5523 8 22 7.55228 22 7 V 3 C 22 2.44772 21.5523 2 21 2 H 17 Z M 2 10 C 2 9.44772 2.44772 9 3 9 H 7 C 7.55228 9 8 9.44772 8 10 V 14 C 8 14.5523 7.55228 15 7 15 H 3 C 2.44772 15 2 14.5523 2 14 V 10 Z M 10 9 C 9.44772 9 9 9.44772 9 10 V 14 C 9 14.5523 9.44772 15 10 15 H 14 C 14.5523 15 15 14.5523 15 14 V 10 C 15 9.44772 14.5523 9 14 9 H 10 Z M 16 10 C 16 9.44772 16.4477 9 17 9 H 21 C 21.5523 9 22 9.44772 22 10 V 14 C 22 14.5523 21.5523 15 21 15 H 17 C 16.4477 15 16 14.5523 16 14 V 10 Z M 3 16 C 2.44772 16 2 16.4477 2 17 V 21 C 2 21.5523 2.44772 22 3 22 H 7 C 7.55228 22 8 21.5523 8 21 V 17 C 8 16.4477 7.55228 16 7 16 H 3 Z M 9 17 C 9 16.4477 9.44772 16 10 16 H 14 C 14.5523 16 15 16.4477 15 17 V 21 C 15 21.5523 14.5523 22 14 22 H 10 C 9.44772 22 9 21.5523 9 21 V 17 Z M 17 16 C 16.4477 16 16 16.4477 16 17 V 21 C 16 21.5523 16.4477 22 17 22 H 21 C 21.5523 22 22 21.5523 22 21 V 17 C 22 16.4477 21.5523 16 21 16 H 17 Z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.matte} style={{opacity:0, pointerEvents:"none"}}></div>
            </div>
        </div>
    )
}

export default navigator