const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Create user endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("create new user test", async () => {
    const requestBody = {
        name : "morpheus",
        job : "leader",
    };
    await spec()
      .post(`${baseUrl}/api/users`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectResponseTime(3000)
      .expectStatus(201)
      .expectBodyContains("leader");
  });
});
