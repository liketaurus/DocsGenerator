function GoogleDocFromForm(e) {
  //e.values is an array of form values
  var timestamp = e.values[0];
  var email = e.values[1];
  var fullName = e.values[2];
  var contest = e.values[3];  
  var budget=e.values[9];
  var prevEdu=e.values[10];
  var school=e.values[11];
  var yearSchool=e.values[12];
  var lang=e.values[13];  
  var grade=e.values[14];  
  var courses=e.values[15];  
  var prev1=e.values[16];
  var prev2=e.values[17];
  var willage=e.values[18];
  var hostel=e.values[19];
  var gender=e.values[20];
  var country=e.values[21];
  var bithDate=e.values[22];
  var bithPlace=e.values[23];
  var street=e.values[24];
  var building=e.values[25];
  var flat=e.values[26];
  var city=e.values[27];
  var state=e.values[28];
  var area=e.values[29];
  var zip=e.values[30];
  var phone=e.values[31];
  var additional=e.values[32];
  var todayDate=e.values[33];
  var signature=e.values[34];
  
  //conxtruct all needed values for the document 
  var spec = ''; 
  switch (contest)  {
        case "121 «Розробка програмного забезпечення»":
            spec = "121 Інженерія програмного забезпечення, «Розробка програмного забезпечення»";
            break;
        case "123 «Обслуговування комп’ютерних систем і мереж»":
            spec = "123 Комп’ютерна інженерія «Обслуговування комп’ютерних систем і мереж»";
            break;
	case "133 «Технологія обробки матеріалів на верстатах і автоматичних лініях»":
            spec = "133 Галузеве машинобудування «Технологія обробки матеріалів на верстатах і автоматичних лініях»";
            break;
	case "141-Е «Монтаж і експлуатація електроустаткування підприємств і цивільних споруд»":
            spec = "141 Електроенергетика, електротехніка та електромеханіка «Монтаж і експлуатація електроустаткування підприємств і цивільних споруд»";
            break;
	case "141-С «Монтаж і експлуатація електротехнічних і світлотехнічних установок»":
            spec = "141 Електроенергетика, електротехніка та електромеханіка «Монтаж і експлуатація електротехнічних і світлотехнічних установок»";
            break;
        default:
            spec = '';
            break;
  }
  
  var bud = '';
  var cont = '';
  if (budget == 'бюджет')
  {
    bud= '☒';
    cont= '☐';
  } else
  {
    bud= '☐';
    cont= '☒';    
  }
  
  var noEdu='';
  var yesEdu='';
  var partEdu='';
  if (prevEdu=='ніколи не здобувався')
  {
    noEdu ='☒';
    yesEdu='☐';
    partEdu='☐';
  }
  if (prevEdu=='вже здобутий раніше')
  {
    noEdu ='☐';
    yesEdu='☒';
    partEdu='☐';
  }
 if (prevEdu=='вже здобувався раніше (навчання не завершено)')
  {
    noEdu ='☐';
    yesEdu='☐';
    partEdu='☒';
  }
  
  var yesPrev='';
  var noPrev='';
  if (prev1=='користуюсь')
  {    
    noPrev='☐';
    yesPrev='☒';
  }
  else
  {
    noPrev='☒';
    yesPrev='☐';

  }
  
  var yesPrev2='';
  var noPrev2='';
  if (prev2=='користуюсь')
  {    
    noPrev2='☐';
    yesPrev2='☒';
  }
  else
  {
    noPrev2='☒';
    yesPrev2='☐';

  }
  
  var yesWillage='';
  var noWillage='';
  if (willage=='Так')
  {    
    noWillage='☐';
    yesWillage='☒';
  }
  else
  {
    noWillage='☒';
    yesWillage='☐';

  }
  
  var yesHostel='';
  var noHostel='';
  if (hostel=='потребую')
  {    
    noHostel='☐';
    yesHostel='☒';
  }
  else
  {
    noHostel='☒';
    yesHostel='☐';

  }
  
  var male='';
  var female='';
  if (gender=='чоловіча')
  {    
    female='☐';
    male='☒';
  }
  else
  {
    female='☒';
    male='☐';

  }
  
  var Ukraine='';
  var otherCountry='';
  if (country=='Україна')
  {    
    Ukraine='☒';
    otherCountry='☐';
  }
  else
  {
    otherCountry=country;
    Ukraine='☐';

  }
  
  var adds='';
  if (additional==null || additional=="")
  {
    adds='  не надано  ';
  }
  else
  {
    adds=additional;
  }
  
  //file is the template file, and you get it by ID
  var file = DriveApp.getFileById('1SLcVsEuRuHFcsg-JlN2ZdDf3ZxvgruLHPGrRHjmxl10'); 
  
  //We can make a copy of the template, name it, and optionally tell it what folder to live in
  //file.makeCopy will return a Google Drive file object
  var folder = DriveApp.getFolderById('1o72lDTrhP1uvurMz-RDuprFqfJA2EQ-r')
  var copy = file.makeCopy(fullName + '-' + contest, folder); 
  
  //Once we've got the new file created, we need to open it as a document by using its ID
  var doc = DocumentApp.openById(copy.getId()); 
  
  //Since everything we need to change is in the body, we need to get that
  var body = doc.getBody(); 
  
  //Then we call all of our replaceText methods
  body.replaceText('{{Full Name}}', fullName); 
  body.replaceText('{{Contest}}', contest); 
  body.replaceText('{{Speciality}}', spec); 
  body.replaceText('{{Budget}}', bud); 
  body.replaceText('{{Contract}}', cont);   
  body.replaceText('{{No Edu}}', noEdu); 
  body.replaceText('{{Yes Edu}}', yesEdu); 
  body.replaceText('{{Part Edu}}', partEdu); 
  body.replaceText('{{School}}', school); 
  body.replaceText('{{Year}}', yearSchool); 
  body.replaceText('{{Lang}}', lang); 
  body.replaceText('{{Grade}}', grade);
  body.replaceText('{{Courses}}', courses);
  body.replaceText('{{Yes prev}}', yesPrev); 
  body.replaceText('{{No prev}}', noPrev); 
  body.replaceText('{{Yes prev 2}}', yesPrev2); 
  body.replaceText('{{No prev 2}}', noPrev2); 
  body.replaceText('{{Yes Willage}}', yesWillage); 
  body.replaceText('{{No Willage}}', noWillage); 
  body.replaceText('{{Yes Hostel}}', yesHostel); 
  body.replaceText('{{No Hostel}}', noHostel); 
  body.replaceText('{{Male}}', male); 
  body.replaceText('{{Female}}', female); 
  body.replaceText('{{Ukraine}}', Ukraine); 
  body.replaceText('{{Other}}', otherCountry); 
  body.replaceText('{{Birth Date}}', bithDate); 
  body.replaceText('{{Birth Place}}', bithPlace); 
  body.replaceText('{{Street}}', street); 
  body.replaceText('{{Building}}', building); 
  body.replaceText('{{Flat}}', flat); 
  body.replaceText('{{City}}', city); 
  body.replaceText('{{Area}}', area); 
  body.replaceText('{{State}}', state); 
  body.replaceText('{{Zip}}', zip);
  body.replaceText('{{Phone}}', phone); 
  body.replaceText('{{Email}}', email); 
  body.replaceText('{{Additional}}', adds); 
  body.replaceText('{{Today}}', todayDate); 
  body.replaceText('{{Signature}}', signature); 
  body.replaceText('{{Today 2}}', todayDate); 
  body.replaceText('{{Signature 2}}', signature); 
  
  
  //Lastly we save and close the document to persist our changes
  doc.saveAndClose(); 
  
  //var repEmail="alexander.taurus@gmail.com";
  //var eSubject="Нова заява на вступ від "+fullName;
  //var emBody= "Щойно ("+timestamp+") було заповнено і створено нову заяву на вступ від наступної особи: "+fullName+". Заява додається. У разі потреби внести зміни оригінал заяви знаходиться за цим посиланням: " + doc.getUrl();
  //MailApp.sendEmail(repEmail, eSubject, emBody);
    
  //create PDF file
  var pdfFolderID ='1g04ls0dZ1rNRQReJ1iYrS2Nz6pgYspu6';
  var pdfFolder = DriveApp.getFolderById(pdfFolderID);
  var theBlob = doc.getBlob().getAs('application/pdf');
  var newPDFFile = pdfFolder.createFile(theBlob);
  var pdfFileName = templateFile.getName();
  newPDFFile.setName(pdfFileName + ".pdf");
    
}