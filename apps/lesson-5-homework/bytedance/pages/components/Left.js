import styles from "./style/left-block.module.css"
import classnames from 'classnames'

function Left() {
    return (
        <div className={styles.left}>
            <div className={styles['left-box']}>
                <a className={styles.logo} href="index.html"><img src="./images/logo.png" alt="今日头条" /></a>
                <ul>
                    <li><a className={classnames(styles['left-item'], styles.active)} href="index.html" target="_self">推荐</a></li>
                    <li><a className={styles['left-item']} href="https://www.ixigua.com/" target="_blank">西瓜视频</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_hot/" target="_self">热点</a></li>
                    <li><a className={styles['left-item']} href="https://live.ixigua.com" target="_blank">直播</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_image/" target="_self">图片</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_tech/" target="_self">科技</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_entertainment/" target="_self">娱乐</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_game/" target="_self">游戏</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_sports/" target="_self">体育</a></li>
                    <li><a className={styles['left-item']} href="https://www.dcdapp.com/?zt=tt_pc_home_channel" target="_blank">懂车帝</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_finance/" target="_self">财经</a></li>
                    <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/digital/" target="_self">数码</a></li>
                    <li className={styles['left-more']}>
                        <a className={styles['left-item']}>更多</a>
                        <div className={styles['left-more-layer']}>
                            <ul>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_military/" target="_self">军事</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_world/" target="_self">国际</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_fashion/" target="_self">时尚</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_travel/" target="_self">旅游</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_discovery/" target="_self">探索</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_baby/" target="_self">育儿</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_regimen/" target="_self">养生</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_essay/" target="_self">美文</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_history/" target="_self">历史</a></li>
                                <li><a className={styles['left-item']} href="https://www.toutiao.com/ch/news_food/" target="_self">美食</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <br className={styles.clearfloat} />
            </div>
        </div>
    );
}

export default Left