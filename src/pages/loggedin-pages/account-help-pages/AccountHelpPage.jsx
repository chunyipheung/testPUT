import LoggedInHeader from "../../../components/loggedinpages-components/loggedin-public/navbar/LoggedInHeader";
import Header from "../../../components/homepage-components/header/Header";
import TopBorder from "../../../components/loggedinpages-components/loggedin-public/decoration/TopBorder";

export default function AccountHelpPage() {

    return(
        <>
        {/* <LoggedInHeader whichPageNow="accountHelp"/> */}
        <Header whichPageNow="accountHelp" isAccountPage={true} />
        <TopBorder />
        <div>account help page</div>
        </>
        
    );

}