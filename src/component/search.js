import { useLocation } from "react-router-dom";
import Nav from "./Nav";

function Search()
{
    const state = useLocation();
    const info = state.state;

    return(
        <div>
            <Nav/>
            <div className="soloRank">
                
            </div>
            <div className="freeRank">

            </div>
        </div>
    )
}
export default Search;