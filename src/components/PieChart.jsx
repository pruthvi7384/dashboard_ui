import { Col } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { pieGraph } from "../serverData/data";

const PieChart = ({col}) => {
    const options = {
        plugins: {
            legend: {
              display: false, // Disable dataset labels
            },
          },
    }
    return(
        <>
            <Col xl = {col} className="graph_pie">
                <div className="heading">
                    <h2>Customers</h2>
                    <p>Customers that buy products</p>
                </div>
                <div className="pie_chart_body">
                    <Pie data={pieGraph} options={options}/>
                </div>
            </Col>
        </>
    )
}

export default PieChart;