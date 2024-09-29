import instance from "../../lib/axios/config";
import { GetPlansResponse } from "./planResponse";

export function GetPlans() {
    return instance.get<GetPlansResponse>(`/plans.json`)
        .then( (response) => { return response })
        .catch( (error) => { return error });
}