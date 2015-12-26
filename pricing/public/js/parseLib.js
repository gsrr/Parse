
function callCloud(func, paraList, callback)
{
    Parse.initialize("YodojoA9JjcX2ZZwhrp4PdoBN0tGnne4EtjtZtUb", "q7sYdvLXpsQxI1UjiINR15UX6ne2E68v6DHpuydH");
    Parse.Cloud.run(func, paraList,{
        success: function(data) {
            callback(data);
        },
        error: function(error) {
            alert("call Cloud Error");
        }
    });
}

function test(class_name, key, value)
{
    Parse.initialize("YodojoA9JjcX2ZZwhrp4PdoBN0tGnne4EtjtZtUb", "q7sYdvLXpsQxI1UjiINR15UX6ne2E68v6DHpuydH");
    var GameScore = Parse.Object.extend(class_name);
    var query = new Parse.Query(GameScore);
    query.equalTo( key, value);
    query.find({
      success: function(results) {
        console.log(results);
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
}
    
