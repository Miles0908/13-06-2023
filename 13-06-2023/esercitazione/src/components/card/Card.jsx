import "./index.css";
const Card = ({ data }) => {
  return (
    <div className="Card">
      <h4 className="Card__text">TO DO: {data.todo}</h4>
      <p className="Card__id">To-do's id: {data.id}</p>
      <p className="Card__id">User's id: {data.userId}</p>
      <span className="check-label">
        {data.completed ? "Did: " : "To do: "}
        <input
          type="checkbox"
          name="check"
          id="Card__check"
          checked={data.completed}
        />
      </span>

      <span className="Card__info--like">❤️🧡💚🤎💜</span>
    </div>
  );
};
export default Card;
