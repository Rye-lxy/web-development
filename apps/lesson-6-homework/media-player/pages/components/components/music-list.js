import style from './styles/list.module.css'
import React, { useState, useEffect } from 'react' 

function List() {
    const [state, setState] = useState({
        list: [],
    });
    
    useEffect(() => {
    fetch("../../api/music.js").then(async (res) => {
        const resp = await res.json();
        setState({
            list: resp.data,
        });
    });
    }, []);

    return (
        <ul className={style.list}>
            {state.list.map((music) => {
                const number = state.list.indexOf(music) + 1
                console.log(music)
                return (
                    <li className={style['music-list']}>
                        <p className={style.music}>{number+'. '+music.name}</p>
                        <p className={style.music}>{music.author}</p>
                        <p className={style.music}>{music.time}</p>
                        <p className={style.music}>
                            <span className={style.cloud}>CATTY CLOUD SYNC</span>
                        </p>
                    </li>
                );
            })}
        </ul>
    );
}

export default List