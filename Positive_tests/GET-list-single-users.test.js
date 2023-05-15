const { spec, request } = require("pactum");
const getListUsersSchema = require('../data/response/get-list-users-response-schema.json');
const getSingleUserSchema = require('../data/response/get-single-user-with-filter-id-test-response-schema.json')
const baseUrl = "https://reqres.in";

describe("Get single and list users endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get list users test", async () => {
    await spec()
      .get(`${baseUrl}/api/users?page=2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Michael")
      .expectJsonSchema(getListUsersSchema);
  });

  it("get single user with filter id test", async () => {
    await spec()
      .get(`${baseUrl}/api/users/2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Janet")
      .expectJsonSchema(getSingleUserSchema);
  });
});
