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
var array = [];
$(document).ready(function() {

  $("input:radio[name=neighborhood]").click(function(){

    $('#showResults').empty();
    $('#showResults').append('<table></table>');
    $('#showResults').append('<thead><tr><th>' + 'Name/Website' + '</th><th>' + 'Cost' + '</th> </tr></thead>');

    var $selectedPlace = $(this).val();

      if($selectedPlace === 'fremont'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value=1>$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value=2>$$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value=3>$$$<br>').appendTo('.cost');
      $("input:radio[name=costCheckbox]").click(function(){
          var $selectedCost = $(this).val();
          $('#showResults').empty();
          for( var gg = 0; gg < array.length; gg +=1 ) {
            if($selectedCost === array[gg].cost){
                $('#showResults').append('<tr>');
                $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
                $('#showResults').append('</tr>');
            }
                console.log(array[gg].cost);
          }
            // else if ($selectedCost === array[gg].cost) {
            //   $('#showResults').append('<tr>');
            //   $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
            //   $('#showResults').append('</tr>');
            // } else if (array[gg].cost === 3){
            //   $('#showResults').append('<tr>');
            //   $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
            //   $('#showResults').append('</tr>');
            // }

        })

      for(var bb = 0; bb < db.fremont.length; bb+= 1){
      array.push(db.fremont[bb]);
      console.log(db.fremont[bb].name);
      $('#showResults').append('<tr>');
      $('#showResults').append('<td>' + '<a href=' + db.fremont[bb].url + '>' + db.fremont[bb].name + '</a>' + '</td>');
      $('#showResults').append('<td>' + db.fremont[bb].cost + '</td>');
      $('#showResults').append('</tr>');


    }
    } else if ($selectedPlace === 'capitolHill'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="">$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$$<br>').appendTo('.cost');
      $("input:radio[name=costCheckbox]").click(function(){
          $('#showResults').empty();
          for( var gg = 0; gg < array.length; gg +=1 ) {
            if(array[gg].cost === 1){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            } else if (array[gg].cost === 2) {
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            } else if (array[gg].cost === 3){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            }
          }
        })
      for(var bb = 0; bb < db.capitolHill.length; bb+= 1){
        array.push(db.capitolHill[bb]);
        console.log(db.capitolHill[bb].name);
        $('#showResults').append('<tr>');
        $('#showResults').append('<td>' + '<a href=' + db.capitolHill[bb].url + '>' + db.capitolHill[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.capitolHill[bb].cost + '</td>');
        $('#showResults').append('</tr>');
      }
    } else if ($selectedPlace === 'ballard'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="">$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$$<br>').appendTo('.cost');
      $("input:radio[name=costCheckbox]").click(function(){
          $('#showResults').empty();
          for( var gg = 0; gg < array.length; gg +=1 ) {
            if(array[gg].cost === 1){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            } else if (array[gg].cost === 2) {
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            } else if (array[gg].cost === 3){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            }
          }
        })
        for(var bb = 0; bb < db.ballard.length; bb+= 1){
          array.push(db.ballard[bb]);
        console.log(db.ballard[bb].name);
        $('#showResults').append('<tr>');
        //writing an anchor tag (activity name) then attaching link
        $('#showResults').append('<td>' + '<a href=' + db.ballard[bb].url + ' target="_blank">' + db.ballard[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.ballard[bb].cost + '</td>');
        $('#showResults').append('</tr>');
        }
    } else if ($selectedPlace === 'downtown'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="">$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$$<br>').appendTo('.cost');
      $("input:radio[name=costCheckbox]").click(function(){
          $('#showResults').empty();
          for( var gg = 0; gg < array.length; gg +=1 ) {
            if(array[gg].cost === 1){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');

            } else if (array[gg].cost === 2) {
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');

            } else if (array[gg].cost === 3){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');

            }
          }
        })
        for(var bb = 0; bb < db.downtown.length; bb+= 1){
          array.push(db.downtown[bb]);
        console.log(db.downtown[bb].name);
        $('#showResults').append('<tr>');
        $('#showResults').append('<td>' + '<a href=' + db.downtown[bb].url + '>' + db.downtown[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.downtown[bb].cost + '</td>');
        $('#showResults').append('</tr>');
        }
    } else if ($selectedPlace === 'queenAnne'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="">$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="">$$$<br>').appendTo('.cost');
      $("input:radio[name=costCheckbox]").click(function(){
          $('#showResults').empty();
          for( var gg = 0; gg < array.length; gg +=1 ) {
            if(array[gg].cost === 1){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            } else if (array[gg].cost === 2) {
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            } else if (array[gg].cost === 3){
              $('#showResults').append('<tr>');
              $('#showResults').append('<td>' + '<a href=' + array[gg].url + '>' + array[gg].name + '</a>' + '</td>');
              $('#showResults').append('</tr>');
            }
          }
        })
        for(var bb = 0; bb < db.queenAnne.length; bb+= 1){
          array.push(db.queenAnne[bb]);
        console.log(db.queenAnne[bb].name);
        $('#showResults').append('<tr>');
        $('#showResults').append('<td>' + '<a href=' + db.queenAnne[bb].url + '>' + db.queenAnne[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.queenAnne[bb].cost + '</td>');
        $('#showResults').append('</tr>');
        }
      }
    });
        //this code will only be run after an initial neighborhood(s) has been
        //selected. Once the user hits submit to find activities in a neighborhood,
        //the neighborhood checkboxes will disappear.
        //I'll then loop through the matches array to determine how many
         // $('.neighborhood').remove();
         // for (i = 0; i < 3; i++) {
         // $('<input type="checkbox" name="costCheckbox" value=""/>').appendTo('.cost');
         // }
         // $('<input type="button" name="costButton" value=""/>').appendTo('.cost');
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
