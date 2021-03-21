import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers, setCurrentUser, setSearch, getSearch } from "./usersSlice";

export function Users() {
  const history = useHistory();
  const users = useSelector(getUsers);
  const search = useSelector(getSearch);
  const dispatch = useDispatch();

  const showUser = (user) => {
    dispatch(setCurrentUser(user));
    history.push(`/${user.login.uuid}`);
  };

  const filterSearch = (user) =>
    user.name.first.toLowerCase().includes(search.toLowerCase()) ||
    user.name.last.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase());


  return (
    <>
      <h1 className="mb-1">Users</h1>
      <input
        type="text"
        id="search"
        name="search"
        value={search}
        className="search-box"
        placeholder="Search Users"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <table className="users-table" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(filterSearch).map((user) => (
            <tr
              key={user.login.uuid}
              className="user"
              onClick={() => showUser(user)}
            >
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.location.city}</td>
              <td>{user.location.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
