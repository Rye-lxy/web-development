import styles from './styles/tag_recommend.module.css';
import TagLink from './components/tag_link';
import React, { useEffect, useState } from "react";

function TagRecommend() {
    const [state, setState] = useState({
        list: [],
    });

    useEffect(() => {
        fetch("./api/tag_recommend").then(async (res) => {
            const resp = await res.json();
            setState({
                list: resp,
            });
        });
    }, []);

    return (
        <div className={styles["tag-wrapper"]}>
            <div className={styles["tag-container"]}>
                <div className={styles["tag-bar"]}>
                    <ul className={styles["tag-ul"]}>
                        <div className={styles["tag-inner"]}>
                            <div className={styles["tag-main"]}>
                                <div className={styles["tag-main-inner"]}>
                                    <div className={styles["tags"]}>
                                        {state.list.map((tag) => {
                                            return (<TagLink tag={tag.name_zh} color={tag.color} />)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className={styles["tag-button-wrapper"]}>
                    <button type="button" className={styles["tag-button"]} style={{left: "0px", paddingLeft: "16px", paddingBottom: "0px"}}>
                        <div className={styles["tag-button-icon"]}>
                            <svg viewBox="0 0 24 24" size="24" className={styles["tag-button-svg"]}>
                                <path d="M 8.08579 16.5858 C 7.30474 17.3668 7.30474 18.6332 8.08579 19.4142 C 8.86684 20.1953 10.1332 20.1953 10.9142 19.4142 L 18.3284 12 L 10.9142 4.58579 C 10.1332 3.80474 8.86684 3.80474 8.08579 4.58579 C 7.30474 5.36684 7.30474 6.63317 8.08579 7.41421 L 12.6716 12 L 8.08579 16.5858 Z" transform="rotate(180 12 12)"></path>
                            </svg>
                        </div>
                    </button>
                    <button type="button" className={styles["tag-button"]} style={{right: "0px", paddingRight: "16px", paddingBottom: "0px"}}>
                        <div className={styles["tag-button-icon"]}>
                            <svg viewBox="0 0 24 24" size="24" className={styles["tag-button-svg"]}>
                                <path d="M 8.08579 16.5858 C 7.30474 17.3668 7.30474 18.6332 8.08579 19.4142 C 8.86684 20.1953 10.1332 20.1953 10.9142 19.4142 L 18.3284 12 L 10.9142 4.58579 C 10.1332 3.80474 8.86684 3.80474 8.08579 4.58579 C 7.30474 5.36684 7.30474 6.63317 8.08579 7.41421 L 12.6716 12 L 8.08579 16.5858 Z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TagRecommend