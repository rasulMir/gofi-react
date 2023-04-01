import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import AuthLogin from "./pages/AuthLogin/AuthLogin";
import LandingPage from "./pages/LandingPage/LandingPage";
import Personal from "./pages/Personal/Personal";
import PersonalSettings from "./pages/PersonalSettings/PersonalSettings";

function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/layout" element={<Layout />}>
					<Route index element={<Personal />} />
					<Route path="settings" element={<PersonalSettings />} />
				</Route>
				<Route path="/auth/login" element={<AuthLogin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;