// == Import
import imgCv from '../../assets/images/cv.png'
import './styles.scss';

// == Composant
function CvPage() {
  return (
    <div className='cv'>
      <img className='cv__img' src={imgCv} />
    </div>
  );
}

// == Export
export default CvPage;