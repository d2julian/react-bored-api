import classes from "./Activity.module.css";
import { ActivityTypeProps } from "../types/types";

function Activity({ data }: ActivityTypeProps) {
  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "charity":
        return classes.charity;
      case "social":
        return classes.social;
      case "cooking":
        return classes.cooking;
      case "music":
        return classes.music;
      case "diy":
        return classes.diy;
      case "education":
        return classes.education;
      case "busywork":
        return classes.busywork;
      case "recreational":
        return classes.recreational;
      case "relaxation":
        return classes.relaxation;
      default:
        break;
    }
  };

  const formatPrice = (price: number) => {
    return price === 0 ? "Free" : Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(price);
  };
  return (
    <div
      className={classes.box}
      key={data.key}
      onClick={() => {
        if (data.link) {
          window.open(data.link, "_blank");
        }
      }}
    >
      <img className={classes.activityImg} src={`../assets/${data.type}.jpg`} alt={data.type} />
      <label className={`${classes.activityType} ${getActivityColor(data.type)}`}>{data.type}</label>
      <div className={classes.activityContainer}>
        <div className={classes.activityInfo}>
          <div className={classes.activityTag}>
            <label>Activity:</label> {data.activity}
          </div>
          <div className={classes.activityTag}>
            <label>Participants:</label>{" "}
            {[...Array(data.participants)].map((p, i) => (
              <img key={i} className={classes.participantIcon} src={`../assets/male-user.jpg`} alt={"male-user"}></img>
            ))}
          </div>
          <div className={classes.activityTag}>
            <label>Price:</label> {formatPrice(data.price * 100)}
          </div>
        </div>
        <div className={classes.activityIcon}>
          <img className={classes.activityIcon} src={`../assets/${data.type}-icon.jpg`} alt={data.type}></img>
        </div>
      </div>
    </div>
  );
}

export default Activity;
