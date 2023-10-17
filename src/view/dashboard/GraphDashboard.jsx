import { Row } from "react-bootstrap";
import BarGraph from "../../components/BarGraph";
import PieChart from "../../components/PieChart";

const BarGraphDashboard = () => {
    return(
        <Row className="dashbord_graph_visulization">
            <BarGraph col = {8}/>
            <PieChart xl = {4}/>
        </Row>
    )
}

export default BarGraphDashboard;