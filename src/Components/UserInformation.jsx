import { Link, useParams } from 'react-router-dom';
import '../css/UserInformation.css'
import Header from '../Header';
import user from '../utils/user';
import { useEffect, useState } from 'react';

let UserInformation = () => {

    const role = {
        admin: [
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Users', path: '/users' },
            { label: 'Settings', path: '/settings' },
        ]
    }

    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const trackUser = user.find((user) => user.id === parseInt(id));
        setUserData(trackUser);
    }, [id]);

    return (

        <>
            <Header sendData={role.admin} />
            {
                userData ?
                    <section>
                        <h1 className='text-center userinfohead'>Welcome {userData.name}</h1>
                        <div className='mb-4 mx-lg-5 d-md-flex outerdiv align-items-center justify-content-evenly justify-content-xl-center'>
                            <div className='text-center mt-5'>
                                <img className='img-fluid rounded-3 userImg' src={userData.avatar} alt={userData.id} />
                            </div>
                            <div className='m-4 mx-md-5 my-md-0'>
                                <h4 className='text-secondary'>Name: <span className='text-dark'>{userData.name}</span></h4>
                                <h6 className='text-secondary'>Profession: <span className='text-dark'>{userData.profession}</span></h6>
                                <h6 className='text-secondary'>About me: <span className='text-dark'>{userData.description}</span></h6>
                                <h6 className='text-secondary'>Location: <span className='text-dark'>{userData.location}</span></h6>
                                <h6 className='text-secondary'>Email: <a href='#' className='text-primary text-decoration-none'>{userData.email}</a></h6>
                            </div>
                        </div>
                        <div className='text-center'>
                            <Link to="/users" className='goToUsers'>Go To Users</Link>
                        </div>
                    </section>
                    :
                    <section>
                        <h1 className='text-center userinfohead text-danger'>Sorry!! no User found</h1>
                        <Link to="/users" className='goToUsers'>Users</Link>
                    </section>
            }
        </>

    )

}

export default UserInformation;