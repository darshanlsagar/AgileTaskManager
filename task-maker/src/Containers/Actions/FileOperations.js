function doGET(path, callback) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // The request is done; did it work?
                if (xhr.status == 200) {
                    // Yes, use `xhr.responseText` to resolve the promise
                    resolve(xhr.responseText);
                } else {
                    // No, reject the promise
                    reject(xhr);
                }
             }
        };
        xhr.open("GET", path);
        xhr.send();
    });
}

export function getFileContent(url, cb){
    doGET(url,cb);
}
