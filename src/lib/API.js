export default {
    async apiCall(paramId, apiUrl) {
        const idUrl = apiUrl.replace('{param_Id}', paramId);
        const response = await fetch(idUrl, {
            headers: {
                accept: 'application/json',
            },
        });
        const data = await response.json();
        if (response.ok) {
            return data;
        }
        const error = new Error(data.message || "Failed to get data from API.");
        error.response = data;
        throw error;
    }
};