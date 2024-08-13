
$(document).ready(function(){

    function getData(){
        let getDataString = localStorage.getItem('shops');
        if (getDataString){
            showDataArray = JSON.parse(getDataString);
            console.log(showDataArray);

            let data = '';
            let j = 1;
            $.each(showDataArray,function(i,v){
                // console.log("Thi is key" +i);
                // console.log(v.stu_name);

                data += ` <tr>
                        <td> ${j++}</td>
                        <td> ${v.name} </td>
                        <td> ${v.price} </td>
                        <td> 
                        <button> - </button>
                         ${v.qty}
                         <button> + </button>
                        </td>
                        <td> ${v.qty * v.price}  </td>   
                         </tr>  `;
            })
            $('#tbody').html(data);  
            }
             

            if (getDataString){
                showDataArray = JSON.parse(getDataString);
                console.log(showDataArray);

                let data = '';
                let j = 1;
                $.each(showDataArray,function(i,v){
                    // console.log("Thi is key" +i);
                    // console.log(v.stu_name);

                    data += ` <tr>
                            
                            <td colspan = "4> Total </td>
                            <td> ${v.qty * v.price}</td>
                            </tr>  `;
             })
             $('#tfoot').html(data);  
            }
        
       
    }
    
    $('.addToCart').click(function(){
        // alert("hello");
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');
        console.log(id,name,price);
        let items = {
            id: id,
            name: name,
            price: price,
            qty: 1,
            amount : 0
        }
        let itemString = localStorage.getItem('shops');
        let itemsArray;
        if(itemString == null){
            itemsArray = [];
        }else {
            itemsArray = JSON.parse(itemString);
        }
        
        let status = false;
        $.each(itemsArray,function(i,v){
            if(v.id == id){
                v.qty++;
                status = true;
            }
        })
        if(status == false){
            itemsArray.push(items)
        }
        
        let itemsData = JSON.stringify(itemsArray);
        localStorage.setItem('shops', itemsData);

        getData();
        let amountString = localStorage.getItem('shops');
        let amountArray;
        if(amountString == null){
            amountArray = [];
        }else {
            amountArray = JSON.parse(amountString);
        }
        
        // let status = false;
        $.each(itemsArray,function(i,v){
            if(v.price*v.qty != 0){
                0 += v.price*v.qty;
                status = true;
            }
        })
        if(status == false){
         
        }
        
        let amountData = JSON.stringify(amountArray);
        localStorage.setItem('shops', amountData);

        getData();
        
    })

    


   

    
})