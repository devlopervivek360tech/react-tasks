import { useNavigate } from 'react-router-dom';
import '../css/Users.css'
import Header from '../Header';
import user from '../utils/user';
import { Button } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { TextField } from '@mui/material';

let Users = () => {

    const nav = useNavigate();

    const showInfo = (user) => {
        const id = user.id;
        nav(`/userinfo/${id}`);
    }

    const role = {
        admin: [
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Users', path: '/users' },
            { label: 'Settings', path: '/settings' },
        ]
    }



    const getData = () => {
        let formData = document.getElementById("filled-basic").value.toLowerCase();

        let userCard = document.getElementsByClassName("card");

        for (let i = 0; i < user.length; i++) {
            let userName = user[i].name.toLowerCase();
            let userPosition = user[i].profession.toLowerCase();

            if (userName.includes(formData) || userPosition.includes(formData)) {
                userCard[i].classList.remove("d-none");
            } else {
                userCard[i].classList.add("d-none");
            }
        }
    }

    let itemValue = (e) => {
        const label = e.target.innerText;
        console.log(label);

        let userCard = document.getElementsByClassName("card");

        for (let i = 0; i < user.length; i++) {
            let userLocation = user[i].location;
            if (userLocation.includes(label)) {
                userCard[i].classList.remove("d-none");
            } else {
                userCard[i].classList.add("d-none");
            }
        }
    }

    return (

        <>
            <Header sendData={role.admin} />
            <section className='mx-4'>
                <div className="userdiv my-5">
                    <h1 id="userHead">Users</h1>
                </div>
                <div className='searchDiv d-flex align-items-center justify-content-evenly'>
                    <div className='my-5 d-md-flex align-items-end justify-content-center'>
                        <TextField id="filled-basic" label="Search User..." variant="filled" sx={{}} />
                        <Button className='mt-3 ms-md-4 mt-md-0' sx={{ backgroundColor: '#e3f2fd', color: 'blue', font: '-apple-system', height: '90%' }} endIcon={<PersonSearchIcon />} onClick={getData}>Search</Button>
                    </div>
                    <div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Location
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" data-value="New York" onClick={itemValue}>New York</a></li>
                                <li><a className="dropdown-item" href="#" data-value="San Francisco" onClick={itemValue}>San Francisco</a></li>
                                <li><a className="dropdown-item" href="#" data-value="Austin" onClick={itemValue}>Austin</a></li>
                                <li><a className="dropdown-item" href="#" data-value="Seattle" onClick={itemValue}>Seattle</a></li>
                                <li><a className="dropdown-item" href="#" data-value="Boston" onClick={itemValue}>Boston</a></li>
                                <li><a className="dropdown-item" href="#" data-value="Chicago" onClick={itemValue}>Chicago</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-evenly container-fluid'>
                    {user.map((user, id) => (
                        <div onClick={() => showInfo(user)} className='card col-12 col-md-5 col-lg-3 p-2 mx-2 my-3' key={id}>
                            <img src={user.avatar} className="card-img-top img-fluid" alt={"Avtar" + user.id} />
                            <div className="card-body">
                                <h4 className="card-title text-danger">{user.profession}</h4>
                                <p className='card-name mb-0 text-info'>{user.name}</p>
                                <h6 className='mb-2'><span href="#" className='card-mail text-decoration-none text-primary'>{user.email}</span></h6>
                                <p className="card-text text-dark my-2">{user.description}</p>
                                <p className="card-location text-dark m-0">{user.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    )

}

export default Users;