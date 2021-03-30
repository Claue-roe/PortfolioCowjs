import "./Live2D.scss";
import Oeuvre from "./Oeuvre";
import { OeuvresLive2d } from "../ContentfulConfig";

export default function Live2D() {
  return (
    <div className="Live2D">
      <ul className="ListeOeuvres">
        {OeuvresLive2d.map((oeuvrelive2d) => (
          <li key={oeuvrelive2d.id}>
            <Oeuvre
              oeuvre={oeuvrelive2d.Oeuvre.url}
              vignette={oeuvrelive2d.Vignette.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
