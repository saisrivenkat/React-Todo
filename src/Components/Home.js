import '../App.css'
const Home = ({ search, setsearch, dropdown, setdropdown, todo, submit, deletetodo, change }) => {
    return (
        <div className="container mt-5">
            <div className="header" style={{ textAlign: "center" }}>
                <i class="fas fa-tasks fa-2x" style={{ color: "blue", marginTop: "5px" }}></i>
                <span className="brand" style={{ margin: "0 0 0 10px", fontSize: "30px", color: "blue" }}>Todo-List</span>
            </div>
            <div className="search-bar mt-5 mb-5 shadow bg-body rounded">
                <form onSubmit={submit}>
                    <input placeholder="Add New..." onChange={(e) => setsearch(e.target.value)} value={search} style={{ width: "100%", padding: "15px", borderRadius: "5px" }} />
                </form>
            </div>
            <hr />
            <div className="todo-list">
                <div className="d-flex justify-content-end">
                    <label style={{ padding: "0 15px 0 0" }}>Filter</label>
                    <select value={dropdown} onChange={(e) => setdropdown(e.target.value)} className="" style={{ padding: "2px" }}>
                        <option value="completed">Completed</option>
                        <option value="notcompleted">Not completed</option>
                    </select>
                </div>
                {todo.filter(item => {
                    if (!item.completed && dropdown === 'notcompleted') {
                        return item
                    }
                    else if (item.completed && dropdown === 'completed') {
                        return item
                    }
                }).map(item => {
                    return (
 
                        <div className="todo-item d-flex justify-content-between  mt-3  rounded" >
                            <p>{item.title}</p>
                            <div className="icons d-flex flex-column ">
                                <div className="sec-1">
                                    <i class="fas fa-check" onClick={() => change(item.id)} aria-hidden="true" style={{ margin: "0 15px 0 0", cursor: "pointer" }}></i>
                                    <i class="fas fa-trash-alt" onClick={() => deletetodo(item.id)} style={{ color: "red", cursor: "pointer" }}></i>
                                </div>
                                <div className="sec-2">
                                    <span>
                                        <i class="fas fa-info-circle"
                                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Created Date" style={{ margin: "0 10px 0 0" }}></i>
                                        {item.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Home