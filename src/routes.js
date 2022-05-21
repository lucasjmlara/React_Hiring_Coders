import React from "react";
import { Swith, Route, BrowserRouter } from 'react-router-dom';
import Repos from './Repos';

export default function Routes() {
    return(
        <BrowserRouter>
            <Swith>
                <Route path='/repos' component={Repos}/>
            </Swith>
        </BrowserRouter>
    );
}