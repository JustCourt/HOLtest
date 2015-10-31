
// Question object
function question(text, ans){
		this.text = text;
		this.ans = ans;
};

// Answer Object
 function answer(url){
	 this.url = url;
 };

// Actions when document is loaded
$(document).ready(function(){
	
	// initalize user answers
	var user = [];
	
	// set question index
	var q=0;
	
	// create question instances
	var questions = [];
	for (var i= 0; i<3; i++){
			var ans = [];
			var text = "Question " + i;
			for (var j=1; j<5; j++){
			imgSrc= "images/image"+i+"_"+j+".jpg";
			ans.push(new answer(imgSrc));
			};
			questions.push(new question(text,ans));
	}
	
	// Change opacity of answer when held
	$(".answer").mousedown(function(){
		$(this).fadeTo(0.75);
	});
	$( ".continue" ).text(questions[q].text);	
	
	// Changes question when image is clicked
	$(".answer").click(function(){
		
		// Adds answer chosen to record
		user.push(this.id);
		
		q++;
		
		
		
		// If all questions have been answered
		if (q == questions.length)
		{
			$(".answer").css("display","none");
			$( ".end" ).css("display","block");
			console.log(user);
		}
		
		// Changes to continue page, hides answers, shows next question
		else
		{
			$( ".answer" ).css("display", "none");				// Set answers to hidden
			$( ".continue" ).text(questions[q].text);			// Set continue screen to show next question
			$( ".continue" ).css("display","block");			// Show continue screen
			
		}

	});
	
	// When continue is clicked
	$( ".continue" ).click(function()
		{
			for (var i=0; i<4; i++) 						// Change answers to new images
			{
				var id = "#i"+(i+1);
				$(id).attr("src", questions[q].ans[i].url);
			}
			$( ".continue" ).css("display", "none"); 		// Set continue screen to hidden

			$( ".answer" ).css("display", "inline-block");	 // Set answer display to not hidden

		});
	$( ".answer" ).css("background-color","blue");	

});

