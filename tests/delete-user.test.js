const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Delete user endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete existing user test", async () => {
    await spec()
      .delete(`${baseUrl}/api/users/2`)
      .expectStatus(204)
      .expectResponseTime(3000);
  });

  it("Try to delete  user using a string instead of id test", async () => {
    const userId = "ipsum";

    await spec()
      .delete(`${baseUrl}/api/users/${userId}`)
      .expectStatus(204)
      .expectResponseTime(3000);
  });
});
