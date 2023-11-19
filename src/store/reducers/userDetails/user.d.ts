export interface IUserState {
    loggedInUser: ILoggedInUser;
}

export interface ILoggedInUser {
    uid: string;
    displayName: string;
    accessToken: string;
    email: string;
    photoURL: string;
    phoneNumber: string;
}