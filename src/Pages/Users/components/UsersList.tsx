import type { User } from "../types/type";
import '../style/users.css'

interface UsersListProps {
    showColors: boolean
    users: User[]
}

export function UsersList ({users, showColors}: UsersListProps) {
    return (
        <table width="100%" >
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>País</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    const backgroundColor = index % 2 === 0 ? '#D3D3D3' : '#A9A9A9';
                    const color = showColors ? backgroundColor : 'transparent';
                    return (
                        <tr key={user.login.uuid} style={{ backgroundColor: color}}>
                        <td>
                            <img alt={`${user.name.title}. ${user.name.last}`} src={user.picture.thumbnail} />
                        </td>
                        <td>
                            {user.name.first}
                        </td>
                        <td>
                            {user.name.last}
                        </td>
                        <td>
                            {user.location.country}
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    console.log(user.login.uuid)
                                }}
                            >
                                Borrar
                            </button>
                        </td>
                        </tr>
                    )
                })}
            </tbody>
    </table>
    )
}
