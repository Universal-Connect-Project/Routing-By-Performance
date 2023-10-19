var CryptoJS = require('crypto-js');
const userId = 'your_userid';
const accessKey = 'your_accessKey';
if (true) {
    const url = `${pm.request.url}`;
    const httpMethod = pm.request.method;
    function buildAuthCode() {
        var authPath = url.substring(url.lastIndexOf('/')).toLowerCase();
        var text = httpMethod.toUpperCase() + '\n' + authPath;
        let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, CryptoJS.enc.Base64.parse(accessKey));
        hmac.update(text);
        var b64Sig = CryptoJS.enc.Base64.stringify(hmac.finalize());
        var authString = 'FIApiAUTH:' + userId + ':' + b64Sig + ':' + authPath;
        return authString;
    }
    let header = {
        key: "Authorization",
        value: buildAuthCode()
    }
    console.log(header)
    pm.request.headers.add(header);
}