import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(event.target.value);
    }
    
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline("");
  };
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <InputContainer>
        <input
          type="text"
          value={task}
          name="task"
          placeholder="Task..."
          onChange={handleChange}
        />
        <Button onClick={addTask}>Add Task</Button>

        <input
          type="date"
          value={deadline}
          name="deadline"
          placeholder="Deadline (in Days)"
          min={0}
          onChange={handleChange}
        />
      </InputContainer>

      <Container>
        {todoList.map((item: ITask, key: number) => {
          return <TodoTask key={key} task={item} completeTask={completeTask} />;
        })}
      </Container>
    </div>
  );
};

export default App;

const InputContainer = styled.div`
  display: flex;
  align-self: center;
  width: 600px;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 100px;
  margin-bottom: 30px;
  input {
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    background-color: #a2d0f8;
  }
`;

const Button = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  background-color: #6f0808;
  font-size: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  align-self: center;
`;
