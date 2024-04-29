import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#00c49f','#ff8042','#ffbb28']

const PieChart = props => {
    const {data} = props

    return (
        <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
           <PieChartComponent width={400} height={350}>
             <Pie
               data={data}
               innerRadious={0}
               outerRadious={100}
               datakey="value"
            >
              {data.map((entry, index) =>(
                <Cell key={cell-${index}} fill={COLORS[index % COLORS.length]}  />
              ))}
              </Pie>
              <tooltip />
              <Legend verticalAlign="button" height={36} />           
           </PieChartComponent>
        </div>
    )
}

export default PieChart