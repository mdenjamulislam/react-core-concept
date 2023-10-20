export default function Friend({friend}) {
    const {name, email, username} = friend;
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <span>UserName: {username}</span>
        </div>
    )
}