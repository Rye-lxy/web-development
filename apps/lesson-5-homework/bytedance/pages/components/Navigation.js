import styles from "./style/nav-style.module.css"
import classnames from 'classnames'

function Nav() {
    return (
        <div className={styles.header}>
            <ul className={styles.nav}>
                <li className={classnames(styles['left-nav'], styles['download-app'])}><a href="https://app.toutiao.com/news_article/" target="_blank" rel="noopener noreferrer">下载APP</a></li>
                <li class={styles['left-nav']}><a href="https://mp.toutiao.com/" target="_blank" rel="noopener noreferrer">注册头条号</a></li>
                <li class={styles.weather}><a>天气</a></li>
                <li className={classnames(styles['right-nav'], styles['item-more'])}>
                    <li className={styles['right-nav']}><a href="https://mp.toutiao.com/profile_v4_public/public/protocol/complains/" target="_blank" rel="noopener noreferrer">侵权投诉</a></li>
                    <a href="https://www.toutiao.com/about/" target="_blank" rel="noopener noreferrer">头条产品</a>
                    <div className={styles.layer}>
                        <ul>
                            <li><a href="https://www.wukong.com" className={styles['layer-item']} target="_blank" rel="noopener noreferrer">问答</a></li>
                            <li><a href="https://www.baike.com/" className={styles['layer-item']} target="_blank" rel="noopener noreferrer">头条百科</a></li>
                            <li><a href="https://mp.toutiao.com/" className={styles['layer-item']} target="_blank" rel="noopener noreferrer">头条号</a></li>
                            <li><a href="https://tuchong.com?utm_source=toutiao&amp;utm_medium=pc_header" className={styles['layer-item']} target="_blank" rel="noopener noreferrer">图虫</a></li>
                            <li><a href="https://stock.tuchong.com/?source=ttweb" className={styles['layer-item']} target="_blank" rel="noopener noreferrer">正版图库</a></li>
                            <li><a href="https://www.oceanengine.com/?source=pchometop" className={styles['layer-item']} target="_blank" rel="noopener noreferrer">广告投放</a></li>
                            <li><a href="https://www.dcdapp.com/?zt=tt_pc_home_top_bar" className={styles['layer-item']} target="_blank" rel="noopener noreferrer">懂车帝</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}


export default Nav