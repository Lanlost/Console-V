Console V Development History

Console V is the newest Console OS from iJD software. Console V is completly 
rebuilt from the ground up using a modern, fast, and more stable kernel. 

Console V uses the latest in Object oriented programming to create a modern 
operating system. 

Legacy Console applications (Console, Console SP, Console 3, Console 4) are
not able to be run on Console V. Legacy applications however only need small 
modifications to run on the new OS. 

What's new:
+ Brand new UI and UX on Console V.
	+ New On button
	+ New always present top bar that displays the version, the time, and the current program 
	+ New left hand information panel to see how your system is running
	+ New input bar that is wider and supports larger type
	+ New system wide font
	+ No more pesky line numbers
	+ Retreive previous commands by using 'arrow up' and 'arrow down'

Features:
+ Password Locking
	+ Set your password so that you don't have to worry about pesky security!
+ Retreive Previous Commands with the 'arrow up' and 'arrow down' keys
+ NEW UI! Check your system status in the left.

Back end:
+ 3 main objects (Display (display), Console (console), System (sys))

+=+= Version History =+=+

**540A4**:
 + Added retreive previoustly typed comamnds via arros
 + Last version before the gold beta

**550B1**:
 + Gold beta! Last version before offical release
 + Console has deit() function for when the system turns off
 ~ Made sure that previously typed commands clear when system shuts off

**5600:** [5.0] Launched 12/1/17
 + Console V released by iJD.


**5610:** [5.0.1]
 + Added support for more systems
 	- Gecko based CPUs (Firefox, Nightly)
 + Added power from anywhere. You can now press 'enter' anywhere on 
 	the page and the system will turn on.
 ~ Changed retreive past commands function so that when at top of stack
 	the user can press 'down arrow' to get back to a black console input.

**5620:** [5.1.0]
 = This update focuses on making transition from 4 to V easier.
 + Added back themes
 	+ Command is 'color [theme]' or 'theme [color]'
 	+ Added 'color' which is a help command
 	+ Themes:
 		+ Black
 		+ White
 		+ Blue
 		+ Sublime
 	+ d.setColor and d.colorUtility
 + Added 'off' command
 + Added 'time' command
 + Added 'unmount' command
 + Added alt commands
 	+ var => version
 	+ c => clear
 	+ m => mount
 	+ set password => password
 	+ setpassword =>password
 	+ r => run
 	+ d => date
 	+ driveinfo => mount, di => mount
 	+ e => exit
 ~ Fixed issue header still saying 'b' (as in beta)

**5625:** [5.1.1]
 + 'Esc' key can now be used as a shutdown button
 ~ Adjusted help command to show new list of commands
 ~ Fixed spelling error in 'that was not a recognized command' prompt.
 ~ Fixed a glitch where time would appear centered,  and then jump to its proper 
 	location.
 ~ Changed the left border color in the 'blue' theme

**5630 & 5635:** [5.1.2]
 + Added runnumbers as an optional setting.
 + 'Default' is not synomous as 'black' for the theme chooser
 + Added support for more systems
 	- WebKit based CPU's (Safari, iOS)
 ~ Adjusted the system object to contain the only version number in the sytem
 	so that there is only one place to change it.
 ~ Made back-end command list alphabetical
 ~ Teaked inputBar width to 714px

**5640:** [5.2] 
 + Added favicon.
 + Added "noanimation" flag to clear screen, which stays flagged for 100 ms
 	to stop any current animations from appearing after the clear.
 + Added support for HTML tags (usualy for spans) in the console display.
 + Added bold text support with the class '\_b'
 + Added italic text support with the class '\_i'
 + Colors are now aviable for use:
 	+ Success text with class '\_s' or in consoleWrite 'reg_success' &
 		'end_reg_success'
 	+ Faliure color with class '\_f' or 'reg_error'
 + Faliure colors now in error messaging
 	+ reg_error is now the default error type, all errors are uniform 
 		in style now.
 + The keyword "pass" can now be used to access password manager.
 + The input switch case now switches on just the first word of the user's
 	typed input instead of switching on whole phrase
 + Added a program description.
 	+ Access this through "drive desc"
 ~ Fixed an issue with lines not showing on the full width of the display.

**5645:** [5.2.1] [Current Release]
 + Added blue '\_j' color
 + Added new line for keyboard shortcuts to the help command

**5650 & 5655:** [5.3] [Dev Version]
 + Introducing ClearType
	+ Completely new parsing for input
	+ All input is passed through clear type. 
	+ Can detect flags that are preceded by '-' characters
		+ Things such as '-b' to make text bold in the echo command
	+ Access to variables about the input text:
		+ firstWord  - the first word from input
		+ secondWrod - second word
		+ thirdWord  - third
		+ firstFlag  - the first flag
		+ secondFlag - the second flag
		+ thirdFlag  - the third flag
		+ inputAfter - the input after all of the flags
 + Separtion of all objects into separate files
	+ sys.js        -> system class
	+ disp.js       -> display class
	+ console.js    -> consoleController class
	+ right.js      -> Right Bar controller class
	+ clearType,.js -> Clear Type  class
	+ regInput.js   -> Register Input function
 + Added Sidebar (Right control bar):
 	+ New rightDisplayController class
 	+ Press 'Option' (or 'Alt') key to swtich to the stauts bar
 	+ Navigate up/down using the arrows.
 	+ If the item is underlined, it is enabled.
 	+ Press enter to show the status of the item in the console.
	+ Toggles:
		+ toggle text colors -> Enable/disable system wide text colors,
		for use with non-color displays. (Default on)
		+ enable debug mode -> Enables the sytem debug mode
		+ enable run numbers - > Enables the systme run numbers
		+ Trgr kernel panic -> Triggers a system-wide kernel panic
	+ Status settings:
		+ sys stats, kernel, sudo, disp.
 + Kernel Panic
	+ Introduced many new featuers to make a kernel panic more obvious 
		+ Red labels, makes ConsoleV shutdown and requires reboot.
 + Added a debug mode. Mostly provides more logging when running certin commands.
 + System starts with input bar automatically in focus, ready for commands to be entered
 + Added "after_load.js" for commands that need to be run after the rest of the DOM elements are present.
 + Added a link for the development history (README.md)
 ~ Changed the names of the js files:
 	~ regInput -> "reg_input.js"
 	~ clearType -> "clear_type.js"
 ~ Fixed error where typing "Theme " with a blank space would cause no nothing to happen. 
 ~ Fixed errors in different themes causing incorrect displays
 ~ Changed some aspects of themes, they now display colors through CSS instead of JS.
