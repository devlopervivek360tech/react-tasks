import Header from "../Header";

let Admin = () => {

    const role = {
        admin: [
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Users', path: '/users' },
            { label: 'Settings', path: '/settings' },
        ]
    }

    return (

        <>
            <Header sendData={role.admin} />
            {/* <Dashboard/>
            <Users/>
            <Settings/> */}
        </>

    )

}

export default Admin;