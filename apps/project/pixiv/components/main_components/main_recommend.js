import styles from "./styles/main_recommend.module.css"
import Illustration from "./components/illustration"
import React, { useEffect, useState } from "react";

function MainRecommend() {
    const [state, setState] = useState({
        list: [],
    });

    useEffect(() => {
        fetch("/api/artwork_recommend").then(async (res) => {
            const resp = await res.json();
            setState({
                list: resp,
            });
        });
    }, []);
        
    return (
        <div className={styles["main-recommend-wrapper"]}>
            <div className={styles["main-recommend-container"]}>
                <section className={styles["recommend-section"]}>
                    <div className={styles["recommend-header-wrapper"]}>
                        <div className={styles["recommend-header"]}>
                            <h2 className={styles["recommend"]}>推荐作品</h2>
                        </div>
                    </div>
                    <div className={styles["illus-zone"]}>
                        <div className={styles["illus-wrapper"]}>
                            <ul className={styles["illus-ul"]}>
                                {state.list.map((art) => {
                                    return (<Illustration artwork_uid={art.uid} artwork_name={art.name} author_uid={art.creator} author_name={art.author_name} />)
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MainRecommend