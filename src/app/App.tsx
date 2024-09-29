import '@fontsource/poppins';

import { ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { HOME_PATH, SINGIN_PATH, SINGUP_PATH, SPLASH_PATH } from '@/common/config/routes';
import animalMainClass from '@/styles/animalMainClass';
import animalMainTheme from '@/themes/animalMainTheme';

import AppLayout from './AppLayout';
import { Container } from './styledApp';

export type AppProps = {
  basePath?: string;
  children?: React.ReactElement;
  routerConfig?: object;
  routerFactory?: typeof createBrowserRouter;
};
const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path={SPLASH_PATH} element={<span> splah</span>} />
    <Route path={HOME_PATH} element={<span> home</span>} />
    <Route path={SINGIN_PATH} element={<span> singin</span>} />
    <Route path={SINGUP_PATH} element={<span> singup</span>} />
    <Route path={'*'} element={'not found'} />
  </Route>,
);

function App({
  routerConfig,
  basePath = '/animals/',
  routerFactory = createBrowserRouter,
}: AppProps = {}) {
  const router = useMemo(
    () =>
      routerFactory(routes, {
        basename: basePath,
        ...routerConfig,
      }),
    [basePath, routerConfig, routerFactory],
  );

  return (
    <ThemeProvider theme={animalMainTheme}>
      <Container className={animalMainClass}>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
