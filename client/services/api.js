
function cacheAssets(layers) {
    return Promise.all(layers.map(({ filename }) => {
        return new Promise((resolve, reject) => {
            fetch(filename).then((response) => {
                if (response.status === 200) {
                    console.log(filename + ' cached');
                    resolve();
                }
            })
        })
    }))
}

function fetchLayers() {
    console.log('fetchLayers');

    return new Promise((resolve, reject) => {
        var init = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('layers.json', init).then((response) => {
            if (response.status === 200) {
                response.json().then((layers) => {
                    cacheAssets(layers).then(() => {
                        resolve(layers);
                    });
                });
            }
        })
    });
}

let api = {
    layers: fetchLayers()
}

export default api;