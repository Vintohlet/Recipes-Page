import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div className="container">
            <div className="nf-container">
                <h1 className="nf-title">Page Not Found! <Link to="/">Go to home</Link></h1>
            </div>
        </div>
    )
}