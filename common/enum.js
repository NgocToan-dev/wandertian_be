const httpConfig = {
  business: "http://localhost:7000",
  system: "http://localhost:8000",
  socket: "http://localhost:1111",
};

const cors_domain = {
  // wandertian_fe:
    // "https://11818e0e-0a70-4cff-a6f3-309533c58c60-00-15ukw4lg7kw00.pike.replit.dev:3001",
  wandertian_fe: "http://localhost:3000",
};

const postStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
};

const enumeration = {
  httpConfig,
  cors_domain,
  postStatus,
};

export default enumeration;
