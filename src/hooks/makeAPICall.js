import {
    reactive,
    watchEffect
} from 'vue';

import API from '../lib/API';

export default function makeAPICall(paramId, apiUrl) {
    const apiState = reactive({
        loading: false,
        error: '',
        data: [],
    });

    async function loadingData() {
        try {
            apiState.loading = true;
            apiState.error = '';
            apiState.data = [];
            const response = await API.apiCall(paramId, apiUrl);
            apiState.data = response;
        } catch (error) {
            apiState.error = error.message || 'Error loading player info';
        } finally {
            apiState.loading = false;
        }
    }

    watchEffect(loadingData);

    return apiState;

}