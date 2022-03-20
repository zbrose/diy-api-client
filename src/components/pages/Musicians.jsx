import {Link } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'



function Musicians({musicians, setMusicians}) {
    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER_URL}/musicians`,formData)
        .then(response=>{
            console.log(response.data)
            setFormData({})
            return axios.get(process.env.REACT_APP_SERVER_URL+'/musicians')
        })
        .then(response=>setMusicians(response.data))
        .catch(console.log)
    }

    
   const musiciansList = musicians.map((musician, i)=>{
       return(
            <div key={`musicians=${i}`}>
               <Link to={`/musicians/${musician._id}`}>{musician.name}</Link>
            </div>
        )
   })

    return ( 
        <>
         <h1>Jazz Musicians</h1>
         {musiciansList}
        <h4>Add a new musician:</h4>
        <div className="center">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text"
                 id='name'
                //  value={formData.name}
                 onChange={e=>setFormData({...formData, name: e.target.value})}
                />
                <label htmlFor="born">Born: </label>
                <input type="text"
                 id='born'
                //  value={formData.born}
                 onChange={e=>setFormData({...formData, born: e.target.value})}
                />
                <label htmlFor="died">Died: </label>
                <input type="text"
                 id='died'
                //  value={formData.died}
                 onChange={e=>setFormData({...formData, died: e.target.value})}
                />
                <label htmlFor="instrument">Instrument: </label>
                <input type="text"
                 id='instrument'
                //  value={formData.instrument}
                 onChange={e=>setFormData({...formData, instrument: e.target.value})}
                />
                <input type="submit" />
            </form>

        </div>
            

        </>
     )
}

export default Musicians;