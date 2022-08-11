// == Import
import { Route, Routes } from 'react-router-dom';
import AppHeader from '../AppHeader';
import CompetencePage from '../AppPages/CompetencePage';
import ContactPage from '../AppPages/ContactPage';
import ExperiencePage from '../AppPages/ExperiencePage';
import PresentationPage from '../AppPages/PresentationPage';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<PresentationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/competence" element={<CompetencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
