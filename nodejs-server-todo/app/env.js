/**
 * Created by xiangwenwen on 2017/2/16.
 */

const config = {
    scheme: 'release',
    connect: {
        beta: 'mongodb://127.0.0.1:27017/tokentable',
        release: 'mongodb://127.0.0.1:27017/tokentable'
    },
    CorpID: 'ding92f3ce1bc64e3e5b35c2f4657eb6378f',
    CorpSecret: 'H1gmXMYbG8zulIgK48ctwe_gmAsCU3VyOZbx094LSbrtnIi4ig5ywsxjqEgDVaUm',
    OAPI_HOST: {
        release: 'https://oapi.dingtalk.com'
    }
};

if (process.env.NODE_ENV !== 'product') {
    config.scheme = 'release';
}

module.exports = config;
