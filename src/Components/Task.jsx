import '../css/Task.css'
import Header from '../Header';
let Task = () => {

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
                <div className="taskdiv">
                    <h1 id="taskHead">Tasks</h1>
                </div>
            </section>
        </>
    )

}

export default Task;