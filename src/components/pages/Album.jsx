import {useParams, Link} from 'react-router-dom'


function Album({musicians}) {

    const {musicianId, albumId} = useParams()
    const foundMusician = musicians.find(musician=>musician._id===musicianId)
    const foundAlbum = foundMusician.albums.find(album=>album._id===albumId)

    return ( 
        <>
            <h1>{foundAlbum.title}</h1>
            <h3>Released: {foundAlbum.released}</h3>
            <h3>Number of Tracks: {foundAlbum.tracklistCount}</h3>

            <Link to='/musicians'> Back to musicians</Link>
 
        </>
     )
}

export default Album
