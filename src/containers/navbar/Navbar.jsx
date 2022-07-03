import Button from '../../components/button/Button'
import './navbar.css'
import {ReactComponent as Logo} from '../../images/logo.svg'
import {ReactComponent as Menu} from '../../images/menu.svg'
import { useState } from 'react'


function Navbar() {

    const [menu, setMenu] = useState(false)



    const loginStyle = {
        backgroundColor: 'inherit',
        color: 'var(--Grayish-Violet)'
    }
  return (
    <div className='navbar margins'>
        <Logo />
        <div className="navbar__navlinks">
            <p><a href="#features">Features</a></p>
            <p><a href="#pricing">Pricing</a></p>
            <p><a href="#resources">Resources</a></p>
        </div>
        <div className="navbar__logins">
            <Button text='Login' style={loginStyle} />
            <Button text='Sign Up' />
        </div>
        <div className="navbar__menu">
            <Menu onClick={() => setMenu((prev) => !prev)}/>
        </div>
        {
                menu && <div className='navbar__mobile margins paddings'>
                    <div className='navbar__mobile--links'>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#resources">Resources</a>
                    </div>
                    <div className='navbar__mobile--logins'>
                        <Button text='Login' style={loginStyle} />
                        <Button text='Sign Up' />
                    </div>
                </div>
        }
    </div>
  )
}

export default Navbar