import { useState } from 'react'
import './App.css'
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p data-testid="search-text">Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App
