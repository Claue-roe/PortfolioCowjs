import "./Social.scss";

export default function Social(props) {
  return (
    <div className="Social">
      <a href={props.Lien} target="_blank">
        <div className="Mail">
          <img src={props.img} alt={props.alt} />
        </div>
      </a>
    </div>
  );
}
