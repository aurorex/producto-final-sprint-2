window.addEventListener('load', function() {
  var anchorStudents = document.getElementById('anchor-students');
  console.log(data);
  anchorStudents.addEventListener('click', function(event) {
    // EVENTO PARA AREQUIPA 2016-2
    for (i = 0; i < data.AQP['2016-2'].students.length;i++) {
      var columRight = document.getElementById('colum-right');
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // var imageContainer = document.createElement('div');
      // imageContainer.setAttribute('class', 'figure');
      /* var image = document.createTextNode('img');
      image.setAttribute('src', 'assets/img/peru.png');
      image.setAttribute('class', 'image');
      imageContainer.appendChild(image);*/
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.AQP['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.AQP['2016-2'].students[i].sprints[0].score.tech + data.AQP['2016-2'].students[i].sprints[1].score.tech + data.AQP['2016-2'].students[i].sprints[2].score.tech + data.AQP['2016-2'].students[i].sprints[3].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.AQP['2016-2'].students[i].sprints[0].score.hse + data.AQP['2016-2'].students[i].sprints[1].score.hse + data.AQP['2016-2'].students[i].sprints[2].score.hse + data.AQP['2016-2'].students[i].sprints[3].score.hse) / 4 / 48 + '%';;
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
    // EVENTO PARA AREQUIPA 2017-1
    for (i = 0; i < data.AQP['2017-1'].students.length; i++) {
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
      nameStudent.innerHTML = data.AQP['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.AQP['2017-1'].students[i].sprints[0].score.tech + data.AQP['2017-1'].students[i].sprints[1].score.tech + data.AQP['2017-1'].students[i].sprints[2].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.AQP['2017-1'].students[i].sprints[0].score.hse + data.AQP['2017-1'].students[i].sprints[1].score.hse + data.AQP['2017-1'].students[i].sprints[2].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA CIUDAD DE MEXICO 2017-1
    for (i = 0; i < data.CDMX['2017-1'].students.length; i++) {
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
      nameStudent.innerHTML = data.CDMX['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.CDMX['2017-1'].students[i].sprints[0].score.tech + data.CDMX['2017-1'].students[i].sprints[1].score.tech + data.CDMX['2017-1'].students[i].sprints[2].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.CDMX['2017-1'].students[i].sprints[0].score.hse + data.CDMX['2017-1'].students[i].sprints[1].score.hse + data.CDMX['2017-1'].students[i].sprints[2].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA CIUDAD DE MEXICO 2017-2
    for (i = 0; i < data.CDMX['2017-2'].students.length; i++) {
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
      nameStudent.innerHTML = data.CDMX['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.CDMX['2017-2'].students[i].sprints[0].score.tech + data.CDMX['2017-2'].students[i].sprints[1].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.CDMX['2017-1'].students[i].sprints[0].score.hse + data.CDMX['2017-1'].students[i].sprints[1].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA LIMA 2016-2
    for (i = 0; i < data.LIM['2016-2'].students.length; i++) {
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
      nameStudent.innerHTML = data.LIM['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.LIM['2016-2'].students[i].sprints[0].score.tech + data.LIM['2016-2'].students[i].sprints[1].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.LIM['2016-2'].students[i].sprints[0].score.hse + data.LIM['2016-2'].students[i].sprints[1].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA LIMA 2017-1
    for (i = 0; i < data.LIM['2017-1'].students.length; i++) {
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
      nameStudent.innerHTML = data.LIM['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.LIM['2017-1'].students[i].sprints[0].score.tech + data.LIM['2017-1'].students[i].sprints[1].score.tech + data.LIM['2017-1'].students[i].sprints[2].score.tech + data.LIM['2017-1'].students[i].sprints[3].score.hse) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.LIM['2017-1'].students[i].sprints[0].score.hse + data.LIM['2017-1'].students[i].sprints[1].score.hse + data.LIM['2017-1'].students[i].sprints[2].score.hse + data.LIM['2017-1'].students[i].sprints[3].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA LIMA 2017-2
    for (i = 0; i < data.LIM['2017-2'].students.length; i++) {
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
      nameStudent.innerHTML = data.LIM['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.LIM['2017-2'].students[i].sprints[0].score.tech + data.LIM['2017-2'].students[i].sprints[1].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.LIM['2017-2'].students[i].sprints[0].score.hse + data.LIM['2017-2'].students[i].sprints[1].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA SANTIAGO DE CHILE 2016-2
    for (i = 0; i < data.SCL['2016-2'].students.length; i++) {
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
      nameStudent.innerHTML = data.SCL['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.SCL['2016-2'].students[i].sprints[0].score.tech + data.SCL['2016-2'].students[i].sprints[1].score.tech + data.SCL['2016-2'].students[i].sprints[2].score.tech + data.SCL['2016-2'].students[i].sprints[3].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.SCL['2016-2'].students[i].sprints[0].score.hse + data.SCL['2016-2'].students[i].sprints[1].score.hse + data.SCL['2016-2'].students[i].sprints[2].score.hse + data.SCL['2016-2'].students[i].sprints[3].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA SANTIAGO DE CHILE 2017-1
    for (i = 0; i < data.SCL['2017-1'].students.length; i++) {
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
      nameStudent.innerHTML = data.SCL['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.SCL['2017-1'].students[i].sprints[0].score.tech + data.SCL['2017-1'].students[i].sprints[1].score.tech + data.SCL['2017-1'].students[i].sprints[2].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.SCL['2017-1'].students[i].sprints[0].score.hse + data.SCL['2017-1'].students[i].sprints[1].score.hse + data.SCL['2017-1'].students[i].sprints[2].score.hse) / 4 / 48 + '%';
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
    // EVENTO PARA SANTIAGO DE CHILE 2017-2
    for (i = 0; i < data.SCL['2017-2'].students.length; i++) {
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
      nameStudent.innerHTML = data.SCL['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = (data.SCL['2017-2'].students[i].sprints[0].score.tech + data.SCL['2017-2'].students[i].sprints[1].score.tech) / 4 / 72 + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = (data.SCL['2017-2'].students[i].sprints[0].score.hse + data.SCL['2017-2'].students[i].sprints[1].score.hse) / 4 / 48 + '%';
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
  });
});
