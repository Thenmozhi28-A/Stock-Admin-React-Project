import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createaccount from "./auth/Createaccount";
import Signin from "./auth/Signin";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import ManageStock from "./pages/ManageStock";
import Setting from "./pages/Setting";
import AccountInfo from "./pages/AccountInfo";
import ChangePassword from "./pages/ChangePassword";
import Notification from "./pages/Notification";
import Usermanager from "./pages/Usermanager";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Createaccount />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-stock" element={<ManageStock />} />
          <Route path="/usermanager" element={<Usermanager />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/setting" element={<Setting />}>
            <Route index element={<AccountInfo />} />
            <Route path="account-info" element={<AccountInfo />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
