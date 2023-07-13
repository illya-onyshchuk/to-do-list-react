import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

function PostForm({create}) {
  const [post, setPost] = useState({title: '', body: '',});

    // некерований Елемент 
    // const bodyInputRef = useRef();
    // console.log(bodyInputRef.current.value)

    const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {...post, id: Date.now()}
      create(newPost)
      setPost({title: '', body: '',})
     }

  return (
      <form action="#">
        {/* {Двойне звязування} */}
        {/* {Керований Елемент} */}
        <MyInput
          value={post.title}
          onChange={e => setPost( {...post, title: e.target.value} )}
          type="text"
          placeholder="Name Post"/>
          <MyInput
          value={post.body}
          onChange={e => setPost( {...post, body: e.target.value} )}
          type="text"
          placeholder="Descriptor Post"/>
        <MyButton onClick={addNewPost}>Creat post</MyButton>
      {/* некерований Елемент 
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Descriptor Post"/> */}
      </form>
  );
}

export default PostForm