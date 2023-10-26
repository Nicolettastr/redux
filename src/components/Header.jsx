import { useSelector } from "react-redux"
import { selectUser } from "../redux/userSlice"

const Header = () => {

    const user = useSelector(selectUser)

  return (
    <header>
        <h1>Redux</h1>
        <ul>
            <li>Name: {user.name}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
        </ul>
    </header>
  )
}

export default Header