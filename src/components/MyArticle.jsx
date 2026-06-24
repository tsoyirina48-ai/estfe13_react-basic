function MyArticle({ title, desc, difficulty, onChangeMode, onDelete }) {
    console.log("MyArticle");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>난이도: {difficulty}</p>
      </article>
      <button onClick={() => {
        console.log("수정 클릭")
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