import '../css/Users.css'
import Header from '../Header';

let Users = () =>{

    const role = {
        admin: [
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Users', path: '/users' },
            { label: 'Settings', path: '/settings' },
        ]
    }

    return(

        <>
        <Header sendData={role.admin}/>
        <section>
            <div className="userdiv">
                <h1 id="userHead">Users</h1>
            </div>
        </section>
        </>

    )

}

export default Users;