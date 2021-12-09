import {oauth2 as Smart} from 'fhirclient';

export const authorize =  async() => {
    try {
        Smart.authorize({
            clientId: process.env.REACT_APP_CLIENT_ID,
            redirectUri: './app',
            scope: process.env.REACT_APP_SCOPE,
            iss: process.env.REACT_APP_ISS,
            launch:	'cdp2010025:encounter:resource'
        }); 
        
    } catch (error) {
        console.error(error);
    }
}
