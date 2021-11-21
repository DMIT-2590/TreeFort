import React from 'react';
import { Route } from 'react-router';

export default function DeveloperAPI() {
    return (
        <Route path='/developer-api' component={() => { 
            window.location.replace('https://treefort-api.readme.io/reference/getting-started-with-your-api'); 
            return null;
        }}/>
    );
}