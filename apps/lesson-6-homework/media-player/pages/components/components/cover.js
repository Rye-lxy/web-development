import style from './styles/cover.module.css'
import Img from 'next/image'
import Head from 'next/head'
import FontAwesome from 'react-fontawesome'

function Cover() {
    return (
        <div className={style.cover}>
            <Head>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            </Head>
            <Img src='/xDSTaej.jpg' width='250px' height='250px' />
            <div className={style.desp}>
                <div className={style.header}>
                    <p className={style.title}>CattyBoard Top 100 Single Charts (11.06.36)</p>
                    <p className={style.artist}>Unknown Artist</p>
                    <p className={style.detail}>2016 . Charts . 100 songs</p>
                </div>
                <div className={style.footer}>
                    <button><FontAwesome name='play'> &nbsp;Play all</FontAwesome></button>
                    <button><FontAwesome name='plus'> &nbsp;Add to</FontAwesome></button>
                    <button><FontAwesome name='ellipsis-h'> &nbsp;&nbsp;More</FontAwesome></button>
                </div>
            </div>
        </div>
    );
}

export default Cover