(function(){
    
    const content = document.getElementById("message");
    const send = document.getElementById("send");
    
    widgetApi().then( api => {
        
        send.addEventListener("click", () => {
            const value = content.value;
            if ( value.length > 0 ) {
                api.sendMessage(value);
                content.value = "";
            }
        });
        
    });
    
})();