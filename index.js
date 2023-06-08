const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if (endpoint !== "flight-status") {
            reject("endpoint not supported.");
        }
        setTimeout(() => {
            resolve({
                departed: false,
                delayed: true
            });
        }, 1_000);
    });
}

fakeFetch("flight-status")
    .then((data) => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

fakeFetch("user-details")
    .then((data) => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
