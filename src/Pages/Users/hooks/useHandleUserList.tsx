import { useState } from "react";
import { useGetUsers } from "./useGetUsers";

export const useHandleUserList = () => {
    const {users, setUsers, originalUsers} = useGetUsers();
    const [showColors, setShowColors] = useState(false);
    const [sort, setSort] = useState(false);
    const [filter, setFilter] = useState<string | null>(null);

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

    const restoreData = () => {
        setUsers(originalUsers.current)
    }

    const handleFilter = (value: string) => {
        setFilter(value);
    }

    const filteredUsers = filter !== null ? users.filter((user) => user.location.country.toLowerCase().includes(filter.toLowerCase())) : users;

    const sortedUsers = sort
? filteredUsers.toSorted((a, b) => {
        return a.location.country?.localeCompare(b.location.country)
    })
: filteredUsers;

    return {toggleColor, showColors, toggleSort, sortedUsers, deleteUser, restoreData, handleFilter}
}
