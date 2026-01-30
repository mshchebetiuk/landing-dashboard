import type { User } from '../types/user';

type UserTableProps = {
    users: User[];
};

export function UserTable({ users }: UserTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <span className={user.isActive ? 'status active' : 'status inactive'}>
                                {user.isActive ? 'Active' : 'Inactive'}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}