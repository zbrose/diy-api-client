import axios from "axios"
import {useState} from 'react'


function MusicianEdit ({foundMusician, setMusicians}) {
    const [formData, setFormData] = useState({...foundMusician})
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/musicians/${foundMusician._id}`,formData)
         .then(response=>{
            console.log(response.data)
            return axios.get(`${process.env.REACT_APP_SERVER_URL}/musicians`)
         })
         .then(response=>setMusicians(response.data))
         .catch(console.log)
    }

    return ( 
        <>
        <h4>Edit this Musician:</h4>
        <div className="center">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text"
                 id='name'
                 value={formData.name}
                 onChange={e=>setFormData({...formData, name: e.target.value})}
                />
                <label htmlFor="born">Born: </label>
                <input type="text"
                 id='born'
                 value={formData.born}
                 onChange={e=>setFormData({...formData, born: e.target.value})}
                />
                <label htmlFor="died">Died: </label>
                <input type="text"
                 id='died'
                 value={formData.died}
                 onChange={e=>setFormData({...formData, died: e.target.value})}
                />
                <label htmlFor="instrument">Instrument: </label>
                <input type="text"
                 id='instrument'
                 value={formData.instrument}
                 onChange={e=>setFormData({...formData, instrument: e.target.value})}
                />
                <input type="submit" />
            </form>

        </div>
        </>
    )
}

export default MusicianEdit;