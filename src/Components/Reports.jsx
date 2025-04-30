import '../css/Reports.css'
import Header from '../Header';

let Reports = () =>{

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
            <div className="reportsdiv">
                <h1 id="reportsHead">Reports</h1>
            </div>
        </section>
        </>

    )

}

export default Reports;