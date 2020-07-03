const path = require('path')

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        //Allows you to import 'components' from any directory.
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        return config
    }
}