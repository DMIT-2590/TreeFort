import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function DeveloperAPI() {
    return (
        <BrowserOnly>
            {() => {window.location.replace('https://treefort-api.readme.io/reference/getting-started-with-your-api')}}
        </BrowserOnly>
    );
}