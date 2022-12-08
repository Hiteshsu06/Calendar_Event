import Navbar from './container/Navbar';
import Content from './container/Contentbar';
import Error from './container/Error';
// import Practice from './container/Practice.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Practice/> */}
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/content" index element={<Content />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
