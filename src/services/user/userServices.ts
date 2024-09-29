import instance from "../../lib/axios/config";
import { UserModel } from "../../models/userModel";

export function GetUser() {
    return instance.get<UserModel>(`/user.json`)
        .then( (response) => { return response })
        .catch( (error) => { return error });
}