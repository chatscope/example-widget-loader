(() => {
    
    const script = document.currentScript;
    
     const loadWidget = () => {
        
        const widget= document.createElement("div");

        const widgetStyle = widget.style;
        widgetStyle.display = "none";
        widgetStyle.boxSizing = "border-box";
        widgetStyle.width = "400px";
        widgetStyle.height = "647px";
        widgetStyle.position = "absolute";
        widgetStyle.top = "40px";
        widgetStyle.right = "40px";

        const iframe = document.createElement("iframe");
        
        const iframeStyle = iframe.style;
        iframeStyle.boxSizing = "borderBox";
        iframeStyle.position = "absolute";
        iframeStyle.right = 0;
        iframeStyle.top = 0;
        iframeStyle.width = "100%";
        iframeStyle.height = "100%";
        iframeStyle.border = 0;
        iframeStyle.margin = 0;
        iframeStyle.padding = 0;
        iframeStyle.width = "500px";

        widget.appendChild(iframe);

        const greeting = script.getAttribute("data-greeting");

        const api = {
            
            sendMessage: (message) => {
                iframe.contentWindow.postMessage({
                    sendMessage:message
                }, "http://localhost:3000");
            },
            
            show: () => {
                
            },
            
            hide: () => {
                
            },
            
            toggle: () => {
                
            }
            
        }
        
        iframe.addEventListener("load", () => {
            
            window.addEventListener("getWidgetApi", () => {
                
                const event = new CustomEvent('widgetApi', {detail: api});
                window.dispatchEvent(event);
                
            });
            
            iframe.contentWindow.postMessage({greeting}, "http://localhost:3000");
            widgetStyle.display = "block";
        });
        
        const license = script.getAttribute("data-license");
        const widgetUrl = `http://localhost:3000?license=${license}`;
        
        iframe.src = widgetUrl;

        document.body.appendChild(widget);
        
    }

    if ( document.readyState === "complete" ) {
        loadWidget();
    } else {
        document.addEventListener("readystatechange", () => {
            if ( document.readyState === "complete" ) {
                loadWidget();
            }
        });
    }

})();
