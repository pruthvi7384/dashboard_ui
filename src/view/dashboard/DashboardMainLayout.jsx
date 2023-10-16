import { Col } from "react-bootstrap";

/**
 * Dashboard Main Content Layout
 */
const DashboardMainLayout = ({col}) =>{
    return(
        <>
            <Col xl={col} className="dashboard_main_layout">
                <p>Dashboard Main Layout</p>
            </Col>
        </>
    )
}

export default DashboardMainLayout;