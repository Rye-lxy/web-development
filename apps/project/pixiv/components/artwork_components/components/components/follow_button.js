import styles from "./styles/follow_button.module.css"

function FollowButton() {
    return (
        <button type="button" className={styles["follow-button"]}>
            <span className={styles["follow-icon"]}>
                <span className={styles["svg-wrapper"]}>
                    <svg viewBox="0 0 10 10" size="10" className={styles["follow-svg"]}>
                        <path d="M 6 6 H 9 C 9.55229 6 10 5.55228 10 5 C 10 4.44772 9.55229 4 9 4 H 6 V 1 C 6 0.447715 5.55228 0 5 0 C 4.44772 0 4 0.447715 4 1 V 4 H 1 C 0.447715 4 0 4.44772 0 5 C 0 5.55228 0.447715 6 1 6 H 4 V 9 C 4 9.55229 4.44772 10 5 10 C 5.55228 10 6 9.55229 6 9 V 6 Z"></path>
                    </svg>
                </span>
            </span>
            关注
        </button>
    )
}

export default FollowButton