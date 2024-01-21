import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "./utils/common";
import { ENV, PUBLIC_URL } from "./utils/const";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";


i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['common'],
    detection: {
      order: ['path', 'sessionStorage', 'navigator'],
      caches: ['sessionStorage'],
      lookupFromPathIndex: ENV === "development" ? 1 : 0
    },
    supportedLngs: SUPPORTED_LANGUAGES,
    saveMissing: true, // for missing key handler to fire
    missingKeyHandler: function (lng, ns, key, fallbackValue) {
      console.log("Missing:", key);
    }
  });


  function App() {
    return (
      <ErrorBoundary>
        <Router basename={PUBLIC_URL}>
          <Routes>
            <Route path="/:lang?/" element={<Home />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    );
  }
  
export default App;
