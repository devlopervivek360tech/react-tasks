import '../css/Users.css'
import Header from '../Header';
import user from '../utils/user';

let Users = () => {

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
            <section className='mx-4'>
                <div className="userdiv my-5">
                    <h1 id="userHead">Users</h1>
                </div>
                <div className='row justify-content-evenly container-fluid'>
                    {user.map((user,id)=>(
                        <div className="card col-12 col-md-5 col-lg-3 p-2 mx-2 my-3" key={id}>
                        <img src={user.avatar} className="card-img-top img-fluid" alt={"Avtar"+user.id} />
                        <div className="card-body">
                            <h4 className="card-title">{user.profession}</h4>
                            <p className='card-name mb-0'>{user.name}</p>
                            <h6 className='mb-2'><a href="#" className='card-mail text-decoration-none'>{user.email}</a></h6>
                            <p className="card-text">{user.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </>

    )

}

export default Users;