import React from 'react';
import './app.css';

import ResizablePanels from './resizable_panels/resizable.panels';

function App() {
  return (
    <div className="App">
      <ResizablePanels>
          <div>
            Menu
          </div>
          <div>
            Main context
          </div>
        </ResizablePanels>
    </div>
  );
}

export default App;
