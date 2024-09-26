import React from 'react'
import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';
const radar = () => {
    const data = [
        { name: 'AR', x: 21 },
        { name: 'Web dev', x: 22 },
        { name: 'ML', x: -32 },
        { name: 'AI', x: -14 },
        { name: 'Android', x: 10 },
        { name: 'Desktop', x: -100 },
        { name: 'IOS', x: 7 },
        { name: 'IOT', x: -8 },
        { name: 'Cross platfrom ', x: 9 },
    ];
 
  return (
       <RadarChart height={250} width={250} 
            outerRadius="90%" data={data} className='text-[0.48rem]'>
            <PolarGrid />
            <PolarAngleAxis dataKey="name"/>
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="teal"
                fill="#021b48" fillOpacity={0.6} />
        </RadarChart>
  )
}

export default radar
