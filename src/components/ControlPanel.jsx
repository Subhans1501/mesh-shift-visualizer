import React from 'react';
const ControlPanel = ({ p, setP, q, setQ, onStart, step }) => {
  const isPerfectSquare = (n) => Math.sqrt(n) % 1 === 0;
  const isAnimating = step > 0 && step < 3;

  const handlePChange = (e) => {
    const newP = Number(e.target.value);
    setP(newP);
    if (q >= newP) setQ(newP - 1 > 0 ? newP - 1 : 1);
  };

  return (
    <div className="panel" style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h2>Simulation Controls</h2>
      
      <div className="control-group" style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Nodes (p): <strong>{p}</strong>
        </label>
        <input 
          type="range" 
          min="4" 
          max="64" 
          step="1" 
          value={p} 
          onChange={handlePChange} 
          disabled={isAnimating}
          style={{ width: '100%' }}
        />
        {!isPerfectSquare(p) && (
          <span className="error" style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px' }}>
            Warning: p must be a perfect square (4, 9, 16, 25, 36, 49, 64)
          </span>
        )}
      </div>

      <div className="control-group" style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Shift Amount (q): <strong>{q}</strong>
        </label>
        <input 
          type="range" 
          min="1" 
          max={p - 1} 
          step="1" 
          value={q} 
          onChange={(e) => setQ(Number(e.target.value))} 
          disabled={isAnimating}
          style={{ width: '100%' }}
        />
      </div>

      <button 
        onClick={onStart} 
        disabled={isAnimating || !isPerfectSquare(p)} 
        style={{ 
          marginTop: '10px', 
          padding: '12px', 
          width: '100%', 
          cursor: isAnimating || !isPerfectSquare(p) ? 'not-allowed' : 'pointer',
          backgroundColor: isAnimating || !isPerfectSquare(p) ? '#ccc' : '#1677ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}
      >
        {step === 0 ? "Start Shift Animation" : step === 3 ? "Reset Simulation" : "Animating..."}
      </button>
    </div>
  );
};

export default ControlPanel;