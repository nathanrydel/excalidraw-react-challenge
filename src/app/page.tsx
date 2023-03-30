'use client'
import { useState } from 'react';
import './page.css';

export default function App() {
  const [cells, setCells] = useState(['a', 'b', 'c']);

  function changeCellContent(newCellValue: string, indexToUpdate: number) {
    setCells((prevCells) => 
      prevCells.map((cell, idx) => (idx === indexToUpdate ? newCellValue : cell)))
  }

  function handlePlusClicked(idx: number) {
    setCells((prevCells) => [
      ...prevCells.slice(0, idx + 1),
      '_',
      ...prevCells.slice(idx + 1),
    ])
  }

  const combineStrings = cells.join('');

  return (
    <main className='App'>
      <section className='cells'>
        {cells.map((cell, idx) => (
          <div key={idx} className='cell'>
            <input onChange={(e) => changeCellContent(e.currentTarget.value, idx)} value={cell}></input>
            {idx < cells.length - 1 && (
              <span className='plus' onClick={() => handlePlusClicked(idx)}>
                &nbsp;
              </span>
            )}
          </div>
        ))}
        
      </section>
      <section className='CombinedArea'>
        <div className="output">{combineStrings}</div>
      </section>
    </main>
  );
}
