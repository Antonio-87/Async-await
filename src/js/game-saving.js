export default class GameSaving {
    constructor(idSave, timestamp, userId, userName, userLeval, userPoints) {
        this.id = idSave;
        this.created = timestamp;
        this.userInfo = {
            id: userId,
            name: userName,
            level: userLeval,
            points: userPoints,
        };
    }
}
