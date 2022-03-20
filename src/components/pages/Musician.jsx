import {useParams, Link, useNavigate, Navigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import MusicianEdit from '../MusicianEdit'

function Musician({musicians, setMusicians}) {
    const [formData, setFormData] = useState({})

    const {id} = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER_URL}/musicians/${id}/albums`,formData)
        .then(response=>{
            console.log(response.data)
            setFormData({})
            // return axios.get(`${process.env.REACT_APP_SERVER_URL}/musicians`)
        })
        .then(response=>setMusicians(response.data))
        .catch(console.log)
    }
    
    const deleteMusician = () =>{
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/musicians/${id}`)
        .then(response=>{
            console.log(response.data)
            // return axios.get(`${process.env.REACT_APP_SERVER_URL}/musicians`)
        })
        .then(()=>navigate('/musicians'))
        .catch(console.log)
    }
    
    const foundMusician = musicians.find(musician=>musician._id===id)
    const albumList = foundMusician.albums.map((album,i)=>{
        return (
            <div key={`albums-${i}`}>
                <Link to={`/musicians/${id}/albums/${album._id}`}>{album.title}</Link>
            </div>
        )
    })
      
    
    return ( 
        <>
         <div>
             <Link to='/musicians'>Back to Musicians</Link>
         </div>
         <h1>{foundMusician.name}</h1>
         <h2>Instrument: {foundMusician.instrument}</h2>
         <p>Born: {foundMusician.born}</p>
         <p>Died: {foundMusician.died}</p>
        
        
         <h3>Albums:</h3>
         {albumList}
         
         <h4>Add a new album:</h4>

         <div className="center">
            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title: </label>
                <input type="text"
                 id='title'
                 value={formData.title}
                 onChange={e=>setFormData({...formData, title: e.target.value})}
                />

                <label htmlFor='tracklistCount'>tracklistCount: </label>
                <input type="text"
                 id='tracklistCount'
                 value={formData.tracklistCount}
                 onChange={e=>setFormData({...formData, tracklistCount: e.target.value})}
                />

                <label htmlFor='released'>released: </label>
                <input type="text"
                 id='released'
                 value={formData.released}
                 onChange={e=>setFormData({...formData, released: e.target.value})}
                />
             
                <input type="submit" />
            </form>
         </div>
         

         <MusicianEdit setMusicians={setMusicians} foundMusician={foundMusician} />
         <button onClick={deleteMusician}>Delete Musician</button>

        </>
     );
}

export default Musician;