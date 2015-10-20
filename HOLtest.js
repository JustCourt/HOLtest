alert("Connected");

// Question object
function question(a1, a2, a3, a4){
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
		this.a4 = a4;
};

// Answer Object
 function answer(url,value){
	 this.url = url;
	 this.value = value;
 };
 
 //Creates array of questions
questions = [];
for (i=0; i<2; i++){
	ans=[];
	
	//Creates array of answers per question
	for (j=0; j<4; j++){
		a=new answer("image"+i+"_"+j+".jpg", "L");
		ans.push(a);
	}
	questions.push(new question(ans[0],ans[1],ans[2],ans[3]));
}

// Actions when document is loaded
$(document).ready(function(){
	
	var q=1;
	for (var i=1; i<5; i++){
		var id = "#i"+i;
		imgSrc= "images/image"+q+"_"+i+".jpg";
		$(id).attr("src", imgSrc);
	};
	
	//Changes question when image is clicked
	$(".answer").click(function(){
		$(".answer").fadeOut();
		q++;
		for (var i=1; i<5; i++){
		var id = "#i"+i;
		imgSrc= "images/image"+q+"_"+i+".jpg";
		$(id).attr("src", imgSrc);
		$( ".answer" ).css("background-color","purple");
		$(".answer").fadeIn();

		}
	});
	$( ".answer" ).css("background-color","blue");	

});
