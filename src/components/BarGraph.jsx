
import { Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { barGraph } from "../serverData/data";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const BarGraph = ({col}) => {
    
    const options = {
        scales: {
            x: {
                type: 'category',
                grid: {
                display: false, // Disable x-axis grid lines
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                display: false, // Disable y-axis grid lines
                },
                ticks: {
                    display: false, // Disable x-axis labels
                  },
            },
        },
        plugins: {
            legend: {
              display: false, // Disable dataset labels
            },
          },
    }
    return(
        <>
            <Col xl = {col} className="graph_bar">
                <div className="heading">
                    <div className="heading_graph">
                        <h2>Overview</h2>
                        <p>Monthly Earning</p>
                    </div>
                    <div className="filter">
                        <h2>Quarterly <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span></h2>
                    </div>
                </div>
                <div className="bar_graph_body">
                    <Bar data={barGraph} options={options}/>
                </div>
            </Col>
        </>
    )
}

export default BarGraph;