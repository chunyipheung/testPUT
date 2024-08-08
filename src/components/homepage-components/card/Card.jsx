import { Link } from "react-router-dom";

export default function Card({imageSrc, imageAlt, name, description, href}) {
    return (
        <div className="card lg:w-96 md:w-80 bg-base-100 shadow-md">
            <figure><img src={imageSrc} alt={imageAlt} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <Link to={href} className="card-actions justify-end">
                    <button className="btn btn-primary">查詢報價</button>
                </Link>
            </div>
      </div> 
    );
}