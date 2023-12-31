import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Assignment-1', value: 60 },
  { name: 'Assignment-2', value: 60 },
  { name: 'Assignment-3', value: 50 },
  { name: 'Assignment-4', value: 58 },
  { name: 'Assignment-5', value: 46 },
  { name: 'Assignment-6', value: 54 },
  { name: 'Assignment-7', value: 58 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ff9e40'];

const PieChartComponent = () => {
  // const total = data.reduce((acc, cur) => acc + cur.value, 0);
  return (
      <PieChart width={600} height={600}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [value, name]} />
      </PieChart>
  );
};

export default PieChartComponent;
