import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { calculateShifts } from '../utils/shiftLogic';

const ComplexityPanel = ({ p, q }) => {
  const { rowShift, colShift, ringSteps, meshSteps } = calculateShifts(p, q);
  const chartData = [
    { name: 'Ring Shift', steps: ringSteps, color: '#ff4d4f' },
    { name: 'Mesh Shift', steps: meshSteps, color: '#52c41a' }
  ];

  return (
    <div className="panel" style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd', marginTop: '20px' }}>
      <h2>Part (b): Complexity Analysis</h2>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <p><strong>Row Shift Amount:</strong> {rowShift} steps</p>
        <p><strong>Column Shift Amount:</strong> {colShift} steps</p>
        <p><strong>Total Mesh Communication Steps:</strong> {meshSteps}</p>
        <hr />
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
          <strong>Formula:</strong> Mesh steps = (q mod √p) + ⌊q/√p⌋ = {rowShift} + {colShift} = {meshSteps}
        </p>
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
          <strong>Ring Comparison:</strong> Ring steps = min(q, p-q) = {ringSteps}
        </p>
      </div>

      <div style={{ height: '250px', width: '100%' }}>
        <h4 style={{ textAlign: 'center' }}>Mesh vs Ring Step Count</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={80} />
            <Tooltip cursor={{fill: 'transparent'}} />
            <Bar dataKey="steps" radius={[0, 4, 4, 0]} barSize={40}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p style={{ fontSize: '12px', marginTop: '10px', color: '#666' }}>
        *The Mesh is generally more efficient for larger p because it breaks a linear path into √p sub-paths.
      </p>
    </div>
  );
};

export default ComplexityPanel;