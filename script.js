let btnCalculateGradePercent = document.querySelector('.btnCalculateGradePercent'),
    btnClearForm = document.querySelector('.btnClearForm');
    
btnCalculateGradePercent.addEventListener('click', () => {
      let english = document.getElementById("english").value;
      let maths = document.getElementById("maths").value;
      let science = document.getElementById("science").value;
      let history = document.getElementById("history").value;
      let res = document.getElementById("res");  

      let errorEnglish = document.getElementById("errorEnglish");
      let errorMaths = document.getElementById("errorMaths");
      let errorScience = document.getElementById("errorScience");
      let errorHistory = document.getElementById("errorHistory");

      errorEnglish.style.display = 'none';
      errorMaths.style.display = 'none';
      errorScience.style.display = 'none';
      errorHistory.style.display = 'none';
      
      if( english == ""){ 
        errorEnglish.style.display = 'block';
        errorEnglish.innerHTML = 'Enter the Received Marks!';
      }
      else if(english > 100){
        errorEnglish.style.display = 'block';
        errorEnglish.innerHTML = 'Marks should not be more then 100!';
      }
      else if(isNaN(english)){
        errorEnglish.style.display = 'block';
        errorEnglish.innerHTML = 'Marks should be in Numbers!';
      }

      else if( maths == ""){ 
        errorMaths.style.display = 'block';
        errorMaths.innerHTML = 'Enter the Received Marks!';
      }
      else if(maths > 100){
        errorMaths.style.display = 'block';
        errorMaths.innerHTML = 'Marks should not be more then 100!';
      }
      else if(isNaN(maths)){
        errorMaths.style.display = 'block';
        errorMaths.innerHTML = 'Marks should be in Numbers!';
      }
      
      else if( science == ""){ 
        errorScience.style.display = 'block';
        errorScience.innerHTML = 'Enter the Received Marks!';
      }
      else if(science > 100){
        errorScience.style.display = 'block';
        errorScience.innerHTML = 'Marks should not be more then 100!';
      }
      else if(isNaN(science)){
        errorScience.style.display = 'block';
        errorScience.innerHTML = 'Marks should be in Numbers!';
      }

      else if( history == ""){ 
        errorHistory.style.display = 'block';
        errorHistory.innerHTML = 'Enter the Received Marks!';
      }
      else if(history > 100){
        errorHistory.style.display = 'block';
        errorHistory.innerHTML = 'Marks should not be more then 100!';
      }
      else if(isNaN(history)){
        errorHistory.style.display = 'block';
        errorHistory.innerHTML = 'Marks should be in Numbers!';
      }
      
      else{
        let marksReceived = parseFloat(english) + parseFloat(maths) + parseFloat(science) + parseFloat(history)        

        let marksLength = document.querySelectorAll(".marks").length        

        let totalMarks = marksLength * 100        
      
        let percent = eval((marksReceived / totalMarks) * 100)        

        let passed = 'Congratulations you are PASSED.';

        let failed = 'Sorry, you are Failed. Better Luck Next Time.';

        if(percent > 30){
          res.innerHTML = `Your Percent = ${percent.toFixed(2)}% <p>${passed}</p>`;
        }
        else{
          res.innerHTML = `Your Percent = ${percent.toFixed(2)}% <p>${failed}</p>`;
        }
      }      
    });

    btnClearForm.addEventListener('click', () => {      
      document.getElementById("english").value = '';
      document.getElementById("maths").value = '';
      document.getElementById("science").value = '';
      document.getElementById("history").value = '';
      document.getElementById("res").style.display = 'none';
    })