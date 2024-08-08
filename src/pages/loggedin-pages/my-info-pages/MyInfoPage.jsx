import LoggedInHeader from "../../../components/loggedinpages-components/loggedin-public/navbar/LoggedInHeader";
import Header from "../../../components/homepage-components/header/Header";
import TopBorder from "../../../components/loggedinpages-components/loggedin-public/decoration/TopBorder";

export default function MyInfoPage() {

    return(
        <>
        {/* <LoggedInHeader whichPageNow="myInfo"/> */}
        <Header whichPageNow="myInfo" isAccountPage={true}/>
        <TopBorder />
        <div>my info page</div>
        </>
        
    );

}