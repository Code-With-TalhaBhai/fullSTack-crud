import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { editUsers } from './Api';
import { addUsers } from './Api';
import { updateUsers } from './Api';
import { deleteUsers } from './Api';
import { useParams } from 'react-router-dom';

function EditUser() {
         
    const initialState = {
    name:'',
    passion:'',
    profession:'',
    email:'',
    number:''
  }

  const [user, setuser] = useState(initialState);
  console.log(user);
  const navigate = useNavigate();
  const {name,passion,profession,email,number} = user;
  const { id } = useParams();
  console.log(id);
  const chName = (e) =>{
    setuser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

  useEffect(() => {
    load();
  }, []);

  const load = async()=>{
    const fetchData = await editUsers(id);
    console.log(id);
    setuser(fetchData.data);
  }

  const onUpdate = async(e)=>{
    await updateUsers(id,user);
    console.log(user);
    e.preventDefault();
    navigate('/all');
  }

    return (
        <div className='container my-5'>
          <h2 className='my-5'> 
            Update form to edit user.
          </h2>
         <form>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input onChange={chName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={name}/>
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Passion</label>
    <input onChange={chName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='passion' value={passion} />
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Profession</label>
    <input onChange={chName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='profession' value={profession} />
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
    <input onChange={chName} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} />
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
    <input onChange={chName} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='number' value={number} />
  </div>
  
  <button type="button" onClick={onUpdate} className="btn btn-primary">Update</button>
</form>
        </div>
    )
}

export default EditUser
