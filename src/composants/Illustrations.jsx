import "./Illustrations.scss";
import Oeuvre from "./Oeuvre";
import { OeuvresIllu } from "../ContentfulConfig";

export default function Illustrations() {
  return (
    <div className="Illustrations">
      <ul className="ListeOeuvres">
        {OeuvresIllu.map(oeuvreIllu => ( 
          <li key={oeuvreIllu.id}>
            <Oeuvre oeuvre={oeuvreIllu.Oeuvre.url} vignette={oeuvreIllu.Vignette.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
