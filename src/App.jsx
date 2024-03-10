import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Sidebar from './components/Sidebar';
import MonthlySummary from './components/MonthlySummary';
import ServiceFamily from './components/ServiceFamily';
import Subscription from './components/Subscription';
import YearlySummary from './components/YearlySummary';
import TopNav from './components/TopNav';
import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2" style={{ paddingRight: 0, paddingLeft: 0 }}> {/* Adjust the size here */}
            <Sidebar/>
          </div>
          <div className="col-10" style={{ paddingRight: 0, paddingLeft: 0 , borderBottom: '1px solid #f8f9fa'}}> {/* Adjust the size here */}
            <TopNav />
            <Content />
          </div>
        </div>
      </div>
    </Router>
  );
}

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/monthly-summary" element={<MonthlySummary />} />
      <Route path="/service-family" element={<ServiceFamily />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/yearly-summary" element={<YearlySummary />} />
    </Routes>
  );
};

export default App;
