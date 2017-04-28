import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import axios from 'axios';
import config from './config';

const getApiUrl = contestID => {
 if (contestID) {
    return    `${config.serverUrl}/api/contests/${contestID}`;
 }
     return `${config.serverUrl}/api/contests`;
 };

const getInitialData = (contestID, apiData) => {
    if(contestID) {
        return {
            currentContestId: apiData.id,
            contests: {
                [apiData.id]: apiData
            }
        }
    }
    return {
        contests: apiData.contests
    }
};


const serverRender = (contestID) =>
    axios.get(getApiUrl(contestID))
        .then(resp => {
            const initialData = getInitialData(contestID, resp.data);
            return{
                initialMarkup: ReactDOMServer.renderToString(
                <App initialData={initialData} />
                ),
                initialData: resp.data
            };
        });
        
export default serverRender;