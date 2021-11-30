import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'resources/styles/GlobalStyles';
import { Helmet } from "react-helmet";
import Routes from 'routes';
function App() {
  return (
    <>
      <Helmet>
        <title>Briphy SMS</title>
      </Helmet>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
