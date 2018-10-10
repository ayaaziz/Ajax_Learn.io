// // in Javascript

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         var rooms = JSON.parse(xhr.responseText);
       
//         var myHtml = '<ul class="rooms">';

//         rooms.forEach(function(currentRoom,index,arr) {
//             myHtml +='<li class='+(currentRoom.isFull ?'full':'empty')+'>'+currentRoom.roomNum+'</li>';
//         });
//         myHtml +='</ul>';

//         document.getElementById('roomList').innerHTML = myHtml;
//     }
// };

// xhr.open('GET','data.json');
// xhr.send();


// //in Jquery
// //1.using $.get(url,data,callback)

// $(document).ready(function(){
//     $.get('data.json',
//     function(response){
//         var myHtml = '<ul class="rooms">';
//         $.each(response,function(index,currRoom){
//             myHtml += '<li class='+(currRoom.isFull ?'full':'empty')+'>'+currRoom.roomNum+'</li>';
//         });

//         myHtml += '</ul>';
//         $('#roomList').html(myHtml);
//     });
// });


//2.using $.ajax(url,settings)
$.ajax(
    {
        url:'data.json',
        success: function(response) {
            var myHtml = '<ul class="rooms">';

            $.each(response,function(index,currRoom){
                myHtml += '<li class='+(currRoom.isFull ?'full':'empty')+'>'+currRoom.roomNum+'</li>';
                });
        
                myHtml += '</ul>';
                $('#roomList').html(myHtml);
        }
    });


