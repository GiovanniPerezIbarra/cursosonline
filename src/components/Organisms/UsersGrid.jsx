import React from "react"
import UserCard from "../Molecules/UserCard"
import withLoader from "../HOC/withLoader";
const UsersGrid = ({users}) => (
    <div className="ed-grid">
        <br/>
        <h1>Usuarios destacados</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {
                users.map(u => (
                    <UserCard
                        key={u.id}
                        name={u.name}
                        username={u.username}
                        email={u.email}
                        phone={u.phone}
                        website={u.website}
                    /> 
                ))
            }
        </div>
    </div>
)
export default withLoader("users")(UsersGrid)