import React, { useState, useEffect } from 'react';
import ControlPanel from './components/ControlPanel';
import ComplexityPanel from './components/ComplexityPanel';
import MeshGrid from './components/MeshGrid';
import { generateInitialGrid, calculateStage1Grid, calculateStage2Grid } from './utils/shiftLogic';
function App() {
  const [p, setP] = useState(16);
  const [q, setQ] = useState(5);
  const [step, setStep] = useState(0);
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    if (step === 0) {
      setGridData(generateInitialGrid(p));
    }
  }, [p, q, step]);

  const handleStartShift = () => {
    if (step === 3) {
      setStep(0); 
      return;
    }
    setStep(1);
    const stage1Data = calculateStage1Grid(p, q, generateInitialGrid(p));
    setGridData(stage1Data);
    setTimeout(() => {
      setStep(2);
      const stage2Data = calculateStage2Grid(p, q, stage1Data);
      setGridData(stage2Data);
      setTimeout(() => {
        setStep(3);
      }, 1500);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333' }}>Mesh Circular Shift Visualizer</h1>
      </header>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ControlPanel p={p} setP={setP} q={q} setQ={setQ} onStart={handleStartShift} step={step} />
          <ComplexityPanel p={p} q={q} />
        </div>
        
        <div style={{ flex: '2', minWidth: '500px' }}>
          <MeshGrid p={p} q={q} gridData={gridData} step={step} />
        </div>
      </div>
    </div>
  );
}

export default App;