// Main part of artwork
import styles from "./styles/main.module.css"
import ArtworkImg from "./components/artwork_img"
import ArtworkOther from "./components/artwork_other"

function Main({ artwork }) {  
    return (
        <main className={styles["artwork-main"]}>
            <section className={styles["main-sec"]}>
                <div className={styles["artwork-img"]}>
                    <ArtworkImg uid={artwork.uid} name={artwork.name} width={artwork.width} height={artwork.height} tags={artwork.tags} time={artwork.create_time} />
                </div>
                <div className={styles["artwork-other"]}>
                    <ArtworkOther uid={artwork.creator} name={artwork.author_name} />
                </div>
            </section>
        </main>
    )
}

export default Main