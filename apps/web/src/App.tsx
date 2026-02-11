import './assets/styles/index.css';
import { AppProvider } from './providers/AppProvider';
import AppRouter from './routes';
const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
