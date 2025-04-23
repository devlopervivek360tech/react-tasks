import '../css/Settings.css'
import Header from '../Header';

let Settings = () => {

    const role = {
        admin: [
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Users', path: '/users' },
            { label: 'Settings', path: '/settings' },
        ]
    }

    return (

        <>
            <Header sendData={role.admin}/>
            <section>
                <div className="settingdiv">
                    <h1 id="settingHead">Settings</h1>
                </div>
            </section>
        </>

    )

}

export default Settings;