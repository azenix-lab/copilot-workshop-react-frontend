async function apiCall(url, method = "GET", body = null, authToken = null)
{
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if(authToken)
    {
        options.headers['Authorization'] = `Bearer ${authToken}`;
    }

    if (body)
    {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok)
    {
        throw new Error(`Error: ${response.status}`);
    }

    return response.json();
}

export default apiCall;