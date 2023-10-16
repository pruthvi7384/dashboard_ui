
import { Container, Row } from "react-bootstrap";
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
                    <SideBarLayout col={2}/>
                    <DashboardMainLayout col={10}/>
               </Row>
            </Container>
        </>
    )
}

export default Dashboard;