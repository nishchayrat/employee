import ListEmployeeComponent from './component/ListEmployeeComponent';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';
function App() {
  return (
    <div>
        <Header />
        <div className='container'>
          <ListEmployeeComponent />
        </div>
        <Footer />
    </div>
  );
}

export default App;
