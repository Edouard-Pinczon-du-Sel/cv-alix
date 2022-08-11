// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function CompetencePage() {
  return (
    <aside>
      <h1>Compétences</h1>
      <section>
        <h2>Informatique</h2>
        <ul>
          <li><p>Je maitrîse le Pack Office 365</p> de Microsoft</li>
          <li><p>Les bases de WordPress</p> pour créer de jolies sites fonctionnels</li>
          <li><p>Canva</p> afin de produire des documents travaillés</li>
          <li>La communication sur <p>les réseaux sociaux : Facebook, Instagram, WhatsApp...</p></li>
          <li><p>Première Pro</p> de la suite Adobe pour du montage vidéo</li>
        </ul>
      </section>
      <section>
        <h2>Literraires</h2>
        <ul>
          <li>Français : test Voltaire</li>
          <li>Anglais : niveau B2</li>
          <li>Espagnol : niveau B2</li>
          <li>Capacités argumentaires, de rédactions et d'analyses</li>
        </ul>
      </section>
      <section>
        <h2>Quelques mots sur moi</h2>
        <img src="#" />
      </section>
    </aside>
  );
}

// == Export
export default CompetencePage;