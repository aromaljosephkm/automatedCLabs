$(document).ready(function(){$(".spinner").hide();let email=authorize.getSession("mail");let name=authorize.getSession("cusername");if(email&&name){$("#name").val(name);$("#email").val(email);}})
$(document).on("click","#hyreBtn",function(){let name=authorize.validate("#name","name");let companyName=authorize.validate("#cName","company_name");let mail=authorize.validate("#email","email");let mobile=authorize.validate("#mobile","mobile");if(name&&companyName&&mail&&mobile){let data={},queries={};$.each(window.location.search.substr(1).split('&'),function(c,q){var i=q.split('=');queries[i[0].toString()]=i[1];});let url=window.location.href;data={"name":name,"companyName":companyName,"email":mail,"mobile":mobile,"url":url,"source":queries.utm_source?queries.utm_source:"Not Set","medium":queries.utm_medium?queries.utm_medium:"Not Set","campaign":queries.utm_campaign?queries.utm_campaign:"Not Set"}
authorize.ajax(data,"hyre",function(data){data=JSON.parse(data);if(data.status=="success"){$("#hyreBtn").attr("hidden","true");$("#success").attr("hidden","true");$("#successMsg").html(`<div class="alert alert-success text-center" role="alert">Thank you!</br> We will contact you with in 24 hours.</div>`);}})}})