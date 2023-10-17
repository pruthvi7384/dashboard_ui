import { Row } from "react-bootstrap"
import VisulizationCard from "../../components/VisulizationCard";
import { dashboardVisulization } from "../../serverData/data";

const DashboardData = () => {
    return(
        <>
             <Row className="dashboard_card_visulization">
                    {
                        dashboardVisulization.map((data)=>(
                            <VisulizationCard key = {data.id} col={3} data={data}/>
                        ))
                    }
                </Row>
        </>
    )
}

export default DashboardData;