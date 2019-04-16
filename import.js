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
var SWABHA = "<a href=\"http://www.cs.cmu.edu/~sswayamd/\" target=\"_blank\">Swabha Swayamdipta</a>";
var OMER = "<a href=\"https://levyomer.wordpress.com/\" target=\"_blank\">Omer Levy</a>";
var NELSON = "<a href=\"https://homes.cs.washington.edu/~nfliu/\" target=\"_blank\">Nelson F. Liu</a>";
var CHENHAO = "<a href=\"https://chenhaot.com/\" target=\"_blank\">Chenhao Tan</a>";
var SAMB = "<a href=\"https://www.nyu.edu/projects/bowman/\" target=\"_blank\">Sam Bowman</a>";
var DONGYEOP = "<a href=\"http://www.cs.cmu.edu/~dongyeok/\" target=\"_blank\">Dongyeop Kang</a>";
var ED = "<a href=\"http://www.cs.cmu.edu/~hovy/\" target=\"_blank\">Eduard Hovy</a>";
var WALEED = "<a href=\"http://allenai.org/team/waleeda/\" target=\"_blank\">Waleed Ammar</a>";
var BHAVANA = "<a href=\"http://allenai.org/team/bhavanad/\" target=\"_blank\">Bhavana Dalvi</a>";
var ORENE = "<a href=\"http://allenai.org/team/orene/\" target=\"_blank\">Oren Etzioni</a>";
var ME = "<span style='color:maroon'><b>Roy Schwartz</b></span>";
var ME_LINK = "<a href=" + HOME + " target=\"_blank\">Roy Schwartz</a>";
function YEAR(y) {
    if (y > 5) {
        document.write("<h3><font color='black'></font>" + y + "</h3>");
    }
}

function PDF(x) {
	FIELD(x, "PDF", "#5cb85c");
}

function BIB(x) {
	FIELD(x, "BIB", "orange");
}

function SLIDES(x) {
	FIELD(x, "SLIDES", "blue");
}

function POSTER(x) {
	FIELD(x, "POSTER", "blue");
}

function VIDEO(x) {
	FIELD(x, "VIDEO", "blue");
}

function INTERVIEW(x) {
	FIELD(x, "PODCAST INTERVIEW", "blue");
}


function CODE(x) {
	FIELD(x, "CODE", "brown");
}

function DATA(x) {
	FIELD(x, "DATA", "brown");
}

function ABSTRACT(x) {
	document.write('<a href="#" onclick="$('+ "'"+x+"'"+').toggle();return false;"><span style="background-color:gray;color:white;white-space: pre-wrap;font-family:monospace;"> ABSTRACT </span></a>');
}


function FIELD(x, y, bgcolor) {
	document.write("<a href='"+ x +"' target='_blank'><span style='background-color:" + bgcolor +";color:white;white-space:pre-wrap;font-family:monospace;'> "+ y +" </span></a>");
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
