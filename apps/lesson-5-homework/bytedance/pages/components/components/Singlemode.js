import styles from "./style/mode.module.css"
import classnames from 'classnames'
import Title from "./components/Title"
import Footbar from "./components/Footbar"

function Singlemode(content) {
    return (
        <div className={styles['single-mode']}>
            <div className={styles['single-mode-left']}>
                <a className={styles['img-wrap']} href={"https://www.toutiao.com"+content.source_url} target={"_blank"} rel={"noopener noreferrer"}>
                    <img src={"http:"+content.image_url} className={styles["lazy-load-img"]}/>
                </a>
                {((content) => {
                    if (content.video_duration_str) {
                        return (
                            <i className={classnames(styles['pic-tip'], styles['video-tip'])}>
                                <span>
                                    {content.video_duration_str}
                                </span>
                            </i>
                        );
                    }
                })}
            </div>
            <div className={styles['single-mode-right']}>
                <Title content={content} />
                <Footbar content={content} />
            </div>
        </div>
    );
}

export default Singlemode