import { useDispatch, useSelector } from "react-redux"
import { changeEmail, selectUser } from "../redux/userSlice"

const Email = () => {
  
    const email = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(changeEmail(e.target.value))
    }

  return (
    <input type="email" onChange={handleChange} value={email.email} placeholder="Email"/>
  )
}

export default Email