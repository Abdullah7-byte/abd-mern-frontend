function UserList({users, deleteUser}) {
  return (
    <div className="list">
     {users.map(user => (
        <div className="list-item" key={user._id}>
          <span className="item-text">{user.name}</span>
          <button className="delete-btn" onClick={ () => deleteUser(user._id)}>🗑</button>
        </div>
      ))}
    </div>
  )
}

export default UserList