
import {Col, Container, Row } from "react-bootstrap";
import SideBarLayout from "../../components/SideBarLayout";
import DashboardMainLayout from "./DashboardMainLayout";

/**
 * Dashboard Layout
 */
const Dashboard = () =>{
    return(
        <>
            <Container fluid className="layout_main">
               <Row>
                    <Col className="navigation_menu">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </Col>
                    <SideBarLayout col={2}/>
                    <DashboardMainLayout col={10}/>
               </Row>
            </Container>
        </>
    )
}

export default Dashboard;