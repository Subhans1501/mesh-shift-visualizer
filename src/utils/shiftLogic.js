
export const calculateShifts = (p, q) => {
  const sqrtP = Math.sqrt(p);
  const rowShift = q % sqrtP;
  const colShift = Math.floor(q / sqrtP);
  
  const ringSteps = Math.min(q, p - q);
  const meshSteps = rowShift + colShift;

  return { sqrtP, rowShift, colShift, ringSteps, meshSteps };
};

export const generateInitialGrid = (p) => {
  return Array.from({ length: p }, (_, i) => i);
};

export const calculateStage1Grid = (p, q, initialGrid) => {
  const { sqrtP, rowShift } = calculateShifts(p, q);
  const newGrid = new Array(p).fill(null);
  for (let i = 0; i < p; i++) {
    const r = Math.floor(i / sqrtP);
    const c = i % sqrtP;
    const targetC = (c + rowShift) % sqrtP;
    const targetIdx = r * sqrtP + targetC;
    newGrid[targetIdx] = initialGrid[i];
  }
  return newGrid;
};
export const calculateStage2Grid = (p,q,stage1Grid) => {
  const { sqrtP, colShift } = calculateShifts(p, q);
  const newGrid = new Array(p).fill(null);
  for (let i = 0; i < p; i++) {
    const r=Math.floor(i/sqrtP);
    const c=i%sqrtP;
    const targetR=(r+colShift)%sqrtP;
    const targetIdx=targetR*sqrtP+c;
    newGrid[targetIdx]=stage1Grid[i];
  }
  return newGrid;
};