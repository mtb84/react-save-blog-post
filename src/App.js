import { useState } from 'react';
import './App.css';


function App() {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([])

  const updateTitle = (e) => {
    setTitle(e.target.value);
  }

  const updateBody = (e) => {
    setBody(e.target.value)
  }

  const addPost = (e) => {
    const newPost = {
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");


  }


  return (
    
      <form onSubmit={addPost}>
          <h2>Write and Save Blog</h2>
          <label htmlFor="title">Blog Title</label> <br />
          <input id="title" type="text" name='title' value={title} onChange={updateTitle} />
          <br />
          <label htmlFor='blog' >New Blog</label> <br />
          <textarea value={body} onChange={updateBody}> </textarea> <br />
          <button type="submit">Save</button>
      </form>

  
)};

export default App;
