window.addEventListener('load', function() {
  var input = document.getElementById('input');
  console.log(data);
  input.addEventListener('click', function(event) {
    var cumulative = '';
    var nameX = document.createElement('h1');
    var addNames = document.getElementById('add-Names');

    for (i = 0; i < data.AQP['2016-2'].students.length;i++) {
      // var name = document.getElementById('name');
      // name.textContent = data.AQP['2016-2'].students[i].name;
      console.log(data.AQP['2016-2'].students[i].name);
      console.log(cumulative += data.AQP['2016-2'].students[i].name);
      nameX.textContent = data.AQP['2016-2'].students[i].name;
      console.log(nameX);
      addNames.appendChild(nameX);
    }
    /* var score1 = document.getElementById('score-1');
    for (i = 0; i < data.AQP['2016-2'].students[i].sprints[i].score['tech'].length;i++) {
      console.log(data.AQP['2016-2'].students[i].sprints[i].score['tech'].length);
    }
    //console.log(data.AQP['2016-2'].students[0].sprints[0].score['tech']);
    score1.textContent = data.AQP['2016-2'].students[i].sprints[i].score['tech'];
    var score2 = document.getElementById('score-2');
    score2.textContent = data.AQP['2016-2'].students[0].sprints[0].score['hse'];*/
  });
});
