function Goods() {}

Goods.prototype.show = function()
{
        function cbk_show(ret)
        {
                var data = ret['data'];
                var tb = $("#tb_goods").find("tbody");
                tb.empty();
                for(var i = 0 ; i < data.length ; i++)
                {
                        var id = data[i].id;
                        var store = data[i].get("store");
                        var goods = data[i].get("goods");
                        var price = data[i].get("price");
                        var comment = data[i].get("comment");
                        var user = data[i].get("user");
                        var time = data[i].get("createdAt");
                        tb.append($("<tr>").addClass("info tr_goods")
                                        .append($("<td>").html(i+1).attr("id", id))
                                        .append($("<td>").html(store))
                                        .append($("<td>").html(goods))
                                        .append($("<td>").html(price))
                                        .append($("<td>").html(comment))
                                        .append($("<td>").html(user))
                                        .append($("<td>").html(time))

                                 );
                }
                $(".tr_goods").dblclick(function(){
                        $('#edit_goodsModal').modal('toggle');
                        var items = ['objectId', 'store', 'goods', 'price', 'comment', 'username'];
                        var i = 0;
                        $(this).find('td').each(function(){
                                console.log(items[i]);
                                console.log($(this).html());
                                console.log($("#" + items[i]));
                                $("#" + items[i]).val($(this).html());
                                i += 1;
                        });
                });
        }
        callCloud("show", {}, cbk_show);
}
