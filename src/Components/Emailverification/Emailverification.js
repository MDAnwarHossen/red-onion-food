import React from 'react';
import './Emailverification.css';
import { Link } from 'react-router-dom';


const Emailverification = (props) => {
    const fullEmailId = props.user&&props.user.email;
    if (fullEmailId) {
        var emailProvider = fullEmailId.slice(fullEmailId.search("@")+1 , fullEmailId.length);
    console.log(emailProvider);
        
    }
    
    
    
    return (
        
        <div className= "emailverificationDiv row">
            <div className="col-12 text-center">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.62 174"><title>Untitled-2</title><g className="cls-1"><rect className="cls-2" x="0.6" y="0.5" width="256" height="173" rx="8.5"/><path d="M249,2a8,8,0,0,1,8,8V166a8,8,0,0,1-8,8H10a8,8,0,0,1-8-8V10a8,8,0,0,1,8-8H249m0-1H10a9,9,0,0,0-9,9V166a9,9,0,0,0,9,9H249a9,9,0,0,0,9-9V10a9,9,0,0,0-9-9Z" transform="translate(-0.9 -1)"/></g><path className="cls-3" d="M.5.5" transform="translate(-0.9 -1)"/><polyline className="cls-4" points="0.27 2.29 129.83 86.97 257.35 4.47"/><line className="cls-5" x1="3.6" y1="170.5" x2="105.6" y2="69.5"/><g className="cls-6"><line className="cls-7" x1="255.6" y1="170.5" x2="154.6" y2="70.5"/></g></svg>
            </div>
        
            <div className="col-12 text-center">
                    <div className="text-center p-3 emailverification">
                        <h1>Thanks for signing up!, </h1>
                        <p>You're almost ready to get started. Please chick on the button below to verify your email address and enhoy exclusive service with us!</p>
                        {/* <button>GO TO {emailProvider} </button> */}
                        <a href={`http://${emailProvider}`} target="_blank" rel='noreferrer'>GO TO {emailProvider}</a>
                        <p>Thanks,
                            <br />
                            The Company Team
                        </p>
                    </div>
                </div>


           
        </div>

    );
};

export default Emailverification;