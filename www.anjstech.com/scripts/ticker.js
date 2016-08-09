var pausecontent=new Array()
pausecontent[0]='<b>November 2013</b><br />SoftNice, Inc. CEO Mr. Zafar Shaikh participated in USPAACC’s 3rd Annual Business Conference. The discussion in this conference on competitive advantage was very productive for taking the business to the next level. New avenues to business growth we also discovered.<a href="http://www.uspaacc.com/news-publications/press-releases-detail/uspaaccs-3rd-annual-business-express-a-big-hit-in-texas"  target="_blank">http://www.uspaacc.com/news-publications/press-releases-detail/uspaaccs-3rd-annual-business-express-a-big-hit-in-texas</a>'
pausecontent[1]='<b>August 2013</b><br />SoftNice India Pvt. Ltd. Organized Blood Donation Camp in Vadodara, Gujurat - India on special occasion of Independence Day 15th August. The event has achieved the great success as the donors came to SoftNice Office and the count went upto 70+ donators. SoftNice, thanks again to all the donors for their support. Please <a href="https://www.facebook.com/media/set/?set=a.621639957861156.1073741865.181936941831462&type=3" target="_blank">Click Here</a> to find the overall event coverage.'
pausecontent[2]='<b>March 2013</b><br />SoftNice Organized the Grand Gala reception on  March 8th, 2013 for all of its Consultants.  Senior consultants who completed Five years of service were honored with Microsoft Surface tablets and mementos.  A great day to remember & cherish the enthusiasm of our consultants who have taken SoftNice to a new Sustainable Level.'
pausecontent[3]='<b>January 2013</b><br />SoftNice had Holiday party at Jersey City, Houston, Allentown, Vadodara and Hyderbad location. Offices were decorated and variety of food served to treat employees. Everyone was in holiday spirit and enjoyed. Employees shared their new year ‘resolutions’.  Together we are growing with enthusiastic team. Wish you a very happy new year!!'
pausecontent[4]='<b>November 2012</b><br />For its excellence in Global Consulting and IT services, SoftNice successfully renewed its Microsoft Gold Partner certification for the year 2013.  Gold Certified Partners represent the highest level of competence and expertise with Microsoft technologies, and have the closest working relationship with Microsoft.'
pausecontent[5]='<b>September 2012</b><br />Softnice listed as one of the fastest growing companies in USA by INC magazine for year 2012. This was the fourth consecutive year SoftNice got this award. This distinction is achieved by select few US companies.'
pausecontent[6]='<b>April 2012</b><br />SoftNice listed among the 2012 Fast 50 Asian American Business by USPAACC.'
pausecontent[7]='<b>January 2012</b><br />Mr. Rajesh Pandey Joins SoftNice as Chief Operating Officer. Mr. Pandey has 20 years of extensive experience in the IT field around the globe including Americas, Asia and Africa. His previous experience includes working with Patni Computer Systems for 12 years in senior management role. He has also worked with Indian majors like Mastek and Tata Unisys. He has extensive experience in managing large Software implementations with clients like General Electric, ABN Amro, Hannover Life Re. and CAPITA.'
pausecontent[8]='<b>December 2011</b><br />For its excellence in Global Consulting and IT services, SoftNice successfully renewed its Microsoft Gold Partner certification for the year 2012. Gold Certified Partners represent the highest level of competence and expertise with Microsoft technologies, and have the closest working relationship with Microsoft.'
pausecontent[9]='<b>September 2011</b><br />Softnice listed as one of the fastest growing companies in USA by INC magazine third consecutive year in a row for year 2011. This distinction is achieved by select few US companies.'
pausecontent[10]='<b>May 2011</b><br />SoftNice upgraded it&#39;s partnership with VMWare to Professional Level.'
pausecontent[11]='<b>December 2010</b><br />Softnice renewed its Microsoft Gold Partnership for year 2011.'
pausecontent[12]='<b>May 2010</b><br />SoftNice ranked 3rd among the 2010 Fast 50 Asian American Businesses by USPAACC.'
pausecontent[13]='<b>March 2010</b><br />SoftNice CEO&#39;s Article published in INC Magazine<br />http://www.inc.com/articles/2010/03/one-companys-budget-softnice.html'
pausecontent[14]='<b>January 2010</b><br />SoftNice got certified as Minority Business Enterprise from Minority Supplier Devlopment Council of PA-NJ-DE.'
pausecontent[15]='<b>December 2009</b><br />SoftNice acquired Microsoft Gold Certified Partnership and achieved following competencies:-<br />* Independent Software Vendor (ISV)<br />* Business Intelligence (BI)<br />* Data Platform'
pausecontent[16]='<b>September 2009</b><br />SoftNice, Inc ranked 397 in Inc&#39;s fastest growing 500 US private companies for 2009.<br />Ranked No. 1 fastest growing Company in Allentown, PA metro area.<br />Ranked No. 41 fastest growing IT Company in USA.<br /><br />Inc magazine publishes an annual list of the 500 fastest-growing private companies in the U.S., the INC500.<br />http://www.inc.com/inc5000/2009/company-profile.html?id=200903970'
pausecontent[17]='<b>December 2008</b><br />As part of Global expansion, SoftNice started its operations in UK.'

/*var pausecontent2=new Array()
pausecontent2[0]='<a href="http://www.news.com">News.com: Technology and business reports</a>'
pausecontent2[1]='<a href="http://www.cnn.com">CNN: Headline and breaking news 24/7</a>'
pausecontent2[2]='<a href="http://news.bbc.co.uk">BBC News: UK and international news</a>'*/


/***********************************************
* Pausing up-down scroller- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/

function pausescroller(content, divId, divClass, delay){
this.content=content //message array content
this.tickerid=divId //ID of ticker div to display information
this.delay=delay //Delay between msg change, in miliseconds.
this.mouseoverBol=0 //Boolean to indicate whether mouse is currently over scroller (and pause it if it is)
this.hiddendivpointer=1 //index of message array for hidden div
document.write('<div id="'+divId+'" class="'+divClass+'" style="position: relative; overflow: hidden"><div class="innerDiv" style="position: absolute; width: 100%" id="'+divId+'1">'+content[0]+'</div><div class="innerDiv" style="position: absolute; width: 100%; visibility: hidden" id="'+divId+'2">'+content[1]+'</div></div>')
var scrollerinstance=this
if (window.addEventListener) //run onload in DOM2 browsers
window.addEventListener("load", function(){scrollerinstance.initialize()}, false)
else if (window.attachEvent) //run onload in IE5.5+
window.attachEvent("onload", function(){scrollerinstance.initialize()})
else if (document.getElementById) //if legacy DOM browsers, just start scroller after 0.5 sec
setTimeout(function(){scrollerinstance.initialize()}, 500)
}

// -------------------------------------------------------------------
// initialize()- Initialize scroller method.
// -Get div objects, set initial positions, start up down animation
// -------------------------------------------------------------------

pausescroller.prototype.initialize=function(){
this.tickerdiv=document.getElementById(this.tickerid)
this.visiblediv=document.getElementById(this.tickerid+"1")
this.hiddendiv=document.getElementById(this.tickerid+"2")
this.visibledivtop=parseInt(pausescroller.getCSSpadding(this.tickerdiv))
//set width of inner DIVs to outer DIV's width minus padding (padding assumed to be top padding x 2)
this.visiblediv.style.width=this.hiddendiv.style.width=this.tickerdiv.offsetWidth-(this.visibledivtop*2)+"px"
this.getinline(this.visiblediv, this.hiddendiv)
this.hiddendiv.style.visibility="visible"
var scrollerinstance=this
document.getElementById(this.tickerid).onmouseover=function(){scrollerinstance.mouseoverBol=1}
document.getElementById(this.tickerid).onmouseout=function(){scrollerinstance.mouseoverBol=0}
if (window.attachEvent) //Clean up loose references in IE
window.attachEvent("onunload", function(){scrollerinstance.tickerdiv.onmouseover=scrollerinstance.tickerdiv.onmouseout=null})
setTimeout(function(){scrollerinstance.animateup()}, this.delay)
}


// -------------------------------------------------------------------
// animateup()- Move the two inner divs of the scroller up and in sync
// -------------------------------------------------------------------

pausescroller.prototype.animateup=function(){
var scrollerinstance=this
if (parseInt(this.hiddendiv.style.top)>(this.visibledivtop+5)){
this.visiblediv.style.top=parseInt(this.visiblediv.style.top)-5+"px"
this.hiddendiv.style.top=parseInt(this.hiddendiv.style.top)-5+"px"
setTimeout(function(){scrollerinstance.animateup()}, 20)
}
else{
this.getinline(this.hiddendiv, this.visiblediv)
this.swapdivs()
setTimeout(function(){scrollerinstance.setmessage()}, this.delay)
}
}

// -------------------------------------------------------------------
// swapdivs()- Swap between which is the visible and which is the hidden div
// -------------------------------------------------------------------

pausescroller.prototype.swapdivs=function(){
var tempcontainer=this.visiblediv
this.visiblediv=this.hiddendiv
this.hiddendiv=tempcontainer
}

pausescroller.prototype.getinline=function(div1, div2){
div1.style.top=this.visibledivtop+"px"
div2.style.top=Math.max(div1.parentNode.offsetHeight, div1.offsetHeight)+"px"
}

// -------------------------------------------------------------------
// setmessage()- Populate the hidden div with the next message before it's visible
// -------------------------------------------------------------------

pausescroller.prototype.setmessage=function(){
var scrollerinstance=this
if (this.mouseoverBol==1) //if mouse is currently over scoller, do nothing (pause it)
setTimeout(function(){scrollerinstance.setmessage()}, 100)
else{
var i=this.hiddendivpointer
var ceiling=this.content.length
this.hiddendivpointer=(i+1>ceiling-1)? 0 : i+1
this.hiddendiv.innerHTML=this.content[this.hiddendivpointer]
this.animateup()
}
}

pausescroller.getCSSpadding=function(tickerobj){ //get CSS padding value, if any
if (tickerobj.currentStyle)
return tickerobj.currentStyle["paddingTop"]
else if (window.getComputedStyle) //if DOM2
return window.getComputedStyle(tickerobj, "").getPropertyValue("padding-top")
else
return 0
}