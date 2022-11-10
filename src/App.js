import './styles/global.styles.css';

import { RoutesControl } from './routes/routesControl';
import { UsersProvider } from './contexts/users';

function App() {
  return (
    <UsersProvider>
      <RoutesControl />
    </UsersProvider>
  );
}

export default App;
