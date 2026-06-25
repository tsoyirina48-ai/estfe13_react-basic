function ArticleForm({onSubmit}){
    return(
       <form action="" onSubmit={e => {
            e.preventDefault();
            onSubmit(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
            
        }}
        >
            <div>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" />
            </div>
            <div>
                <label htmlFor="desc">desc</label>
                <textarea name="" id="desc"></textarea>
            </div>
            <div>
                <label htmlFor="difficulty">난이도</label>
                <input type="text" name="difficulty" id="difficulty" />
            </div>
            <button>Submit</button>
        </form> 
    )
}
export default ArticleForm;