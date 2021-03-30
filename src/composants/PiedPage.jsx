import './PiedPage.scss';

export default function PiedPage(props) {
    const annee = (new Date()).getFullYear();
  return (
    <footer className="PiedPage">
      <h3>&copy; Tous droits réservés | Claudia Patry {annee} </h3>
    </footer>
  );
}
