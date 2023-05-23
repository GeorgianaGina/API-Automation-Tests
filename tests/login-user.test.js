const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Login user endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("login user test", async () => {
    const requestBody = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    await spec()
      .post(`${baseUrl}/api/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });
});
