import React from 'react'
import styled from 'styled-components';
import { ITask } from '../interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void
}
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <Container>
    <h3>{task.taskName}</h3>
    <p>Deadline: {task.deadline}</p>
    <button onClick={() => completeTask(task.taskName)}>DELETE</button>
    </Container>

  )
}

export default TodoTask

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 800px;
padding: 20px;
background-color: #05c43e;
border-radius: 5px;
margin-bottom: 30px;
h3 {
    color: aliceblue;
    font-size: 20px;
    max-width: 300px;
  }
  p{
    color: white;
    font-size: 20px;
  }
  button {
    background-color: red;
    color: white;
    font-weight: 900;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`