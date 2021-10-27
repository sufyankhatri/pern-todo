import { Button, Grid, GridItem, Heading, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TodoTable from './components/TodoTable';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const AddTodo = () => {
    console.log(todo);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: todo }),
    };
    fetch('http://localhost:5000/todos', requestOptions)
      .then((response: any) => {
        console.log('response from server', response.data);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  };
  const getTodos = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://localhost:5000/todos', requestOptions)
      .then((response: any) => {
        console.log('response from server', response.json());
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <Heading>I'm a Heading</Heading>

      <Grid templateColumns='repeat(5, 1fr)' gap={5}>
        <GridItem colSpan={4} h='10'>
          <Input
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </GridItem>
        <GridItem colStart={5} colSpan={5} h='10'>
          <Button bgColor='blue' color='white' onClick={() => AddTodo()}>
            Add
          </Button>
        </GridItem>
      </Grid>
      <TodoTable />
    </>
  );
};

export default App;
