import styles from "./style/mode.module.css"
import Title from "./components/Title"
import Footbar from "./components/Footbar"

function Nomode(content) {
    console.log(1)
    return (
        <div className={styles['no-mode']}>
            <Title content={content} />
            <Footbar content={content} />
        </div>
    );
}

export default Nomode