import { Col, Row } from "react-bootstrap";
import SearchBox from "../../components/SearchBox"

/**
 * Dashboard Main Content Layout
 */
const DashboardMainLayout = ({col}) =>{
    return(
        <>
            <Col xl={col} className="dashboard_main_layout">
                <Row className="dashboard_top">
                    <Col xl = {3}>
                        <h1>Hello Shahrukh <span><i className="fa fa-hand-spock-o" aria-hidden="true"></i></span>,</h1>
                    </Col>
                    <Col>
                        <SearchBox/>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default DashboardMainLayout;