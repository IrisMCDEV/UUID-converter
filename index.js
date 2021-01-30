module.exports = (uuid) => {
    if (typeof uuid === String) throw TypeError('The input uuid must be a string!')

    if (uuid.includes('-')) {
        uuid = uuid.replace(/-/g, '')
        return uuid
    } else {
        uuid = uuid.substr(0, 8) + '-' + uuid.substr(8, 4) + '-' + uuid.substr(12, 4) + '-' + uuid.substr(16, 4) + '-' + uuid.substr(20);
        return uuid
    }
}