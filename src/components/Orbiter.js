import React from 'react';
import './chordOrbiter.css';


const Orbiter = ({ notes, subIntervals }) => {
  //console.log(info[5])
  //console.log(subIntervals)
  var classy = notes[5]
  const data = notes
  console.log(data)
  return (

    <div id={`${classy || 'none'}`} >

      <div data-interval={data[3][0]} className='fourChords first'>
        <div className='hoverInterval'>{subIntervals[0] === 'sharp9' ? '#9' : subIntervals[0] === 'sharp11' ? '#11' : subIntervals[0]}</div>
        <div className='ext'
          style={{ background: `${data[4][0]}`, fontSize: '20px', width: 'auto', height: 'auto' }}>
          {data[3][0] === 'sharp9' ? '#9' : data[3][0] === 'sharp11' ? '#11' : data[3][0]}</div>
      </div>
      <div data-interval={data[3][1]} className='fourChords second'>
        <div className='hoverInterval'>{subIntervals[1] === 'sharp9' ? '#9' : subIntervals[1] === 'sharp11' ? '#11' : subIntervals[1]}</div>
        <div className='ext'
          style={{
            background: `${data[4][1]}`,
            fontSize: '20px', width: 'auto', height: 'auto'
          }}>
          {data[3][1] === 'sharp9' ? '#9' : data[3][1] === 'sharp11' ? '#11' : data[3][1]}
        </div>
      </div>
      <div data-interval={data[3][2]} className='fourChords third'>
        <div className='hoverInterval'>{subIntervals[2] === 'sharp9' ? '#9' : subIntervals[2] === 'sharp11' ? '#11' : subIntervals[2]}</div>
        <div className='ext'
          style={{
            background: `${data[4][2]}`, fontSize: '20px',
            width: 'auto', height: 'auto'
          }}>
          {data[3][2] === 'sharp9' ? '#9' : data[3][2] === 'sharp11' ? '#11' : data[3][2]}
        </div>
      </div>
      <div data-interval={data[3][3]} className='fourChords fourth'>
        <div className='hoverInterval'>{subIntervals[3] === 'sharp9' ? '#9' : subIntervals[3] === 'sharp11' ? '#11' : subIntervals[3]}</div>
        <div className='ext'
          style={{
            background: `${data[4][3]}`, fontSize: '20px',
            width: 'auto', height: 'auto'
          }}>
          {data[3][3] === 'sharp9' ? '#9' : data[3][3] === 'sharp11' ? '#11' : data[3][3]}
        </div>
      </div>

    </div>

  )

}

export default Orbiter;
