const BUSINESS_PORT = 7000;

import businessApp from "./controller/businessApi/index.js";

businessApp.listen(BUSINESS_PORT, () => {
  console.log(`BUSINESS Server is running on port ${BUSINESS_PORT}`);
});
