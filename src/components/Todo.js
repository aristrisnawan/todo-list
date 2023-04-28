import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({listTask, toggleComplete}) => {
  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(listTask.id)} className={`${listTask.completed ? 'completed' : ''}`}>{listTask.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
  );
};

export default Todo;
