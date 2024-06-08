import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    return <div className='trh-banner'>
        <img src={logo} alt='Logo The Rainhouse' title='The rainhouse' className='trh-logo'/>
        <h1 className='trh-title'>RainHouse</h1>
    </div>
}

export default Banner