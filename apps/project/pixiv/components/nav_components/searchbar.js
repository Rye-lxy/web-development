import styles from "./styles/searchbar.module.css"

function Searchbar() {
    return (
        <div className={styles["searchbar-wrapper"]}>
            <form className={styles["searchbar-container"]}>
                <div className={styles["searchbar-inner"]}>
                    <input type="text" placeholder="搜索作品" className={styles.input} style={{paddingRight: "16px", paddingLeft: "36px"}} />
                    <div className={styles["search-icon-wrapper"]}>
                        <div className={styles["search-icon-container"]}>
                            <svg viewBox="0 0 16 16" size="16" className={styles["search-icon"]}>
                                <path d="M 8.25739 9.1716 C 7.46696 9.69512 6.51908 10 5.5 10 C 2.73858 10 0.5 7.76142 0.5 5 C 0.5 2.23858 2.73858 0 5.5 0 C 8.26142 0 10.5 2.23858 10.5 5 C 10.5 6.01908 10.1951 6.96696 9.67161 7.75739 L 11.7071 9.79288 C 12.0976 10.1834 12.0976 10.8166 11.7071 11.2071 C 11.3166 11.5976 10.6834 11.5976 10.2929 11.2071 L 8.25739 9.1716 Z M 8.5 5 C 8.5 6.65685 7.15685 8 5.5 8 C 3.84315 8 2.5 6.65685 2.5 5 C 2.5 3.34315 3.84315 2 5.5 2 C 7.15685 2 8.5 3.34315 8.5 5 Z" transform="translate(3, 3)" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar