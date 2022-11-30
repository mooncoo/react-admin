const argv = process.argv.slice(2);
const fs = require("fs");
const path = require("path");
//数组转object
const getConfig = () => {
  let obj = {};
  argv.map((item) => {
    if (item !== "") {
      const key = item.split(":")[0];
      const http = item.split(":")[1];
      const url = item.split(":")[2];
      if (http && url) {
        obj[key] = `${http}:${url}`;
      } else if (http && (http === "true" || http === "false")) {
        obj[key] = http === "true";
      } else if (http && http > 0) {
        obj[key] = parseInt(http);
      } else if (http) {
        obj[key] = http;
      } else {
        obj[key] = "";
      }
    }
  });
  return obj;
};
let obj = getConfig();

console.log(obj);

const getContent = (obj) => {
  return `var Common = require('./common');
module.exports = {
  ${obj["ENV"]}: {
    host: "${obj["host"]}",
    HOST: "${obj["HOST"]}",
    X_XITE_ADMIN_HOST: "${obj["X_XITE_ADMIN_HOST"]}",
    X_XITE_OPEN_HOST: "${obj["X_XITE_OPEN_HOST"]}",
    RENDER_HOST:"${obj["RENDER_HOST"]}",
    PROVIDER_URL: "${obj["PROVIDER_URL"]}",
    OSS_HOST: "${obj["OSS_HOST"]}",
    aMapServiceHost: "${obj["aMapServiceHost"]}",
    amapKey: "${obj["amapKey"]}",
    securityJsCode: "${obj["securityJsCode"]}",
    mobileAmapKey: "${obj["mobileAmapKey"]}",
    Dsn: "${obj["Dsn"]}",
    systemAuth: ${obj["systemAuth"]},
    ...Common
  }}
`;
};

const content = getContent(obj);

fs.writeFile(path.resolve(__dirname, "config.js"), content, (err) => {
  if (err) throw err;
  console.log("文件已被保存");
});
