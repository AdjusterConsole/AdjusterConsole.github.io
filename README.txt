README

Adjuster Console Version 2.2.2
Update:
Minor Change:
 Added 'Save All' button in the tracker tool.
 Changed Reset function to clear checkboxes in Tracker tool.
Bug Fixes:
 Removed error for needing to save inception first.
 Cleaned up and labelled code sections.

Adjuster Console Version 2.0.0
Update:
Major Change:
 Created a CH Statement program to replace the simple copy/paste template.
Bug Fixes:
 Minor spelling and spacing errors.

Adjuster Console Version 1.8.9
Update:
Bug Fixes:
 Clicking 'Add Note' while there is a note open no longer shows an error.
  The open note will save, close, and the other note will open.
 Clicking 'Save' for the record while a note is open will no longer show an error.
  The open note will save and close.
 A blank note will no longer erroneously show as having a note stored.
 The default state for the inception marker on the first record is now 'checked'.
 The default for dates and mileage is now blank except for the Claim/Service date which displays todays date.

Adjuster Console Version 1.8.4
Update:
Minor Change:
 Removed double-click to open SOP menu.
 Changed table in Diag Assistance
  Removed inputs in favor of using cells innerText with contenteditable for notes.
   Changed background of those cells to white.
   Added border of page background color to those cells
 Added buttons to Diag Assistance.
  'Clear' button will reset all cells in the table to blank, as well as the note textarea at the bottom.
  'Copy' button retrieves all questions, answers, and the note, compiles them, and sends them to the clipboard.
 Removed note display from Tracker Tool output table.
  Table will display 'True' if there is a note, 'False' if not.
  Notes will be displayed in "Note Format' option.
Bug Fixes:
 Used event handlers to stop enter key from adding a div in notes.

Adjuster Console Version 1.4.3
Update:
Minor Changes:
 Disabled custom buttons and button modifications.
  Removed those items from menu.
 Disabled right-click menu.
  Right-click now opens side-nav menu.
 Double-click opens SOP menu.
 Moved page style link to top-center of page.
Bug Fixes:
 Fixed Inception Calculation to AAS calculations formula.
 Fixed certain output errors while performing Tracker Tasks.
 Fixed spacing issue on side-nav menu.



Story and Goals
This program started as a way to copy and paste preset blocks of text by just clicking a button.
It has grown to include templates, tools, SOPs, and dynamic note generation.
Additionally, there are several auxillary components available which assist in other ways.
The primary focus is consolidation of information and ease of use with the most comprehensive coverage possible.
When all aspects are used in conjuction, they reduce call time and make the claims process easier by allowing the adjuster to get accurate answers quickly for policy and procedure, spending less time on notation, and speeding up the decision making process.

The Operation
The text area in the upper left is for RF contact info.
The payment line is for the email or fax used for payment
Distance and time are miles and days in coverage.
The bolded words can be clicked to copy that line.
Clicking payment would copy the payment method, for example.

Parts and Labor
The first section which includes 'next', 'new', 'part', 'labor', and 'diag' buttons along with the text boxes is the 'parts intake' section.
When entering the estimate into the claim, the 'parts intake' section can assist with verification, organization, and can automate certain aspects that greatly speed up the process.
The failed component goes in the 'part name' box, the RF pn and price go in their respective boxes.
For additional components, click new and another box will appear.
For AM parts, leave the MSRP box blank.
After entering the info, click part to send an AM template to the text area.
Filling out the MSRP box will send a completed OEM template.
If the MSRP is over $250.00, the PA sourcing template will be added on to the OEM template.
Labor and Diag will send their respective templates to the text area.
Clicking 'Next' will shift all additional parts boxes down, clear the template, insert the next part into the primary part box and remove the unused part box.
The other parts and labor section has blank versions of all the same templates with a few additional, as well.
'Evac and Recharge' and 'Align' send a labor template for those operations.
The 'Bulk Fluid' button will send a blank bulk fluid template to the text area.
If you are not sure of the price of the fluids, click the $ sign to display the current aas fluid pricing sheet.
Click the 'X' to close.
'Copy P&L' will copy the entire text area and send it to the clipboard.
'Reset' will clear all templates, close all windows, and reset the whole program to starting position.

Authorization
Clicking the 'Authorize Claim' button will start the Auth note builder.
Select which parts were used at what pricing, if anything was requested, and if there were any oopc, shipping, noncovered, or denied components or concerns.
If there was OOPC, enter the amount in the pop up along with the reason for the OOPC.
The text area to the bottom left will show the completed Auth note.
The contact name and payment info will be automatically pulled from the upper text area and inserted into the note.
Once 'Finish' is clicked, the note is copied to the clipboard.

Status Note
Clicking the 'Status Note' button will show the status note builder.
The left panel can be used as many times as needed per note.
Click 'Another One' to reset the options.
The two smaller panels on the right only get used once per note.
Click 'Submit' when finished.

PT Transfer
Clicking 'Templates' then 'PT Transfer' with start the PT Transfer template.
Answer the questions as they come.
The RF name and payment info will automatically be imported and inserted into the appropriate places.
The note is copied to the clipboard when the template is finished.

Straight to Clipboard Notes
The other template buttons as well as the request buttons all set a specific note to the clipboard.

Information
The 'Policy' button is a grouping of general infomation for things like MBI claims, what not to order from PA, 'Special Handling' aka '2790' transfers, what is and isn't PT, etc.
Click on the tabs at the top to display the information.

Tools
The 'Tools' button displays a set of tabs, each with it's own tool.

The 'Quick Answers' tab lists questions which display the answer when clicked.
The questions are a quick reference on where and how to accomplish some 'common uncommon' situations.

The 'Mileage Discrep' tab is an interactive tool that provides the correct actions to take per SOP for various mileage issues that occur.

The 'Parts Pricing' tab is a similarly interactive tool which will guide adjusters through which part to price, from where, and at what pricing.

The 'Diagnostic' tab provides the Diagnostic Templates provided by AAS with some additional infomation, as well.
Click the picture to enlarge and revert.

The 'Tracker Tool' tab is a tool that helps consolidate, organize, and analyze CH service records.
There is a dedicated line for inception and the Service Claim record as well as 5 additional records.
Each can be individually saved or deleted and they have their own collaspable note.
The options available can be run in any combination.

'Check for Issues' will sort records by age and display in order.
The tool will set an alert if there are any mileage discreps, HMPD, early into coverage, or waiting period concerns.
It shows miles and days to or from inception, the average mileage per day, individual alerts, and the notes input by the adj.

The 'Inception Estimate' uses the inception info, service claim info, and the record which has the checkbox activated when saved to estimate the inception mileage.
It will, also, output the same pertinent information that the AAS calulation provides.

'Format for Note' will display the entered info in a 'note' friendly format which includes all records sorted and labelled clearly, any alerts found, as well as notes previously entered by the ADJ.

All information is per AAS SOP guidelines.

Note Creation
The set of buttons labelled 'RF Inbound' and 'Called CH' are used to build 20+ dynamic notes in 3 clicks or less.
They emcompass a large swath of common situations that ADJs encounter on a daily basis.
Click through and read the labels clicked in order like a sentence.
The note generated can be edited or pasted as is depending on the situation.

Toggle list:
Selecting this will display a row of sliders that control the visibility of each button or a set of buttons.
There is, also, a slider for all buttons.

Appearance:
Accessed through the settings menu, the appearance option screen allows you to customize the whole color scheme from shadows to background and gradient colors.
There are several preset color schemes, as well.

Overall Style
Above 'Authorize Claim' there is a word: 'Neumorphic'.
Clicking it will show a slightly different set up for the buttons and a vastly different style for the buttons and other elements.
Clicking the word 'original' that took its place will revert the display back to default.
Neumorphic is the subtle realism style defined by it's use of soft contrasting shadows and the appearance that the elements are three dimentional extrusion of the environment.

Storage
All settings and custom colors are saved regarless of browser open/closed and computer restarts and updates.

Optimal settings
Best:
For best results, use the app.
To install:
Go to adjusterconsole.Github.io in microsoft edge.
Click the 3 horizontal dots in the top right of the window
Click 'Apps', then 'Install as an App'.
Select whatever options you like and click 'Allow'.
It is recommended to pin a shortcut to tool bar.

Minimum:
It is highly recommended (it won't really work otherwise) that this is run at the very least in:
Microsoft edge or internet explorer with minimal upper toolbars to avoid the scroll bars appearing.
Half screen mode (I run run in the left half of the right monitor with cms on my left monitor)
In regular or light mode. Anything but dark mode.

Questions, concerns, issues, suggestions, etc
AdjusterConsole@gmail.Com

Licensing
Restricted Use License
This code is provided under the following terms and conditions:
1. You are not allowed to use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this code in any form, modified or unmodified, without express written permission from the author.
2. You are not allowed to use this code for any illegal or unethical purpose.
3. This license applies to all versions of the code previously released, as well as all future versions. Any prior statements made about permission given are hereby revoked.
4. This code is provided "as is", without warranty of any kind, express or implied. The author shall not be liable for any damages arising from the use of this code.
By using this code, you agree to abide by these terms and conditions. Failure to comply with these terms may result in legal action.
For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.
