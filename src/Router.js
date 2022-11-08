import RouteIndex from "./Route"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function Router(props) {
  return (
    <BrowserRouter>
      {props.children}
      <Routes>
        <Route exact path="/" element={(<div>Test</div>)} />
      </Routes>
    </BrowserRouter>
  );
}
