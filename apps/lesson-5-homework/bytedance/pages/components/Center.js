import React, { useState, useEffect } from "react"
import Nomode from "./components/Nomode"
import Singlemode from "./components/Singlemode"
import styles from "./style/center-block.module.css"

function Center() {
    const [state, setState] = useState({
        list: [],
    });
    
    useEffect(() => {
    fetch("../api/news").then(async (res) => {
        const resp = await res.json();
        setState({
        list: resp.data,
        });
    });
    }, []);

    return (
        <div className={styles.center}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles["news-list"]}>
                        {state.list.map((content) => {
                            if (!content.single_mode && !content.more_mode && content.middle_mode) {
                                return (
                                    <Nomode content={content} />
                                );
                            } else if (!content.more_mode && content.middle_mode) {
                                return (
                                    <Singlemode content={content}/>
                                );
                            }
                        })}
                        <br className={styles.clearfloat} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Center