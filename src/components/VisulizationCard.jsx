import { Col } from "react-bootstrap";

const VisulizationCard = ({col,data}) => {
    return(
        <>
            <Col xl = {col} className="card_data_visulization" key={data.id}>
                <div className="card_icon" style={{backgroundColor:`${data.icon_background}`,color:`${data.icon_color}`}}>
                    {data.icon}
                </div>
                <div className="informaction_data">
                    <h2>{data.title}</h2>
                    <h1><span><i className="fa fa-usd" aria-hidden="true"></i></span>{data.data}{"K"}</h1>
                    <p><span style={{color:data.monthData === "2%" ? '#d80014' : '#00a746'}}>{data.monthData === "2%" ? <i className="fa fa-arrow-down" aria-hidden="true"></i> : <i className="fa fa-arrow-up" aria-hidden="true"></i>} {data.monthData} </span> {"this month"}</p>
                </div>
            </Col>
        </>
    )
}

export default VisulizationCard;