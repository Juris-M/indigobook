import { loginOK } from './login.js';
import { pullreq } from './saver';

export default async () => {
    if (loginOK()) {
        var cite_id = window.localStorage.getItem('cite_id');
        var result = await pullreq(cite_id);
        if (result && result.length) {
            console.log(`saved url: ${result[0].html_url}`);
        }
    }
};
