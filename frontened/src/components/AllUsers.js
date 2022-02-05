import React from 'react'
import { getUsers } from './Api'
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteUsers } from './Api';
import { Link } from 'react-router-dom';
function AllUsers() {

    const [state, setstate] = useState([])
    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async()=>{
        const response = await getUsers();
        const data = response.data;
        setstate(data);
        console.log(data);
    } 

    const DeleteNote = async (id)=>{
      await deleteUsers(id);
      console.log('Deleted');
      getAllUsers();
    }

    return (
        <div className='container py-1 my-5'>
            <table class="table table-success table-striped my-5">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Passion</th>
      <th scope="col">Profession</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
      {state.map((element,index)=>{
      return <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{element.name}</td>
      <td>{element.passion}</td>
      <td>{element.profession}</td>
      <td>{element.email}</td>
      <td>{element.number}</td>
      <td>
      <Link className='btn btn-primary mx-3' to={`/edit/${element._id}`}>Edit</Link>
      <div className='btn btn-danger' onClick={()=>DeleteNote(element._id)}>Delete</div>
      </td>
    </tr>
})}
  </tbody>
</table>
        </div>
    )
}

export default AllUsers
