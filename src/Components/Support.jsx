import '../css/Support.css'
import Header from '../Header';

let Support = () => {

    const role = {
        user: [
            { label: 'Task', path: '/task' },
            { label: 'Support', path: '/support' }
        ]
    }

    return (

        <>
            <Header sendData={role.user} />
            <section>
                <div className="supportdiv">
                    <h1 id="supportHead">Support</h1>
                </div>
            </section>
        </>

    )

}

export default Support;