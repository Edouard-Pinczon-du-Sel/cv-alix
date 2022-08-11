// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function ExperiencePage() {
  return (
    <aside className='experiences'>
    <h1 className='experiences__title'>Expériences</h1>
    <section className='experiences__cursus'>
      <h2 className='experiences__cursus--title'>Mon Cursus scolaire</h2>
      <p className='experiences__cursus--txt'>
        Voici un petit aperçu en image de mon cursus scolaire. Pour plus de détails n'hésitez pas
        à télécharger mon CV juste <a className='experiences__cursus--link' href="#" target="blank">ici</a>
      </p>
      <img className='experiences__cursus--img' src="#" alt="cursus scolaire" />
    </section>
    <section className='experiences__pro'>
      <h2 className='experiences__pro--title'>Mes experiences professionnelles</h2>
      <p className='experiences__pro--txt'>
        Mes études m'ont persmise de mettre un pied ans le monde du travail et de me forger de réelles expériences en société
      </p>
      <ul>
        <li>
          <p>2021 :  Stage chez DDay wedding planner Nantes (2 mois)</p>
          <p>
            Durant ce stage j'ai pu préparer et organiser de nombreux mariages. J'ai appris à gérer de grands évènements et à m'adapter.
            J'ai aussi pu effectuer de nombreuses missions de communication via les réseaux sociaux pour l'entreprise. 
            Si vous voulez en savoir un peu plus sur DDay wedding planner cliquez <a href="#" target="blank">ici</a>
          </p>
        </li>
        <li>
          <p>2022 :  Stage dans la “team bonheur” de Gens de Confiance (4 mois)</p>
          <p>
            Au cours de ce stage j'ai appris à gagner en productivité et en qualité au sein d'une entreprise que j'admire beaucoup.
            J'ai pu affuter mes compétences téléphoniques et mailing ainsi que mes capacités de médiation de conflits.
          </p>
        </li>
      </ul>
    </section>
    <section className='experiences__perso'>
      <h2 className='experiences__perso--title'>Voici quelques une de mes experiences personnelles</h2>
      <p className='experiences__perso--txt'>
        Êtant très curieuse et investie de nature jai durant mes études pu expérimenter de nombreuses opportunités
        telles que :
      </p>
      <ul>
        <li>
          <p>2019 : Concours d'éloquence Initiadroit</p>
          <p>Ce concours m'a permit de développer mes capacités rédactionnelles et orales</p>
        </li>
        <li>
          <p>2019 - 2020 : Maraudes hebdomadaires - Tous les samedis à Angers (presbytère Ste Victoire)</p>
          <p>Cette experience m'a permise d'échanger avec des personnes dans le besoin et de développer un sens relationnel approprié</p>
        </li>
        <li>
          <p>2020 : Eté 2020 Université d'été "Devenez Créateur - Partenariat entre l'ICES et le Puy du Fou</p>
          <p>Grâce à cette opportunité j'ai pu rencontrer et échanger avec de nombreux intervenants et enrichir ma culture générale</p>
        </li>
        <li>
          <p>2020 - 2021 : Cheftaine aux scouts unitaires de France</p>
          <p>
            Cette année m'a permis de développer mon sens de l'organisation et de planificationgrâce à l'organisationde nombreuses réunions.
            Ayant eu beaucoup d'enfants à ma charge avec mes collègues j'ai su aussi dévélopper mon sens des responsabilités et mon esprit 
            d'équipe dans toutes les situations possibles durant cette année.
          </p>
        </li>
      </ul>
    </section>
    <section className='experiences__spain'>
      <h2 className='experiences__spain--title'>Mon semestre à l'étranger en Espagne</h2>
    </section>
  </aside>
  );
}

// == Export
export default ExperiencePage;