import '../css/Teams.css'
import Header from '../Header';

let Teams = () =>{

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
            <div className="teamdiv">
                <h1 id="teamHead">Teams</h1>
            </div>
        </section>
        </>

    )

}

export default Teams;