// helpers/authHelper.ts
import { APIRequestContext } from "@playwright/test";
import { AuthAPI } from "../api/AuthAPI";

export const getAuthToken = async (request: APIRequestContext) => {
    const authAPI = new AuthAPI(request);
    const response = await authAPI.login("eve.holt@reqres.in", "cityslicka");
    const body = await response.json();
    return body.token;
};
