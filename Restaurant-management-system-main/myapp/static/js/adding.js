order=[{id:'1',name:'Honey Orange Shrimp',price:'18'},{id:'2',name:'Steak',price:'21'},{id:'3',name:'Creamy Garlic Pasta',price:'12'},{id:'4',name:'Chicken Fajitas',price:'16'},{id:'5',name:'Chicken Strips',price:'14'},{id:'6',name:'Shawerma',price:'12'},{id:'7',name:'Burger',price:'13'},{id:'8',name:'Grilled fish',price:'15'},{id:'9',name:'Salad',price:'5'},{id:'10',name:'Bruschetta',price:'8'},{id:'11',name:'Greek salad',price:'6'},{id:'12',name:'Cheese Cake',price:'9'},{id:'13',name:'Ice Cream',price:'10'}],{id:'14',name:'Ice Coffee',price:'6'},{id:'15',name:'Orange Juice',price:'5'}
order_main_course=[{id:'1',name:'Honey Orange Shrimp',price:'18'},{id:'2',name:'Steak',price:'21'},{id:'3',name:'Creamy Garlic Pasta',price:'12'},{id:'4',name:'Chicken Fajitas',price:'16'},{id:'5',name:'Chicken Strips',price:'14'},{id:'6',name:'Shawerma',price:'12'},{id:'7',name:'Burger',price:'13'},{id:'8',name:'Grilled fish',price:'15'}]
order_appetizers=[{id:'9',name:'Salad',price:'5'},{id:'10',name:'Bruschetta',price:'8'},{id:'11',name:'Greek salad',price:'6'}]
order_desserts=[{id:'12',name:'Cheese Cake',price:'9'},{id:'13',name:'Ice Cream',price:'10'}]
order_juices=[{id:'14',name:'Ice Coffee',price:'6'},{id:'15',name:'Orange Juice',price:'5'}]



function renderPage(){
    let renderHTML=''
    order_main_course.forEach((item) => {
            renderHTML +=`
            <div class="cen">
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
                        <select name="select_quantity" id="select_quantity_${item.id}">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </div>
                <div class="margin_5 center">
                    <button id=${item.id}" class="add_to_order" data-product-id="${item.id}">ADD TO ORDER</button>
                    <button id=${item.id}x" class="remove_from_order" data-product-id="${item.id}"> X </button>
                </div>
            </div>
            `
    });
    order_appetizers.forEach((item) => {
        renderHTML +=`
        <div class="cen">
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
                    <select name="select_quantity" id="select_quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <div class="margin_5 center">
                <button id=${item.id} class="add_to_order" data-product-id="${item.id}">ADD TO ORDER</button>
                <button id=${item.id}x class="remove_from_order" data-product-id="${item.id}"> X </button>
            </div>
        </div>
        `
    });
    order_desserts.forEach((item) => {
        renderHTML +=`
        <div class="cen">
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
                    <select name="select_quantity" id="select_quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <div class="margin_5 center">
                <button id=${item.id} class="add_to_order" data-product-id="${item.id}">ADD TO ORDER</button>
                <button id=${item.id}x class="remove_from_order" data-product-id="${item.id}"> X </button>
            </div>
        </div>
        `
    });
    order_juices.forEach((item) => {
        renderHTML +=`
        <div class="cen">
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
                    <select name="select_quantity" id="select_quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <div class="margin_5 center">
                <button id=${item.id} class="add_to_order" data-product-id="${item.id}">ADD TO ORDER</button>
                <button id=${item.id}x class="remove_from_order" data-product-id="${item.id}"> X </button>
            </div>
        </div>
        `
    });
    document.getElementById('items-flexx').innerHTML=renderHTML;
}
renderPage()


zz=JSON.parse(localStorage.getItem('cartt'))
if (zz){
    cart=zz
}
else{
    cart=[]
}


mm=JSON.parse(localStorage.getItem('checkout'))
if (mm){
    bill=mm[0]
}
else{
    bill=0
}

cart_no()

function calculate(){
    services=bill*0.14
    total_price=services+bill
    array=[0,0,0]
    array[0]=bill
    array[1]=services
    array[2]=total_price
    localStorage.setItem('checkout',JSON.stringify(array))
}

function view_order(){
    localStorage.setItem('cartt',JSON.stringify(cart))
    calculate()

}


function place_order(){
    localStorage.setItem('cartt',JSON.stringify(cart))
    calculate()
}

function reset_order(){
    localStorage.removeItem('checkout')
    localStorage.removeItem('cartt')
    localStorage.removeItem('info')
}

function remove_quantity_0(){
    array=[]
    cart.forEach((cartItem)=>{
        if (cartItem.quantity!=0){
            array.push(cartItem)
        }
    })
    cart=array
}

function cart_no(){
    let quantity=0
    cart.forEach((cartItem)=>{
        quantity+=cartItem.quantity
    })
    document.getElementById('item_no').innerHTML=quantity
}


document.querySelectorAll('.add_to_order').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      order.forEach((item)=>{
        if (productId == item.id){
            quantity=document.getElementById('select_quantity_'+productId).value
            price=parseInt(item.price)
            quantity=parseInt(quantity)
            bill+=(price*quantity)
            yes='no'
            cart.forEach((cartItem)=>{
                if (cartItem.name==item.name){
                    cartItem.quantity+=quantity
                    cartItem.price+=(price*quantity)
                    yes='yes'
                }
            })
            if (yes=='no'){
                cart.push({name:item.name,quantity:quantity,price:(item.price*quantity)})
            }
        }
      })
      cart_no()
    });
  });
  

  document.querySelectorAll('.remove_from_order').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      order.forEach((item)=>{
        if (productId == item.id){
            quantity=document.getElementById('select_quantity_'+productId).value
            price=parseInt(item.price)
            quantity=parseInt(quantity)
            bill-=(price*quantity)
            cart.forEach((cartItem)=>{
                if (cartItem.name==item.name){
                    cartItem.quantity-=quantity
                    cartItem.price-=(price*quantity)
                }
            })
        }
      })
      remove_quantity_0()
      cart_no()
    });
  });

