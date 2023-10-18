import { Col, Row } from "react-bootstrap";
import MenuIteam from "./MenuIteam";
import {navigationMenu} from "../serverData/data";
import { useLocation } from "react-router-dom";
import profile from "../assets/profile.jpg"

/**
 * SideBar Layout Components
 */
const SideBarLayout = ({isopen,setOpen,col}) =>{
    const location = useLocation();
    return(
        <>
            <Col xl={col} style={{display: isopen ? 'block' : ''}} className="sidebar_layout">
                <Row className="navigation_close" onClick={()=>{
                    setOpen(false)
                }}>
                     <i className="fa fa-times" aria-hidden="true"></i>
                </Row>
                <Row className="sidebar_title">
                    <h1><span><i className="fa fa-dashcube" aria-hidden="true"></i></span> Dashboard</h1>
                </Row>
                {
                    navigationMenu.map((data)=>(
                            <MenuIteam key={data.id} isActive = {location.pathname === data.href ? 'active' : ''} data={data}/>
                    ))
                }
                <div className="profile_layout">
                    <img src={profile} alt="" />
                    <div className="profile_content">
                        <h2>Pruthvi</h2>
                        <p>Software Developer</p>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default SideBarLayout;