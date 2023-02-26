import React, { useEffect, useState } from 'react'

import { Input, Button, Box, Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react";
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db, storage } from '../Firebase/FirebaseConfig'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

interface Todo {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const AddTodo = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [todoData, setTodoData] = useState<Todo[]>([]);



  
  //  addData in todo 
  const addData = async (e: any) => {
    e.preventDefault();

    if(imageFile){
    // Create a reference to the storage location where the image will be stored
    const storageRef = ref(storage, `images/${imageFile.name}`);
    // Upload the image to Firebase Storage
    await uploadBytes(storageRef, imageFile);
    // Get the URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);



    const dataRef = collection(db, 'todo')

    const newData = {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl
    }

    const doc = await addDoc(dataRef, newData)
    console.log('New todo added with ID:', doc.id);
  }
}
  
  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  }
  // fetch data from firebase

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



  // Delete data from the database and storage of firebase

  // deleteTodo function
const deleteTodo = async (id: string, imageUrl: string) => {
  try {
    // Delete image from 
    if (imageUrl) {
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    }

    // Delete data from Firestore
    const docRef = doc(db, 'todo', id);
    await deleteDoc(docRef);

    // Update state with remaining todo data
    const remainingTodos = todoData.filter((todo) => todo.id !== id);
    setTodoData(remainingTodos);
  } catch (error) {
    console.error("Error removing document: ", error);
  }
};


  return (
    <div>
      <Box w="40%" margin={"0 auto"} display="block" mt={5}>
        <h1>Add new todo</h1>
        <form onSubmit={addData}>
          <span>Title</span>
          <Input
            placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <br />
          <span>Description</span>
          <Input type="text" onChange={(e) => setDescription(e.target.value)} />
          <br />
          <span>Price</span>
          <Input type="text" onChange={(e) => setPrice(e.target.value)} />
         
          <span>Image</span>
          <br />
          <input type="file" id="image" onChange={handleFileChange} />

          <Button type='submit' colorScheme='orange' w="100%" mt={4} variant='solid'>Add</Button>
        </form>

        <Box mt={5}>
          <Table>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Image</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {todoData.map((todo) => (
                <Tr key={todo.id}>
                  <Td>{todo.title}</Td>
                  <Td>{todo.description}</Td>
                  <Td>{todo.price}</Td>
                  <Td><img src={todo.imageUrl} alt="" width='200px' /></Td>
                  <Td> <Button colorScheme='teal' variant='solid' onClick={() => deleteTodo(todo.id, todo.imageUrl)}> Delete </Button></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </div>
  )
}

export default AddTodo
