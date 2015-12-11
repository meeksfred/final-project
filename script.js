//I want to write an event listener to the submit button.
//inside the 'submit' buttons event listener will be a function which
//loops through the checkboxes and pushes the selected values into an array
//or maybe an object? There is then a function ran on each data elements
//in the array/object which gets the data from the DB and prints it out.


//I wrote this code while referencing this url - "https://www.youtube.//com/watch?v=rMrZlm2hyLg&list=PL6n9fhu94yhVDV697uvHpavA3K_eWGQap&index=11"
// $(document).ready(function(){
//   $('#submitIt').click(function(event){
//     event.preventDefault();
//     $('.neighborhood').children('input').each(function(){
//         var clicked = $('input[type="checkbox"]:checked');
//         if( clicked.length > 0 ){
//         var printEm = $('#showResults').html(clicked.val() + " was checked.");
//         } else {
//         $('#showResults').html("Nothing was checked.");
//         console.log(printEm);
//     };

//     })

//   });
// });



$(document).ready(function() {
  var matches = [];
  $('#submitIt').click(function(event) {
    event.preventDefault();
    $.each($("input[type='checkbox']:checked"), function(){
      matches.push($(this).val());
    });
    console.log(matches);
     matches.forEach(function(value){
    $('#showResults').append('<p>'+ value +'</p>');
    var ballardFound = $.inArray('Ballard', matches);
    // ['Ballard', 'Fremont'].forEach(function(city) {

    // })
    //console.log(matches);
    if(ballardFound !== -1){

      console.log('ballard was found');
    }
    })
     matches = [];
  });
});






// for(var x = 0; x < matches.length; x+=1){
//   var addIt = document.getElementById('#showResults');
//   addIt.append('<p>' + matches[x] + '</p>');
// };















// $('form').click(function(){
//     $(this).css("background-color", "yellow");
// })

// $('input[type=checkbox]').change(
//     function(){
//         if (this.checked) {
//             add
//             alert('checked');
//         }
//     });


// $('input[type=checkbox]').change(
//     function(){
//         if (this.checked) {
//             alert('checked');
//         }
//     });
