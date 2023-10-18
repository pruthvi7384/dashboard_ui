
import {Col, Container, Row } from "react-bootstrap";
import SideBarLayout from "../../components/SideBarLayout";
import DashboardMainLayout from "./DashboardMainLayout";
import { useState } from "react";

/**
 * Dashboard Layout
 */
const Dashboard = () =>{
    const [open, setOpen] = useState(false);
    return(
        <>
            <Container fluid className="layout_main">
               <Row>
                    <Col className="navigation_menu" onClick={()=>{
                            setOpen(true)
                        }}>
                        <i className="fa fa-bars" aria-hidden="true" ></i>
                    </Col>
                    <SideBarLayout isopen={open} setOpen={setOpen} col={2}/>
                    <DashboardMainLayout col={10}/>
               </Row>
            </Container>
        </>
    )
}

export default Dashboard;