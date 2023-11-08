function fn() {
    var env = karate.env; // get java system property 'karate.env'
    karate.log('karate.env system property was:', env);
    if (!env) {
        env = 'dev'; // a custom 'intelligent' default
        karate.log('karate.env set to "dev" as default.');
    }
    let config;
    if (env === 'dev') {
        let port = karate.properties['karate.port'] || '8080'
        config = {
            baseUrl: 'http://localhost:' + port
        }
    }

    karate.configure('connectTimeout', 300);
    karate.configure('readTimeout', 300);
    return config;
}