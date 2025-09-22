import test, { expect } from "@playwright/test";
import { AuthAPI } from "../api/AuthAPI";
import { getAuthToken } from "../utils/AuthHelper";
import authData from "../test-data/logindata.json";
import registerData from "../test-data/registeration.json";
import { UserAPI } from "../api/userAPI";
test.describe("Login API test", () => {
    authData.forEach(({ email, password, expectedStatus, shouldHaveToken }) => {
        test(`login with ${email} → expect ${expectedStatus}`, async ({ request }) => {
            const authAPI = new AuthAPI(request);
            const response = await authAPI.login(email, password);
            const data = await response.json();
            expect(response.status()).toBe(expectedStatus);
            if (shouldHaveToken) {
                expect(data).toHaveProperty("token");
                expect(data.token).not.toBeNull();
                const token = await getAuthToken(request);
                console.log("Retrieved Token:", token);
            }
            else {
                expect(data).toHaveProperty("error");
            }
        });
    });


});
test.describe("register API test", () => {
    registerData.forEach(({ email, password, expectedStatus, shouldHaveId, shouldHaveToken }) => {
        test(`register with ${email} → expect ${expectedStatus}`, async ({ request }) => {
            const userAPI = new UserAPI(request);
            const response = await userAPI.createUser({ email, password });
            const data = await response.json();
            expect(response.status()).toBe(expectedStatus);
            if (shouldHaveId && shouldHaveToken) {
                expect(data).toHaveProperty("token");
                expect(data).toHaveProperty("id");
                expect(data.id).not.toBeNull();
            }
            else {
                expect(data).toHaveProperty("error");
            }
        });
    }
    )
});


