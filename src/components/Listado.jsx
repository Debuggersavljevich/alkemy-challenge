import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'



const Listado = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token === null){
      navigate('/')
    }
  }, []);



  return (
    <div>Listado</div>
  )
}

export default Listado