window.addEventListener('load', function() {
  var anchorStudents = document.getElementById('anchor-students');
  console.log(data);
  anchorStudents.addEventListener('click', function(event) {
    for (i = 0; i < data.AQP['2016-2'].students.length;i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
      imageContainer.setAttribute('class', 'figure');
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/img/laboratoria.jpg');
      img.setAttribute('class', 'image');
      imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.AQP['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';
      /* var ContainerSkills = document.createElement('ul');
      var javascriptSkills = document.createElement('li');
      curses.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('li');
      curses.textContent = 'APIs';
      var jquerySkills = document.createElement('li');
      curses.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);*/

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      // addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = '%'; // data.AQP['2016-2'].students[i].sprints[i].score['tech'];
      //console.log(data.AQP['2016-2'].students[i].sprints[i].score['tech']);
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = '% LIFE';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
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
