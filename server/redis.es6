import config from 'config';
import redis from 'redis';
import url from 'url';

var redisUrl = {};

if (config.has('redis.url')) {
    redisUrl = url.parse(config.get('redis.url'))
}

const client = redis.createClient(
    redisUrl.port, redisUrl.hostname, {no_ready_check: true});

if(redisUrl.auth) {
    client.auth(redisUrl.auth.split(":")[1]);
}

export default client;