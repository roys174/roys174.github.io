var ARI = PERSON("http://www.cs.huji.ac.il/~arir/", "Ari Rappoport");
var ROI = PERSON("http://ie.technion.ac.il/~roiri/", "Roi Reichart");
var OMRI = PERSON("http://www.cs.huji.ac.il/~oabend/", "Omri Abend");
var HOME = "https://roys174.github.io/";
//var HOME = "http://www.cs.huji.ac.il/~roys02/";
var NOAH = PERSON("http://homes.cs.washington.edu/~nasmith/", "Noah A. Smith");
var HAO = PERSON("http://homes.cs.washington.edu/~hapeng/", "Hao Peng");
var ROWAN = PERSON("http://rowanzellers.com/", "Rowan Zellers");
var YONATAN = PERSON("http://yonatanbisk.com/", "Yonatan Bisk");
var SAM = PERSON("http://samthomson.com/", "Sam Thomson");
var MAARTEN = PERSON("http://homes.cs.washington.edu/~msap/", "Maarten Sap");
var YEJIN = PERSON("http://homes.cs.washington.edu/~yejin/", "Yejin Choi");
var YANNIS = PERSON("http://www.ikonstas.net/", "Yannis Konstas");
var LI = "Li Zilles";
var SUCHIN= PERSON("https://suchin.io/", "Suchin Gururangan");
var DALLAS= PERSON("http://web.stanford.edu/~dcard/", "Dallas Card");
var MATTP= PERSON("https://scholar.google.com/citations?user=K5nCPZwAAAAJ&hl", "Matthew E. Peters");
var MARKN= PERSON("http://markneumann.xyz", "Mark Neumann");
var ROB= PERSON("https://rloganiv.github.io", "Robert Logan");
var VIDUR= PERSON("https://scholar.google.com/citations?user=NobF_hEAAAAJ&hl", "Vidur Joshi");
var SAMEER= PERSON("http://sameersingh.org", "Sameer Singh");
var SWABHA = PERSON("http://www.cs.cmu.edu/~sswayamd/", "Swabha Swayamdipta");
var JESSE = PERSON("http://www.cs.cmu.edu/~jessed/", "Jesse Dodge");
var OMER = PERSON("https://levyomer.wordpress.com/", "Omer Levy");
var NELSON = PERSON("https://cs.stanford.edu/~nfliu/", "Nelson F. Liu");
var GABRIELH = PERSON("http://gabrielilharco.com", "Gabriel Ilharco");
var ALI = PERSON("https://homes.cs.washington.edu/~ali/", "Ali Farhadi");
var HANNANEH = PERSON("https://homes.cs.washington.edu/~hannaneh/", "Hannaneh Hajishirzi");
var CHENHAO = PERSON("https://chenhaot.com/", "Chenhao Tan");
var SAMB = PERSON("https://www.nyu.edu/projects/bowman/", "Sam Bowman");
var DONGYEOP = PERSON("http://www.cs.cmu.edu/~dongyeok/", "Dongyeop Kang");
var ED = PERSON("http://www.cs.cmu.edu/~hovy/", "Eduard Hovy");
var WALEED = PERSON("http://allenai.org/team/waleeda/", "Waleed Ammar");
var BHAVANA = PERSON("http://allenai.org/team/bhavanad/", "Bhavana Dalvi");
var ORENE = PERSON("http://allenai.org/team/orene/", "Oren Etzioni");
var ORENT = PERSON("http://www.ise.bgu.ac.il/OrenTsur/", "Oren Tsur");
var KOPPEL = PERSON("http://u.cs.biu.ac.il/~koppel/", "Moshe Koppel");
var IVAN = PERSON("https://sites.google.com/site/ivanvulic/", "Ivan Vulić");
var ANNAK = PERSON("http://www.cl.cam.ac.uk/~alk23/", "Anna Korhonen");
var GABI = PERSON("https://gabrielstanovsky.github.io", "Gabi Stanovsky");
var GAIL = PERSON("https://sgailw.cswp.cs.technion.ac.il", "Gail Weiss");
var YOAV = PERSON("https://u.cs.biu.ac.il/~yogo/", "Yoav Goldberg");
var ERANY = PERSON("http://www.cs.technion.ac.il/~yahave/", "Eran Yahav");
var WILL = PERSON("https://lambdaviking.com", "Will Merrill");
var ME = "<span><b>Roy Schwartz</b></span>";
var ME_LINK = "<a href=" + HOME + " target=\"_blank\">Roy Schwartz</a>";

// var colors = ["#9b59b6", "#3498db", "#95a5a6", "#e74c3c", "#34495e", "#2ecc71", "#006600", "#00CCCC", "#CC0066", "#FB8B24", "#8CADA7"]
var colors = ["white", "white","white","white","white","white","white","white","white","white"]

function PERSON(x,y) {
	return ('<a href="'+x+'" target="_blank"><span class="people_link">'+y+'</span></a>');
}

function YEAR(y) {
    if (y > 5) {
        document.write("<h3><font color='black'></font>" + y + "</h3>");
    }
}

function PDF(x) {
	FIELD(x, "pdf", 0)
}

function ABSTRACT(x) {
	document.write(' <a href="#" onclick="$('+ "'"+x+"'"+').toggle();return false;"><span>abstract</span></a> ');
}

function BIB(x) {
	FIELD(x, "bib", 0);
}

function SLIDES(x) {
	FIELD(x, "slides", 0);
}

function PRESS(x, y) {
	FIELD(y, x, 5);
}

function POSTER(x) {
	FIELD(x, "poster", 0);
}

function VIDEO(x) {
	FIELD(x, "video", 0);
}

function INTERVIEW(x) {
	FIELD(x, "podcast interview", 5);
}


function CODE(x) {
	FIELD(x, "code", 0);
}

function DATA(x) {
	FIELD(x, "data", 0);
}

function WEBSITE(x) {
	FIELD(x, "website", 0);
}


function GREENAI(filter) {
	HASHTAG("greenai", 6, filter);
}

function RATIONAL_RECURRENCES(filter) {
	HASHTAG("understanding_models", 7, filter);
}

function ARTIFACTS(filter) {
	HASHTAG("improved_evaluation", 8, filter);
}

function EMBEDDINGS(filter) {
	HASHTAG("word_representation", 9, filter);
}


function FIELD(x, y, bgcolor_index) {
	document.write("<a href='"+ x +"' target='_blank'  class='internal_link'><span class='internal_link'>"+y+"</span></a>");
}

function HASHTAG(x, bgcolor_index, filter=false) {
	prefix = '';
	suffix = '';
	if (filter) {
		prefix = '<a onclick="filter_list('+"'"+x+"'"+');">';
		suffix = '</a>';
		var list = document.getElementsByClassName("papers");
	
		for (i = 0; i < list.length; i++) {
			document.write("paper is "+list[i].id);
		  	// list[i].style.display = "none";
		}
	}
	
	document.write(" "+prefix+"<span style='background-color:" + colors[bgcolor_index] +";'><i> #"+x+" </i></span>"+suffix+" ");	
}

function filter_list(name) {
	var list = document.getElementsByClassName("all");
	// document.write(name);
	
	for (i = 0; i < list.length; i++) {
		// document.write("paper is");
		// document.write("paper is "+list[i]);
	  	list[i].style.display = "none";
	}
	var list = document.getElementsByClassName(name);
	// document.write("bobobo"+list.length+"\n");
	
	for (i = 0; i < list.length; i++) {
		// document.write("paper is");
		// document.write("paper is "+list[i]);
	  	list[i].style.display = "block";
	}
		
}

function TITLE(x) {
	document.write('<span style="color:#3366cc"><b>' + x + "</b></span>");
}

function TITLEF(x, y) {
	document.write("<a href='" + x +"'"+'><span style="color:#3366cc"><b>' + y + "</b></span></a>");
}


function URL(x, y, z) {
	var extra = '';
	if (arguments.length > 3) {
		extra = arguments[3];
	}
	document.write("<a href='" + x + y + "' " + extra + ">" + z + "</a>");
}

function email() {
    document.write('r o y s <img border=0 width=35 height=auto src='+HOME+'index_files/strudel.jpg> allenai . org');
}

function CONFERENCE(url, name, award=undefined, prefix="In proceedings of ") {
	var suffix = '';
	if (typeof award !== 'undefined') {
		suffix = '</i><span style="color:red"> <b>[<i>'+award+'</i>]</span></b>';
	}
		
	document.write(prefix+'<i><a href="'+url+'" target="_blank"><span class="people_link">'+name+'</span></a></i>'+suffix+'<br>');
}


function TOP_PART(title='') {
	HEADER();
	document.write('<div class="top"><div style="height: 180px"><div style="top: 140px; left: 90 px;position: absolute;" class=page_titles>Schwartz Lab<br><h1 class="h1_style">'+title+'</h1></div><img class="fluidimage" align="right" SRC="index_files/roy_schwartz.jpg" style="max-height:100%;max-width:100%;"/></div></div>');	
}

function HEADER() {
	document.write('<div><ul class="menu"><li class="menu"><a href="./index.html">Home</a></li> <li class="menu"><a href="./people.html">People</a></li> <li class="menu"><a href="publications.html">Publications</a></li><li class="menu"><a href="talks.html">Talks</a></li> <li class="menu"><a href="joinus.html">Join Us!</a></li></ul> </div>')
}