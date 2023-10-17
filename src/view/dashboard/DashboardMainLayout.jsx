import { Col } from "react-bootstrap";
import TopBar from "../../components/TopBar";
import DashboardData from "./DashboardData";
import GraphDashboard from "./GraphDashboard";


/**
 * Dashboard Main Content Layout
 */
const DashboardMainLayout = ({col}) =>{
    return(
        <>
            <Col xl={col} className="dashboard_main_layout">
                <TopBar/>
                <DashboardData/>
                <GraphDashboard/>
            </Col>
        </>
    )
}

export default DashboardMainLayout;