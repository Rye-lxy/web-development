import styles from "./style/right-block.module.css"
import classnames from 'classnames'

function Right() {
    return (
        <div className={styles.right}>
            <div className={styles.search}>
                <input className={styles['search-input']} placeholder="搜索站内资讯、视频或用户" value="" />
                <div className={styles["search-button"]}>
                    <button type="button">搜索</button>
                </div>
            </div>
            <div className={styles["login-wrapper"]}>
                <div className={classnames(styles.login, styles.inner)}>
                    <p className={styles["login-msg"]}>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
                    <a href="https://sso.toutiao.com">
                        <button type="button" className={styles["login-button"]}>登录</button>
                    </a>
                    <div className={styles.third}>
                        <li className={classnames(styles.sns, styles.qq)} data-pid="qzone_sns">
                            <span>QQ</span>
                        </li>
                        <li className={classnames(styles.sns, styles.weixin)} data-pid="weixin">
                            <span>微信</span>
                        </li>
                    </div>
                </div>
            </div>
            <div className={styles.addition}>
                <div className={styles["addition-head"]}>更多</div>
                <ul className={styles["links-wrapper"]}>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/about/" rel="">关于头条</a></li>
                    <li className={styles.item}><a target="_blank" href="https://job.bytedance.com" rel="noopener noreferrer">加入头条</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/report/" rel="">媒体报道</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/media_partners/" rel="">媒体合作</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/cooperation/" rel="">产品合作</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/media_cooperation/" rel="">合作说明</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.oceanengine.com/?source=pchomemore" rel="noopener noreferrer">广告投放</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/contact/" rel="">联系我们</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/user_agreement/" rel="">用户协议</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/privacy_protection/" rel="">隐私政策</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/complain/" rel="">侵权投诉</a></li>
                    <li className={styles.item}><a target="_self" href="https://www.toutiao.com/corrupt_report/" rel="">廉洁举报</a></li>
                    <li className={styles.item}><a target="_blank" href="https://renzheng.toutiao.com/guide?platform=%27PC%27&amp;source=%27www.toutiao.com%27" rel="noopener noreferrer">企业认证</a></li>
                    <li className={styles.item}><a target="_blank" href="https://hys.people-health.cn/m/#/pages/ncovSuff/index" rel="noopener noreferrer">肺炎求助</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.piyao.org.cn/2020yqpy" rel="noopener noreferrer">辟谣专区</a></li>
                    <br className={styles.clearfloat} />
                </ul>
            </div>
            <div className={styles.addition}>
                <div className={styles["addition-head"]}>友情链接</div>
                <ul className={styles["links-wrapper"]}>
                    <li className={styles.item}><a target="_blank" href="https://www.gmw.cn/" rel="noopener noreferrer">光明网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.cnr.cn/" rel="noopener noreferrer">央广网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.cri.cn" rel="noopener noreferrer">国际在线</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.tibet.cn/" rel="noopener noreferrer">中国西藏网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.cankaoxiaoxi.com/" rel="noopener noreferrer">参考消息</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.huanqiu.com/" rel="noopener noreferrer">环球网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.cyol.com" rel="noopener noreferrer">中青在线</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.youth.cn/" rel="noopener noreferrer">中青网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.workercn.cn/" rel="noopener noreferrer">中工网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.haiwainet.cn/" rel="noopener noreferrer">海外网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://h5.china.com.cn" rel="noopener noreferrer">中国网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.k618.cn/" rel="noopener noreferrer">未来网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://qianlong.com/" rel="noopener noreferrer">千龙网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.bjnews.com.cn/" rel="noopener noreferrer">新京报</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.ynet.com/" rel="noopener noreferrer">北青网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.fawan.com/" rel="noopener noreferrer">法制晚报</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.morningpost.com.cn" rel="noopener noreferrer">北京晨报</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.bbtnews.com.cn/" rel="noopener noreferrer">北京商报</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.stardaily.com.cn/" rel="noopener noreferrer">北京娱乐信报</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.oeeee.com/" rel="noopener noreferrer">奥一网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.ycwb.com/" rel="noopener noreferrer">金羊网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.hsw.cn/" rel="noopener noreferrer">华商网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.xinmin.cn" rel="noopener noreferrer">新民网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.rednet.cn/index.html" rel="noopener noreferrer">红网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.jschina.com.cn" rel="noopener noreferrer">中国江苏网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.jxnews.com.cn/" rel="noopener noreferrer">中国江西网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.iqilu.com/" rel="noopener noreferrer">齐鲁网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.hinews.cn/news/" rel="noopener noreferrer">南海网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.ahwang.cn/" rel="noopener noreferrer">安徽网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.hebnews.cn/" rel="noopener noreferrer">河北新闻网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.mnw.cn/" rel="noopener noreferrer">闽南网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.hxnews.com/" rel="noopener noreferrer">海峡网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.voc.com.cn/" rel="noopener noreferrer">华声在线</a></li>
                    <li className={styles.item}><a target="_blank" href="https://tv.cztv.com" rel="noopener noreferrer">中国蓝TV</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.lnd.com.cn/" rel="noopener noreferrer">北国网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.longhoo.net/" rel="noopener noreferrer">龙虎网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.timedg.com/" rel="noopener noreferrer">东莞时间网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.dcdapp.com/?zt=tt_pc_friendly_link" rel="noopener noreferrer">懂车帝</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.autohome.com.cn/" rel="noopener noreferrer">汽车之家</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.onlylady.com/" rel="noopener noreferrer">Onlylady女人志</a></li>
                    <li className={styles.item}><a target="_blank" href="https://123.chinaso.com/" rel="noopener noreferrer">中国搜索</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.nbd.com.cn/" rel="noopener noreferrer">每日经济新闻</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.cheshi.com/" rel="noopener noreferrer">网上车市</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.news18a.com/" rel="noopener noreferrer">网通社汽车</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.enorth.com.cn/" rel="noopener noreferrer">北方网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.hnt.gov.cn/" rel="noopener noreferrer">湖南省旅发委官网</a></li>
                    <li className={styles.item}><a target="_blank" href="https://www.leju.com/" rel="noopener noreferrer">乐居网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.rmlt.com.cn/" rel="noopener noreferrer">人民论坛网</a></li>
                    <li className={styles.item}><a target="_blank" href="http://www.cfbond.com/" rel="noopener noreferrer">中国财富网</a></li>
                    <br className={styles.clearfloat} />
                </ul>
            </div>
        </div>
    );
}

export default Right