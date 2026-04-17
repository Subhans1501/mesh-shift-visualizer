import React from 'react';
import { calculateShifts } from '../utils/shiftLogic';
import { ArrowRight, ArrowDown } from 'lucide-react';

const MeshGrid = ({ p, q, gridData, step }) => {
  const { sqrtP } = calculateShifts(p, q);
  const getStatusText = () => {
    if (step === 0) return "Initial State: Ready to shift";
    if (step === 1) return "Stage 1 (Row Shift): Data moving horizontally...";
    if (step === 2) return "Stage 2 (Column Shift): Data moving vertically...";
    if (step === 3) return "Final State: Shift Complete";
    return "";
  };

  return (
    <div className="panel" style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h2>Mesh Grid Visualization</h2>
      
      <div style={{ padding: '10px', backgroundColor: '#e6f4ff', color: '#1677ff', borderRadius: '4px', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>
        {getStatusText()}
      </div>
      
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${sqrtP}, 1fr)`, 
          gap: '15px' 
        }}
      >
        {gridData.map((dataItem, index) => (
          <div 
            key={index} 
            style={{ 
              backgroundColor: '#fafafa', 
              border: '2px solid #e8e8e8', 
              borderRadius: '8px', 
              padding: '15px', 
              textAlign: 'center', 
              position: 'relative', 
              minHeight: '100px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}
          >
            <span style={{ fontSize: '0.8rem', color: '#888', position: 'absolute', top: '5px', left: '5px' }}>
              Node {index}
            </span>
            <div 
              style={{ 
                backgroundColor: step === 1 ? '#f6ffed' : step === 2 ? '#fff2e8' : '#e6f4ff', 
                color: step === 1 ? '#52c41a' : step === 2 ? '#fa541c' : '#1677ff', 
                padding: '8px 12px', 
                borderRadius: '4px', 
                fontWeight: 'bold',
                transition: 'all 0.5s ease',
                transform: step === 1 ? 'translateX(5px)' : step === 2 ? 'translateY(5px)' : 'none'
              }}
            >
              Data {dataItem}
            </div>
            {step === 1 && (
              <ArrowRight style={{ position: 'absolute', right: '-15px', top: '40%', color: '#52c41a', zIndex: 10 }} />
            )}
            {step === 2 && (
              <ArrowDown style={{ position: 'absolute', bottom: '-15px', left: '40%', color: '#fa541c', zIndex: 10 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeshGrid;