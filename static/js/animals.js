$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
})

setTimeout(function() {
  $("#home_link").removeClass("active");
  $("#emp_link").removeClass("active");
  $("#ani_link").addClass("active");
}, 5);

function showTable(response) {
  console.log(response);
  var keys = Object.keys(response[0]);
  console.log(keys.length);
  var head = `<th class="col-md-2" scope="col">#</th>`;
  for (var j = 0; j < keys.length; j ++) {
    head += `<th class="col-md-2" scope="col">${keys[j].toUpperCase()}</th>`;
  }
  $("#table_head").html(head);

  var row = "";
  for (var i = 0; i < response.length; i ++) {
    var name = response[i].name;
    var species = response[i].species;
    var foods = response[i].foods;
    console.log(response[i].foods.dislikes);
    console.log(response[i].foods.likes);
    var foods_keys = Object.keys(foods);
    var dislikes = "Dislikes: ";
    var likes = "Likes: ";
    for (var k = 0; k < response[i].foods.dislikes.length; k ++) {
      dislikes += " " + response[i].foods.dislikes[k];
    }
    for (var p = 0; p < response[i].foods.likes.length; p ++) {
      likes += " " + response[i].foods.likes[p];
    }

    row += `<tr><th scope="row">${i+1}</th><td>${name}</td><td>${species}</td><td>${dislikes}  ${likes}</td></tr>`;
    $("#table_body").html(row);
  }
}

$.get('https://learnwebcode.github.io/json-example/animals-1.json', showTable);
