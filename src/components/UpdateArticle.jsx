import { useState } from "react";

function UpdateArticle({ title, desc, difficulty, onSubmit }){
    const [content, setContent] = useState({
        title, desc, difficulty,
    });
    console.log("UpdateArticle render");
   // const [newTitle, setNewTitle] = useState(title);
    //const [newdesc, setNewDesc] = useState(desc);
    //const handleTitleChange = (e) => {
      //  setNewTitle(e.target.value);
//};
     // const handleDescChange = e => {
    // setNewDesc(e.target.value);
   // };

   const handleChange = e => {
          const { name, value } = e.target;
          setContent(prev => {
        return {
            ...prev,
            [name]: value,
        };
    });
   };

    return (
        <>
        <h2>Update Article</h2>
        <form action="" onSubmit={e => {
            e.preventDefault();
            onSubmit(content.title, content.desc, content.difficulty);   
        }}
        >
            <div>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" value={content.title}
                onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="desc">desc</label>
                <textarea name="desc" id="desc" value={content.desc}
                onChange={handleChange} 
                >
                </textarea>
            </div>
            <div>
                <label htmlFor="difficulty">난이도</label>
                <input type="text"
                name="difficulty"
                id="difficulty"
                value={content.difficulty}
                onChange={handleChange}
                />
            </div>
            <button>Submit</button>
        </form>
        </>
    );
}
export default UpdateArticle;