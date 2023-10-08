import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Structure from './Component/Structure';
import Home from './Home';
import Analytics from './Analytics';
import Explore from './Explore';
import Help from './Help';
import Setting from './Setting';
import Amazon from './Amazon';
import Inbox from './Inbox';
import Invinity from './Invinity';
import Shop from './Shop';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure {...{ collapsed, setCollapsed }} />}>
          <Route index element={<Home {...{ collapsed }} />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="explore" element={<Explore />} />
          <Route path="help" element={<Help />} />
          <Route path="setting" element={<Setting />} />
          <Route path="amazon" element={<Amazon />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="invinity" element={<Invinity />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
