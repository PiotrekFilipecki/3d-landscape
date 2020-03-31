import React, { Suspense } from 'react';
import logo from './logo.svg';
import { Canvas, Dom } from "react-three-fiber";
import './App.css';

import Controls from "./components/Controls";
import Scene from './components/Scene';

function App() {
    return (
      <Canvas
        camera={{ zoom: 40, position: [0, 0, 500] }} 
      >
          <Suspense
            fallback={
              <Dom
                center
                className="loading"
                children="Loading..."
              /> 
            }
          >
            <Controls />
            <Scene /> 
          </Suspense>
      </Canvas>
    );
}

export default App;
