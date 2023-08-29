import { UsersList } from "./components/UsersList";
import { useGetUsers } from "./hooks/useGetUsers"

const Users: React.FC = () => {
    const {users} = useGetUsers()
    return (
        <div>
            <h1>Users</h1>
            <UsersList users={users} />
        </div>
    )
}

export default Users;
