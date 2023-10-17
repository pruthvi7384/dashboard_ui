import { Col, Row } from "react-bootstrap";
import TopBar from "../../components/TopBar";
import VisulizationCard from "../../components/VisulizationCard";
import { dashboardVisulization } from "../../serverData/data";


/**
 * Dashboard Main Content Layout
 */
const DashboardMainLayout = ({col}) =>{
    return(
        <>
            <Col xl={col} className="dashboard_main_layout">
                <TopBar/>
                <Row className="dashboard_card_visulization">
                    {
                        dashboardVisulization.map((data)=>(
                            <VisulizationCard col={3} data={data}/>
                        ))
                    }
                </Row>
            </Col>
        </>
    )
}

export default DashboardMainLayout;