import Header from "../Header";

let User = () => {

    const role = {
        user: [
            { label: 'Task', path: '/task' },
            { label: 'Support', path: '/support' }
        ]
    }

    return (

        <>
            <Header sendData={role.user} />
            {/* <Task />
            <Support /> */}
        </>

    )

}

export default User;