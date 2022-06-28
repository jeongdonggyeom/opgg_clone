import { useLocation } from "react-router-dom";

function Search()
{
    const state = useLocation();
    const info = state.state;

    return(
        <div>
            <div className="soloRank">
                
            </div>
            <div className="freeRank">

            </div>
        </div>
    )
}
export default Search;