menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];
function getmenu(){
var htmldata="";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+ menu_list_array[i] + '<br>'
}
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    imgtags='<img id="im1" src="https://www.sugarsaltmagic.com/wp-content/uploads/2017/06/Tandoori-Chicken-Pizza-1.jpg">'
    imgtags='<img id="im1" src="https://us2guntur.com/images//10024img/deluxeveggie_B_260216.jpg">'
    imgtags='<img id="im1" src="https://i.ytimg.com/vi/XSBwIZtls84/maxresdefault.jpg">'
    imgtags='<img id="im1" src="https://lh3.googleusercontent.com/proxy/vQGcJfZqX3S-q89b1kV62hhuLKAm0VTdUoi7OJHK6EMTo22W2F-UgmElSwtjYz5uOSM1fKfY7DyFJusHjM_jqTp5InDWj54ptTWHYdXdsjEns_N2XLhhsOfc9blDN0UgSw">'
    imgtags='<img id="im1" src="https://c.ndtvimg.com/2020-01/68no6sk8_pizza-aloo_625x300_16_January_20.jpg">'
    imgtags='<img id="im1" src="https://i1.wp.com/chefchoice.com.np/wp-content/uploads/2020/07/Non-Veg_Supreme.jpg?fit=267%2C265&ssl=1">'
    var item=document.getElementById("add_item").value;
    htmldata="";
    for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata;
    } 
    menu_list_array.push(item);
    menu_list_array.push();
    htmldata="<section class 'cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="card">' +'<img src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w="/>' + menu_list_array[i] + '</div>'
    }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}