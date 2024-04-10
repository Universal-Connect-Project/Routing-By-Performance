const userId = '';
const accessKey = '';

function buildAuthCode() {
    const authString = 'basic ' + Buffer.from(`${userId}:${accessKey}`).toString('base64')
    return authString;
}
let header = {
    key: "Authorization",
    value: buildAuthCode()
}
pm.request.headers.add(header);