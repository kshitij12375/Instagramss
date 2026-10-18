import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const CreatePost = () => {


  const Navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);

    axios.post(" https://instagramss.onrender.com/post-create",formData).then((res)=>{
        console.log(res.data);
        Navigate("/post")
    })
    .catch((err)=>{
        console.log(err);
        alert("Error in creating Posts")
    })
  }
  return (
    <section className='create-posts'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} className='forms-post'>
            <input className='inp'type='text' name='name' placeholder='Your Name'required/>
            <input className='inp' type='file' accept='image/*' name='image'/>
            <input className='inp'type='text' name='caption' placeholder='Enter Caption'required/>
            <button className='btn'type='submit'>Submit</button>
        </form>

    </section>
  )
}

export default CreatePost
