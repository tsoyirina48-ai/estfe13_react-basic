function MyArticle({ title, desc, onChangeMode, onDelete }) {
    console.log("MyArticle");
  return (
    <section>
      <article>
        <h2>HTML</h2>
        <p>Hypertext Markup Language</p>
      </article>
      <button onClick={() => {
      onChangeMode();
    }}
       >
        수정</button>
      <button onClick={() => {
      onDelete();
    }}
       >
      삭제</button>
    </section>
  );
}
export default MyArticle;