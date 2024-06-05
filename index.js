const BUSINESS_PORT = 7000;
const SYSTEM_PORT = 8000;

import businessApp from "./controller/business/index.js";
import systemApp from "./controller/system/index.js";

businessApp.listen(BUSINESS_PORT, () => {
  console.log(
    `BUSINESS Server is running on port http://localhost:${BUSINESS_PORT}`
  );
});

systemApp.listen(SYSTEM_PORT, () => {
  console.log(
    `SYSTEM Server is running on port http://localhost:${SYSTEM_PORT}`
  );
});
