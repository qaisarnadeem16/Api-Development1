import { Box} from '@chakra-ui/react'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {db} from '../Firebase/FirebaseConfig'

import {  Button, Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react";

interface Todo {
    id: string;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
  }


const Product = () => {
    const [todoData, setTodoData] = useState<Todo[]>([]);

    //get data from database
    useEffect(() => {
        const fetchData = async () => {
          const Ref = collection(db, 'todo')
          const getData = await getDocs(Ref);
          const TodoData: Todo[] = [];
          getData.forEach((doc: any) => {
            TodoData.push({ id: doc.id, ...doc.data() })
          })
          setTodoData(TodoData)
        }
        fetchData()
      }, [])
  return (
   <>
     <Box mt={5}>
          <Table>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Image</Th>
              </Tr>
            </Thead>
            <Tbody>
              {todoData.map((todo) => (
                <Tr key={todo.id}>
                  <Td>{todo.title}</Td>
                  <Td>{todo.description}</Td>
                  <Td>{todo.price}</Td>
                  <Td><img src={todo.imageUrl} alt="" width='200px' /></Td>
                  
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      

    </>
  )
}

export default Product
