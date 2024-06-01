const BUSINESS_PORT = 7000;

import businessApp from "./controller/business/index.js";

businessApp.listen(BUSINESS_PORT, () => {
  console.log(
    `BUSINESS Server is running on port http://localhost:${BUSINESS_PORT}`
  );
});
