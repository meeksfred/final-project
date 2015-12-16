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
      $('<input type="radio" name="costCheckbox" value="$">$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$">$$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$$">$$$<br>').appendTo('.cost');
      $("input:radio[name='costCheckbox']").click(function(){
        var $selectedCost = $(this).val();
        $('#showResults').remove();
        $('#whoaResults').empty();
        array.forEach(function(burp){
          //console.log($selectedCost);
          if($selectedCost === burp.cost){
            console.log(burp.cost);
            $('#whoaResults').append('<table><tr>' + '<a href=' + burp.url + '>'
              + burp.name + '</a></tr></table>');
            $('#whoaResults').append('<td>' + '<img src=images/images-fremont/' + burp.id + '.jpg height=200 width=200>' + '</td>');
          }
        });
      });
      for(var bb = 0; bb < db.fremont.length; bb+= 1){
      array.push(db.fremont[bb]);
      console.log(db.fremont[bb].name);
      $('#showResults').append('<tr>');
      $('#showResults').append('<td>' + '<a href=' + db.fremont[bb].url + '>' + db.fremont[bb].name + '</a>' + '</td>');
      $('#showResults').append('<td>' + db.fremont[bb].cost + '</td>');
      $('#showResults').append('</tr>');
      $('#showResults').append('<td>' + '<img src=images/images-fremont/' + db.fremont[bb].id + '.jpg height=200 width=200>' + '</td>');
      }
  } else if ($selectedPlace === 'capitolHill'){
      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="$">$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$">$$<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$$">$$$<br>').appendTo('.cost');
      $("input:radio[name='costCheckbox']").click(function(){
        var $selectedCost = $(this).val();
        $('#showResults').remove();
        $('#whoaResults').empty();
        array.forEach(function(burp){
          if($selectedCost === burp.cost){
            console.log(burp.cost);
            $('#whoaResults').append('<table><tr>' + '<a href=' + burp.url + '>'
              + burp.name + '</a></tr></table>');
             $('#whoaResults').append('<td>' + '<img src=images/images-capitolHill/' + burp.id + '.jpg height=200 width=200>' + '</td>');
          }
        });
      });
      for(var bb = 0; bb < db.capitolHill.length; bb+= 1){
        array.push(db.capitolHill[bb]);
        console.log(db.capitolHill[bb].name);
        $('#showResults').append('<tr>');
        $('#showResults').append('<td>' + '<a href=' + db.capitolHill[bb].url + '>' + db.capitolHill[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.capitolHill[bb].cost + '</td>');
        $('#showResults').append('</tr>');
         $('#showResults').append('<td>' + '<img src=images/images-capitolHill/' + db.capitolHill[bb].id + '.jpg height=200 width=200>' + '</td>');
      }
    } else if ($selectedPlace === 'ballard'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="$">"$"<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$">"$$"<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$$">"$$$"<br>').appendTo('.cost');
      $("input:radio[name='costCheckbox']").click(function(){
        var $selectedCost = $(this).val();
        $('#showResults').remove();
        $('#whoaResults').empty();
        array.forEach(function(burp){
          if($selectedCost === burp.cost){
            console.log(burp.cost);
            $('#whoaResults').append('<table><tr>' + '<a href=' + burp.url + '>'
              + burp.name + '</a></tr></table>');
            $('#whoaResults').append('<td>' + '<img src=images/images-ballard/' + burp.id + '.jpg height=200 width=200>' + '</td>');
          }
        });
      });
        for(var bb = 0; bb < db.ballard.length; bb+= 1){
          array.push(db.ballard[bb]);
        console.log(db.ballard[bb].name);
        $('#showResults').append('<tr>');
        //writing an anchor tag (activity name) then attaching link
        $('#showResults').append('<td>' + '<a href=' + db.ballard[bb].url + ' target="_blank">' + db.ballard[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.ballard[bb].cost + '</td>');
        $('#showResults').append('</tr>');
        $('#showResults').append('<td>' + '<img src=images/images-ballard/' + db.ballard[bb].id + '.jpg height=200 width=200>' + '</td>');
        }
    } else if ($selectedPlace === 'downtown'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="$">"$"<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$">"$$"<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$$">"$$$"<br>').appendTo('.cost');
      $("input:radio[name='costCheckbox']").click(function(){
        var $selectedCost = $(this).val();
        $('#showResults').remove();
        $('#whoaResults').empty();
        array.forEach(function(burp){
          //console.log($selectedCost);
          if($selectedCost === burp.cost){
            console.log(burp.cost);
            $('#whoaResults').append('<table><tr>' + '<a href=' + burp.url + '>'
              + burp.name + '</a></tr></table>');
            $('#whoaResults').append('<td>' + '<img src=images/images-downtown/' + burp.id + '.jpg height=200 width=200>' + '</td>');
          }
        });
      });
        for(var bb = 0; bb < db.downtown.length; bb+= 1){
          array.push(db.downtown[bb]);
        console.log(db.downtown[bb].name);
        $('#showResults').append('<tr>');
        $('#showResults').append('<td>' + '<a href=' + db.downtown[bb].url + '>' + db.downtown[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.downtown[bb].cost + '</td>');
        $('#showResults').append('</tr>');
        $('#showResults').append('<td>' + '<img src=images/images-downtown/' + db.downtown[bb].id + '.jpg height=200 width=200>' + '</td>');
        }
    } else if ($selectedPlace === 'queenAnne'){

      $('.hood').remove();
      $('<input type="radio" name="costCheckbox" value="$">"$"<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$">"$$"<br>').appendTo('.cost');
      $('<input type="radio" name="costCheckbox" value="$$$">"$$$"<br>').appendTo('.cost');
      $("input:radio[name='costCheckbox']").click(function(){
        var $selectedCost = $(this).val();
        $('#showResults').remove();
        $('#whoaResults').empty();
        array.forEach(function(burp){
          //console.log($selectedCost);
          if($selectedCost === burp.cost){
            console.log(burp.cost);
            $('#whoaResults').append('<table><tr>' + '<a href=' + burp.url + '>'
              + burp.name + '</a></tr></table>');
            $('#whoaResults').append('<td>' + '<img src=images/images-queenAnne/' + burp.id + '.jpg height=200 width=200>' + '</td>');
          }
        });
      });
        for(var bb = 0; bb < db.queenAnne.length; bb+= 1){
          array.push(db.queenAnne[bb]);
        console.log(db.queenAnne[bb].name);
        $('#showResults').append('<tr>');
        $('#showResults').append('<td>' + '<a href=' + db.queenAnne[bb].url + '>' + db.queenAnne[bb].name + '</a>' + '</td>');
        $('#showResults').append('<td>' + db.queenAnne[bb].cost + '</td>');
        $('#showResults').append('</tr>');
        $('#showResults').append('<td>' + '<img src=images/images-queenAnne/' + db.queenAnne[bb].id + '.jpg height=200 width=200>' + '</td>');
        }
    };
   });
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
