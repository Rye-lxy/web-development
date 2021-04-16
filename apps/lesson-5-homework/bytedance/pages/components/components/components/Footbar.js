import styles from "../style/mode.module.css"
import classnames from 'classnames'

function Footbar(content) {
    return (
        <div className={styles['news-footer']}>
            <div className={styles['footer-bar']}>
                {((content) => {
                    const tag_list = ["hot", "video", "image", "society", "car", "sport", "finance", "technology", "entertainment"]
                    if (tag_list.indexOf(content.tag_url) != -1) {
                        return (
                            <a className={classnames(styles['footer-bar-action'], styles.tag, styles['tag-style'+content.tag_url])}>
                                {content.chinese_tag}
                            </a>
                        );
                    } else {
                        return (
                            <a className={classnames(styles['footer-bar-action'], styles.tag, styles['tag-style-other'])}>
                                {content.chinese_tag}
                            </a>
                        );
                    }
                })}
                <a className={classnames(styles['footer-bar-action'], styles['media-avatar'])} href={"https://www.toutiao.com"+content.media_url} target={'_blank'} rel={'noopener noreferrer'}>
                    <img src={"http:"+content.media_avatar_url} />
                </a>
                <a className={classnames(styles['footer-bar-action'], styles.source)} href={"https://www.toutiao.com"+content.media_url} target={'_blank'} rel={'noopener noreferrer'}>
                    {" "+content.source+" ·"}
                </a>
                {((content) => {
                    var comments_num = ""
                    if (content.comments_count < 10000) {
                        comments_num = String(content.comments_count);
                    } else {
                        comments_num = String(parseInt(content.comments_count / 10000));
                        comments_num = comments_num+"万";
                    }
                    return (
                        <a className={classnames(styles['footer-bar-action'], styles.source)} href={"https://www.toutiao.com"+content.source_url+"/#comment=area"} target={'_blank'} rel={'noopener noreferrer'}>
                            {" "+comments_num+"评论"}
                        </a>
                    );
                })}
                {((content) => {
                    var time = Date.now() - parseInt((content.behot_time+"000"));
                    var time_text = ""
                    if (time / 60000 < 1) {
                        time_text = "刚刚";
                    } else if (time / 3600000 < 1) {
                        time_text = parseInt(time / 60000)+"分钟前";
                    } else if (time / 86400000 < 1) {
                        time_text = parseInt(time / 3600000)+"小时前";
                    } else {
                        time_text = parseInt(time / 86400000)+"天前";
                    }
                    <span className={classnames(styles['footer-bar-action'], styles.time)}>
                        {" · "+time_text}
                    </span>
                })}
            </div>
        </div>
    );
}

export default Footbar