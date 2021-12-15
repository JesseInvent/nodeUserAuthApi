import { configs } from "../config/configs.js";

export default () => {
  const environment = configs.NODE_ENV;

  switch (environment) {
    case "production":
      return configs.PORT;
    case "development":
      return 3000;
    case "test":
      return 3001;
    default:
      return configs.PORT;
  }
};
