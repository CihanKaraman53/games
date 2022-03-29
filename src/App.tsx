import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./common/theme";
import ProductList from "./pages/ProductList";
import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <ProductList></ProductList>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
