function Goods() {
}

Goods.prototype.search = function(query)
{
        var tb = $("#tb_goods").find("tbody");
        tb.find("tr").each(function(){
                var profile = "";
                $(this).find("td").each(function(){
                        profile += $(this).html();
                        profile += " ";
                });               
                if(profile.indexOf(query) == -1)
                {
                        $(this).hide();
                }
                else
                {
                        $(this).show();
                }
                            
        });
}

Goods.prototype.add = function()
{
        function cbk_add(ret)
        {
                this.show();               
        }

        var paras = {
                'store':$("#add_store").val(),
                'goods':$("#add_goods").val(),
                'price':$("#add_price").val(),
                'comment':$("#add_comment").val(),
                'username':$("#add_username").val()
        }
        callCloud("goods_add", paras, cbk_add);
}


Goods.prototype.show = function()
{
        function cbk_show(ret)
        {
                if(ret['status'] != 0)
                {
                        return;
                }

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
