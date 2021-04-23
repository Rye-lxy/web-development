import style from './styles/player.module.css'
import Sidebar from './components/sidebar'
import Cover from './components/cover'
import List from './components/music-list'
import Musicbar from './components/music-bar'

function Player() {
    return (
       <div className={style.container}>
           <div className={style['side-bar-wrapper']}>
               <Sidebar />
           </div>
           <div className={style['music-container']}>
               <Cover />
               <List />
           </div>
           <div className={style['music-wrapper']}>
               <Musicbar />
           </div>
       </div>
    );
}

export default Player