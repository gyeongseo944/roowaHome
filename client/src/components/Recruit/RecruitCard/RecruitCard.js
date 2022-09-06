import { Link } from "react-router-dom";
import "./RecruitCard.scss";

function RecruitCard({ id, properties }) {
  const {
    "Contents*": {
      rich_text: [
        {
          text: { content: contents },
        },
      ],
    },
    StartEndDate: date,
    "Tags*": { multi_select: tags },
    "TeamName*": {
      rich_text: [
        {
          text: { content: teamName },
        },
      ],
    },
    "Title*": {
      title: [
        {
          text: { content: title },
        },
      ],
    },
  } = properties;
  let dDay = null;
  if (date?.date?.end) {
    dDay = Math.ceil(
      (new Date(date.date.end) - new Date()) / (1000 * 60 * 60 * 24)
    );
  }

  return (
    <Link to={`/recruit/${id}`} className="recruitCard">
      <div className="cardContainer">
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
        <div className="recruitTeam">{teamName}</div>
        <div className="recruitTitle">{title}</div>
        <div className="recruitTask">
          <p>{contents}</p>
        </div>
        <div className="recruitTagBox">
          {tags.map((tagName) => (
            <div className="recruitTag" key={tagName.id}>
              <span>{tagName.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="recruitPeriod">
        {dDay !== null ? `${date.date.start} ~ ${date.date.end}` : "상시채용"}
      </div>
    </Link>
  );
}

export default RecruitCard;
