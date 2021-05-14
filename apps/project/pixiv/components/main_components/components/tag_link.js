import styles from './styles/tag_link.module.css'
import Link from 'next/link'

function TagLink ({ tag, color }) {
    const tag_encode = encodeURIComponent(tag)
    return (
        <Link href={`/tags/${tag_encode}`}>
            <a className={styles["tag-wrapper"]} style={{backgroundColor: color}}>
                <div className={styles["tag-text-wrapper"]}>
                    <div className={styles["tag-text"]}>
                        {"#"+tag}
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default TagLink