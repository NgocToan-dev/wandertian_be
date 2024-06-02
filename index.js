const BUSINESS_PORT = 7000;
const SOCKET_PORT = 1111;

import businessApp from "./controller/business/index.js";
import socketApp from "./controller/socket/index.js";

businessApp.listen(BUSINESS_PORT, () => {
  console.log(
    `BUSINESS Server is running on port http://localhost:${BUSINESS_PORT}`
  );
});

socketApp.listen(SOCKET_PORT, () => {
  console.log(
    `SOCKET Server is running on port http://localhost:${SOCKET_PORT}`
  );
});
