import Header from "../Header";

let Manager = () =>{

    const role = {
        manager: [
            { label: 'Reports', path: '/reports' },
            { label: 'Teams', path: '/teams' },
            { label: 'Assined Tasks', path: '/TA' },
        ]
    }

    return(

        <>
         <Header sendData={role.manager}/>
            {/* <Report/>
            <Teams/>
            <TaskAssingned/> */}
        </>

    )

}

export default Manager;