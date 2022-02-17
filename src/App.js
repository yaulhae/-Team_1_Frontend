import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import InspireItemPage from "./pages/InspireItemPage";
import InspireListPage from "./pages/InspireListPage";
import InspireWritePage from "./pages/InspireWritePage";
import LoginPage from "./pages/LoginPage";
import MemoListPage from "./pages/MemoListPage";
import MemoWritePage from "./pages/MemoWritePage";
import SignUpPage from "./pages/SignUpPage";
import WelComePage from "./pages/WelComePage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<WelComePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/inspire_list" element={<InspireListPage />} />
        <Route path="/inspire_write" element={<InspireWritePage />} />
        <Route path="/inspire_write/:id" element={<InspireWritePage />} />
        <Route path="/inspire_list/:id" element={<InspireItemPage />} />
        <Route path="/memo_item/:id" element={<MemoListPage />} />
        <Route path="/memo_write" element={<MemoWritePage />} />
        <Route path="/memo_write/:id" element={<MemoWritePage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
