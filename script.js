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

// function find() {
// for (var x=0;x < db.ballard.length;x++) {
//   if (db.ballard[x].cost < 2) {
//     console.log(db.ballard[x].name);
//   }
// }
// }

$(document).ready(function() {

  $('#submitIt').click(function(event) {
    event.preventDefault();
    $('#showResults').append('<table></table>');
      $('#showResults').append('<thead><tr><th>' + 'Name/Website' + '</th><th>' + 'Cost' + '</th> </tr></thead>');
    $.each($("input[type='checkbox']:checked"), function(){
      var matches = [];
      var $selectedPlace = $(this).val();
      matches.push($selectedPlace);
      matches.forEach(function(place){
        if(place === 'fremont'){
        for(var bb = 0; bb < db.fremont.length; bb+= 1){
        console.log(db.fremont[bb].name);
        $('#showResults').append('<tr>');
        $('#showResults').append('<td>' + '<a href=' + db.fremont[bb].url + '>' + db.fremont[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.fremont[bb].cost + '</td>');
        $('#showResults').append('</tr>');
      }
      } else if (place === 'capitolHill'){
        for(var bb = 0; bb < db.capitolHill.length; bb+= 1){
          console.log(db.capitolHill[bb].name);
          $('#showResults').append('<tr>');
          $('#showResults').append('<td>' + '<a href=' + db.capitolHill[bb].url + '>' + db.capitolHill[bb].name + '</a>' + '</td>');
          $('#showResults').append('<td>' + db.capitolHill[bb].cost + '</td>');
          $('#showResults').append('</tr>');
        }
      } else if (place === 'ballard'){
          for(var bb = 0; bb < db.ballard.length; bb+= 1){
          console.log(db.ballard[bb].name);
          $('#showResults').append('<tr>');
          //writing an anchor tag (activity name) then attaching link
          $('#showResults').append('<td>' + '<a href=' + db.ballard[bb].url + '>' + db.ballard[bb].name + '</a>' + '</td>');
          $('#showResults').append('<td>' + db.ballard[bb].cost + '</td>');
          $('#showResults').append('</tr>');
          }
      } else if (place === 'downtown'){
          for(var bb = 0; bb < db.downtown.length; bb+= 1){
          console.log(db.downtown[bb].name);
          $('#showResults').append('<tr>');
          $('#showResults').append('<td>' + '<a href=' + db.downtown[bb].url + '>' + db.downtown[bb].name + '</a>' + '</td>');
          $('#showResults').append('<td>' + db.downtown[bb].cost + '</td>');
          $('#showResults').append('</tr>');
          }
      } else if (place === 'queenAnne'){
          for(var bb = 0; bb < db.queenAnne.length; bb+= 1){
          console.log(db.queenAnne[bb].name);
          $('#showResults').append('<tr>');
          $('#showResults').append('<td>' + '<a href=' + db.queenAnne[bb].url + '>' + db.queenAnne[bb].name + '</a>' + '</td>');
          $('#showResults').append('<td>' + db.queenAnne[bb].cost + '</td>');
          $('#showResults').append('</tr>');
          }
        }
      });
    });
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
