// react 
import { useNavigate } from 'react-router-dom';


// components
import LoginPagesTemplate from '../../../components/loginpages-components/loginprocess-components/LoginPagesTemplate';
import Box from '../../../components/loginpages-components/loginprocess-components/Box';
import BoxContainer from '../../../components/loginpages-components/loginprocess-components/BoxContainer';
import TitleDescription from '../../../components/loginpages-components/loginprocess-components/TitleDescription';
import CTAButton from '../../../components/loginpages-components/loginprocess-components/CTAButton';
import LeftArrow from '../../../components/loginpages-components/loginprocess-components/LeftArrow';
import { CheckIcon } from '@heroicons/react/24/outline';


export default function ForgotPasswordCompletePage() {
    /** define **/
    const navigate = useNavigate();  

    /** function **/
    const toLogin = () => {
        navigate('/login');
    }

    return (
    <>
        <LoginPagesTemplate>

            <BoxContainer>
                <LeftArrow to="/forgot-password/start" />
                <Box>
                    <TitleDescription 
                        title="忘記密碼" 
                        description= ""
                         />
                    <div>
                        <CheckIcon className="bg-gray-50 text-violet-700 rounded-full p-5 mx-auto mb-10 h-20"/>
                        <p className='text-center'>您的密碼已更新</p>
                    </div>
                    <CTAButton onClick={toLogin} >登入</CTAButton>
                </Box>
            </BoxContainer>

        </LoginPagesTemplate>
    </>
    )
}