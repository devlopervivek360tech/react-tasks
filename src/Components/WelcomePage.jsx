import '../css/WelcomePage.css';

let WelcomePage = () => {

    return (

        <>
            <section>
                <div className="welcomePageDiv">
                    <h1 className="welcomePageHead">Welcome to our <span className="headspan">Dynamic</span> React Routing Application</h1>
                    <p className="welcomePageText">React Router is a library for handling routing and navigation in React JS Applications. It allows you to create dynamic routes, providing a seamless user experience by mapping various URLs to components. It enables navigation in a single-page application (SPA) without refreshing the entire page.</p>
                </div>
            </section>
        </>

    )

}

export default WelcomePage;