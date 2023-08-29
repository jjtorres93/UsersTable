import { UsersList } from "./components/UsersList";
import { useHandleUserList } from "./hooks/useHandleUserList"

const Users: React.FC = () => {
    const {showColors, toggleColor, toggleSort, sortedUsers, deleteUser, restoreData} = useHandleUserList();
    return (
        <div>
            <h1>Users</h1>
            <header>
                <button onClick={toggleColor}>Mostrar colores</button>
                <button onClick={toggleSort}>Ordenar por país</button>
                <button onClick={restoreData}>Restaurar estado</button>
            </header>
            <UsersList showColors={showColors} users={sortedUsers} deleteUser={deleteUser} />
        </div>
    )
}

export default Users;
