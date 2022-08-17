import { Link } from "react-router-dom";

function RecruitCard({ id, date, contents, tag, teamName, title }) {
  const dDay = Math.ceil(
    (new Date(date.date.end) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Link to={`/recruit/${id}`} className="recruitCard">
      <div className={dDay < 0 ? "recruitDDay end" : "recruitDDay"}>
        {dDay < 0 ? `마감` : `D-${dDay}`}
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
      <div className="recruitPeriod">{`${date.date.start} ~ ${date.date.end}`}</div>
    </Link>
  );
}

export default RecruitCard;
