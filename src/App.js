import logo from './logo.svg';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import MenuButton from './components/MenuButton'
import { useState } from 'react';

const pages = [
  {
    path: "page-1",
    name: "Page 1",
    component: Page1
  },
  {
    path: "page-2",
    name: "Page 2",
    component: Page2
  },
  {
    path: "page-3",
    name: "Page 3",
    component: Page3
  }
];

const defaultPage = pages[0];

function App() {

  const [page, setPage] = useState(defaultPage);



  return (
    <div className="App">
      <header>
        {
          pages.map((page, index) => <MenuButton key={page.path} text={page.name}onClick={() => {
            setPage(page);
            window.history.pushState({}, undefined, page.path)
          }} />)
        }
      </header>
        <page.component />
    </div>
  );
}

export default App;
