import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
// import { useAppSelector } from '../../hooks/hooks';
import MainCard from '../main-card';
import NotFoundPage from '../notfound-page';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainCard/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
