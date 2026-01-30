import { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { UserTable } from '../components/UserTable';
import { StatCard } from '../components/StatCard';
import type { User } from '../types/user';
import { USERS } from '../data/users'

type Filter = "all" | "active" | "inactive";

export function Dashboard() {
  const [users] = useState<User[]>(USERS);

  const [filter, setFilter] = useState<Filter>("all");

  const filteredUsers = useMemo(() => {
    if (filter === 'active') {
      return users.filter((user) => user.isActive);
    }

    if (filter === 'inactive') {
      return users.filter((user) => !user.isActive);
    }

    return users;
  }, [users, filter]);

  const totalCount = users.length;

  const activeCount = useMemo(
    () => users.filter((user) => user.isActive).length,
    [users]
  );

  const inActiveCount = useMemo(
    () => users.filter((user) => !user.isActive).length,
    [users]
  )

  return (
    <>
        <Header />

        <div className="layout">
            <Sidebar />

            <main className="content">
                <h1>Dashboard</h1>
            
                <div className="stats">
                    <StatCard title="Total" value={totalCount} />
                    <StatCard title="Active" value={activeCount} />
                    <StatCard title="Inactive" value={inActiveCount} />
                </div>

                <div className="filters">
                    <button 
                        onClick={() => setFilter('all')}
                        className={filter === 'all' ? 'active' : ''}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setFilter('active')}
                        className={filter === 'active' ? 'active' : ''}
                    >
                        Active
                    </button>
                    <button 
                        onClick={() => setFilter('inactive')}
                        className={filter === 'inactive' ? 'active' : ''}
                    >
                        Inactive
                    </button>
                </div>

                <div className="table-wrapper">
                    <UserTable users={filteredUsers} />
                </div>
            </main>
        </div>
    </>
  )
}