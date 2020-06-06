import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'mydatabase.sqlite'),
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds:{
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true
};