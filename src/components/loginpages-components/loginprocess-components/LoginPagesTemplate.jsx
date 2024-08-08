// components
import TopBar from '../../../components/loginpages-components/loginprocess-components/TopBar';

export default function LoginPagesTemplate({ children }) {

    return (
    <>
        <div className="
        relative
        bg-gray-50 
        flex min-h-screen flex-1 flex-col justify-center
        sm:px-6 lg:px-8">
        
            <div className="container m-auto self-center absolute top-4 sm:top-8 ">
                <TopBar />
            </div>
            <div className="my-24">
               { children } 
            </div>
            
        </div>
    </>
    )
}
