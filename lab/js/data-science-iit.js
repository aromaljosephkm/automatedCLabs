var queries = {};
var url;
var capchetoken;
grecaptcha.ready(function () {
	grecaptcha.execute("6LdADb4UAAAAAA1feb36sozffPYRKKOqD9WPbibp", { action: "register" })
		.then(function (token) {
			capchetoken = token;
		});

});
// $(window).scroll(function() {
// if ($(this).scrollTop()>450)
// {
// $('.mobile-buy').show();
// }
// else
// {
// 	$('.mobile-buy').hide();
// }
// });
$(document).on("click", ".dummy", function () {
	if (authorize.getSession("plyrLoaded") != "true") {
		$("head").append(`<link rel="stylesheet" href="library/plyr/plyr.css">
		<link rel="stylesheet" href="css/plyrfix.css">`);
		$("body").append(`<script  src="library/plyr/plyr.polyfilled.js" ></script>`);
		authorize.setSession("plyrLoaded", "true");
	}

	const player = new Plyr("#course-video");
	window.player = player;
	renderVideo();
})
function renderVideo(data) {
	try {
		$("#videoId").show();
		$(".dummy").hide();
		const source =
			"kbOXUgTT080";
		let videoExtention = "mp4";
		player.source = {
			type: 'video',
			sources: [{
				src: source,
				provider: 'youtube',
			}],
		};
		// player.play();
		$(".plyr--full-ui").addClass("embed-responsive-item");
		$(".plyr__video-wrapper").addClass("embed-responsive-item");
		$("video").addClass("embed-responsive-item");
		setTimeout(function () { player.play() }, 500);
	} catch (error) {
		console.log(error);
	}
}

class CourseBundle {

	// renderPreview(data){
	// 	// this.renderVideo(data);
	// 	// this.renderDetails(data);
	// 	// this.renderLessonDetails(data);
	// }
	// renderDetails(data){
	// 	try{
	// 		let courseDetails = JSON.parse(data[0].course_details);
	// 		let courseName = courseDetails.course_name;
	// 		let courseLength = data.length-2;
	// 		let rating = 0;
	// 		let ratingBlock = "";
	// 		let search = new URLSearchParams(document.location.search.substring(1));
	// 		let courseId = search.get("course");
	// 		authorize.setSession(courseId + "_pricePoints", courseDetails.pricePoints);
	// 		if(courseDetails.rating && courseDetails.rating_count){
	// 			rating = courseDetails.rating.toFixed(1);
	// 			let ratingCount = courseDetails.rating_count;
	// 			ratingBlock = '<li><div class="course-rating d-flex flex-row"><div class="star-ratings-css" data-rating="'+ rating +'" data-max="5"><div class="star-ratings-css-top"><i class="five-stars"></i></div><div class="star-ratings-css-bottom"><i class="five-stars"></i></div></div><span class="rating-count">( '+ ratingCount +' )</span></div></li>';
	// 		}
	// 		else{
	// 			let ratingCount = "New";
	// 			ratingBlock = '<li><div class="course-rating d-flex flex-row"><span class="rating_count">' + ratingCount + '</span></div></li>';
	// 		}
	// 		let ratingCount = courseDetails.rating_count;
	// 		let price = courseDetails.price;
	// 		let discountedPrice = this.calculateDiscount(courseDetails.price, courseDetails.discount);
	// 		let detailsData = '<div><h2>'+ courseName +' foundation course</h2><p>Learn '+ courseName +' like a Professional ! Start from the basics and go all the way to creating your ownapplications </p><ul class="list-unstyled course-hightlights"><li>'+ courseLength +'+ Exclusive Lesson from top Industry Experts</li>' + ratingBlock + '<li>Online learning + Office Mentorship Support + Gamified Practice Platform</li><li>Job Support from top Product Company India & Aboard</li></ul></div><div><div class="d-flex justify-content-end"><a href="#" id="buynow2"  class="btn btn-primary paynow" data-toggle="modal">Enroll</a></div><div class="d-flex justify-content-between"><a href="#course-detail-structure" class="btn pl-0 more-details">Course details</a><p class="price-wrap"><span class="price slashed"><s>'+ price +'</s></span><span id="offerPrice" class="price">'+ discountedPrice +'</span></p></div></div>';
	// 		$("#course-details").html(detailsData);
	// 		this.setRating();
	// 		let whyBlock = '<h2>WHY</h2><p>'+ courseName +' developer is one of the top most in demand job and fast-growing career paths.</p><ul class="list-unstyled course-outcomes"><li class="earnings"><strong>5-10</strong> Lakhs per year</li><li class="hike"><strong>35 %</strong> Average Salary Hike.</li><li class="new-jobs"><strong>23,000 new jobs</strong> being posted online every month</li></ul>';
	// 		$(".why-course").html(whyBlock);
	// 		// let exclusiveData = '<h2>EXCLUSIVE LESSON</h2><div class="exclusive-lesson"><span class="icon-exclusive-lesson"></span><div class="d-flex flex-column justify-content-between"><p>students give an average rating of '+ rating +' out of 5 stars.</p><p><strong>100% SATISFACTION GUARANTEED. 7-DAY MONEY BACK GUARANTEE.</strong></p></div></div>';
	// 		// $(".exclusive-lesson-wrap").html(exclusiveData);
	// 	}
	// 	catch(error){
	// 		console.log(error);
	// 	}
	// }

	// renderLessonDetails(data){
	// 	let beginnerLength = 0;
	// 	let intermediateLength = 0;
	// 	let advancedLength = 0;
	// 	let expertLength = 0;
	// 	let beginnerAssignmentLength = 0;
	// 	let intermediateAssignmentLength = 0;
	// 	let advancedAssignmentLength = 0;
	// 	let expertAssignmentLength = 0;
	// 	let sublessonData = '';
	// 	let beginnerData = '<div id="courseTopic1" class="course-topic-details collapse show" data-parent="#course-detail-structure"><div class="row"><div class="col"><ul class="list-unstyled stepper">';
	// 	let intermediateData = '<div id="courseTopic2" class="course-topic-details collapse" data-parent="#course-detail-structure"><div class="row"><div class="col"><ul class="list-unstyled stepper">';
	// 	let advancedData = '<div id="courseTopic3" class="course-topic-details collapse" data-parent="#course-detail-structure"><div class="row"><div class="col"><ul class="list-unstyled stepper">';
	// 	let expertData = '<div id="courseTopic4" class="course-topic-details collapse" data-parent="#course-detail-structure"><div class="row"><div class="col"><ul class="list-unstyled stepper">';
	// 	for(let itr = 1; itr < data.length; itr++){
	// 		if(data[itr].level == "l1"){
	// 			beginnerData += '<li><a>' + data[itr].topic + '</a></li>';
	// 			beginnerLength++;
	// 			if(data[itr].type == "assignment"){
	// 				beginnerAssignmentLength++;
	// 			}
	// 		}
	// 		else if(data[itr].level == "l2"){
	// 			intermediateData += '<li><a>' + data[itr].topic + '</a></li>';
	// 			intermediateLength++;
	// 			if(data[itr].type == "assignment"){
	// 				intermediateAssignmentLength++;
	// 			}
	// 		}
	// 		else if(data[itr].level == "l3"){
	// 			advancedData += '<li><a>' + data[itr].topic + '</a></li>';
	// 			advancedLength++;
	// 			if(data[itr].type == "assignment"){
	// 				advancedAssignmentLength++;
	// 			}
	// 		}
	// 		else if(data[itr].level == "l4"){
	// 			expertData += '<li><a>' + data[itr].topic + '</a></li>';
	// 			expertLength++;
	// 			if(data[itr].type == "assignment"){
	// 				expertAssignmentLength++;
	// 			}
	// 		}
	// 	}
	// 	let endDiv = '</ul></div></div></div></div>';
	// 	sublessonData += this.getLevelCard(beginnerLength, beginnerAssignmentLength, "l1") + beginnerData + endDiv + this.getLevelCard(intermediateLength, intermediateAssignmentLength, "l2") + intermediateData + endDiv + this.getLevelCard(advancedLength, advancedAssignmentLength, "l3") + advancedData + endDiv + this.getLevelCard(expertLength, expertAssignmentLength, "l4") + expertData + endDiv;
	// 	$("#course-detail-structure").html(sublessonData);

	// }

	// getLevelCard(levelLength, assignmentLength, level){
	// 	let levelNumber = "";
	// 	let levelName = "";
	// 	let hours = levelLength * 1.5;
	// 	let quizLength = levelLength - assignmentLength;
	// 	if(level == "l1"){
	// 		levelName = "Beginner Module";
	// 		levelNumber = 1;
	// 	}
	// 	else if(level == "l2"){
	// 		levelName = "Intermediate Module";
	// 		levelNumber = 2;
	// 	}
	// 	else if(level == "l3"){
	// 		levelName = "Advanced Module";
	// 		levelNumber = 3;
	// 	}
	// 	else if(level == "l4"){
	// 		levelName = "Expert Module";
	// 		levelNumber = 4;
	// 	}
	// 	return '<div class="course-topic"><div class="row"><div class="col-md-12 col-lg-4"><div class="course-info"><span>'+ levelName +'</span></div></div><div class="col-md-12 col-lg-8"><ul class="list-unstyled related-facts"><li><strong>'+ hours +'</strong> hours</li><li><strong>'+ (assignmentLength*3) +'</strong> assignments</li><li><span><strong>'+ quizLength +'</strong> quizzes</span><button class="btn accordion-trigger" data-toggle="collapse" data-target="#courseTopic'+ levelNumber +'" aria-expanded="true" aria-controls="courseTopic'+ levelNumber +'"></button></li></ul></div></div>';
	// }

	// calculateDiscount(price, discountPercentage){
	// 	return Math.round(price - (price/100)*discountPercentage);
	// }

	setRating() {
		const stars = '.star-ratings-css';
		const starSetter = '.star-ratings-css-top';
		$(stars).each((idx, star) => {
			const rating = $(star).data('rating');
			const max = $(star).data('max');
			const width = `${(rating / max) * 100}%`;
			$(star).find(starSetter).css('width', width);
		});
	}

	decideUser(data) {
		try {
			if (data.status == "error") {
				throw data.message;
			}
			$(".custom-radio").prop("hidden", false);
			if (data.userExists) {
				$("#password").prop("hidden", false);
				$("#password").parent().show();

				$("#userMessage").prop("hidden", false);
				$("#nonUserMessage").prop("hidden", true);
				$("#confirmPassword").prop("hidden", true);
				$("#userName").prop("hidden", true);
				if (data.userInfo && data.userInfo["mobile"] && data.userInfo["mobile"] != "") {
					$("#userMobile").val(data.userInfo["mobile"]);
				}
			}
			else {
				$("#password").prop("hidden", false);
				$("#password").parent().show();

				$("#userMessage").prop("hidden", true);
				$("#confirmPassword").prop("hidden", false);
				$("#confirmPassword").parent().show();
				$("#nonUserMessage").prop("hidden", false);
				$("#userName").prop("hidden", false);
			}
			$("#userEmail").data("registeredUser", data.userExists);
		}
		catch (error) {
			console.log(error);
		}
	}

	validateField(selector) {
		try {
			$(selector).removeClass("is-invalid");
			let value = $(selector).val();
			if (!value) {
				$(selector).addClass("is-invalid");
				$("#userEmail").data("allFieldValidated", false);
			}
			else if (selector == "#userMobile") {
				let valid = /^1[+]|[0-9]*$/.test(value);
				if (!valid || value.length > 15 || value.length < 8) {
					$(selector).addClass("is-invalid");
					$("#userEmail").data("allFieldValidated", false);
				}
				else {
					$(selector).removeClass("is-invalid");
				}
			}
			else if (selector == "#userEmail") {
				let valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
				if (!valid) {
					$(selector).addClass("is-invalid");
					$("#userEmail").data("allFieldValidated", false);
				}
				else {
					$(selector).removeClass("is-invalid");
					$("#userEmail").data("allFieldValidated", true);
				}
			}
			else {
				$(selector).removeClass("is-invalid");
			}
		}
		catch (error) {
			console.log(error);
		}
	}

	hideProp(selector) {
		$(selector).prop("hidden", true);
	}

	showProp(selector) {
		$(selector).prop("hidden", false);
	}

	removeRequired(selector) {
		$(selector).prop("required", false);
	}

	loggedInState() {
		$("#userEmail").data("loggedState", true);
		$(".custom-radio").prop("hidden", false);
		// this.hideProp("#userEmail");
		this.hideProp("#password");
		this.hideProp("#userMessage");
		if (authorize.getSession("userAuth")) {
			$("#accountGroup").hide();
		}
	}

	calculateOfferPeriod() {
		try {
			let currentTimeStamp = new Date().getTime();
			let currentDate = new Date(currentTimeStamp).getDate();
			let tomorrowTimeStamp = currentTimeStamp + (24 * 60 * 60 * 1000);
			let tomorrowDate = new Date(tomorrowTimeStamp).getDate();
			let tomorrowMonth = new Date(tomorrowTimeStamp).getMonth();
			let tomorrowYear = new Date(tomorrowTimeStamp).getFullYear();
			let tomorrowMorningTimeStamp = new Date(tomorrowYear, tomorrowMonth, tomorrowDate).getTime();
			let remainingSeconds;
			if (currentDate % 2 == 0 || currentDate == 31) {
				remainingSeconds = (tomorrowMorningTimeStamp - currentTimeStamp) / 1000;
			} else {
				remainingSeconds = ((tomorrowMorningTimeStamp + (24 * 60 * 60 * 1000)) - currentTimeStamp) / 1000;

			}
			let offerTime = this.secondsToHMS(remainingSeconds);
			return offerTime;
		}
		catch (error) {
			console.log(error);
		}
	}

	renderOfferPeriod() {
		try {
			let offerPeroidMarkup = $("#offerPeriod");
			let classObj = this;
			setInterval(function () {
				let offerTime = classObj.calculateOfferPeriod();
				$("#offerPeriodNav").html(`Ends in ` + offerTime);
				offerPeroidMarkup.html("<div class='d-flex justify-content-center'><strong> <small>Limited time offer!</small></strong></div>Ends in " + offerTime);
			}, 1000);
		}
		catch (error) {
			console.log(error);
		}
	}
	secondsToHMS(remainingTime) {
		remainingTime = parseInt(remainingTime);
		let days = Math.floor(remainingTime / (3600 * 24));
		let hours = Math.floor(remainingTime % (3600 * 24) / 3600);
		let minutes = Math.floor(remainingTime % 3600 / 60);
		let seconds = Math.floor(remainingTime % 3600 % 60);
		days = days > 0 ? (('0' + days).slice(-2) + "d ") : "";
		return days + ('0' + hours).slice(-2) + "h " + ('0' + minutes).slice(-2) + "m " + ('0' + seconds).slice(-2) + "s";
	}

}

const sidebar = (function sidebar() {
	const menuList = '#sidebar';
	const toggleicon = '#sidebarToggle .material-icons';
	const collapseClass = 'sidebar-collapse';
	const activeClass = 'active';
	const EventMenuOpened = 'shown.bs.collapse';
	const EventMenuClosed = 'hidden.bs.collapse';

	function handleMobileUI() {
		$(menuList).on(EventMenuClosed, () => $(toggleicon).html('menu'));

		$(menuList).on(EventMenuOpened, () => $(toggleicon).html('close'));
	}

	function toggleSidebar() {
		$(menuList).hover(() => $(menuList).toggleClass(collapseClass));
	}

	const init = () => {
		handleMobileUI();
		toggleSidebar();
	};

	return { init };
}());

const coursesProductPage = (function coursesProductPage() {
	const pageEl = '#courses-product-page';

	const isFunction = functionToCheck => (functionToCheck && {}.toString.call(functionToCheck) === '[object Function]');

	const finishLoading = (pageEl, cb) => {
		$('.spinner').hide();
		$(pageEl).removeClass('loading');
		return isFunction(cb) ? cb() : false;
	};

	const init = () => {
		const thisPage = ($(pageEl).length !== 0);

		if (!thisPage) {
			return;
		}

		sidebar.init();
		//setStarRating();
		finishLoading(pageEl);
	};

	return {
		init,
	};

}());
var applyCoupon = 0;
$(document).ready(function () {
	lazyload();
	let selec = $('input[type=radio][name=userType]:checked').val();
	checkBoxFlow(selec);
	authorize.setSession("plyrLoaded", "false");
	authorize.setSession("jboxLoaded", "false");
	authorize.loginCheck();
	renderOfferPeriod();
	$(".bd-certificate").after(`<div class="d-flex justify-content-center">(Sample certificate)</div>`);
	$(".space").remove();
	// authorize.loginCheck();
	let obj = new CourseBundle();
	// obj.renderOfferPeriod();
	$.each(window.location.search.substr(1).split('&'), function (c, q) {
		var i = q.split('=');
		queries[i[0].toString()] = decodeURI(i[1]);
	});
	url = window.location.href;
	authorize.ajax({ "requestType": "onload", "courseType": "course_bundle" }, "ratingList", function (responseData) {
		let rating = JSON.parse(responseData);
		if (rating.countryCode != "IN" && rating.countryCode != "LK") {
			$('.localField').attr("hidden", true);
			$('.internationalField').attr("hidden", false);
		}
	});
	if (queries["coupon"] != undefined) {
		let couponQuery = queries["coupon"];
		let requestData = {};
		requestData["offerCode"] = couponQuery;
		requestData["courseName"] = $("#bundlePayment").data("course");
		requestData["requestType"] = "discount-detail";
		authorize.ajax(requestData, "discount_check", function (responseData) {
			responseData = JSON.parse(responseData);
			if (responseData.offer_status == "success") {
				$("#bundlePayment").addClass("hide");
				$("#referralCode").val(couponQuery);
			}
		});
	}
	else {
		// $(".couponBox").hide();
	}
	// let OfferCourseKey = queries["course"];
	// $("#bundlePayment").data("course",OfferCourseKey);
	// render(OfferCourseKey);
	let x = window.matchMedia("(max-width: 700px)");

	if (x.matches) { // mobile
		// $("header").before(`<div class="negative-margin d-sm-block d-md-none"><div class="alert bg-purple alert-dismissible fade show d-flex flex-column m-0" role="alert"><div class="row d-flex justify-content-center text-white"><div><h4><strong> <small>Limited time offer!</small></strong></h4></div></div><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span class="text-white" aria-hidden="true">x</span></button><div class="row d-flex justify-content-center mt-2 text-white"><h5 id="offerPeriodNav"></h5></div></div></div>`);

	} else { //desktop

	}
	// window.scrollTo(0, 0);
	let currentdate = new Date().getDate();
	$("#todaydate").text(currentdate);
	let emailDomId = $("#userEmail");
	emailDomId.data("validated", false);
	emailDomId.data("registeredUser", false);
	const stars = '.star-ratings-css';
	const starSetter = '.star-ratings-css-top';
	$(stars).each((idx, star) => {
		const rating = $(star).data('rating');
		const max = $(star).data('max');
		const width = `${(rating / max) * 100}%`;
		$(star).find(starSetter).css('width', width);
	});
	let authToken = authorize.getSession("authToken");
	if (authToken || authorize.getSession("userAuth")) {
		obj.loggedInState();
	}
	else {
		emailDomId.data("loggedState", false);
	}
	// });

	coursesProductPage.init();

	var userType = 2;
	if (authorize.getSession("authToken") == null) {
		$("#emailInput").on('focusout', function () {
			let email = authorize.validate("#emailInput", "email");
			if (email) {
				authorize.ajax({ requestType: "mail_check", email: email }, "registerCheck", function (response) {

					userType = JSON.parse(response)["user"];
					$("#passField").css("display", "block");
					if (!userType) {
						$("#confirmPassword").css("display", "block");
					}
				});
			}
		});
	} else {
		let obj = {};

		authorize.ajax({ requestType: "loggedIn" }, "registerCheck", function (response) {

			response = JSON.parse(response);
			$("#paymentbtn").data("profileData", response); //Dont Remove
			authorize.setSession("email", response["email"]);
			authorize.setSession("mobile", response["mobile"]);
			if (response["passedoutyear"] != "-select-" && response["passedoutyear"]) {
				authorize.setSession("passedoutyear", response["passedoutyear"]);
			}
			if (response["department"] != "-select-" && response["department"]) {
				authorize.setSession("department", response["department"]);
			}
			$("#userEmail").val(response["email"]);
			$("#userEmail").attr("disabled", "true");
			$("#userName").val(response["firstName"]);
			$("#userName").attr("disabled", "true");
			// $("#userEmail").data("loggedState", true);
			$("#password").prop("hidden", true);
			$("#password").parent().prop("hidden", true);
			$("#confirmPassword").prop("hidden", true);
			let mobileValidated = /^1[+]|[0-9]*$/.test(response["mobile"]);
			if (response["mobile"] && response["mobile"].length <= 15 && response["mobile"].length >= 8 && mobileValidated) {
				$("#userMobile").val(response["mobile"]);
				$("#userMobile").prop("hidden", true);
				$("#userMobile").parent().hide();
			} else {
				$("#userMobile").prop("hidden", false);
				$("#userMobile").parent().show();
			}


		});
	}

});

$(document).on("click", "#try-codekata", function (data) {
	window.location.href = "code-kata.html";
});

$(document).on("input change", "#emailInput", function (data) {
	$("#passField").css("display", "none");
	$("#confirmPassField").css("display", "none");
});

$(document).on("click","#applyCoupon",function(e){
	e.preventDefault();
  let requestData = {};
  let courseName = "";
  if ($("#bundlePayment").length){
    courseName = $("#bundlePayment").data("course");
  }else{
    courseName = $("#bundlePaymentInternational").data("course");
  }
	let auth = authorize.getSession("authToken");
	if(auth==null){
		let bundleObj = new CourseBundle();
		bundleObj.validateField("#userEmail");
		if(!($("#userEmail").hasClass("is-invalid"))){
			requestData["email"] = $("#userEmail").val();
		}else{
			return false;
		}
  }
  requestData["userType"]=$("input[type=radio][name=userType]:checked").val();
    requestData["type"] = "offerCode";
    requestData["courseName"] = courseName;
	requestData["offerCode"] = $("#referralCode").val();
	if($("#applyCoupon").hasClass("remove")){
		requestData["requestType"] = "remove";
		authorize.ajax(requestData, "discount_check", function (responseData) {
		$(".result-message").html("");
    // $("#discountedPrice").html("");
    $("#discountedPrice").attr("hidden",true);
		$(".paymentPrice").removeClass("strikeout");
		$("#referralCode").val("");
		$("#applyCoupon").removeClass("remove");
		$("#applyCoupon").addClass("apply");
		});
		return false;
	}
    if(!requestData["offerCode"]){
        $("#referralCode").addClass("is-invalid");
    }else{
        authorize.ajax(requestData, "discount_check", function (responseData) {
            responseData = JSON.parse(responseData);
            if (responseData.offer_status == "expired") {
                $(".result-message").html("<span class='text-danger'>Invalid or Expired coupon</span>");
                // $("#discountedPrice").text("");
                $("#discountedPrice").attr("hidden",true);
				$(".paymentPrice").removeClass("strikeout");
				$("#applyCoupon").removeClass("remove");
				$("#applyCoupon").addClass("apply");
            } else {
				$(".result-message").html('<p class="text-success">Congratulations! You have been given <span class="price" style="color:#28a745">' + responseData.offer_price + '</span> Off</p>');
				$("#discountedPrice .price").text(responseData.remaining_amount);
				$("#discountedPrice").attr("hidden",false);
				$(".paymentPrice").addClass("strikeout");
				$("#applyCoupon").removeClass("apply");
        $("#applyCoupon").addClass("remove");
        if(responseData["countryCode"] != undefined){
          if(responseData["countryCode"] != "IN"){
            $("#discountedPrice .price").removeClass("price");
            $("p span.price").removeClass("price");
          }
        }
			}
			
			if($("#bundlePayment").hasClass("hide")){
				replaceDummy();
				$("#bundlePayment").trigger("click");
				

			}
		});
		
    }
});

// $(window).scroll(function(){

// 	if(window.innerWidth > 900){
// 		topOfFooter = $('.main-footer').position().top;
// 		scrollDistanceFromTopOfDoc = $(document).scrollTop() + 570;
// 		top = $(document).scrollTop();
// 		scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;
// 		// if (scrollDistanceFromTopOfDoc > topOfFooter) {
// 		// 	// $('.fixed-card').css('margin-top',  0 - scrollDistanceFromTopOfFooter - 150);
// 		// 	$('.fixed-card').css('top', 170);
// 		// }
// 		// console.log(scrollDistanceFromTopOfDoc);
// 		if(scrollDistanceFromTopOfDoc<580){
// 			$('.fixed-card').css('top', 383);
// 			// $('.fixed-card').css('margin-top', -52);
// 		}else if(scrollDistanceFromTopOfDoc < 620){
// 			$('.fixed-card').css('top', 430);
// 		}else if(scrollDistanceFromTopOfDoc < 630){
// 			$('.fixed-card').css('top', 400);
// 		}
// 		else if(scrollDistanceFromTopOfDoc < 640){
// 			$('.fixed-card').css('top', 350);
// 		}
// 		else if (scrollDistanceFromTopOfDoc > topOfFooter) {
// 			// $('.fixed-card').css('margin-top',  0 - scrollDistanceFromTopOfFooter - 150);
// 			$('.fixed-card').css('top', 140);
// 		}
// 	    else if(scrollDistanceFromTopOfDoc > 750){
// 			let margin = -52 ;
// 			// console.log(scrollDistanceFromTopOfDoc);
// 			$('.fixed-card').css('top', 250);
// 			// $('.fixed-card').attr("style",'margin-top' = -(scrollDistanceFromTopOfDoc-630));

// 		}


// 	}
// });

$(window).scroll(function () {

	//   if (window.innerWidth > 900) {
	//     topOfFooter = $(".main-footer").position().top;
	//     scrollDistanceFromTopOfDoc = $(document).scrollTop() + 570;
	//     scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;
	//     if (scrollDistanceFromTopOfDoc > topOfFooter) {
	//       $(".fixed-card").css(
	//         "margin-top",
	//         0 - scrollDistanceFromTopOfFooter - 250
	//       );
	//     } else if (window.innerWidth > 900 && $(".bodyContainer").position().top > $(document).scrollTop()) {
	//       $(".fixed-card").css("margin-top", -275);
	//     }
	//     else{
	//     	$(".fixed-card").css("margin-top", -275);
	//     }
	//   }

	//   let formPositon = $('.fixed-card').offset().top;
	//   let formPositonHeight = $('.fixed-card').outerHeight();
	//   let windowHeight = $(window).height();
	//   let windowPosition = $(this).scrollTop();
	// //   console.log((windowPosition + 300) > (formPositon + formPositonHeight - windowHeight), (formPositon > windowPosition - 300), (windowPosition + windowHeight + 300 > formPositon + formPositonHeight));
	//    if (((windowPosition + 300) > (formPositon + formPositonHeight - windowHeight)) && (formPositon > windowPosition - 300) && (windowPosition + windowHeight + 300 > formPositon + formPositonHeight)){
	//    		$(".mobile-buy").hide();
	//    }
	//    else{
	//    		$(".mobile-buy").show();
	//    }
});


$(document).on("focusout", "#buy-bundle", function (data) {
	let bundleObj = new CourseBundle();
	let emailId = $("#userEmail").val();
	bundleObj.validateField('#userEmail');
	let isValidated = $("#userEmail").data("validated");
	let loggedState = $("#userEmail").data("loggedState");
	let isRegistered = $("#userEmail").data("registeredUser");
	let emailValidated = $("#userEmail").data("allFieldValidated");
	let mobile = $("#userMobile").val();
	if (!isValidated && !loggedState) {
		let name = $("#userName").val();
		if (emailId && emailValidated) {
			// bundleObj.validateField("#userMobile");
			let input = { type: "validateUser", emailId: emailId, name: name, mobile: mobile };
			input["source"] = "Not Set";
			input["medium"] = "Not Set";
			input["campaign"] = "Not Set";
			if (queries.utm_source != undefined) {
				input["source"] = queries.utm_source;
			}
			if (queries.utm_medium != undefined) {
				input["medium"] = queries.utm_medium;
			}
			if (queries.utm_campaign != undefined) {
				input["campaign"] = queries.utm_campaign;
			}
			input["url"] = url;
			input["product"] = $("#bundlePayment").data("course");
			authorize.ajax(input, "buyBundle", function (data) {
				$("#userEmail").data("validated", true);
				data = JSON.parse(data);
				bundleObj.decideUser(data);
			});
		}
	}
	let password = $("#password").val();
	let confirmPassword = $("#confirmPassword").val();
	if (!$("#userEmail").data("registeredUser") && password != confirmPassword && password && confirmPassword) {
		$("#misMatch").prop("hidden", false);
		$("#nonUserMessage").prop("hidden", true);
	}
	else {
		$("#misMatch").prop("hidden", true);
	}
});
//start
$(document).on("click", "#bundlePayment", function () {
	let payObject = new coursePayment();
	let bundleObj = new CourseBundle();
	let isRegistered = $("#userEmail").data("registeredUser");
	$("#userEmail").data("allFieldValidated", true);
	bundleObj.validateField("#userName");
	bundleObj.validateField("#userMobile");
	let userMobile = $("#userMobile").val();
	let userName = $("#userName").val();
	if ($("#userEmail").data("loggedState")) {
		let input = { type: "logging", userName: userName, userMobile: userMobile };
		if (!$("input[type=radio][name=userType]:checked").val()) {
			$("input[type=radio][name=userType]").addClass("is-invalid");
			$("#userEmail").data("allFieldValidated", false);
		} else {
			$("input[type=radio][name=userType]").removeClass("is-invalid");
			if ($("input[type=radio][name=userType]:checked").val() == "student") {
				bundleObj.validateField("#registerNumber");
				bundleObj.validateField("#collegeName");
				bundleObj.validateField("#passedOutYear");
				input["registerNumber"] = $("#registerNumber").val();
				input["collegeName"] = $("#collegeName").val();
				input["passedOutYear"] = $("#passedOutYear").val();
			} else if ($("input[type=radio][name=userType]:checked").val() == "faculty") {
				bundleObj.validateField("#professorDepartment");
				bundleObj.validateField("#collegeName");
				input["professorDepartment"] = $("#professorDepartment").val();
				input["collegeName"] = $("#collegeName").val();
			}
		}
		input["userType"] = $("input[type=radio][name=userType]:checked").val();

		input["source"] = "Not Set";
		input["medium"] = "Not Set";
		input["campaign"] = "Not Set";
		if (queries.utm_source != undefined) {
			input["source"] = queries.utm_source;
		}
		if (queries.utm_medium != undefined) {
			input["medium"] = queries.utm_medium;
		}
		if (queries.utm_campaign != undefined) {
			input["campaign"] = queries.utm_campaign;
		}
		input["url"] = url;
		input["product"] = $("#bundlePayment").data("course");
		// console.log("start");
		if ($("#userEmail").data("allFieldValidated")) {
			// console.log("send");
			authorize.ajax(input, "buyBundle", function (data) {
				//trigger payment
				payObject.paymentTypeRazorPay($("#bundlePayment").data("course"), "courseBundle", input["userType"]);
			});
		}
	}

	bundleObj.validateField("#password");
	bundleObj.validateField("#userEmail");
	bundleObj.validateField("#userMobile");
	let password = $("#password").val();
	let emailId = $("#userEmail").val();
	let confirmPassword = $("#confirmPassword").val();
	if (!isRegistered && !$("#userEmail").data("loggedState")) {
		if ($("#password").val() == "") {
			$("#password").addClass("is-invalid");
			return false;
		}
		if (password != confirmPassword) {
			$("#userEmail").data("allFieldValidated", false);
		}
		let input = { type: "logging", email: emailId, password: password, fname: userName, lname: "", phone: userMobile };
		if (!$("input[type=radio][name=userType]:checked").val()) {
			$("input[type=radio][name=userType]").addClass("is-invalid");
			$("#userEmail").data("allFieldValidated", false);
		} else {
			$("input[type=radio][name=userType]").removeClass("is-invalid");
			if ($("input[type=radio][name=userType]:checked").val() == "student") {
				bundleObj.validateField("#registerNumber");
				bundleObj.validateField("#collegeName");
				bundleObj.validateField("#passedOutYear");
				input["registerNumber"] = $("#registerNumber").val();
				input["collegeName"] = $("#collegeName").val();
				input["passedOutYear"] = $("#passedOutYear").val();
			} else if ($("input[type=radio][name=userType]:checked").val() == "faculty") {
				bundleObj.validateField("#professorDepartment");
				bundleObj.validateField("#collegeName");
				input["professorDepartment"] = $("#professorDepartment").val();
				input["collegeName"] = $("#collegeName").val();
			}
		}
		input["userType"] = $("input[type=radio][name=userType]:checked").val();

		bundleObj.validateField("#userName");
		if ($("#userEmail").data("allFieldValidated")) {
			input["source"] = "Not Set";
			input["medium"] = "Not Set";
			input["campaign"] = "Not Set";
			if (queries.utm_source != undefined) {
				input["source"] = queries.utm_source;
			}
			if (queries.utm_medium != undefined) {
				input["medium"] = queries.utm_medium;
			}
			if (queries.utm_campaign != undefined) {
				input["campaign"] = queries.utm_campaign;
			}
			input["url"] = url;
			grecaptcha.execute("6LdADb4UAAAAAA1feb36sozffPYRKKOqD9WPbibp", { action: "register" })
				.then(function (token) {
					capchetoken = token;
				});
			input["capchetoken"] = capchetoken;
			authorize.ajax(input, "mregister", function (data) {
				//trigger payment
				data = data.substring(1, data.length - 1)
				data = JSON.parse(data);
				hash = data.hash
				input["emails"] = emailId;
				input["userMobile"] = userMobile;
				input["userName"] = userName;
				input["product"] = $("#bundlePayment").data("course");
				authorize.ajax(input, "buyBundle", function (data) {
					//done logging
					payObject.paymentTypeRazorPay($("#bundlePayment").data("course"), "courseBundle", input["userType"], "", hash);
				});

			});
		}
	}

	let input = { type: "login", emails: emailId, password: password, userName: userName, userMobile: userMobile };
	if (!$("input[type=radio][name=userType]:checked").val()) {
		$("input[type=radio][name=userType]").addClass("is-invalid");
		$("#userEmail").data("allFieldValidated", false);
	} else {
		$("input[type=radio][name=userType]").removeClass("is-invalid");
		if ($("input[type=radio][name=userType]:checked").val() == "student") {
			bundleObj.validateField("#registerNumber");
			bundleObj.validateField("#collegeName");
			bundleObj.validateField("#passedOutYear");
			input["registerNumber"] = $("#registerNumber").val();
			input["collegeName"] = $("#collegeName").val();
			input["passedOutYear"] = $("#passedOutYear").val();
		} else if ($("input[type=radio][name=userType]:checked").val() == "faculty") {
			bundleObj.validateField("#professorDepartment");
			bundleObj.validateField("#collegeName");
			input["professorDepartment"] = $("#professorDepartment").val();
			input["collegeName"] = $("#collegeName").val();
		}
	}
	input["userType"] = $("input[type=radio][name=userType]:checked").val();

	if (isRegistered && !$("#userEmail").data("loggedState") && $("#userEmail").data("allFieldValidated")) {
		input["source"] = "Not Set";
		input["medium"] = "Not Set";
		input["campaign"] = "Not Set";
		if (queries.utm_source != undefined) {
			input["source"] = queries.utm_source;
		}
		if (queries.utm_medium != undefined) {
			input["medium"] = queries.utm_medium;
		}
		if (queries.utm_campaign != undefined) {
			input["campaign"] = queries.utm_campaign;
		}
		input["url"] = url;
		input["product"] = $("#bundlePayment").data("course");
		authorize.ajax(input, "buyBundle", function (data) {
			data = JSON.parse(data);
			bundleObj.hideProp("#userMessage");
			if (data.access == "true") {
				if (data.auth) {
					authorize.setSession("signInAuth", data.auth);
				}
				// $("#userEmail").data("loggedState", true);
				bundleObj.hideProp("#userMessage");
				bundleObj.hideProp("#invalidPassword");
				// bundleObj.showProp("#loginSuccessful");
				let payObject = new coursePayment();
				let authToken = authorize.getSession("signInAuth");
				payObject.paymentTypeRazorPay($("#bundlePayment").data("course"), "courseBundle", input["userType"], authToken);
			}
			else if (data.access == "false") {
				bundleObj.hideProp("#loginSuccessful");
				bundleObj.showProp("#invalidPassword");
			}
		});
	}
});
//end


$(document).on("", "#buy-bundle", function (data) {
	try {
		data.preventDefault();
		$("#userEmail").data("allFieldValidated", true);
		let bundleObj = new CourseBundle();
		bundleObj.validateField("#password");
		let isRegistered = $("#userEmail").data("registeredUser");
		if (!isRegistered) {
			bundleObj.validateField("#confirmPassword");
		}
		if ($("#userEmail").data("allFieldValidated") && !isRegistered) {
			if ($("#password").val() == "") {
				$("#password").addClass("is-invalid");
				return false;
			}
			let firstName = $("#userName").val();
			let email = $("#userEmail").val();
			let password = $("#password").val();
			// let mobile = $("#userMobile").val();
			let input = { email: email, password: password, fname: firstName, lname: "" };
			authorize.ajax(input, "mregister", function (data) {
				// console.log("registered");
			});
		}
	}
	catch (error) {

	}
});


// $(document).on("click", "#applyOffer", function (e) {
// 	e.preventDefault();
// 	let requestData = {};
// 	let courseName = $("#bundlePayment").data("course");
// 	let auth = authorize.getSession("authToken");
// 	if (auth == null) {
// 		let bundleObj = new CourseBundle();
// 		bundleObj.validateField("#userEmail");
// 		if (!($("#userEmail").hasClass("is-invalid"))) {
// 			requestData["email"] = $("#userEmail").val();
// 		} else {
// 			return false;
// 		}
// 	}
// 	requestData["type"] = "offerCode";
// 	requestData["courseName"] = courseName;
// 	requestData["offerCode"] = $("#referralCode").val();
// 	if ($("#applyOffer").hasClass("remove")) {
// 		requestData["requestType"] = "remove";
// 		authorize.ajax(requestData, "discount_check", function (responseData) {
// 			$(".result-message").html("");
// 			$("#discountedPrice").html("");
// 			$("#discountedPrice").removeClass("price");
// 			$("#paymentPrice").removeClass("strikeout");
// 			$("#referralCode").val("");
// 			$("#applyOffer").removeClass("remove");
// 			$("#applyOffer").addClass("apply");
// 		});
// 		return false;
// 	}
// 	if (!requestData["offerCode"]) {
// 		$("#referralCode").addClass("is-invalid");
// 	} else {
// 		authorize.ajax(requestData, "discount_check", function (responseData) {
// 			responseData = JSON.parse(responseData);
// 			if (responseData.offer_status == "expired") {
// 				$(".result-message").html("<span class='text-danger'>Invalid or Expired coupon</span>");
// 				$("#discountedPrice").html("");
// 				$("#discountedPrice").removeClass("price");
// 				$("#paymentPrice").removeClass("strikeout");
// 				$("#applyOffer").removeClass("remove");
// 				$("#applyOffer").addClass("apply");
// 			} else {
// 				let res1 = "";
// 				res1 += '<i class="fa fa-inr">' + responseData.remaining_amount + '<i>';
// 				$(".result-message").html('<p class="text-success">Congratulations! You have been given <span class="price" style="color:#28a745">' + responseData.offer_price + '</span> Off</p>');
// 				$("#discountedPrice").html(res1);
// 				$("#discountedPrice").addClass("price");
// 				$("#paymentPrice").addClass("strikeout");
// 				$("#applyOffer").removeClass("apply");
// 				$("#applyOffer").addClass("remove");
// 			}

// 			if ($("#bundlePayment").hasClass("hide")) {
// 				replaceDummy();
// 				$("#bundlePayment").trigger("click");


// 			}
// 		});

// 	}
// });
$(document).on("input change", "#userEmail", function (data) {
	$("#userEmail").data("validated", false);
});

$(document).on('click', '.is-invalid', function () {
	$(this).removeClass("is-invalid");
});

function renderCustomVideo(selector, source) {
	try {
		let videoExtention = "mp4";
		customPlayer.source = {
			type: 'video',
			sources: [{
				src: source,
				provider: 'youtube',
			}],
		};
		customPlayer.play();
		$(".plyr--full-ui").addClass("embed-responsive-item");
		$(".plyr__video-wrapper").addClass("embed-responsive-item");
		$("video").addClass("embed-responsive-item");
	}
	catch (error) {
		// console.log(error);
	}
}
$(document).on("click", "#preview", function (data) {
	if (authorize.getSession("jboxLoaded") != "true") {
		$("head").append(`<link defer href="js/library/jBox.all.min.css" rel="stylesheet"><script  src="js/library/jBox.all.min.js"></script>`);
		authorize.setSession("jboxLoaded", "true");
	}
	if (authorize.getSession("plyrLoaded") != "true") {
		$("head").append(`<link rel="stylesheet" href="library/plyr/plyr.css">
		<link rel="stylesheet" href="css/plyrfix.css">`);
		$("body").append(`<script  src="library/plyr/plyr.polyfilled.js" ></script>`);
		authorize.setSession("plyrLoaded", "true");
	}

	let content = '<div class="embed-responsive embed-responsive-21by9 video-wrap"><video class="embed-responsive-item" id="sampleVideo"></video></div>';
	let width = "100%";
	if (window.innerWidth > 500) {
		width = "50%";
	}
	let video = $(this).data("src");
	var myModal = new jBox('Modal', {
		content: content,
		width: width,
		onCreated: function () {
			const customPlayer = new Plyr("#sampleVideo");
			window.customPlayer = customPlayer;
			let courseObj = new CourseBundle();
			renderCustomVideo("", video);
			$(".video-wrap").css("margin", 0);
			$(".jBox-content").css("padding", 0);
		}
		, onCloseComplete: function () {
			customPlayer.pause();
		}
	});

	myModal.open();
	e.stopImmediatePropagation();
});

function replaceDummy() {
	$("#bundlePayment").removeClass("hide");
	$(".couponBox").css("display", "flex");
	$("#dummy-coupon").addClass("hide");
	$("#paymentPrice").attr("hidden", false);
	$("#discountedPrice").attr("hidden", false);
}

$(document).on("click", "#applyOfferDummy", function (e) {
	e.preventDefault();
	replaceDummy();

});

$(document).on("click", "#offerPayment", function (e) {
	e.preventDefault();
	let bundleObj = new CourseBundle();
	bundleObj.validateField('#userEmail');
	let isValidated = $("#userEmail").data("validated");
	if (isValidated || $("#userEmail").data("loggedState")) {
		$("#applyOffer").trigger("click");
	}
});
$(document).on("click", ".closex", function () {
	$('#anniversaryCard').parent().slideUp();
})
// $(document).ready(function(){

// });
// $(document).on("click","#buy",function(){
// 	let payObject = new coursePayment();
// 	let isRegistered = $("#useremail").data("registeredUser");
// 	$("#useremail").data("verified", true);

// 	let userMobile = validate("#usermobile", 8, /[0-9 -()+]{10}$/, 15);
// 	let userName = validate("#username", 1, /^[a-zA-Z. ]+$/);
// 	if($("#useremail").data("loggedState")){
// 		let input = {type : "logging", userName : userName, userMobile : userMobile};
// 		input["source"] = "Not Set";
// 		input["medium"] = "Not Set";
// 		input["campaign"] = "Not Set";	
// 		if(queries.utm_source != undefined){
// 			input["source"] = queries.utm_source;
// 		}
// 		if(queries.utm_medium != undefined){
// 			input["medium"] = queries.utm_medium;
// 		}
// 		if(queries.utm_campaign != undefined){
// 			input["campaign"] = queries.utm_campaign;
// 		}
// 		input["url"] = url;
// 		input["product"] = $("#buy").data("course");
// 		// console.log("start");
// 		if($("#useremail").data("verified")){
// 			// console.log("send");
// 			authorize.ajax(input, "buyBundle", function(data){
// 				//trigger payment
// 				payObject.paymentTypeRazorPay($("#buy").data("course"),"courseBundle",input["userType"]);
// 			});
// 		}
// 	}

// 	// bundleObj.validateField("#password");
// 	// bundleObj.validateField("#useremail");
// 	// bundleObj.validateField("#userMobile");
// 	let password = validate("#password",2);
// 	let emailId = validate(
//         "#useremail",
//         1,
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// 	let confirmPassword =validate("#buy",2);
// 	if(!isRegistered && !$("#useremail").data("loggedState")){
//         if($("#password").val()==""){
//             $("#password").addClass("is-invalid");
//             return false;
//         }
// 		if(password != confirmPassword){
// 			$("#useremail").data("verified", false);
// 		}
// 		let input = {type : "logging", email : emailId, password : password, fname : userName, lname : "", phone : userMobile};
// 		validate("#username", 1, /^[a-zA-Z. ]+$/);
// 		if($("#useremail").data("verified")){
// 			input["source"] = "Not Set";
// 			input["medium"] = "Not Set";
// 			input["campaign"] = "Not Set";	
// 			if(queries.utm_source != undefined){
// 				input["source"] = queries.utm_source;
// 			}
// 			if(queries.utm_medium != undefined){
// 				input["medium"] = queries.utm_medium;
// 			}
// 			if(queries.utm_campaign != undefined){
// 				input["campaign"] = queries.utm_campaign;
// 			}
// 			input["url"] = url;
// 			grecaptcha.execute("6LdADb4UAAAAAA1feb36sozffPYRKKOqD9WPbibp", { action: "register" })
//     .then(function(token) {
//       capchetoken = token;
//     });
// 	input["capchetoken"] = capchetoken;
// 			authorize.ajax(input, "mregister", function(data){
// 				//trigger payment
// 				data = data.substring(1, data.length - 1)
// 				data = JSON.parse(data);
// 				hash = data.hash
// 				input["emails"] = emailId;
// 				input["userMobile"] = userMobile;
// 				input["userName"] = userName;
// 				input["product"] = $("#buy").data("course");
// 				authorize.ajax(input, "buyBundle", function(data){
// 					//done logging
// 					payObject.paymentTypeRazorPay($("#buy").data("course"), "courseBundle", input["userType"], "", hash);
// 				});

// 			});
// 		}
// 	}
// 	let input = {type: "login", emails : emailId, password : password, userName : userName, userMobile : userMobile};
// 	if(isRegistered && !$("#useremail").data("loggedState") && $("#useremail").data("verified")){
// 		input["source"] = "Not Set";
// 		input["medium"] = "Not Set";
// 		input["campaign"] = "Not Set";	
// 		if(queries.utm_source != undefined){
// 			input["source"] = queries.utm_source;
// 		}
// 		if(queries.utm_medium != undefined){
// 			input["medium"] = queries.utm_medium;
// 		}
// 		if(queries.utm_campaign != undefined){
// 			input["campaign"] = queries.utm_campaign;
// 		}
// 		input["url"] = url;
// 		input["product"] = $("#buy").data("course");
// 		authorize.ajax(input, "buyBundle", function(data){
// 			data = JSON.parse(data);
// 			bundleObj.hideProp("#userMessage");
// 			if(data.access == "true"){
// 				if(data.auth){
// 					authorize.setSession("signInAuth", data.auth);
// 				}
// 				// $("#useremail").data("loggedState", true);
// 				bundleObj.hideProp("#userMessage");
// 				bundleObj.hideProp("#invalidPassword");
// 				// bundleObj.showProp("#loginSuccessful");
// 				let payObject = new coursePayment();
// 				let authToken = authorize.getSession("signInAuth");
// 				payObject.paymentTypeRazorPay($("#buy").data("course"), "courseBundle", input["userType"], authToken);
// 			}
// 			else if(data.access == "false"){
// 				bundleObj.hideProp("#loginSuccessful");
// 				bundleObj.showProp("#invalidPassword");
// 			}
// 		});
// 	}
// });
let authToken = authorize.getSession("authToken");
if (authToken) {
	$("#userName").parent().hide();
	$("#userMobile").parent().hide();
	$("#password").parent().hide();
	$("#confirmPassword").parent().hide();
}
$(document).on('focusout', "#userEmail", function () { checkEmail(); })
// $("#userEmail").on('focusout',function () {checkEmail();});
$(document).on('click', "#bundlePayment", function () {
	checkEmail();
	if ($("#userName").val().length <= 0) {
		$("#userName").removeClass("is-invalid");
	}
	if (authToken || authorize.getSession("userAuth")) {
		$("#password").parent().hide();
	} else {
		if (!$("#userEmail").data("registeredUser") && password) {
			let confirmPassword = validate("#confirmPassword", 2);
			let password = validate("#password", 2);
			if (password != confirmPassword) {
				$("#misMatch").prop("hidden", false);
				$("#nonUserMessage").prop("hidden", true);
			} else {
				$("#misMatch").prop("hidden", true);
			}

		}
		else {
			$("#misMatch").prop("hidden", true);
		}
	}

});
function checkEmail() {
	if ($("#userEmail").val().length > 0) {
		let email = validate(
			"#userEmail",
			1,
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
		if (email) {
			$.each(window.location.search.substr(1).split('&'), function (c, q) {
				var i = q.split('=');
				queries[i[0].toString()] = decodeURI(i[1]);
			});
			url = window.location.href;

			let input = { type: "validateUser", emailId: email };
			input["source"] = "Not Set";
			input["medium"] = "Not Set";
			input["campaign"] = "Not Set";
			if (queries.utm_source != undefined) {
				input["source"] = queries.utm_source;
			}
			if (queries.utm_medium != undefined) {
				input["medium"] = queries.utm_medium;
			}
			if (queries.utm_campaign != undefined) {
				input["campaign"] = queries.utm_campaign;
			}
			input["url"] = url;
			input["product"] = $("#bundlePayment").data("course");
			authorize.ajax(input, "buyBundle", function (data) {
				$("#userEmail").data("validated", true);
				data = JSON.parse(data);
				if (data.userExists) {
					$("#password").parent().show();
					if (authorize.getSession("authToken") === null) {
						$("#userMessage").prop("hidden", false);
					}
					$("#nonUserMessage").prop("hidden", true);
					$("#confirmPassword").parent().hide();
					$("#userName").parent().hide();
				}
				else {
					$("#password").parent().show();
					$("#userMessage").prop("hidden", true);
					$("#confirmPassword").prop("hidden", false);
					$("#confirmPassword").parent().show();
					$("#nonUserMessage").prop("hidden", false);
					$("#userName").parent().show();
				}
				$("#userEmail").data("registeredUser", data.userExists);
			});
			// authorize.ajax({ requestType: "mail_check",email: email }, "registerCheck", function(response) {

			//     userType = JSON.parse(response)["user"];
			//     $("#password").parent().show();
			//     $("#userMobile").parent().show();

			//     if(!userType){
			// 	    $("#userName").parent().show();
			//         $("#confirmPassword").parent().show();
			//         $("#userEmail").data("registeredUser",false);

			//     }else{
			// 		$("#confirmPassword").parent().hide();
			// 		$("#userName").parent().hide();
			//         $("#userEmail").data("registeredUser",true);
			//     }
			// });
		} else {
			$("#userName").parent().hide();
			$("#password").parent().hide();
			$("#confirmPassword").parent().hide();
			$("#nonUserMessage").prop("hidden", true);
			$("#userMessage").prop("hidden", true);

		}
	} else {
		$("#userName").parent().hide();
		// $("#password").parent().hide();
		$("#confirmPassword").parent().hide();
	}
	if (authToken || authorize.getSession("userAuth")) {
		$("#password").parent().hide();
	}
}
$(document).on("click", ".is-invalid", function () {
	$(this).removeClass("is-invalid");
})
function validate(id, length, regex = false, maxLength = false) {
	let element = $(id);
	let value = element.val();
	let status;
	if (maxLength && value.length > maxLength) {
		element.addClass("is-invalid");
		status = $("#userEmail").data("verified");
		if (status) {
			$("#userEmail").data("verified", false);
		}
		return false;
	}
	// console.log(value.length >= length);
	if (value) {
		if (value.length >= length) {
			if (regex) {
				if (regex.test(value)) {
					return value;
				} else {
					element.addClass("is-invalid");
					status = $("#userEmail").data("verified");
					if (status) {
						$("#userEmail").data("verified", false);
					}
					return false;
				}
			} else {
				return value;
			}
		} else {
			element.addClass("is-invalid");
			status = $("#userEmail").data("verified");
			if (status) {
				$("#userEmail").data("verified", false);
			}
			return false;
		}
	} else {
		element.addClass("is-invalid");
		status = $("#userEmail").data("verified");
		if (status) {
			$("#userEmail").data("verified", false);
		}
		return false;
	}
}

// Jbox video preview
// $(document).on("click", "#preview", function(data) {
//     let content = '<div class="embed-responsive embed-responsive-16by9 video-wrap"><video class="embed-responsive-item" id="sampleVideo"></video></div>';
//     let width = "100%";
//     if (window.innerWidth > 500) {width = "50%";}
//     let video = $(this).data("src");
//     var myModal = new jBox('Modal', {
//         content: content,
//         width: width,
//         onCreated: function() {
//             const customPlayer = new Plyr("#sampleVideo");
//             window.customPlayer = customPlayer;
//             renderCustomVideo("", video);
//             $(".video-wrap").css("margin", 0);
//             $(".jBox-content").css("padding", 0);
//         },
//         onCloseComplete: function() {
//             customPlayer.pause();
//         }
//     });
//     myModal.open();
// });
// function renderCustomVideo(selector, source) {
//     try {
//         let videoExtention = "mp4";
//         customPlayer.source = {
//             type: 'video',
//             sources: [{
//                 src: source,
//                 provider: 'youtube',
//             }],
//         };
//         customPlayer.play();
//         $(".plyr--full-ui").addClass("embed-responsive-item");
//         $(".plyr__video-wrapper").addClass("embed-responsive-item");
//         $("video").addClass("embed-responsive-item");
//     } catch (error) {
//     }
// }

$(document).on('mouseleave', function (event) {
	if (!$('input').is(':focus')) {
		$("#advisorModal").modal("show");
		$(this).off(event);
	}
});




$(document).on('click', "#callbackBtn", function () {
	$("#name").data("verified", true);
	let search = new URLSearchParams(document.location.search.substring(1));
	let data = {};
	data["name"] = validate("#name", 1, /^[a-zA-Z. ]+$/);
	data["mobile"] = validate("#phno", 8, /[0-9 -()+]{10}$/, 15);
	data["course"] = $("#bundlePayment").data("course");
	data["url"] = window.location.href;
	data["campaign"] = search.get("campaign") ? search.get("campaign") : "";
	data["medium"] = search.get("medium") ? search.get("medium") : "";
	data["source"] = search.get("source") ? search.get("source") : "";
	data["type"] = "insert_contact";
	// let verififed=$("#name").data("verified");
	if (data["name"] && data["mobile"]) {
		authorize.ajax(data, "courseCallback", function (response) {
			response = JSON.parse(response);
			if (response["status"] == "success") {
				$("#callbackBtn").attr("hidden", true);
				$("#successMsg").html(`<div class="alert alert-primary" role="alert">Your request for callback has been submitted successfully!</div>`);
			}
		})
	}
})
$(document).on("click", "#viewSyllabusBtn p", function () {
	if ($(this).text() === "View all 13 Modules") {
		$(this).text("View less");
	} else {
		$(this).text("View all 13 Modules");
	}
})
$(document).on("input change", "input[type=radio][name=userType]", function () {
	checkBoxFlow(this.value);
});
function checkBoxFlow(value) {
	$("input[type=radio][name=userType]").removeClass("is-invalid");
	if (value == "student") {
		$("#collegeName").parent().show();
		$("#registerNumber").parent().show();
		$("#passedOutYear").parent().show();
		$("#professorDepartment").parent().hide();
		$("#professionalPrice").parent().show();
		$(".price").text("1062");

	} else if (value == "faculty") {
		$("#collegeName").parent().show();
		$("#professorDepartment").parent().show();
		$("#registerNumber").parent().hide();
		$("#passedOutYear").parent().hide();
		$("#professionalPrice").parent().show();
		$(".price").text("5310");


	} else if (value == "professional") {
		$("#collegeName").parent().hide();
		$("#registerNumber").parent().hide();
		$("#professorDepartment").parent().hide();
		$("#passedOutYear").parent().hide();
		$("#professionalPrice").parent().hide();
		$(".price").text("8399");


	}
	if (!value) {
		$("input[type=radio][name=userType]").addClass("is-invalid");
	}
}
function lazyload() {
	let lazyloadImages;
	if ("IntersectionObserver" in window) {
		lazyloadImages = document.querySelectorAll(".guvi-lazy-img");
		var imageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					var image = entry.target;
					image.classList.remove("guvi-lazy-img");
					imageObserver.unobserve(image);
				}
			});
		});

		lazyloadImages.forEach(function (image) {
			imageObserver.observe(image);
		});
	} else {
		var lazyloadThrottleTimeout;
		lazyloadImages = document.querySelectorAll(".guvi-lazy-img");

		function lazyload() {
			if (lazyloadThrottleTimeout) {
				clearTimeout(lazyloadThrottleTimeout);
			}

			lazyloadThrottleTimeout = setTimeout(function () {
				var scrollTop = window.pageYOffset;
				lazyloadImages.forEach(function (img) {
					if (img.offsetTop < (window.innerHeight + scrollTop)) {
						img.src = img.dataset.src;
						img.classList.remove('guvi-lazy-img');
					}
				});
				if (lazyloadImages.length == 0) {
					document.removeEventListener("scroll", lazyload);
					window.removeEventListener("resize", lazyload);
					window.removeEventListener("orientationChange", lazyload);
				}
			}, 20);
		}

		document.addEventListener("scroll", lazyload);
		window.addEventListener("resize", lazyload);
		window.addEventListener("orientationChange", lazyload);
	}
}
calculateOfferPeriod = () => {
	try {
		let currentTimeStamp = new Date().getTime();
		let tomorrowTimeStamp = currentTimeStamp + 24 * 60 * 60 * 1000;
		let tomorrowDate = new Date(tomorrowTimeStamp).getDate();
		let tomorrowMonth = new Date(tomorrowTimeStamp).getMonth();
		let tomorrowYear = new Date(tomorrowTimeStamp).getFullYear();
		let tomorrowMorningTimeStamp = new Date(
			tomorrowYear,
			tomorrowMonth,
			tomorrowDate
		).getTime();
		let remainingSeconds =
			(tomorrowMorningTimeStamp - currentTimeStamp) / 1000;
		let offerTime = secondsToHMS(remainingSeconds);
		return offerTime;
	} catch (error) {
		console.log(error);
	}
}

renderOfferPeriod = () => {
	try {
		let offerPeroidMarkup = $("#offerPeriod");
		setInterval(function () {
			let offerTime = calculateOfferPeriod();
			offerPeroidMarkup.html("Ends in " + offerTime);
		}, 1000);
		$("#offerCard").prop("hidden", false);
	} catch (error) {
		console.log(error);
	}
}

secondsToHMS = (remainingTime) => {
	remainingTime = parseInt(remainingTime);
	let hours = Math.floor(remainingTime / 3600);
	let minutes = Math.floor((remainingTime % 3600) / 60);
	let seconds = Math.floor((remainingTime % 3600) % 60);
	return (
		("0" + hours).slice(-2) +
		"h " +
		("0" + minutes).slice(-2) +
		"m " +
		("0" + seconds).slice(-2) +
		"s"
	);
}
$(window).scroll(function () {

	let formPositon = $('#formCard').offset().top;
	let formPositonHeight = $('#formCard').outerHeight();
	let windowHeight = $(window).height();
	let windowPosition = $(this).scrollTop();
	//   console.log((windowPosition + 300) > (formPositon + formPositonHeight - windowHeight), (formPositon > windowPosition - 300), (windowPosition + windowHeight + 300 > formPositon + formPositonHeight));
	if (((windowPosition + 300) > (formPositon + formPositonHeight - windowHeight)) && (formPositon > windowPosition - 300) && (windowPosition + windowHeight + 300 > formPositon + formPositonHeight)) {
		$(".mobile-buy").hide();
	}
	else {
		$(".mobile-buy").show();
	}
});


$('#ad-card').hide();
setTimeout(function () {
	$('#ds-card').css("opacity", "1");
	$('#ad-card').slideDown(600);
}, 10000);


$(document).on("click", ".closex", function () {
	$('#ds-card').parent().slideUp();
})