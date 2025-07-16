
mm=JSON.parse(localStorage.getItem('checkout'))
nn=JSON.parse(localStorage.getItem('info'))
tt=JSON.parse(localStorage.getItem('cartt'))


if (mm){
    document.getElementById('bill_b').innerHTML='$ '+mm[0].toFixed(2)
    document.getElementById('services').innerHTML='$ '+mm[1].toFixed(2)
    document.getElementById('bill_a').innerHTML='$ '+mm[2].toFixed(2)
    document.getElementById('id_bill').value= parseFloat(mm[2].toFixed(2))
}
else{
    document.getElementById('bill_b').innerHTML='$ 0.00'
    document.getElementById('services').innerHTML='$ 0.00'
    document.getElementById('bill_a').innerHTML='$ 0.00'
    document.getElementById('id_bill').value=parseFloat(0.00)
}

if (nn){
    document.getElementById('id_first_name').value=nn[0]
    document.getElementById('id_last_name').value=nn[1]
    document.getElementById('id_guest_number').value=nn[2]
    document.getElementById('id_comment').value=nn[3]
    document.getElementById('id_date').value=nn[4]

}
else{
    document.getElementById('id_first_name').value=''
    document.getElementById('id_last_name').value=''
    document.getElementById('id_guest_number').value=''
    document.getElementById('id_comment').value=''
}

if (tt){
    str=''
    tt.forEach(element => {
        if (element.quantity!=0){
            str+=element.name+'-#'+element.quantity+'   '
        }
    });
    document.getElementById('id_order').value=str
}
else{
    document.getElementById('id_order').value='     * added automatically after adding order *';
}

function res(){    
    localStorage.removeItem('info')
    localStorage.removeItem('cartt')
    localStorage.removeItem('checkout')
}


function add_order(){
    info=['','','','','']
    info[0]=document.getElementById('id_first_name').value
    info[1]=document.getElementById('id_last_name').value
    info[2]=document.getElementById('id_guest_number').value
    info[3]=document.getElementById('id_comment').value
    info[4]=document.getElementById('id_date').value
    localStorage.setItem('info',JSON.stringify(info))
    localStorage.setItem('cartt',JSON.stringify(tt))
}

