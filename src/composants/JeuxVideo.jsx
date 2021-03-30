import "./JeuxVideo.scss";
import Oeuvre from "./Oeuvre";
import { OeuvresJeux } from "../ContentfulConfig";

export default function JeuxVideo() {
  return (
    <div className="JeuxVideo">
      <ul className="ListeOeuvres">
        {OeuvresJeux.map((oeuvreJeux) => (
          <li key={oeuvreJeux.id}>
            <Oeuvre
              oeuvre={oeuvreJeux.Oeuvre.url}
              vignette={oeuvreJeux.Vignette.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
