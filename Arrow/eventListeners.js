document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('closeChartBtn')?.addEventListener('click', closeChart);
    document.getElementById('disclaimer')?.addEventListener('click', showDisclaimer);
    document.getElementById('disclaimer2')?.addEventListener('click', () => hideDisclaimer('y'));
    document.getElementById('understand')?.addEventListener('click', () => hideDisclaimer('x'));
    document.getElementById('t8a')?.addEventListener('click', toggleOOPBtns);
    document.getElementById('shadDouble')?.addEventListener('click', getPicker);
    document.getElementById('previewBtn')?.addEventListener('click', () => {});
    document.getElementById('previewBtn2')?.addEventListener('click', () => {});
    document.getElementById('setColors')?.addEventListener('click', saveColors);
    document.getElementById('exitColor')?.addEventListener('click', exitColor);
    document.getElementById('defaultColors')?.addEventListener('click', () => setColor('default'));
    document.getElementById('presetGrey')?.addEventListener('click', () => setColor('grey'));
    document.getElementById('presetRed')?.addEventListener('click', () => setColor('red'));
    document.getElementById('presetGreen')?.addEventListener('click', () => setColor('green'));
    document.getElementById('presetPink')?.addEventListener('click', () => setColor('pink'));
    document.getElementById('presetRandom')?.addEventListener('click', () => setColor('random'));
    document.getElementById('ConsoleDefault')?.addEventListener('click', () => setColor('ACDF'));
    document.getElementById('swap1')?.addEventListener('click', openNav);
    document.getElementById('navtag')?.addEventListener('click', openSOPnav);
    document.getElementById('statusNote')?.addEventListener('click', statNOTE);
    document.getElementById('picR')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('recR')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('noansR')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('T0')?.addEventListener('click', ShowTemps);
    document.getElementById('SOPs')?.addEventListener('click', function() { resrcCenter('4', 'p'); });
    document.getElementById('tools')?.addEventListener('click', function() { resrcCenter('5', 't'); });
    document.getElementById('SENDPART')?.addEventListener('click', FormToTA);
    document.getElementById('SENDLABOR')?.addEventListener('click', SENDLABOR1);
    document.getElementById('SENDDIAG')?.addEventListener('click', SENDDIAG1);
    document.getElementById('clearIntake')?.addEventListener('click', ClearIntake);
    document.getElementById('DJKahlid')?.addEventListener('click', AnotherOne);
    document.getElementById('MTVsNEXT')?.addEventListener('click', NextPart);
    document.getElementById('T1')?.addEventListener('click', PTXFER);
    document.getElementById('T2')?.addEventListener('click', STMTTEMP);
    document.getElementById('T3')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('T4')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('denials')?.addEventListener('click', showDenials);
    document.getElementById('reviews')?.addEventListener('click', showReviews);
    document.getElementById('requests')?.addEventListener('click', showRequests);
    document.getElementById('prompt')?.addEventListener('click', function() { copyTextFunc(this.id); });
    document.getElementById('conopdeny')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('sludgedeny')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('waitdeny')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('T41')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('T51')?.addEventListener('click', function() { outputText('T3', 'clip'); });
    document.getElementById('T61')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('T71')?.addEventListener('click', function() { outputText('picR', 'clip'); });
    document.getElementById('T81')?.addEventListener('click', function() { outputText('recR', 'clip'); });
    document.getElementById('T91')?.addEventListener('click', function() { outputText('noansR', 'clip'); });
    document.getElementById('T101')?.addEventListener('click', function() { STMTTEMP(); closeSlide(); });
    document.getElementById('T31')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('autoCopyBtn')?.addEventListener('click', autoEnable);
    document.getElementById('flowchartBtn')?.addEventListener('click', flowchart);
    document.getElementById('xferred')?.addEventListener('click', xferred);
    document.getElementById('toGen')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('newClaim')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('inform')?.addEventListener('click', inform);
    document.getElementById('reasonAuth')?.addEventListener('click', function() { reason('1'); });
    document.getElementById('reasonDenial')?.addEventListener('click', function() { reason('2'); });
    document.getElementById('reasonStatus')?.addEventListener('click', function() { reason('3'); });
    document.getElementById('result1')?.addEventListener('click', function() { result('1'); });
    document.getElementById('result2')?.addEventListener('click', function() { result('2'); });
    document.getElementById('otherFPS')?.addEventListener('click', FLUIDLEAK);
    document.getElementById('authEmail')?.addEventListener('click', function() { outputText(this.id, 'clip'); });
    document.getElementById('SENDPART')?.addEventListener('click', FormToTA);
    document.getElementById('SENDLABOR')?.addEventListener('click', SENDLABOR1);
    document.getElementById('SENDDIAG')?.addEventListener('click', SENDDIAG1);
    document.getElementById('clearIntake')?.addEventListener('click', ClearIntake);
    document.getElementById('DJKahlid')?.addEventListener('click', AnotherOne);
    document.getElementById('MTVsNEXT')?.addEventListener('click', NextPart);
    document.getElementById('R2')?.addEventListener('click', COPYNOTE);
    document.getElementById('R15')?.addEventListener('click', RESET);
    document.getElementById('R8')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('R9')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('R10')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('R11')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('fluid')?.addEventListener('click', FLUIDLEAK);
    document.getElementById('R12')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('R13')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('R16')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('R17')?.addEventListener('click', function() { outputText(this.id, 'solo'); });
    document.getElementById('RFIBBTN')?.addEventListener('click', RFIB);
    document.getElementById('TGAFBTN')?.addEventListener('click', TGAF);
    document.getElementById('RESET')?.addEventListener('click', RESETNOTE);
    document.getElementById('RFIBDH')?.addEventListener('click', RFIBDH);
    document.getElementById('PNLCBTN')?.addEventListener('click', function() { otherThree(this.id); });
    document.getElementById('TOTALBTN')?.addEventListener('click', function() { otherThree(this.id); });
    document.getElementById('RFAUTHBTN')?.addEventListener('click', function() { otherThree(this.id); });
    document.getElementById('RFIBND')?.addEventListener('click', function() { wasntPreped(this.id); });
    document.getElementById('RFIBNE')?.addEventListener('click', function() { wasntPreped(this.id); });
    document.getElementById('RFIBNF')?.addEventListener('click', function() { wasntPreped(this.id); });
    document.getElementById('RFIBNV')?.addEventListener('click', function() { wasntPreped(this.id); });
    document.getElementById('TGAFOBTN')?.addEventListener('click', function() { TGAFO(this.id); });
    document.getElementById('TGAFSBTN')?.addEventListener('click', function() { TGAFS(this.id); });
    document.getElementById('TGAFBBTN')?.addEventListener('click', function() { TGAFB(this.id); });
    document.getElementById('TGAFOABTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFODBTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFOCBTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFSABTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFSDBTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFSCBTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFOSABTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFOSDSBTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFOSDBBTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('TGAFOSCBTN')?.addEventListener('click', function() { snipDivText(this.id); });
    document.getElementById('NALVM')?.addEventListener('click', NAV);
    document.getElementById('NANVM')?.addEventListener('click', NAN);
    document.getElementById('yes1')?.addEventListener('click', () => advancePT('yes1'));
    document.getElementById('no1')?.addEventListener('click', () => advancePT('no1'));
    document.getElementById('yes2')?.addEventListener('click', () => advancePT('yes2'));
    document.getElementById('no2')?.addEventListener('click', () => advancePT('no2'));
    document.getElementById('yes3')?.addEventListener('click', () => advancePT('yes3'));
    document.getElementById('no3')?.addEventListener('click', () => advancePT('no3'));
    document.getElementById('nr3')?.addEventListener('click', () => advancePT('nr3'));
    document.getElementById('done3')?.addEventListener('click', () => advancePT('done3'));
    document.getElementById('yes4')?.addEventListener('click', () => advancePT('yes4'));
    document.getElementById('no4')?.addEventListener('click', () => advancePT('no4'));
    document.getElementById('na4')?.addEventListener('click', () => advancePT('na4'));
    document.getElementById('yes5')?.addEventListener('click', () => advancePT('yes5'));
    document.getElementById('no5')?.addEventListener('click', () => advancePT('no5'));
    document.getElementById('yes6')?.addEventListener('click', () => advancePT('yes6'));
    document.getElementById('no6')?.addEventListener('click', () => advancePT('no6'));
    document.getElementById('yes7')?.addEventListener('click', () => advancePT('yes7'));
    document.getElementById('no7')?.addEventListener('click', () => advancePT('no7'));
    document.getElementById('done8')?.addEventListener('click', () => advancePT('done8'));
    document.getElementById('yes9')?.addEventListener('click', () => advancePT('yes9'));
    document.getElementById('no9')?.addEventListener('click', () => advancePT('no9'));
    document.getElementById('yes10')?.addEventListener('click', () => advancePT('yes10'));
    document.getElementById('no10')?.addEventListener('click', () => advancePT('no10'));
    document.getElementById('yes11')?.addEventListener('click', () => advancePT('yes11'));
    document.getElementById('no11')?.addEventListener('click', () => advancePT('no11'));
    document.getElementById('done11')?.addEventListener('click', () => advancePT('done11'));
    document.getElementById('backTemp')?.addEventListener('click', backTEMP);
    document.getElementById('cancelPT')?.addEventListener('click', cancelPT);
    document.getElementById('stat7')?.addEventListener('click', () => highlander('stat8'));
    document.getElementById('stat8')?.addEventListener('click', () => highlander('stat7'));
    document.getElementById('submitStat')?.addEventListener('click', () => submitStat('0'));
    document.getElementById('cancelStat')?.addEventListener('click', cancelStat);
    document.getElementById('nauth9')?.addEventListener('click', () => show_oopc_option('y'));
    document.getElementById('nauth10')?.addEventListener('click', () => show_oopc_option());
    document.getElementById('nauth11')?.addEventListener('click', () => show_oopc_option('y'));
    document.getElementById('nauth12')?.addEventListener('click', () => show_oopc_option());
    document.getElementById('cancel_auth')?.addEventListener('click', cancel_auth);
    document.getElementById('finish_auth')?.addEventListener('click', () => auth_initialize(2));
    document.getElementById("radius5")?.addEventListener("click", () => radiusSelect(5, "radius5"));
    document.getElementById("radius10")?.addEventListener("click", () => radiusSelect(10, "radius10"));
    document.getElementById("infoDone")?.addEventListener("click", createButton);
    document.getElementById("infoCancel")?.addEventListener("click", buttonCancel);
    document.getElementById("helpNext")?.addEventListener("click", helpNext);
    document.getElementById("helpPrev")?.addEventListener("click", helpPrev);
    document.getElementById('CopyPaymentBTN')?.addEventListener('click', () => CopyIntakeForm('1'));
    document.getElementById('CopyZipBTN')?.addEventListener('click', () => CopyIntakeForm('2'));
    document.getElementById('CopyMileBTN')?.addEventListener('click', () => CopyIntakeForm('3'));
    document.getElementById('closebtn')?.addEventListener('click', closeHelp);
    document.getElementById('closeAutoCopy')?.addEventListener('click', autoEnable);
    document.getElementById('LOCK1')?.addEventListener('click', MENU);
    document.getElementById('appearance')?.addEventListener('click', personalize);
    document.getElementById('BtnBuilder')?.addEventListener('click', BuilderShow);
    document.getElementById('ptcon')?.addEventListener('click', () => modePTmenu('demo'));
    document.getElementById('tutorials')?.addEventListener('click', showInstructions);
    document.addEventListener('contextmenu', function(event) { customMenu(event.target, event); });
});