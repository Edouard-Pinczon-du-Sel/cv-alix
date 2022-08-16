// == Import
import './styles.scss';
import './stylesMediaQueries.scss';
import imgBtn from '../../../assets/images/btn.png';


// == Composant
function BtnRight() {
  return (
    <button className='btn--right' type="button"><img src={imgBtn} /></button>
  );
}

// == Export
export default BtnRight;