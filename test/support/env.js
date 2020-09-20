import environmentconf from "../config/environmentdetails";
class environment {
  getEnv(key) {
    if (process.env.EnvironmentVar == null) {
      process.env.EnvironmentVar = browser.config.serverUrls.environment;
    }
    process.env.BrowserName = global.browser.capabilities.browserName;
    let envData = environmentconf;
    return envData.environmentconfig[process.env.EnvironmentVar][key];
  }
}
export default new environment();
