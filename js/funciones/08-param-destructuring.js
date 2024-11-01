const config = [
    'https://holamundo.io',
    145,
    80,
]

function webserver(configuracion) {
    // const {url} = config;
    const {url, ...rest } = config;
    console.log(rest);
    return url;
}

console.timeLog(webserver(config));