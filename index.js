const fs = require('fs');
const sleep = require('sleep');

function match_data(parentFile, childrenFile, callback) {
  const jsonParentData = fs.readFileSync(parentFile);
  sleep.sleep(5);
  const jsonChildData = fs.readFileSync(childrenFile);
  sleep.sleep(5);
  let parentData = JSON.parse(jsonParentData);
  let childData = JSON.parse(jsonChildData);
  for (let i = 0; i < parentData.length; i++) {
    parentData[i].children = [];
    for (let j = 0; j < childData.length; j++) {
      if (parentData[i].last_name === childData[j].family) {
        parentData[i].children.push(childData[j].full_name);
      }
    }
  }
  callback(parentData);
}

match_data('./parents.json', './children.json', function (parentData) {
  console.log(parentData);
})
console.log("Notification : Data sedang diproses !");
