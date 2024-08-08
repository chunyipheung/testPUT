// react 
import { useLocation,useNavigate } from 'react-router-dom';

// components
import LoginPagesTemplate from '../../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../../components/loginpages-components/loginprocess-components/TitleDescription';
import CTAButton from '../../../components/loginpages-components/loginprocess-components/CTAButton';
import LeftArrow from '../../../components/loginpages-components/loginprocess-components/LeftArrow';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

// backend
import {obfuscateEmail} from '../../../backend/expression';


export default function ForgotLoginEmailCompletePage() {
    /** define **/
    const location = useLocation();
    const navigate = useNavigate();  

    const { sendToEmail,canLeftArrow } = location.state.params || {};

    /** function **/
    const toLogin = () => {
        navigate('/login');
    }

    return (
    <>
        <LoginPagesTemplate>

            <BoxContainer>
                {canLeftArrow && <LeftArrow to="/forgot-login-email/start" />}
                <Box>
                    <TitleDescription 
                        title="忘記登入電郵" 
                        description= ""
                         />
                    <div>
                        <PaperAirplaneIcon className="bg-gray-50 text-violet-700 rounded-full p-5 mx-auto mb-10 h-20"/>
                        <p>我們已將您的登入電郵發送到{obfuscateEmail(sendToEmail)}。請查閱電郵。</p>
                    </div>
                    <CTAButton onClick={toLogin}>登入</CTAButton>
                </Box>
            </BoxContainer>

        </LoginPagesTemplate>
    </>
    )
}