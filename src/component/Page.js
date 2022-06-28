import Nav from "./Nav";
import Main from './Main';
import Community from "./Community";
import Footer from "./Footer";

function Page()
{
    return(
        <div className="root-div">
            <Nav/>
            <Main/>
            <Community />
            <Footer />
        </div>
    )
}
export default Page;