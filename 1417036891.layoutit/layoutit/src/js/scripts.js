// This function handles style and display changes for each next button click

        function handleWizardNext()

        {

            if (document.getElementById('ButtonNext').name == 'Step2')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = 'Step3';

                document.getElementById('ButtonPrevious').name = 'Step1';

                // Disable/enable buttons when reach reach start and review steps

                document.getElementById('ButtonPrevious').disabled = '';

                // Set new step to display and turn off display of current step

                document.getElementById('Step1').style.display = 'none';

                document.getElementById('Step2').style.display = '';

                // Change background color on header to highlight new step

                document.getElementById('HeaderTableStep2').style.color= '#66CCFF';

                 document.getElementById('HeaderTableStep1').style.color = '#9DA1A3';

            }

            else if (document.getElementById('ButtonNext').name == 'Step3')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = 'Step4';

                document.getElementById('ButtonPrevious').name = 'Step2';

                document.getElementById('Step2').style.display = 'none';

                document.getElementById('Step3').style.display = '';

                // Change background color on header to highlight new step

               
                document.getElementById('HeaderTableStep3').style.color= '#66CCFF';

                document.getElementById('HeaderTableStep2').style.color = '#9DA1A3';


            }

            else if (document.getElementById('ButtonNext').name == 'Step4')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = 'Step5';

                document.getElementById('ButtonPrevious').name = 'Step3';

                // Set new step to display and turn off display of current step

                document.getElementById('Step3').style.display = 'none';

                document.getElementById('Step4').style.display = '';

                // Change background color on header to highlight new step

               
                document.getElementById('HeaderTableStep4').style.color= '#66CCFF';

                 document.getElementById('HeaderTableStep3').style.color = '#9DA1A3';


            }

            else if (document.getElementById('ButtonNext').name == 'Step5')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = '';

                document.getElementById('ButtonPrevious').name = 'Step4';

                // Disable/enable buttons when reach reach start and review steps

                document.getElementById('ButtonNext').disabled = 'disabled';

                document.getElementById('SubmitFinal').disabled = '';

                // Set new step to display and turn off display of current step

                document.getElementById('Step4').style.display = 'none';

                document.getElementById('Step5').style.display = '';

                // Change background color on header to highlight new step

               
                document.getElementById('HeaderTableStep5').style.color= '#66CCFF';

                 document.getElementById('HeaderTableStep4').style.color = '#9DA1A3';


                // Load table elements for final review step

                loadStep5Review();

            }

        }

        

        // This function handles style and display changes for each previous button click

        function handleWizardPrevious()

        {

            if (document.getElementById('ButtonPrevious').name == 'Step1')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = 'Step2';

                document.getElementById('ButtonPrevious').name = '';

                // Disable/enable buttons when reach reach start and review steps

                document.getElementById('ButtonPrevious').disabled = 'disabled';

                // Set new step to display and turn off display of current step

                document.getElementById('Step2').style.display = 'none';

                document.getElementById('Step1').style.display = '';

                // Change background color on header to highlight new step
				 document.getElementById('HeaderTableStep1').style.color= '#66CCFF';

                document.getElementById('HeaderTableStep2').style.color = '#000000';


            }

            else if (document.getElementById('ButtonPrevious').name == 'Step2')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = 'Step3';

                document.getElementById('ButtonPrevious').name = 'Step1';

                // Set new step to display and turn off display of current step

                document.getElementById('Step3').style.display = 'none';

                document.getElementById('Step2').style.display = '';

                // Change background color on header to highlight new step

                 document.getElementById('HeaderTableStep2').style.color= '#66CCFF';

                document.getElementById('HeaderTableStep3').style.color = '#000000';
            }

            else if (document.getElementById('ButtonPrevious').name == 'Step3')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = 'Step4';

                document.getElementById('ButtonPrevious').name = 'Step2';

                // Set new step to display and turn off display of current step

                document.getElementById('Step4').style.display = 'none';

                document.getElementById('Step3').style.display = '';

                // Change background color on header to highlight new step

                 document.getElementById('HeaderTableStep3').style.color= '#66CCFF';

                document.getElementById('HeaderTableStep4').style.color = '#000000';

            }

            else if (document.getElementById('ButtonPrevious').name == 'Step4')

            {

                // Change the button name - we use this to keep track of which step to display on a click

                document.getElementById('ButtonNext').name = 'Step5';

                document.getElementById('ButtonPrevious').name = 'Step3';

                // Disable/enable buttons when reach reach start and review steps

                document.getElementById('ButtonNext').disabled = '';

                document.getElementById('SubmitFinal').disabled = 'disabled';

                // Set new step to display and turn off display of current step

                document.getElementById('Step5').style.display = 'none';

                document.getElementById('Step4').style.display = '';

                // Change background color on header to highlight new step

                 document.getElementById('HeaderTableStep4').style.color= '#66CCFF';

                document.getElementById('HeaderTableStep5').style.color = '#000000';

            }

        }


        

        // This function handles loading the review table innerHTML for the user to review before final submission

        function loadStep5Review()

        {

            // Assign values to appropriate cells in review table

            document.getElementById('ReviewFirstName').innerHTML = document.getElementById('TextFirstName').value;

            document.getElementById('ReviewMiddleName').innerHTML = document.getElementById('TextMiddleName').value;

            document.getElementById('ReviewLastName').innerHTML = document.getElementById('TextLastName').value;

            document.getElementById('ReviewEmail').innerHTML = document.getElementById('TextEmail').value;

            // Indicate Yes or No based on subscription checkbox checked

            if (document.getElementById('CheckboxHtmlGoodies').checked == 1)

            {

                document.getElementById('ReviewHtmlGoodies').innerHTML = 'Yes';

            }

            else

            {

                document.getElementById('ReviewHtmlGoodies').innerHTML = 'No';

            }

            if (document.getElementById('CheckboxJavaScript').checked == 1)

            {

                document.getElementById('ReviewJavaScript').innerHTML = 'Yes';

            }

            else

            {

                document.getElementById('ReviewJavaScript').innerHTML = 'No';

            }

            if (document.getElementById('CheckboxWdvl').checked == 1)

            {

                document.getElementById('ReviewWdvl').innerHTML = 'Yes';

            }

            else

            {

                document.getElementById('ReviewWdvl').innerHTML = 'No';

            }

            // Special case to display password as asterisks

            var iCounter = 1;

            var iCharacterCount = document.getElementById('TextPassword').value.length;

            var passwordMasked = '';

            for (iCounter = 1; iCounter <= iCharacterCount; iCounter++)

            {

                passwordMasked = passwordMasked + '*';

            }

            document.getElementById('ReviewPassword').innerHTML = passwordMasked;

        }
    
var intTextBox=0;
var choiceCount=0;

//FUNCTION TO ADD Company TEXT BOX 
function addCompany()
{
	if (choiceCount < 100 && intTextBox < 200) {
		intTextBox = intTextBox + 1;
		choiceCount = choiceCount+1;
		var contentID = document.getElementById('entrycol');
		var newTBDiv = document.createElement('div');
        newTBDiv.setAttribute('class','form-group');
		newTBDiv.setAttribute('id','entry'+intTextBox);
		newTBDiv.innerHTML =        " <label class='col-sm-5 control-label' for='inputcompany'>Επωνυμία Επιχείρησης</label><div class='col-sm-4'><input class='form-control' id='inputcompany' name='inputcompany' data-toggle='modal' data-target='#modal-container-803714'type='text'></div><div class='col-md-2'><input id='Buttonremove' class='btn btn-default' type='button' onclick='removeCompanyID("+intTextBox+");'value='Αφαίρεσε εγγραφή'  name='addentry' /></div><br><br>"; 
		contentID.appendChild(newTBDiv);
	} else {
		alert("Φτάσατε το μέγιστο όριο εισαγωγής στοιχείων προμηθευτών");
	}
}



//FUNCTION TO REMOVE Company TEXT BOX 

function removeCompanyID(cnum)
{
	var contentID = document.getElementById('entrycol');
	contentID.removeChild(document.getElementById('entry'+cnum));
	//intTextBox = intTextBox-1; this would break it
	choiceCount = choiceCount-1;
}



      
var intTextBox=0;
var choiceCount=0;

//FUNCTION TO ADD TEXT BOX ELEMENT
function addElement()
{
    if (choiceCount < 100 && intTextBox < 200) {
        intTextBox = intTextBox + 1;
        choiceCount = choiceCount+1;
        var contentID = document.getElementById('chemical');
        var newTBDiv = document.createElement('tr');
        newTBDiv.setAttribute('id','chemicaltexts'+intTextBox);
        newTBDiv.innerHTML ="<td>Χημική ουσία:</td><td> <input type='name' class='form-control' id='name'  id='modal-803714' href='#modal-container-8' role='button' class='btn' data-toggle='modal' /></td><td><input name='remove' type='button' value='X' class='btn btn-danger' onclick='removeElementID("+intTextBox+");' /></td>"; 
        var newTBDiv1 = document.createElement('br');
        contentID.appendChild(newTBDiv);
        contentID.appendChild(newTBDiv1);
    } else {
        alert("Φτάσατε το μέγιστο όριο χημικών ουσιών που μπορείτε να προσθέσετε");
    }
}



//FUNCTION TO REMOVE TEXT BOX ELEMENT

function removeElementID(cnum)
{
    var contentID = document.getElementById('chemical');
    contentID.removeChild(document.getElementById('chemicaltexts'+cnum));
    //intTextBox = intTextBox-1; this would break it
    choiceCount = choiceCount-1;
}

<!--submit window--> 
$("#Browse_1").upload({
        name: 'file',
        action: '',
        enctype: '',
        params: {},
        autoSubmit: true,
        onSubmit: function() {},
        onComplete: function() {},
        onSelect: function() {}
});
$("#Browse_2").upload({
        name: 'file',
        action: '',
        enctype: '',
        params: {},
        autoSubmit: true,
        onSubmit: function() {},
        onComplete: function() {},
        onSelect: function() {}
});
<!--showsupdetails -->

function displaySupDetails() {
    //document.getElementById("checkbox").checked=true;
    if(!document.getElementById("checkbox").checked)
        document.getElementById("supdetails").style.display = "block";
    else
        document.getElementById("supdetails").style.display = "none";
}


function getData(){
    document.getElementById("ximikiText").value=document.getElementById("ximiki").value;
}


