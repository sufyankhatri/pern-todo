import { Table, Tbody, Td, Th, Thead, Tr, Button } from '@chakra-ui/react';
import React from 'react';
const TodoTable: React.FC = () => {
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Task</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>I need to clean my room</Td>
            <Td>
              <Button> Edit</Button>
            </Td>
            <Td>
              <Button> Delete</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default TodoTable;
