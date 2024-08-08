import LoggedInHeader from "../../../components/loggedinpages-components/loggedin-public/navbar/LoggedInHeader";
import Header from "../../../components/homepage-components/header/Header";
import TopBorder from "../../../components/loggedinpages-components/loggedin-public/decoration/TopBorder";

export default function AccountClaimsPage() {

    return(
        <>
            {/* <LoggedInHeader whichPageNow="accountClaims"/> */}
            <Header whichPageNow="accountClaims" isAccountPage={true} />
            <TopBorder />
            <div>account claims page</div>
        </>
        
    );

}