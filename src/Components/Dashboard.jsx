import '../css/Dashboard.css'
import Header from '../Header';

const role = {
    admin: [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Users', path: '/users' },
        { label: 'Settings', path: '/settings' },
    ]
}

let Dashboard = () => {

    return (

        <>
            <Header sendData={role.admin} />
            <section>
                <div className="dashdiv">
                    <h1 id="dashHead">Dashboard</h1>
                </div>
            </section>
        </>

    )

}

export default Dashboard;