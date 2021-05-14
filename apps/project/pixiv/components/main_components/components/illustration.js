import styles from "./styles/illustration.module.css"
import Image from "next/image"
import Link from "next/link"

function Illustration({ artwork_uid, artwork_name, author_uid, author_name }) {
    return (
        <li className={styles["illus-li"]}>
            <div className={styles["illus-wrapper"]}>
                <div className={styles["illustration"]} type="illust" size="184">
                    <div className={styles["illustration-container"]}>
                        <Link href={`/artworks/${artwork_uid}`}>
                            <a className={styles["illustration-link"]}>
                                <div className={styles["illustration-img-wrapper"]}>
                                    <Image src={"/artworks/"+artwork_uid+"_p0.jpg"} alt={artwork_name} layout="fill" className={styles["illustration-img"]} />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles["illus-name-wrapper"]}>
                    <Link href={`/artworks/${artwork_uid}`}>
                        <a className={styles["illus-name"]}>{artwork_name}</a>
                    </Link>
                </div>
                <div className={styles["illus-author-wrapper"]}>
                    <div className={styles["illus-author"]}>
                        <div className={styles["author-avatar-wrapper"]}>
                            <Link href={`/users/${author_uid}`}>
                                <a>
                                    <div size="24" title={author_name} role="img" className={styles["author-avatar"]}>
                                        <Image src={"/users/"+author_uid+".jpeg"} width="24px" height="24px" className={styles["avatar-img"]} />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <Link href={`/users/${author_uid}`}>
                            <a className={styles["author-name"]}>{author_name}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Illustration