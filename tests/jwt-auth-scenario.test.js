const { spec, request } = require("pactum");

const baseUrl = "http://cuddly-buses-roll.loca.lt";

describe("QA-Practice REST - auth flow test suit", () => {
  let token = "";

  before(async () => {
    request.setDefaultTimeout(5000);
    const requestBody = {
      password: "admin",
      username: "admin",
    };
    const resp = await spec()
      .post(`${baseUrl}/api/v1/simulate/token`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200);

    token = resp.body.token;
    console.log(token);
  });

  it("Get all employees test", async () => {
    await spec()
      .get(`${baseUrl}/api/v1/simulate/get/employees`)
      .withBearerToken(token)
      .expectStatus(200);
  });

  it("Get all employees - unauthorized test", async () => {
    await spec()
      .get(`${baseUrl}/api/v1/simulate/get/employees`)
      .expectStatus(401);
  });
});
