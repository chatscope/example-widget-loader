function widgetApi() {
    
    return new Promise((resolve) => {
        
        let timeoutId;
        
        const getApi = () => {
            const event = new Event('getWidgetApi');
            timeoutId = window.setTimeout(getApi, 1000);
            window.dispatchEvent(event);
        }
        
        const onWidgetApi = (e) => {
            const api = e.detail;
            window.clearTimeout(timeoutId);
            resolve(api);
        }
        
        window.addEventListener('widgetApi', onWidgetApi, { once: true });
        getApi();
        
    });    
}
    