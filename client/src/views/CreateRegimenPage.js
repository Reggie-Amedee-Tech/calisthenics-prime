import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import CreateRegimenForm from '../components/CreateRegimenForm'

const CreateRegimenPage = () => {

    
    const {loading, success} = useSelector((state) => state.user)
    

    useEffect(() => {

    }, [success, loading])
    
  return (
    <div>

        {<CreateRegimenForm />}
    </div>
  )
}

export default CreateRegimenPage