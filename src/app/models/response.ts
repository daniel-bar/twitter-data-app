import { IUserInterface, Status } from './user.model';

export interface IResponse {
    readonly success: boolean;
    readonly message: string;
}

export interface IStoreUsersResponse extends IResponse { }

export interface IGetUserResponse extends IResponse {
    readonly data?: {
        username: string;
        status: Status;
        description: string;
        profile_picture_link: string;
        following_count: number;
        followers_count: number;
        most_common_word: string;
        retweets_count: number;
    };
}

export interface IGetUsersResponse extends IResponse {
    readonly data?: IUserInterface[];
}