import styles from "./styles/artwork_img.module.css"
import Image from "next/image"
import Link from "next/link"

function ArtworkImg ({ uid, name, width, height, tags, time }) {
    var fit_width = width;
    var fit_height = height;
    if (width > 700) {
        fit_width = 700;
        fit_height = height * 700 / width;
    }

    time = new Date(time);
    const time_str = `${time.getFullYear()}年${time.getMonth()+1}月${time.getDate()}日 ${time.getHours()>10?time.getHours():"0"+time.getHours()}:${time.getMinutes()>10?time.getMinutes():"0"+time.getMinutes()}`;

    return (
        <div className={styles["artwork-wrapper"]}>
            <figure className={styles["art-figure"]}>
                <div role="presentation" className={styles["art-pre"]}>
                    <div className={styles["art-view"]}>
                        <div className={styles["artwork"]}>
                            <Link href={`/artworks/${uid}?width=${width}&height=${height}`}>
                                <a rel="noopener" className={styles["artwork-link"]}>
                                    <Image alt={name} width={fit_width} height={fit_height} src={"/artworks/"+uid+"_p0.jpg"} className={styles["artwork-img"]} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </figure>
            <figcaption className={styles["art-figcaption"]}>
                <div className={styles["figcaption-wrapper"]}>
                    <div className={styles["figcaption-inner"]}>
                        <h1 className={styles["art-title"]}>{name}</h1>
                        <footer className={styles["art-tags"]}>
                            <ul className={styles["art-tag-list"]}>
                                        {tags.map((elem) => {
                                            const tag = elem.tag;
                                            const tag_encode = encodeURIComponent(tag);
                                            return (
                                                <li className={styles["tag"]} key={tag}>
                                                    <span className={styles["tag-text"]}>
                                                        <Link href={`/tags/${tag_encode}`}>
                                                            <a className={styles["tag-link"]}>
                                                                {tag}
                                                            </a>
                                                        </Link>
                                                    </span>
                                                </li>
                                            );
                                        })}
                            </ul>
                        </footer>
                        <div title="投稿时间" className={styles["art-upload-time"]}>{time_str}</div>
                    </div>
                </div>
            </figcaption>
        </div>
    )
}

export default ArtworkImg