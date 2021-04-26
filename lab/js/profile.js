$(document).ready(function(){authorize.loginCheck();let path=window.location.pathname;let profileURL=path.split("/").pop();let data={};data.requestType="fetchProfileData";data.flag="abstract"
data.profileURL=profileURL;authorize.ajax(data,"profileView",function(ajaxResponse){let responseData=JSON.parse(ajaxResponse);let degreeDepartment="";profileData=responseData["profileData"];if(profileData["firstName"]){name=profileData["firstName"]+" "+profileData["lastName"];}else{name=profileData["username"];}
if(profileData["degree"]&&profileData["degree"]!="-select-"){degreeDepartment=profileData["degree"];}
if(profileData["department"]&&profileData["department"]!="-select-"){degreeDepartment=degreeDepartment+" , "+profileData["department"];}else{degreeDepartment="";}
if(profileData["passedoutyear"]&&profileData["passedoutyear"]!="-select-"){degreeDepartment=degreeDepartment+","+profileData["passedoutyear"];}
if(profileData["hackathon"]){profileData["hackathon"]=profileData["hackathon"].replace("\n","<br>");}
if(profileData["competition"]){profileData["competition"]=profileData["competition"].replace("\n","<br>");}
if(profileData["registerNumber"]){registerNumber=profileData["registerNumber"];}else{registerNumber="";}
applyHTML("#userName",name);applyHTML("#degreeDepartment",degreeDepartment);applyHTML("#registerNumber",registerNumber);applyHTML("#college",profileData["collegeName"]);if(profileData["cgpa"]){applyHTML("#cgpa","CGPA "+profileData["cgpa"]);}
applyHTML("#email",profileData["email"]);applyHTML("#rank",profileData["rank"]);applyHTML("#geekoins",profileData["geekoins"]);applyHTML("#profileViews",profileData["profileViews"]["total"]);applyHTML("#profileViewsCompanies",profileData["profileViews"]["companiesViewCount"]);applyHTML("#profileViewsLastMonth",profileData["profileViews"]["lastMonth"]);applyHTML("#mobile",profileData["mobile"]);applyHTML("#studentIntro",profileData["studentIntro"]);applyHTML("#hackathon",profileData["hackathon"]);applyHTML("#competition",profileData["competition"]);applyHTML("#gender",profileData["gender"]);applyHTML("#arrearCount",profileData["arrearCount"]);applyHTML("#currentCity",profileData["currentCity"]);let skillMarkup="";try{$.each(profileData["skills"],function(key,value){skillMarkup+="<span class='badge badge-guvi-tag'>"+value+"</span>";});}catch(e){if(profileData["skills"]){skillMarkup+="<span class='badge badge-guvi-tag'>"+profileData["skills"]+"</span>";}}
if(skillMarkup==""){$(".skills").hide();}else{$("#skills").html(skillMarkup);}
$.each(profileData["certificates"],function(index,value){if(value.courseName){let certificates=' <div class="course shadow-sm pt-4"><div class="row"><div class="col-md-12 col-lg-4"><span class=" colored"></span><div class="course-info"><strong>'+
value.courseName+
' </strong></div></div><div class="col-md-12 col-lg-8"><ul class="list-unstyled related-facts"><li><strong>'+
value.duration+
"</strong> hours</li><li><strong>"+
value.lessonCount+
'</strong> lessons</li><li><a href="verify-certificate.html?id='+
value.certificate_no+
'" target=”_blank”  style="color: #7a17eb ;" class="btn  float-right">View certificate </a></li></ul></div></div></div>';$(".certified-courses").append(certificates);}});let portfolioMarkup="";$.each(profileData["portfolioLinks"],function(key,value){portfolioMarkup+="<li><a href='"+value+"' target='_blank'>"+value+"</a></li>";});if(portfolioMarkup!=""){$("#portfolioLinks").html(portfolioMarkup);}
let selfProjectsMarkup="";$.each(profileData["outsideProjects"],function(key,value){if(value["title"]!=""&&value["title"]!=undefined){let sourceCodeMakup=value["sourceCodeLink"]?"<p>Source Code: <a target='_blank' href='"+value["sourceCodeLink"]+"'>"+value["sourceCodeLink"]+"</a></p>":"";let hostedLinkMarkup=value["hostedLink"]?"<p> Hosted Link: <a target='_blank' href='"+value["hostedLink"]+"'>"+value["hostedLink"]+"</a></p>":"";selfProjectsMarkup+="<li><p>"+(value["title"]?value["title"]:'')+"</p><p>"+(value["description"]?value["description"]:'')+"</p>"+sourceCodeMakup+hostedLinkMarkup+"</li>";}});if(selfProjectsMarkup!=""){$("#selfProjects").html(selfProjectsMarkup);}
let workExperienceMarkup="";$.each(profileData["workExperience"],function(key,value){if(value["designation"]){workExperienceMarkup+="<ul class='list-unstyled links-list'><li>"+(value['designation']?value['designation']:'')+"</li><li>"+(value['companyName']?value['companyName']:'')+"</li><li>"+(value['location']?value['location']:'')+"</li><li>"+(value['startTime']?value['startTime']:'')+" to "+(value['endTime']?value['endTime']:'')+"</li></ul>";}});if(workExperienceMarkup!=""){$("#workExperience").html(workExperienceMarkup);}
let academicsMarkup="";$.each(profileData["academics"],function(key,value){if(value["school"]){academicsMarkup+="<div class='col-md-12 col-lg-4 col-xl-3 record'><div class='related-info order-md-1'><p class='institution' id='"+key+"SchoolName'>"+value["school"]+"</p><p class='card-text batch' >Batch: <span id='"+key+"Year'>"+(value["year"]?value["year"]:'')+"</span></p></div><div class='academic-score'><span class='marks' id='"+key+"Percentage'>"+(value["percentage"]?value["percentage"]:'')+"</span><span class='class' id='"+key+"class' style='text-transform: uppercase;'>"+key+"</span></div></div>";}});if(academicsMarkup!=""){$("#academics").html(academicsMarkup);}
let awardsMarkup="<ol class='links-list'>";try{$.each(profileData["awards_and_honors"],function(key,value){awardsMarkup+="<li>"+value+"</li>";});}catch{if(awardsMarkup!=""){$("#awards").html(awardsMarkup);}}
awardsMarkup+="</ol>";if(awardsMarkup!="<ol class='links-list'></ol>"){$("#awards").html(awardsMarkup);}
let s3url="https://s3-ap-southeast-1.amazonaws.com/guvi-profile-images/";let pic=profileData["profileImage"];if(pic){var img_url=pic.split("/");var d=img_url.length-1;var profilepic=s3url+img_url[d];$("#profileImg").attr("src",profilepic);}
let resumeBasePath="https://s3-ap-southeast-1.amazonaws.com/guvi-profile-images";let resume=profileData["resume"];if(resume){$("#resume").attr("href",resumeBasePath+resume);}else{$("#resume").remove();}
renderMyProject(responseData["project"],"#project-submission-list > .list",function(){const projectList=new List('project-submission-list',{outerWindow:2,page:3,pagination:true});});renderMyCodekata(responseData["codekata"],"#codekata-submission-list > .list",function(){var codekataList=new List('codekata-submission-list',{valueNames:['tags'],outerWindow:2,page:3,pagination:true});});renderOldCodekata(responseData["old_codekata"],"#old-codekata-submission-list > .list",function(){const oldCodekataList=new List('old-codekata-submission-list',{outerWindow:2,page:3,pagination:true});});renderAssessmentDetails(responseData["assessmentDetails"],function(){const assessmentDetailsList=new List("assessment-details-list",{outerWindow:2,page:3,pagination:true});});renderWebkataDetails(responseData["webkataSubmissions"],function(){const assessmentDetailsList=new List("webkata-details-list",{outerWindow:2,page:3,pagination:true});});$("main").removeClass("loading");if(profileData["hash"]!=responseData["hash"]){$(".student-view").remove();$(".hover-links-wrap").remove();}
let userType=authorize.getSession("usertype");if(!(userType&&parseInt(userType)==5)&&profileData["hash"]!=responseData["hash"]){$("#resume").remove();}
if(responseData["hash"]==false){$(".logout-view").remove();$(".hover-links-wrap").remove();}});});function applyHTML(selector,value){if(value!="undefined"&&value!=undefined&&value!=""&&value!="-select-"){$(selector).html(value);}}
function renderOldCodekata(data,identifier,callback=false){let codekataQuestions=JSON.parse(data);let max=codekataQuestions.length;$("#old-codekata-submission-tab").append('<span class="badge badge-secondary mr-2 ml-1 ">'+max+'</span>');let append_string="";if(max<=0){$(identifier).css("display","none");$("#old-codekata-submission-tab").css("display","none");return false;}
for(let qIterator=1;qIterator<max+1;qIterator++){question=codekataQuestions[qIterator-1];append_string+='<li class="card d-flex flex-row"><p class="submission-count-id">'+qIterator+'</p> <p class="submission"><a class="card-title" style="font-weight:bold">'+question['question']+'</a><a href="'+question['github']+'" target="_blank">View source code</a></p></li>';}
$(identifier).html(append_string);if(callback!=false){callback();}}
$(document).on("click",".edit-profile",function(){let path=window.location.pathname;let profileURL=path.split("/").pop();window.location="profile-edit.html?profileURL="+profileURL;});$(document).on("click",".share-link",function(data){authorize.share_modal();});function renderAssessmentDetails(assessmentDetails,completed){try{let assessmentMarkUp="";let assessmentDetailsLength=assessmentDetails.length;if(assessmentDetailsLength){for(let itr=0;itr<assessmentDetailsLength;itr++){secondRoundMarkUp="";if(assessmentDetails[itr].totalScoreTwo){secondRoundMarkUp='<h6><b> 2nd Round Score : </b>'+assessmentDetails[itr].scoreTwo+' Out of '+assessmentDetails[itr].totalScoreTwo+'</h6>';}
assessmentMarkUp+='<li class="card d-flex flex-row"><p class="submission-count-id">'+(itr+1)+'.</p><div class="card-body row justify-content-between"><div><h6><b>Assessment Provider : </b>'+assessmentDetails[itr].companyName+'</h6><h6><b>Assessment Title : </b>'+assessmentDetails[itr].jobName+'</h6><h6><b> 1st Round Score : </b>'+assessmentDetails[itr].scoreOne+' Out of '+assessmentDetails[itr].totalScoreOne+'</h6>'+secondRoundMarkUp+'</div><div class="barChart"></div></div>';}
$("#assessment-details-tab").html('Assessment Details<span class="badge badge-secondary mr-2 ml-1 ">'+assessmentDetailsLength+'</span>');$("#assessment-details-list > .list").html(assessmentMarkUp);completed();}}catch(error){console.log(error);}}
function renderWebkataDetails(webkataDetails,completed){try{let webkataMarkUp="";let webkataDetailsLength=webkataDetails.length;let tagMarkup="";if(webkataDetailsLength){for(let itr=0;itr<webkataDetailsLength;itr++){tagMarkup="";webkataDetails[itr].tags.map(function(eachTag,eachKey){tagMarkup+='<span class="badge badge-pill badge-guvi-tag"> '+eachTag+' </span>';})
webkataMarkUp+='<li class="card d-flex flex-row"><div class="card-body row align-items-center"><p class="submission-count-id">'+(itr+1)+'.</p><div><p>'+webkataDetails[itr].question+'</p><div class="d-flex">'+tagMarkup+'</div></div></div></li>';}
$("#webkata-details-tab").html('Webakata Submissions<span class="badge badge-secondary mr-2 ml-1 ">'+webkataDetailsLength+'</span>');$("#webkata-details-list > .list").html(webkataMarkUp);completed();}}catch(error){console.log(error);}}