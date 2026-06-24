import { useState } from "react";

function UpdateArticle({ title, desc, onSubmit }){
    console.log("UpdateArticle render");
   // const [newTitle, setNewTitle] = useState(title);
    //const [newdesc, setNewDesc] = useState(desc);
    //const handleTitleChange = (e) => {
      //  setNewTitle(e.target.value);
//};
     // const handleDescChange = e => {
    // setNewDesc(e.target.value);
   // };

   const handlechange = e => {
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
            onSubmit(content.title, content.desc);   
        }}
        >
            <div>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" value={newTitle}
                onChange={handleTitleChange} />
            </div>
            <div>
                <label htmlFor="desc">desc</label>
                <textarea name="" id="desc" value={newDesc}
                onChange={handleTitleChange} 
                >
                </textarea>
            </div>
            <button>Submit</button>
        </form>
        </>
    );
}
export default UpdateArticle;