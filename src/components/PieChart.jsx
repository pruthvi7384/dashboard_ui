import { Col } from "react-bootstrap";

const PieChart = ({col}) => {
    return(
        <>
            <Col xl = {col} className="graph_pie">
                <div className="heading">
                    <h2>Customers</h2>
                    <p>Customers that buy products</p>
                </div>
                <div className="pie_chart_body">
                    
                </div>
            </Col>
        </>
    )
}

export default PieChart;