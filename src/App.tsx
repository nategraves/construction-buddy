import React from 'react';

import { ValueProvider } from '~/contexts/index';
import { Calculator } from '~/ui/pages';

function App() {
  return (
    <ValueProvider>
      <Calculator />
    </ValueProvider>
  );
}

export default App;
