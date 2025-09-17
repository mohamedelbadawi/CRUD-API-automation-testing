// import { test, expect } from "@playwright/test";
// import { UserAPI } from "../api/userAPI";
// import { User, UserSchema } from "../Schemas/UserSchema";
// import z from "zod";

// test.describe("Users API test", () => {
//   test("check get users success response and user object structure", async ({ request }) => {
//     let userAPi = new UserAPI(request);
//     let response = await userAPi.getUsers();
//     const data = await response.json();
//     if (response.status() == 200) {
//       expect(Array.isArray(data)).toBeTruthy();
//       expect(response.status()).toBe(200);
//       const parsedUsers=z.array(UserSchema).safeParse(data);
//       expect(parsedUsers.success)
     
//     } else {
//       throw new Error(`Unexpected status code: ${response.status()}`);
//     }
//   });
// });
