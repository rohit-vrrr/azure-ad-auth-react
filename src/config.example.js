export const msalConfig = {
    auth: {
        clientId: 'your_client_id',
        authority: 'https://login.microsoftonline.com/{your_tenant_id}',
        redirectUri: 'http://localhost:3000'
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true
    }
};

export const scopes = [ 'user.read' ];
