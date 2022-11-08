import "./App.css";
import {  publicRoute } from "./route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { DefaultLayout } from "./components/Layout";

export default function App(props) {
  return (
    <Router>
      {props.children}
      <Routes>
        {publicRoute.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          const Page = route.component;
          return (
            <Route
              path={route.path}
              key={index}             
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}
