const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  let dataJSON = fs.readFileSync('./parents.json')
  let parent_data = JSON.parse(dataJSON)
  let dataChildJSON = fs.readFileSync('./children.json')
  let children_data = JSON.parse(dataChildJSON)

  for (var i = 0; i < parent_data.length; i++) {
    parent_data[i]['children'] = [];
    for (var j = 0; j < children_data.length; j++) {
      if (parent_data[i]['last_name'] === children_data[j]['family']) {
        parent_data[i]['children'].push(children_data[j]['full_name']);
      }
    }
  }
  sleep.sleep(5);
  callback(parent_data);

} //end function

console.log("Notification : Data sedang diproses !");
match_data('./parents.json', './children.json', function(parent_data){
  console.log(parent_data);
})
