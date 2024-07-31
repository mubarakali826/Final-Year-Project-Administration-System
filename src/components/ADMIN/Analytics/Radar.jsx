import React from 'react'
import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';
const radar = () => {
    const data = [
        { name: 'A', x: 21 },
        { name: 'B', x: 22 },
        { name: 'C', x: -32 },
        { name: 'D', x: -14 },
        { name: 'E', x: -51 },
        { name: 'F', x: 16 },
        { name: 'G', x: 7 },
        { name: 'H', x: -8 },
        { name: 'I', x: 9 },
    ];
 
  return (
       <RadarChart height={250} width={250} 
            outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="red"
                fill="red" fillOpacity={0.5} />
        </RadarChart>
  )
}

export default radar
