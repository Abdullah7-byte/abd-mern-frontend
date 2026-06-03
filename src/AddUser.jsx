function AddUser({name , setName, addUser}) {
  return (
    <div className="form inline">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button className="btn" onClick={addUser}>Add User</button>
    </div>
  )
}

export default AddUser