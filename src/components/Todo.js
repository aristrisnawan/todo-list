import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ listTask, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(listTask.id)}
        className={`${listTask.completed ? "completed" : ""}`}
      >
        {listTask.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(listTask.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(listTask.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
