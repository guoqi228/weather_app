$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
})

setTimeout(function() {
  $("#home_link").removeClass("active");
  $("#emp_link").addClass("active");
  $("#ani_link").removeClass("active");
}, 5);

function showTable(response) {
  console.log(response);
  var keys = Object.keys(response.employees[0]);
  console.log(keys.length);
  var head = `<th class="col-md-2" scope="col">#</th>`;
  for (var j = 0; j < keys.length; j ++) {
    head += `<th class="col-md-2" scope="col">${keys[j].toUpperCase()}</th>`;
  }
  $("#table_head").html(head);

  var row = "";
  for (var i = 0; i < response.employees.length; i ++) {
    var name = response.employees[i].name;
    var salary = response.employees[i].salary;
    var title = response.employees[i].title;
    var attendance = response.employees[i].attendance;
    console.log(response.employees[i].name);
    row += `<tr><th scope="row">${i+1}</th><td>${name}</td><td>${salary}</td><td>${title}</td><td>${attendance}</td></tr>`;
    $("#table_body").html(row);
  }
}

$.get('../../assets/employees.json', showTable);

// <th class="col-md-2" scope="col">#</th>
// <th class="col-md-2" scope="col">Name</th>
// <th class="col-md-2" scope="col">Salary</th>
// <th class="col-md-2" scope="col">Title</th>
// <th class="col-md-2" scope="col">Attendance</th>

// <tr>
//   <th scope="row">1</th>
//   <td>Mark</td>
//   <td>Otto</td>
//   <td>@mdo</td>
// </tr>
// <tr>
//   <th scope="row">2</th>
//   <td>Jacob</td>
//   <td>Thornton</td>
//   <td>@fat</td>
// </tr>
// <tr>
//   <th scope="row">3</th>
//   <td>Larry</td>
//   <td>the Bird</td>
//   <td>@twitter</td>
// </tr>
