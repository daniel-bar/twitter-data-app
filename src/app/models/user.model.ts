import { IDBCollectionInterface, DBCollection } from './db-collection.model';

export enum Status {
    Intiated,
    Pending,
    Success,
    Failed,
}

export interface IUserInterface extends IDBCollectionInterface {
    readonly username: string;
    readonly status: Status;
    readonly description: string;
    readonly profile_picture_link: string;
    readonly following_count: number;
    readonly followers_count: number;
    readonly most_common_word: string;
    readonly retweets_count: number;
}

export class User extends DBCollection {
    private _username: string;
    private _status: Status;
    private _description: string;
    private _profile_picture_link: string;
    private _following_count: number;
    private _followers_count: number;
    private _most_common_word: string;
    private _retweets_count: number;

    constructor(userData: IUserInterface) {
        super({
            id: userData.id,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt,
        });

        this._username = userData.username;
        this._status = userData.status;
        this._description = userData.description;
        this._profile_picture_link = userData.profile_picture_link;
        this._following_count = userData.following_count;
        this._followers_count = userData.followers_count;
        this._most_common_word = userData.most_common_word;
        this._retweets_count = userData.retweets_count;
    }

    /**
    * Getter for username
    * @returns username string
    */
    public getUsername() {
        return this._username;
    }

    /**
    * Getter for status
    * @returns status Status
    */
    public getStatus() {
        return this._status;
    }

    /**
    * Getter for description
    * @returns description string
    */
    public getDescription() {
        return this._description;
    }

    /**
    * Getter for profile_picture_link
    * @returns profile_picture_link string
    */
    public getProfilePictureLink() {
        return this._profile_picture_link;
    }

    /**
    * Getter for following_count
    * @returns following_count number
    */
    public getFollowingCount() {
        return this._following_count;
    }

    /**
    * Getter for followers_count
    * @returns followers_count number
    */
    public getFollowersCount() {
        return this._followers_count;
    }

    /**
    * Getter for most_common_word
    * @returns most_common_word string
    */
    public getMostCommonWord() {
        return this._most_common_word;
    }

    /**
    * Getter for retweets_count
    * @returns retweets_count number
    */
    public getRetweetsCount() {
        return this._retweets_count;
    }

    /**
    * Setter for username
    * @returns void
    */
    public setUsername(username: string) {
        this._username = username;
    }

    /**
    * Setter for status
    * @returns void
    */
    public setStatus(status: Status) {
        this._status = status;
    }

    /**
    * Setter for description
    * @returns void
    */
    public setDescription(description: string) {
        this._description = description;
    }

    /**
    * Setter for profile_picture_link
    * @returns void
    */
    public setProfilePictureLink(profile_picture_link: string) {
        this._profile_picture_link = profile_picture_link;
    }

    /**
    * Setter for following_count
    * @returns void
    */
    public setFollowingCount(following_count: number) {
        this._following_count = following_count;
    }

    /**
    * Setter for followers_count
    * @returns void
    */
    public setFollowersCount(followers_count: number) {
        this._followers_count = followers_count;
    }

    /**
    * Setter for most_common_word
    * @returns void
    */
    public setMostCommonWord(most_common_word: string) {
        this._most_common_word = most_common_word;
    }

    /**
    * Setter for retweets_count
    * @returns void
    */
    public setRetweetsCount(retweets_count: number) {
        this._retweets_count = retweets_count;
    }

    /**
    * Getter for getting the status label
    * @returns void
    */
    public getStatusLabel() {
        switch (this._status) {
            case Status.Intiated:
                return 'Intiated';
            case Status.Pending:
                return 'Pending';
            case Status.Success:
                return 'Success';
            case Status.Failed:
                return 'Failed';
            default:
                return 'Intiated';
        }
    }
}