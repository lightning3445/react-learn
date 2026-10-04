import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getUsers() {

            try {

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                const data = await response.json();

                setUsers(data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        }

        getUsers();

    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>

            <h1>Users</h1>

            {users.map(user => (

                <div key={user.id}>

                    <h2>{user.name}</h2>

                    <p>{user.email}</p>

                </div>

            ))}

        </div>
    );
}

export default App;