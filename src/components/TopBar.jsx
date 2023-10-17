import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchBox from './SearchBox'

/**
 * Dashboard Top Bar Component
 */
function TopBar() {
  return (
    <>
        <Row className="dashboard_top">
            <Col xl = {3}>
                <h1>Hello Shahrukh <span><i className="fa fa-hand-spock-o" aria-hidden="true"></i></span>,</h1>
            </Col>
            <Col xl = {3}>
                <SearchBox/>
            </Col>
        </Row>
    </>
  )
}

export default TopBar