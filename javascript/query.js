
<script src="https://parse.com/downloads/javascript/parse-1.6.0.js"></script>
<script>


function querySuc(result)
{
        for (var i = 0; i < results.length; i++) {
                var object = results[i];
                alert(object.get('data'));
        }
}

function queryErr(error)
{
        alert("Error: " + error.code + " " + error.message);
}


function callParse(paras)
{
        var class_name = paras['class'];
        var head = paras['query'].split(":")[0];
        var value = paras['query'].split(":")[1];
        var class_obj = Parse.Object.extend(class_name);
        var query = new Parse.Query(class_obj);
        query.equalTo(head, value);
        query.find({
                success: querySuc,
                error:queryErr
        });

}

function helloTest()
{
        Parse.initialize("appid", "javascript-client-id");
        paras = {
                'class' : 'Kmdn',
                'query' : "name:radar"
        }
        callParse(paras)
}
</script>
