import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';

import { Todo } from '../Types/Todo';

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <img src={todo.image} alt={todo.name} width="50" />
          <ListItemText primary={todo.name} secondary={`$${todo.price}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
             Delete
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
