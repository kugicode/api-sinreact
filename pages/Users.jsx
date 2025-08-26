import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function Users(){
    const { id } = useParams()
    const [user, setUser] = useState([])

 async function fetchUserDate(){
     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        }

    useEffect(() => {
    fetchUserDate()
    }, [])

    return (
        <div>{id}</div>
    )
}

export default Users