import React from 'react';

import { ValueProvider } from 'src/contexts';
import { Calculator } from 'src/ui';

function App() {
  return (
    <ValueProvider>
      <Calculator />
    </ValueProvider>
  );
}

export default App;
