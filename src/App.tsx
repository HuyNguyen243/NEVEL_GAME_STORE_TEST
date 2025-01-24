import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./cores/libs/i18n";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import ButtonScroll from "./components/layouts/ButtonScroll";
const HomePage = lazy(() => import("./pages/home"));
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});
function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ButtonScroll />
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
