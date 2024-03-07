import { createContext } from 'react';
import styles from './App.module.css';
import { useApp } from './data/services/hook/useApp.page';
import Index from './ui/pages';

export const AppContext = createContext({})

function App() {
  const useAppValues = useApp();

  return (
    <div className="App">
      <header className={styles.header}>
        <h1>Treina<span>Music</span></h1>
      </header>
      <AppContext.Provider value={useAppValues}>
        <Index musics={useAppValues.musicList}/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
