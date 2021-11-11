import * as uuid from "uuid";

export class Uniqueness{
    static getUUID(){
        return uuid.v4().replace(/[-]/g,"") as string
    }
}
