type StatCardProps = {
    title: string;
    value: number;
}

export function StatCard({title, value}: StatCardProps) {
    return (
        <div className="stat-card">
            <p>{title}</p>
            <strong>{value}</strong>
        </div>
    )
}