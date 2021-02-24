(function(){
    
    const content = document.getElementById("message");
    const send = document.getElementById("send");
    const hide =  document.getElementById("hide");
    const show =  document.getElementById("show");
    const toggle =  document.getElementById("toggle");
    
    widgetApi().then( api => {
        
        send.addEventListener("click", () => {
            const value = content.value;
            if ( value.length > 0 ) {
                api.sendMessage(value);
                content.value = "";
            }
        });
        
        hide.addEventListener("click", () => {
            api.hide();
        });

        show.addEventListener("click", () => {
            api.show();
        });

        toggle.addEventListener("click", () => {
            api.toggle();
        });
        
    });
    
})();