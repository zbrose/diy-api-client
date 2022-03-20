import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Musicians from './components/pages/Musicians';
import Musician from './components/pages/Musician';
import Home from './components/pages/Home';
import Album from './components/pages/Album';


function App() {
  
  const [musicians, setMusicians] = useState([])


  

  useEffect(()=>{
    axios.get(process.env.REACT_APP_SERVER_URL + '/musicians')
     .then(response=>{
       setMusicians(response.data)
     })
    .catch(err=>console.log(err))
  },[musicians])



  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route
            path='/'
            element={<Home/>}
          />
          <Route
            exact path='/musicians'
            element={<Musicians setMusicians={setMusicians} musicians={musicians} />}
          />
          <Route
            path='/musicians/:id'
            element={<Musician setMusicians={setMusicians} musicians={musicians}/>}
          />
          <Route
            path='musicians/:musicianId/albums/:albumId'
            element={<Album musicians={musicians}/>}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
