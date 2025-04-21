import '../css/TaskAssigned.css'
import Header from '../Header';

let TaskAssingned = () =>{

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
        <section>
            <div className="tadiv">
                <h1 id="taHead">TaskAssingned</h1>
            </div>
        </section>
        </>

    )

}

export default TaskAssingned;