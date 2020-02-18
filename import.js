var ARI = "<a href=\"http://www.cs.huji.ac.il/~arir/\" target=\"_blank\">Ari Rappoport</a>";
var ROI = "<a href=\"http://ie.technion.ac.il/~roiri/\" target=\"_blank\">Roi Reichart</a>";
var OMRI = "<a href=\"http://www.cs.huji.ac.il/~oabend/\" target=\"_blank\">Omri Abend</a>";
var HOME = "https://roys174.github.io/";
//var HOME = "http://www.cs.huji.ac.il/~roys02/";
var NOAH = "<a href=\"http://homes.cs.washington.edu/~nasmith/\" target=\"_blank\">Noah A. Smith</a>";
var HAO = "<a href=\"http://homes.cs.washington.edu/~hapeng/\" target=\"_blank\">Hao Peng</a>";
var ROWAN = "<a href=\"http://rowanzellers.com/\" target=\"_blank\">Rowan Zellers</a>";
var YONATAN = "<a href=\"http://yonatanbisk.com/\" target=\"_blank\">Yonatan Bisk</a>";
var SAM = "<a href=\"http://samthomson.com/\" target=\"_blank\">Sam Thomson</a>";
var MAARTEN = "<a href=\"http://homes.cs.washington.edu/~msap/\" target=\"_blank\">Maarten Sap</a>";
var YEJIN = "<a href=\"http://homes.cs.washington.edu/~yejin/\" target=\"_blank\">Yejin Choi</a>";
var YANNIS = "<a href=\"http://www.ikonstas.net/\" target=\"_blank\">Yannis Konstas</a>";
var LI = "Li Zilles";
var SUCHIN= "<a href=\"https://suchin.io/\" target=\"_blank\">Suchin Gururangan</a>";
var DALLAS= "<a href=\"http://web.stanford.edu/~dcard/\" target=\"_blank\">Dallas Card</a>";
var MATTP= "<a href=\"https://scholar.google.com/citations?user=K5nCPZwAAAAJ&hl\" target=\"_blank\">Matthew E. Peters</a>";
var MARKN= "<a href=\"http://markneumann.xyz\" target=\"_blank\">Mark Neumann</a>";
var ROB= "<a href=\"https://rloganiv.github.io\" target=\"_blank\">Robert Logan</a>";
var VIDUR= "<a href=\"https://scholar.google.com/citations?user=NobF_hEAAAAJ&hl\" target=\"_blank\">Vidur Joshi</a>";
var SAMEER= "<a href=\"http://sameersingh.org\" target=\"_blank\">Sameer Singh</a>";
var SWABHA = "<a href=\"http://www.cs.cmu.edu/~sswayamd/\" target=\"_blank\">Swabha Swayamdipta</a>";
var JESSE = "<a href=\"http://www.cs.cmu.edu/~jessed/\" target=\"_blank\">Jesse Dodge</a>";
var OMER = "<a href=\"https://levyomer.wordpress.com/\" target=\"_blank\">Omer Levy</a>";
var NELSON = "<a href=\"https://cs.stanford.edu/~nfliu/\" target=\"_blank\">Nelson F. Liu</a>";
var GABRIELH = "<a href=\"http://gabrielilharco.com\" target=\"_blank\">Gabriel Ilharco</a>";
var ALI = "<a href=\"https://homes.cs.washington.edu/~ali/\" target=\"_blank\">Ali Farhadi</a>";
var HANNANEH = "<a href=\"https://homes.cs.washington.edu/~hannaneh/\" target=\"_blank\">Hannaneh Hajishirzi</a>";
var CHENHAO = "<a href=\"https://chenhaot.com/\" target=\"_blank\">Chenhao Tan</a>";
var SAMB = "<a href=\"https://www.nyu.edu/projects/bowman/\" target=\"_blank\">Sam Bowman</a>";
var DONGYEOP = "<a href=\"http://www.cs.cmu.edu/~dongyeok/\" target=\"_blank\">Dongyeop Kang</a>";
var ED = "<a href=\"http://www.cs.cmu.edu/~hovy/\" target=\"_blank\">Eduard Hovy</a>";
var WALEED = "<a href=\"http://allenai.org/team/waleeda/\" target=\"_blank\">Waleed Ammar</a>";
var BHAVANA = "<a href=\"http://allenai.org/team/bhavanad/\" target=\"_blank\">Bhavana Dalvi</a>";
var ORENE = "<a href=\"http://allenai.org/team/orene/\" target=\"_blank\">Oren Etzioni</a>";
var ME = "<span style='color:maroon'><b>Roy Schwartz</b></span>";
var ME_LINK = "<a href=" + HOME + " target=\"_blank\">Roy Schwartz</a>";

var colors = ["#9b59b6", "#3498db", "#95a5a6", "#e74c3c", "#34495e", "#2ecc71", "#006600", "#00CCCC", "#CC0066", "#FB8B24", "#8CADA7"]

function YEAR(y) {
    if (y > 5) {
        document.write("<h3><font color='black'></font>" + y + "</h3>");
    }
}

function PDF(x) {
	FIELD(x, "PDF", 0)
}

function ABSTRACT(x) {
	document.write('<a href="#" onclick="$('+ "'"+x+"'"+').toggle();return false;"><span style="background-color:'+colors[0]+';color:white;white-space:pre-wrap;font-family:monospace;"> ABSTRACT </span></a>');
}

function BIB(x) {
	FIELD(x, "BIB", 0);
}

function SLIDES(x) {
	FIELD(x, "SLIDES", 0);
}

function PRESS(x, y) {
	FIELD(y, x, 5);
}

function POSTER(x) {
	FIELD(x, "POSTER", 0);
}

function VIDEO(x) {
	FIELD(x, "VIDEO", 0);
}

function INTERVIEW(x) {
	FIELD(x, "PODCAST INTERVIEW", 5);
}


function CODE(x) {
	FIELD(x, "CODE", 0);
}

function DATA(x) {
	FIELD(x, "DATA", 0);
}

function WEBSITE(x) {
	FIELD(x, "WEBSITE", 0);
}


function GREENAI(filter) {
	HASHTAG("greenai", 6, filter);
}

function RATIONAL_RECURRENCES(filter) {
	HASHTAG("understanding_nlp_models", 7, filter);
}

function ARTIFACTS(filter) {
	HASHTAG("improving_evaluation", 8, filter);
}

function EMBEDDINGS(filter) {
	HASHTAG("word_representation", 9, filter);
}


function FIELD(x, y, bgcolor_index) {
	document.write("<a href='"+ x +"' target='_blank'><span style='background-color:" + colors[bgcolor_index] +";color:white;white-space:pre-wrap;font-family:monospace;'> "+ y +" </span></a>");
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
	
	document.write(" "+prefix+"<span style='background-color:" + colors[bgcolor_index] +";color:white;white-space:pre-wrap;font-family:monospace;'> #"+x+" </span>"+suffix+" ");	
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
    document.write('r o y s<img border=0 width=66 height=52 src='+HOME+'index_files/strudel.jpg> allenai . org</p>');
}

function CONFERENCE(url, name, award=undefined) {
	var suffix = '';
	if (typeof award !== 'undefined') {
		suffix = '</i><span style="color:red"> <b>[<i>'+award+'</i>]</span></b>';
	}
		
	document.write('<i>In proceedings of <a href="'+url+'" target="_blank"><span style="color:CornflowerBlue">'+name+'</span></a></i>'+suffix+'<br>');
}


function TOP_PART() {
document.write('<div class="split top" style="margin-left: 30px"><hr><div style="height: 180px"><div style="top: 100px; position: absolute;" class=page_titles>Roy Schwartz</div><img class="fluidimage" align="right" SRC="index_files/roy_schwartz.jpg" style="max-height:100%;max-width:100%;"/></div>');	
}
