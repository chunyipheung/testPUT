import { Link } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';


export default function LeftArrow({ to }) {

    return(
    <div className='h-10 mb-4'>
        <Link to={to} >
            <ArrowLeftCircleIcon className='h-full'/>
        </Link>
    </div>
    );


}