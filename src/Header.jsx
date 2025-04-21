import { Link } from 'react-router-dom';
import './Header.css';
let Header = ({ sendData =[] }) => {
    // sendData = []
    return (

        <>
            <section id='navbar'>
                <div>
                    <section>
                        <div id='navdiv'>
                            <div>
                                <h1 id='logo'><Link to={"/"}>Logo</Link></h1>
                            </div>
                            <div>
                                <div id='linkdiv'>
                                    <ul id='navlinks'>
                                        <li className='links'><Link to={"/"} className='othernavanchor'>Home</Link></li>
                                        {sendData.map((link, index) => (
                                            <li key={index} className='links'><Link to={link.path} className='navanchor'>{link.label}</Link></li>
                                        ))}
                                        <li className='links'><Link to={"/user"} className='othernavanchor'>User</Link></li>
                                        <li className='links'><Link to={"/admin"} className='othernavanchor'>Admin</Link></li>
                                        <li className='links'><Link to={"/manager"} className='othernavanchor'>Manager</Link></li>
                                        <li className='links'><Link to={"/logout"} className='othernavanchor'>Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>

    )

}

export default Header;