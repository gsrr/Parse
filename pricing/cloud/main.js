
function initParse()
{
    Parse.initialize("YodojoA9JjcX2ZZwhrp4PdoBN0tGnne4EtjtZtUb", "q7sYdvLXpsQxI1UjiINR15UX6ne2E68v6DHpuydH");
}

function query_find(InfoName, key_comp, value)
{
    initParse();
    var info = Parse.Object.extend(InfoName);
    var query = new Parse.Query(info);
    query.equalTo(key_comp, value);
    return query;
}

function query_all(InfoName)
{
    initParse();
    var info = Parse.Object.extend(InfoName);
    var query = new Parse.Query(info);
    return query;
}


Parse.Cloud.define("goods_add", function(request, response){
    var GoodInfo = Parse.Object.extend("GoodInfo");
    var goods = new GoodInfo();
    goods.set("store", request.params.store);
    goods.set("goods", request.params.goods);
    goods.set("price", parseInt(request.params.price));
    goods.set("comment", request.params.comment);
    goods.set("user", request.params.username);
    goods.save(null, {
      success: function(data) { 
        ret = { 
            "status" : 0,
            "data" : data
        };
        response.success(ret);
      },
      error: function(goods, error) {
        ret = { 
            "status" : -1,
            "msg" : "Error: " + error.code + " " + error.message
        };
        response.error(ret);
      } 
    });

});


Parse.Cloud.define("show", function(request, response){
    var info = require('cloud/info.js');
    query = query_all("GoodInfo");
    info.getInfo(request,response, query)
});









Parse.Cloud.define("test", function(request, response) {
    var key = request["key"];
  response.success({"status" : 0, "user" : key});
});
