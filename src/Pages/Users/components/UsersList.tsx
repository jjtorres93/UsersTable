import type { User } from "../types/type";

interface UsersListProps {
    users: User[]
}

export function UsersList ({users}: UsersListProps) {
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
                {users.map((user) => {
                    return (
                        <tr key={user.login.uuid}>
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
