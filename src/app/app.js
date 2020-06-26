import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";

import ResizablePanels from './components/resizable.panels';
import SideMenu from './components/side.menu';
import MainViewport from './components/main.viewport';


function App() {
  return (
    <Container fluid={true}>
      <ResizablePanels>
          <SideMenu />
          <MainViewport />
        </ResizablePanels>
    </Container>
  );
};

export default App;
