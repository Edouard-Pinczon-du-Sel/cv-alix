// == Import
import './styles.scss';
import './stylesMediaQueries.scss';
import imgBtn from '../../../assets/images/btn.png';

// == Composant
function BtnLeft() {
  return (
    <button className='btn--left' type="button"><img src={imgBtn} /></button>
  );
}

// == Export
export default BtnLeft;