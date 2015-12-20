


function Kmdn() {}


Kmdn.prototype.verifyObjectId = function(objectId)
{
    function cbk_verifyObjectId(ret)
    {
       console.log(ret);
        if(ret['status'] == 0)
        {
            console.log(ret ['data'].id);
        }
    }
    callCloud("verifyObjectId", {"objectId":objectId}, cbk_verifyObjectId);
}

Kmdn.prototype.soldTrans = function()
{
    function cbk_soldTrans(data)
    {
       var tb = $("#tb_soldRecord").find("tbody");
       for(var i = 0 ; i < data.length ; i++)
       {
               var state = data[i].get("state");
               var good_id = data[i].id;
               var good = data[i].get("good");
               var user = data[i].get("user");
               var point = data[i].get("point");
               var time = data[i].get("createdAt");
               tb.append($("<tr>").addClass("info")
                               .append($("<td>").addClass("goodState").html(state))
                               .append($("<td>").html(good_id))
                               .append($("<td>").html(good))
                               .append($("<td>").html(user))
                               .append($("<td>").html(point))
                               .append($("<td>").html(time))

                        );
        }
        $(".goodState").click(verify_objectId);
    }
    callCloud("soldTrans", {}, cbk_soldTrans);
}

Kmdn.prototype.openTrans = function()
{
    function cbk_openTrans(data)
    {
       var tb = $("#tb_buyRecord").find("tbody");
       for(var i = 0 ; i < data.length ; i++)
       {
               var state = data[i].get("state");
               var good = data[i].get("good");
               var store = data[i].get("store");
               var point = data[i].get("point");
               /*
               var time = data[i].get("createdAt");
               */
               tb.append($("<tr>").addClass("info")
                               .append($("<td>").html(state))
                               .append($("<td>").html(good))
                               .append($("<td>").html(store))
                               .append($("<td>").html(point))

                        );
        }
    }
    callCloud("openTrans", {}, cbk_openTrans);
}

Kmdn.prototype.buyGoods = function(objectId, user)
{
    function cbk_buyGoods(ret)
    {
        console.log(ret);
        if(ret['status'] == 0)
        {
            console.log(ret ['data'].id);
        }
    }
    callCloud("buyGoods", {"objectId":objectId, "user" : user}, cbk_buyGoods);
}

Kmdn.prototype.openMovie = function()
{
    function cbk_movie(data)
    {
        for(var i = 0 ; i < data.length ; i++)
        {
            console.log(data[i]);
            console.log(data[i].id );
            console.log(data[i].get("good"));
            console.log(data[i].get("point"));
        }
    }
    callCloud("getGoods", {"store":"kmdn_movie"}, cbk_movie);
}

Kmdn.prototype.openStore = function()
{
    function cbk_store(data)
    {
        console.log(data);
        for(var i = 0 ; i < data.length ; i++)
        {
            console.log(data[i].get("name"));
            console.log(data[i].get("realName"));
        }
    }
    callCloud("getAllStore", {}, cbk_store);
}

Kmdn.prototype.openNews = function()
{
    function cbk_news(data)
    {
        function show_news(data)
        {
            for(var i = 0 ; i < data.length ; i++)
            {
                console.log(data[i].get("author"));
                console.log(data[i].get("title"));
                console.log(data[i].get("date"));
                console.log(data[i].get("content"));
            }
        }
        console.log(data);
        var d = new Date();
        var date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + "05";
        console.log(date);
        callCloud("getAllNews", {'date' : date}, show_news);
    }
    alert ('get point of news');
    var paraList = {
        'feature' : "news",
    }
    callCloud("getPoint", paraList, cbk_news);
};

function open_news_old()
{
    function test_module_ret(data)
    {
        alert(data);
    }
    function test_module()
    {
        callCloud("test_module", {}, test_module_ret);
    }
    function test_module_addPoints_ret(data)
    {
        console.log(data);
    }
     function test_module_addPoints(paraList)
    {
        alert("test_module_addPoints");
        console.log(paraList);
        callCloud("test_module_addPoints", paraList, test_module_addPoints_ret);
    }
    function createBusinessPoint_ret(data)
    {
        console.log(data);
    }
    function createBusinessPoint()
    {
        var paraList = {
            'name' : "kmdn",
            'points' : 15,
        }
        callCloud("createBusinessPoint", paraList, createBusinessPoint_ret);
    }
    function queryBusinessPoint_ret(data)
    {
        var total = data['total']
        var result = data["result"];
        
        alert("You have get " + result[0].get("points"));
        $("#user_points").html("點數:" + total)
    }
    function queryBusinessPoint(paraList)
    {
        console.log(paraList);
        callCloud("queryBusinessPoint", paraList, queryBusinessPoint_ret);
    }
    alert("kmdn_news");
    //createBusinessPoint();
    var paraList = {
        'user' : $("#user").html(),
        'name' : "kmdn",
    }
    queryBusinessPoint(paraList)
    //test_module_addPoints(paraList)
}
