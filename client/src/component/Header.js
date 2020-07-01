import React from 'react';

const Header = () => {
    return(
        <header className="Summary-header">
                <ul>
                    <li className="Summary-Header-Tab-Home">
                        <span className="Summary-Header-Tab-Home-Span">home</span>
                    </li>
                    <li className="Summary-Header-Tab-Summary">
                        <span className="Summary-Header-Tab-Summary-Span">summary</span>
                    </li>
                    <li className="Summary-Header-Tab-Calculator">
                        <span className="Summary-Header-Tab-Calculator-Span">Calculator</span>
                    </li>
                    <li className="Summary-Header-Tab-Solution">
                        <span className="Summary-Header-Tab-Solution-Span">Solution</span>
                    </li>
                    <li className="Summary-Header-Tab-Login">
                    
                        <span className="Summary-Header-Tab-Login-Span">Login</span>
                        
                        <span className="Summary-Header-Tab-Logout-Span">Logout</span>
                    
                    </li>
                </ul>
            </header>
    )
}

export default Header;