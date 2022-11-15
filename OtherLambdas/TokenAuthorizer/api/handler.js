'use strict';

module.exports.submit = async (event,context,callback) => {
    const token = event.authorizationToken;
    console.log(token.split(' ')[0]);
    var perm = 'deny';
    if(token==="12345")
    {
        perm='allow';
    }
    switch (perm.toLowerCase()) {
        case 'allow':
            callback(null, generatePolicy(token, 'Allow', event.methodArn));
            break;
        case 'deny':
            callback(null, generatePolicy(token, 'Deny', event.methodArn));
            break;
        case 'unauthorized':
            callback(null, generatePolicy(token, 'Allow', event.methodArn));
            break;
        default:
            callback('Error: invalid token');
    }
};
const generatePolicy = (principalId, effect='Allow', resource) =>{
    console.log(effect);
    return {
        principalId:principalId,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
            {
                Action:'execute-api:Invoke',
                Effect:effect,
                Resource:resource
            }
            ]
        }
    };
}