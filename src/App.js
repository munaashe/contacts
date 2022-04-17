import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ContactsList />} />
        <Route path='/add' element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;
