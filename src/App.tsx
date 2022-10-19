import React, { Fragment } from 'react';
import BaseView from "./views/BaseView/BaseView";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseView />}>
          <Route index element={<BaseView />} />
          <Route path="blogs" element={<BaseView />} />
          <Route path="contact" element={<BaseView />} />
          <Route path="*" element={<BaseView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
