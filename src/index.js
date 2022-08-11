// == Import : npm
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


// == Import : local
// Composants
import App from 'src/components/App';

const rootReactElement = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
// NOTE Posez question Olivier concernant REACT.STRICTMODE bonne pratique ?
const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
