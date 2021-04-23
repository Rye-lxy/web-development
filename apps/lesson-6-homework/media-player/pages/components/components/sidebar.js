import style from './styles/sidebar.module.css'
import Head from 'next/head'
import FontAwesome from 'react-fontawesome';

function Sidebar() {
    const iconList = ['bars', 'home', 'search', 'volume-up', 'user', 'spotify', 'cog', 'soundcloud']
    return (
        <aside className={style.sidebar}>
            <Head>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            </Head>
            {iconList.map((icon) => {
                return (<FontAwesome name={icon} />);
            })}
        </aside>
    );
}

export default Sidebar