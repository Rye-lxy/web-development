import style from './styles/musicbar.module.css'
import  Img from 'next/image'
import Head from 'next/head'
import FontAwesome from 'react-fontawesome'

function Musicbar() {
    return (
        <div className={style.musicbar}>
            <Head>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            </Head>
            <div className={style.track}>
                <Img src='/xDSTaej.jpg' width='100px' height='100px'/>
                <div className={style.text}>
                    <p>If It Ain't Love</p>
                    <p>Catson Derulo</p>
			    </div>
            </div>
            <div className={style.control}>
                    <button><FontAwesome name='step-backward' /></button>
                    <button><FontAwesome name='pause' /></button>
                    <button><FontAwesome name='step-forward' /></button>
                    <button><FontAwesome name='rotate-right' /></button>
                    <button><FontAwesome name='random' /></button>
            </div>
        </div>
    );
}

export default Musicbar