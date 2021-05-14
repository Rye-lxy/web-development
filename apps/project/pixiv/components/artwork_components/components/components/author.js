import styles from "./styles/author.module.css"
import Image from "next/image"
import Link from "next/link"

function Author({ uid, name }) {
    return (
        <h2 className={styles["author"]}>
            <div className={styles["author-inner"]}>
                <Link href={`/users/${uid}`}>
                    <a>
                        <div size="40" title={name} role="img" className={styles["author-avatar"]}>
                            <Image src={"/users/"+uid+".jpeg"} width="40px" height="40px" alt={name} className={styles["avatar"]} />
                        </div>
                    </a>
                </Link>
                <div className={styles["author-name-wrapper"]}>
                    <Link href={`/users/${uid}`}>
                        <a className={styles["author-name"]}>
                            <div>{name}</div>
                        </a>
                    </Link>
                </div>
            </div>
        </h2>
    )
}

export default Author