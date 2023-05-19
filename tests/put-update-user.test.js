const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Put update user endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Update user test", async () => {
    const requestBody = {
        name: "Gina",
        job: "leader",
    };

    await spec()
      .put(`${baseUrl}/api/users/2`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains(requestBody.name);
  });
});
