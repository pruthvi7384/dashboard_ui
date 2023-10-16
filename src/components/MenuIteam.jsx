import { Link } from "react-router-dom";


const MenuIteam = ({data,isActive}) => {
    return(
        <>
            <Link to={data.href}>
                <div className={`iteam_row ${isActive}`}>
                    <div className="icon">
                        {data.icon}
                    </div>
                    <div className="title">
                        {data.title}
                    </div>
                    {
                        isActive != 'active'
                        &&
                        <div className="drowable">
                            {">"}
                        </div>
                    }
                </div>
            </Link>
        </>
    )
}

export default MenuIteam;