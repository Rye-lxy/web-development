import styles from "./styles/artwork.module.css"
import Main from "./artwork_components/main"

function Artwork({ artwork }) {
    return (
        <div className={styles["artwork-wrapper"]}>
            <div className={styles["artwork-container"]}>
                <div className={styles["artwork"]}>
                    <Main artwork={artwork} />
                </div>
            </div>
        </div>
    )
}

export default Artwork