import Produtos from './pages/produtos';
import Finalizacao from './pages/finalizacao';
import StyleGlobal from './themes/styleGlobal';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <div>
        <nav>
          <Switch>
            <Route path="/" component={Produtos} exact />
            <Route path="/produtos" component={Produtos} exact />
            <Route path="/finalizacao" component={Finalizacao} exact />
          </Switch>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default App;
