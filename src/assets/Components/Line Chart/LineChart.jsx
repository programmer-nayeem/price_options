import {LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Student 1', mathMarks: 85, physicsMarks: 78, chemistryMarks: 90 },
        { id: 2, name: 'Student 2', mathMarks: 78, physicsMarks: 82, chemistryMarks: 85 },
        { id: 3, name: 'Student 3', mathMarks: 92, physicsMarks: 88, chemistryMarks: 92 },
        { id: 4, name: 'Student 4', mathMarks: 65, physicsMarks: 70, chemistryMarks: 75 },
        { id: 5, name: 'Student 5', mathMarks: 70, physicsMarks: 75, chemistryMarks: 80 },
        { id: 6, name: 'Student 6', mathMarks: 88, physicsMarks: 92, chemistryMarks: 89 },
        { id: 7, name: 'Student 7', mathMarks: 76, physicsMarks: 81, chemistryMarks: 78 },
        { id: 8, name: 'Student 8', mathMarks: 93, physicsMarks: 95, chemistryMarks: 94 },
        { id: 9, name: 'Student 9', mathMarks: 82, physicsMarks: 89, chemistryMarks: 87 },
        { id: 10, name: 'Student 10', mathMarks: 71, physicsMarks: 75, chemistryMarks: 73 }
      ];      

    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <Line type="monotone" dataKey="mathMarks" stroke="#82ca9d" className='mb-4'/>
                <Line type="monotone" dataKey="physicsMarks" stroke="#8rc49d" />
                <Line type="monotone" dataKey="chemistryMarks" stroke="#84da9d" />
            </LChart>
        </div>
    );
};

export default LineChart;
