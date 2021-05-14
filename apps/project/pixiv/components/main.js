import styles from "./styles/main.module.css"
import TagRecommend from "./main_components/tag_recommend"
import MainNav from "./main_components/main_nav"
import MainRecommend from "./main_components/main_recommend"

function Main() {
    return (
        <div className={styles.main}>
            <TagRecommend />
            <MainNav />
            <MainRecommend />
        </div>
    )
}

 export default Main