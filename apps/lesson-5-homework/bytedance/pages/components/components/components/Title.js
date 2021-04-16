import styles from "../style/mode.module.css"

function Title(content) {
    return (
        <div className={styles.title}>
            <a className={styles.link} href={"https://www.toutiao.com"+content.source_url} target={"_blank"} rel={"noopener noreferrer"}>
                {content.title}
            </a>
        </div>
    );
}

export default Title