import React from "react";
import Todo from "./Todo";
export default function Key_list() {
    const [todos, setTodos] = React.useState([
        {
            id: "todo1",
            createdAt: "18:00"
        },
        {
            id: "todo2",
            createdAt: "20:30"
        }
    ])
    function reversee() {
        setTodos([...todos].reverse())
    }
    return (
        <div>
            <button onClick={reversee}>reverse</button>
            <div>
                {todos.map((ele, index) => (
                    <Todo key={ele.id} id={ele.id} createdAt={ele.createdAt}/> // if we keep index as key, then all elements wont reverse
                ))}
            </div>
        </div>

    )

}