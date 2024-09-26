import mysqldump from 'mysqldump';

export const dbBackup = () => {
    try {
        mysqldump({
            connection: {
                host: '172.17.0.2',
                user: 'root',
                password: 'passwd',
                database: '1019-community',
            },
            dumpToFile: './db/dump.sql',
        });
    } catch (e) {
        console.error(e.message);
    }
};
