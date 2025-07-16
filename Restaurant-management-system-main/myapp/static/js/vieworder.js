carty=JSON.parse(localStorage.getItem('cartt'))

function vieworder(){
    let renderHTMLL=''
    carty.forEach((item) => {
            renderHTMLL +=`
            <div class="cen index-1">
                <div class='index-2 render_quantity'>
                    ${item.quantity}
                </div>
                <div class="margin_1">
                    <img src='/static/img/menu_items/${item.name}.jpg' width="250px" height="170px" >
                </div>
                <div class="center margin_3">
                    ${item.name}
                </div>
                <div class="center margin_4">
                    $${item.price}.00       
                </div>
                <div class="quantity_select">
                    <div class="flex_quantity margin_2_1">
                        Quantity
                    </div>
                    <div class="num margin_2_2">
                        ${item.quantity}
                    </div>
                </div>
                <br>
            </div>
            `
    });
    document.getElementById('items-flexx').innerHTML=renderHTMLL;
}
vieworder()

function go_back(){
    localStorage.setItem('cartt',JSON.stringify(carty))
}

ty=JSON.parse(localStorage.getItem('checkout'))
if (ty){
    localStorage.setItem('checkout',JSON.stringify(ty))
}


