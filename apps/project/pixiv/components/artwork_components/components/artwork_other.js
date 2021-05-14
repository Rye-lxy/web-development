import Link from "next/link"
import styles from "./styles/artwork_other.module.css"
import Author from "./components/author"
import FollowButton from "./components/follow_button"

function ArtworkOther({ uid, name}) {
    return (
        <>
            <div>
                <div className={styles["author-wrapper"]}>
                    <div className={styles["author-info"]}>
                        <Author uid={uid} name={name} />
                        <FollowButton />
                        <Link href={`/users/${uid}/artworks`}>
                            <a className={styles["author-artworks"]}>作品一览</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtworkOther