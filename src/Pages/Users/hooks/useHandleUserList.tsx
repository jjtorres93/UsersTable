import { useState } from "react";
import { useGetUsers } from "./useGetUsers";

export const useHandleUserList = () => {
    const {users, setUsers} = useGetUsers();
    const [showColors, setShowColors] = useState(false);
    const [sort, setSort] = useState(false);

    const deleteUser = (userId: string) => {
        const filteredUsers = users.filter((user) => user.login.uuid !== userId)
        setUsers(filteredUsers);
    }

    const toggleSort = () => {
        setSort((prev) => (!prev));
    }

    const toggleColor = () => {
        setShowColors((prev) => !prev);
    }

    const sortedUsers = sort
? users.toSorted((a, b) => {
        return a.location.country?.localeCompare(b.location.country)
    })
: users;

    return {toggleColor, showColors, toggleSort, sortedUsers, deleteUser}
}
