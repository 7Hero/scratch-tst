import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux'
import {store} from './store'
const container = document.getElementById('root')
const root = createRoot(container as Element);

root.render(
  <Provider store={store}>
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
  </Provider>
);
