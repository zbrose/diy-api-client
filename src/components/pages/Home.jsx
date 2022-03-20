import {Link} from 'react-router-dom'

function Home() {
    return ( 
        <>
         <h1>Home Page</h1>
         <Link to='/musicians'>See Jazz Musicians</Link>
        </>
     );
}

export default Home;
