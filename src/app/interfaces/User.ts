export interface User {
    firstName: string,
    lastName: string,
    lastCompletedSong: string,
    partLeader: boolean,
    percentage: number,
    profilePicURL: string,
    singingPart: string,
    songs: Array<object>,
    startDate: string,
    uid: String
}