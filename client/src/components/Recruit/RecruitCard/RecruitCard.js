import { Link } from "react-router-dom";

function RecruitCard({ id, date, contents, tag, teamName, title }) {
  let dDay = null;
  if (date?.date?.end) {
    dDay = Math.ceil(
      (new Date(date.date.end) - new Date()) / (1000 * 60 * 60 * 24)
    );
  }

  return (
    <Link to={`/recruit/${id}`} className="recruitCard">
      <div
        className={
          dDay !== null
            ? dDay < 0
              ? "recruitDDay end"
              : "recruitDDay"
            : "recruitDDay"
        }
      >
        {dDay !== null ? (
          dDay < 0 ? (
            `마감`
          ) : (
            `D-${dDay}`
          )
        ) : (
          <div>{`상시 채용`}</div>
        )}
      </div>
      <div className="recruitTeam">
        {teamName.results[0].rich_text.text.content}
      </div>
      <div className="recruitTitle">{title.results[0].title.text.content}</div>
      <div className="recruitTask">
        <p>{contents.results[0].rich_text.text.content}</p>
      </div>
      <div className="recruitTagBox">
        {tag.multi_select.map((tagName) => (
          <div className="recruitTag" key={tagName.id}>
            <span>{tagName.name}</span>
          </div>
        ))}
      </div>
      <div className="recruitPeriod">
        {dDay !== null ? `${date.date.start} ~ ${date.date.end}` : "상시채용"}
      </div>
    </Link>
  );
}

export default RecruitCard;
