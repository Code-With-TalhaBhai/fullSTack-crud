import React, { useState } from 'react'
import { addUsers } from './Api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Contactform() {
    const navigate = useNavigate();
    console.log(navigate);

  const initialState = {
    name:'',
    passion:'',
    profession:'',
    email:'',
    number:''
  }

  const [user, setuser] = useState(initialState);
  console.log(user);
  const {name,passion,profession,email,number} = user;

  const chName = (e) =>{
    setuser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }
  

  const onPost = async(e)=>{
    await addUsers(user);
    console.log(user);
    e.preventDefault();
    // navigate('/all');
    console.log('clicking');
  }

    return (
        <div className='container my-5'>
          <h2 className='my-5'> 
            Fill form to add user.
          </h2>
         <form>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input onChange={chName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name'/>
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Passion</label>
    <input onChange={chName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='passion'/>
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Profession</label>
    <input onChange={chName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='profession'/>
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
    <input onChange={chName} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
  </div>
           <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
    <input onChange={chName} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='number'/>
  </div>
  
  <button type="button" onClick={onPost} className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Contactform
