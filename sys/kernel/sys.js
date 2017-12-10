/* System Class
	Used to store system settings and statuses
*/
class System {
	constructor() {
		this.pwrSts = false; // Power off 
		this.version = "5.2.0";
		this.versionShort = "5.2b";
		this.turnOffFlag = true; // This is used by power function to stop the global 'enter' fucntion from turning the system back on
		this.program = false; //To see if a program is running
		this.paused = false; //Used if system input is paused (progarm has taken over)
		this.pauseStatus = null; //Store reason why system is paused
	}

	init_tb() {
		setTimeout(function() {document.getElementById("topBar").innerHTML = '<a id="ijd" class="float-left"><i>i</i>JD <small>' + sys.versionShort + '</small></a><a id="program-name"></a><a id="time" style="float:right;"></a>'; },100);
		setTimeout(function() {document.getElementById("time").style.display = "inline";}, 125)
		document.getElementById("topBar").innerHTML = '<a id="time" href=""></a>';
		document.getElementById("topBar").style.borderBottom = '1px solid #fff';
		display.time();
	}
	init_rb() {
		setTimeout(function() {document.getElementById("rightBar").innerHTML = 'sys sts: ok<br>';}, 200);
		setTimeout(function() {document.getElementById("rightBar").innerHTML = 'sys sts: ok<br>kernel: ok<br>';}, 300);
		setTimeout(function() {document.getElementById("rightBar").innerHTML = 'sys sts: ok<br>kernel: ok<br>sudo: ok<br>';}, 350);
		setTimeout(function() {document.getElementById("rightBar").innerHTML = '<span id="option1">sys sts: ' + kernel_task() + '</span><br><span id="option2">kernel: ok</span><br><span id="option3">sudo: ok</span><br><span id="option4">disp: ' + display.status(); + "</span>"}, 450);
		document.getElementById("rightBar").style.borderLeft = '1px solid #fff';
	}
	init_dp() { setTimeout(function() {consoleWrite("Welcome to Console V.")},200); }
	
	deit_dp() { display.clear();}
	deit_rb() {
		setTimeout(function() {document.getElementById("rightBar").innerHTML = '';}, 25);
		setTimeout(function() {document.getElementById("rightBar").style.borderLeft = 'none';}, 100); }
	deit_tb() {
		setTimeout(function() {document.getElementById("topBar").innerHTML = '<a id="time"></a>';}, 50);
		setTimeout(function() {document.getElementById("topBar").style.borderBottom = 'none';},100);
		display.time(); }


	pause(data1) {
		// Stop input. Used when a method needs to take control of input bar
		if (this.paused) {
			this.paused = false; 
		} else { 
			this.paused = true;
			if (data1) {
				this.pauseStatus = data1;
			}
		}
	}

	power() {
		if (this.pwrSts) {
			// Power off system
			this.turnOffFlag = false;
			this.pwrSts = false;
			this.program = false;
			console.deit();
			display.setColor("reset");
			document.getElementById("powerButton").setAttribute("onclick","");
			setTimeout(function() {document.getElementById("powerButton").setAttribute("onclick",'kernel_task("power")');}, 100);
			setTimeout(function(){ sys.turnOffFlag = true; }, 100);
			this.deit_dp();
			this.deit_tb();
			this.deit_rb();
		} else {
			document.getElementById("powerButton").setAttribute("onclick","");
			setTimeout(function() {document.getElementById("powerButton").setAttribute("onclick",'kernel_task("power")'); sys.turnOffFlag = true;}, 450);
			//Power On System
			this.pwrSts = true;
			this.turnOffFlag = false;
			this.init_tb();
			this.init_rb();
			display.setColor("init");
			if (console.password) {
				consoleWrite("Console V is <span class='_b _f'>locked</span>.")
				consoleWrite("Type your password to continute...")
				sys.pause("verify");
			} else {
				this.init_dp();
			}
		}
	}
}