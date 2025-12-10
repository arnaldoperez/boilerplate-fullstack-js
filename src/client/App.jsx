import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch(import.meta.env.VITE_BACKEND_URL + "/posts")
    .then(resp=>resp.json())
    .then(posts=>setPosts(posts))
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Posts</h2>
        {posts.map(post=><div className='post'>
          <h4>{post.title}</h4>
          <p>Creado por: {post.author.name}</p>
        </div>)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
