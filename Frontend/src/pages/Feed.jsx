import React, { useEffect, useState } from 'react'
import axios from  'axios'
import { Link, useNavigate } from 'react-router-dom';


const Feed = () => {
  const [posts,setPosts]=useState([{
    _id:"1",
    name:"Kshitij",
    image:"https://ik.imagekit.io/rrctbax59/image_HNBlaaDqp.jpg",
    caption:"Scenery horror"
  }]);


  console.log(posts);

  useEffect(()=>{
    axios.get("https://instagramss.onrender.com/post").then((res)=>{
        setPosts(res.data.posts)
    });


  },[])

  const Navigate=useNavigate();




  return (
       <section className='feed-section' >

            <h1>Feed </h1>
            <Link to="/" > Create New Post + </Link>

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                            <p>By {post.name}</p>
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (

                   <div>
                    <h1>No posts available</h1>
                   </div>
                    
                )
            }

        </section>

  )

}
export default Feed
