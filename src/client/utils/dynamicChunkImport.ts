export const dynamicChunkImport = (path: string) => {
    return new Promise((resolve, reject) => {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function() { resolve(); }
        script.onerror = function() { reject(); }
        script.src = path;
        head.appendChild(script);
    });
}