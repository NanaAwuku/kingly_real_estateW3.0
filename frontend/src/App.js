import {  Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import PropertyCreationPage from './pages/CreateListing';

// import Marketplace from './Marketplace';
// import AboutUs from './AboutUs';
// import Learn from './Learn';
// import Blog from './Blog';
// import PropertyList from './PropertyList';


function App() {
  return (
    <>

      {/* Define your routes */}
      <Routes>
      <Route exact path="/" component={Index} />
        <Route exact path="/listing" component={PropertyCreationPage} />
        {/* <Route path="/about-us" component={AboutUs} />
        <Route path="/learn" component={Learn} />
        <Route path="/blog" component={Blog} />
        <Route path="/property-list" component={PropertyList} /> */}
      </Routes>
    </>
  );
}

export default App;
