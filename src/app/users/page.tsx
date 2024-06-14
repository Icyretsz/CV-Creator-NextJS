

interface User {
    id: number;
    name: string;
    email : string;
}

const about = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()

    return (
        <>
            <h1>Users</h1>
            <table >
                <thead>
                <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user: User) => {
                    return <tr className='p-2' key={user.id}>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                        <th>{user.email}</th>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
}

export default about