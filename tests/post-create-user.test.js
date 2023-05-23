const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseUrl = "https://reqres.in";

describe("Create user endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("create new user test", async () => {
    const randomEmail = faker.internet.email();
    const requestBody = {
      name: "morpheus",
      email: randomEmail,
    };
    console.log(randomEmail);
    await spec()
      .post(`${baseUrl}/api/users`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectResponseTime(3000)
      .expectStatus(201)
      .expectBodyContains(randomEmail);
  });
});
