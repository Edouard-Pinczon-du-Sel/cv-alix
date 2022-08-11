// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import '../stylesMediaQueries.scss';
import { NavLink } from 'react-router-dom';
// == Composant
function HeaderNavBar() {
  function handleClose() {
    const burger = document.querySelector('#menu_label');
    const responsiveNavBar = document.querySelector('.nav');
    responsiveNavBar.classList.remove('nav__responsive--display');
    burger.click();
  }
  return (
    <div className="nav nav__responsive--display" onClick={handleClose}>
      <NavLink className="nav__btn" to="/">
        Présentation
      </NavLink>
      <NavLink className="nav__btn" to="/experience">
        Expériences
      </NavLink>
      <NavLink className="nav__btn" to="/competence">
        Compétences
      </NavLink>
      <NavLink className="nav__btn" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}

// == Export
export default HeaderNavBar;
