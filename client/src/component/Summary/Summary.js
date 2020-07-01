import React from 'react';
import Chart from "./Chart"

const Summary = () => {

    return (
        <div className="Summary">
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
            <main className="Summary-main">
            
            <Chart />
            
            
            
            
            
            
            
            
            
            </main>
            <footer className="Summary-footer">발</footer>
        </div>
    )
} 

export default Summary;