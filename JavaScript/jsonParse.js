const _0x295dd7=_0x37e0;function _0x37e0(_0x26c951,_0x22b612){const _0x11c107=_0x11c1();return _0x37e0=function(_0x37e085,_0x21a74f){_0x37e085=_0x37e085-0xb4;let _0x185f6=_0x11c107[_0x37e085];return _0x185f6;},_0x37e0(_0x26c951,_0x22b612);}(function(_0x5de9fb,_0x267ed4){const _0x4ce904=_0x37e0,_0x5a5700=_0x5de9fb();while(!![]){try{const _0x2fa74c=parseInt(_0x4ce904(0xfe))/0x1*(-parseInt(_0x4ce904(0xf8))/0x2)+-parseInt(_0x4ce904(0xcb))/0x3*(-parseInt(_0x4ce904(0xf1))/0x4)+parseInt(_0x4ce904(0xb6))/0x5+parseInt(_0x4ce904(0xb4))/0x6*(-parseInt(_0x4ce904(0xfa))/0x7)+-parseInt(_0x4ce904(0xf3))/0x8*(-parseInt(_0x4ce904(0xc8))/0x9)+parseInt(_0x4ce904(0xbd))/0xa*(-parseInt(_0x4ce904(0xca))/0xb)+-parseInt(_0x4ce904(0xea))/0xc;if(_0x2fa74c===_0x267ed4)break;else _0x5a5700['push'](_0x5a5700['shift']());}catch(_0x17913d){_0x5a5700['push'](_0x5a5700['shift']());}}}(_0x11c1,0xad38e),document[_0x295dd7(0xbf)](_0x295dd7(0x101))[_0x295dd7(0x103)]('change',processUploadedFile),document[_0x295dd7(0xbf)](_0x295dd7(0xdb))['addEventListener']('click',autoCopyAndDelete),document['getElementById'](_0x295dd7(0xeb))['addEventListener'](_0x295dd7(0xfc),partnumberCopyAndDelete),document[_0x295dd7(0xbf)](_0x295dd7(0xc4))[_0x295dd7(0x103)]('click',partpriceCopyAndDelete),document[_0x295dd7(0xbf)]('resetFile')[_0x295dd7(0x103)](_0x295dd7(0xfc),resetAutoCopyComponents));function processUploadedFile(_0x2cc4aa){const _0x58e5b8=_0x295dd7,_0x2dc197=_0x2cc4aa[_0x58e5b8(0xcf)]['files'][0x0];if(!_0x2dc197){alert(_0x58e5b8(0xd6));return;}const _0x1ec975=new FileReader();_0x1ec975[_0x58e5b8(0xb9)]=function(_0x34da30){const _0x5e7e24=_0x58e5b8;try{const _0x27d662=JSON['parse'](_0x34da30[_0x5e7e24(0xcf)][_0x5e7e24(0xd0)]);if(_0x27d662['claim_info']&&_0x27d662['claim_info'][_0x5e7e24(0xc7)]>0x0){const _0x4143c9=_0x27d662[_0x5e7e24(0xc3)][0x0],_0x52d22b=formatJsons(_0x4143c9);document[_0x5e7e24(0xbf)]('textarea2')[_0x5e7e24(0xf4)]=_0x52d22b;const _0x431654=localStorage[_0x5e7e24(0xee)](_0x5e7e24(0xff));document[_0x5e7e24(0xbf)]('left2')[_0x5e7e24(0xe0)]=_0x5e7e24(0xe6)+_0x431654,document[_0x5e7e24(0xbf)]('left3')[_0x5e7e24(0xe0)]='Remaining<br>'+_0x431654;const _0x1ec6b4=parseInt(_0x431654)*0x4;localStorage[_0x5e7e24(0xdf)]('countAlls',_0x1ec6b4),localStorage[_0x5e7e24(0xdf)](_0x5e7e24(0xef),_0x431654),localStorage[_0x5e7e24(0xdf)]('countPrices',_0x431654);const _0x1ec5ce=_0x1ec6b4['toString']();document[_0x5e7e24(0xbf)](_0x5e7e24(0xd9))[_0x5e7e24(0xe0)]=_0x5e7e24(0xe6)+_0x1ec5ce;}else alert(_0x5e7e24(0xe9));}catch(_0x3ccf46){alert('Error\x20parsing\x20JSON\x20file:\x20'+_0x3ccf46['message']);}},_0x1ec975['readAsText'](_0x2dc197);}function _0x11c1(){const _0x4b1c56=['partNumber','Part\x20Name:\x20','claim_info','pricecopy','error','Labor\x20Rate:\x20','length','1278ULctef','Next<br>--','11PWpTCR','12GugcCE','disabled','laborData','Hours:\x20','target','result','textarea3','Next<br>','textarea5','slice','Totals:\x0a','No\x20file\x20selected.','Parts\x0a','Description:\x20','left1','catch','autocopy','toFixed','textarea4','Part\x20Number:\x20','setItem','innerHTML','then','laborDescription','RF\x20Price:\x20$','hours','left3','Remaining<br>','split','next3','Invalid\x20JSON\x20structure.','3229008vUxweX','pncopy','priceEach','forEach','getItem','countPNs','writeText','1310692PqEAqP','next1','63952mXXGFA','value','countAlls','clipboard','countPrices','4sFPFTt','quantity','337477qBmADO','hasOwnProperty','click','partName','577006jlidHk','countLefts','repeat','fileInput','Failed\x20to\x20copy\x20text:\x20','addEventListener','60TKHSIJ','trim','4364535rgvHDm','left2','Labor:\x0a','onload','Quantity:\x20','next2','join','7040230YmbADf','totals','getElementById','Remaining<br>--'];_0x11c1=function(){return _0x4b1c56;};return _0x11c1();}function formatJsons(_0x235da4,_0x189a86=0x0){const _0x5e2036=_0x295dd7;let _0x30e23b='';for(let _0x3887e5 in _0x235da4){if(_0x235da4[_0x5e2036(0xfb)](_0x3887e5)){const _0x554199=_0x235da4[_0x3887e5];let _0x5f0f4b='\x20'['repeat'](_0x189a86);switch(_0x3887e5){case'partsData':_0x30e23b+=_0x5f0f4b+_0x5e2036(0xd7),_0x554199[_0x5e2036(0xed)](_0x25134d=>{_0x30e23b+=formatPart(_0x25134d,_0x189a86+0x2);});break;case _0x5e2036(0xcd):_0x30e23b+=_0x5f0f4b+_0x5e2036(0xb8),_0x554199[_0x5e2036(0xed)](_0x3e2452=>{const _0x27c91f=_0x5e2036;_0x30e23b+='\x20'[_0x27c91f(0x100)](_0x189a86+0x2)+_0x27c91f(0xd8)+_0x3e2452[_0x27c91f(0xe2)]+'\x0a',_0x30e23b+='\x20'[_0x27c91f(0x100)](_0x189a86+0x2)+_0x27c91f(0xce)+_0x3e2452[_0x27c91f(0xe4)]+'\x0a\x0a';});break;case _0x5e2036(0xbe):_0x30e23b+=_0x5f0f4b+_0x5e2036(0xd5);for(let _0x3f4c29 in _0x554199){_0x554199[_0x5e2036(0xfb)](_0x3f4c29)&&(_0x30e23b+=''+'\x20'['repeat'](_0x189a86+0x2)+_0x3f4c29+':\x20'+_0x554199[_0x3f4c29]+'\x0a');}break;case'laborRate':_0x30e23b+=_0x5f0f4b+_0x5e2036(0xc6)+_0x554199+'\x0a';break;default:_0x30e23b+=''+_0x5f0f4b+_0x3887e5+':\x20'+_0x554199+'\x0a';break;}}}return _0x30e23b;}function formatPart(_0x10fc56,_0x2ec761){const _0x75e7b=_0x295dd7;let _0x24501b='';_0x24501b+='\x20'['repeat'](_0x2ec761)+_0x75e7b(0xde)+_0x10fc56[_0x75e7b(0xc1)]+'\x0a',_0x24501b+='\x20'['repeat'](_0x2ec761)+_0x75e7b(0xc2)+_0x10fc56['partName']+'\x0a',_0x24501b+='\x20'[_0x75e7b(0x100)](_0x2ec761)+_0x75e7b(0xba)+_0x10fc56['quantity']+'\x0a',_0x24501b+='\x20'[_0x75e7b(0x100)](_0x2ec761)+_0x75e7b(0xe3)+parseFloat(_0x10fc56['priceEach'])[_0x75e7b(0xdc)](0x2)+'\x0a\x0a',document[_0x75e7b(0xbf)](_0x75e7b(0xd3))['value']+=_0x10fc56['partNumber']+'\x0a'+_0x10fc56[_0x75e7b(0xfd)]+'\x0a'+_0x10fc56[_0x75e7b(0xf9)]+'\x0a'+parseFloat(_0x10fc56[_0x75e7b(0xec)])['toFixed'](0x2)+'\x0a',document['getElementById'](_0x75e7b(0xdd))['value']+=parseFloat(_0x10fc56[_0x75e7b(0xec)])[_0x75e7b(0xdc)](0x2)+'\x0a',document[_0x75e7b(0xbf)](_0x75e7b(0xd1))[_0x75e7b(0xf4)]+=_0x10fc56['partNumber']+'\x0a';let _0xfeb468=parseInt(localStorage[_0x75e7b(0xee)](_0x75e7b(0xff)))+0x1;return _0xfeb468===0x1&&(document[_0x75e7b(0xbf)](_0x75e7b(0xf2))['innerHTML']='Next<br>'+_0x10fc56['partNumber'],document[_0x75e7b(0xbf)](_0x75e7b(0xbb))[_0x75e7b(0xe0)]=_0x75e7b(0xd2)+_0x10fc56['partNumber'],document['getElementById']('next3')[_0x75e7b(0xe0)]=_0x75e7b(0xd2)+parseFloat(_0x10fc56[_0x75e7b(0xec)])[_0x75e7b(0xdc)](0x2)),localStorage['setItem'](_0x75e7b(0xff),_0xfeb468),_0x24501b;}function resetAutoCopyComponents(){const _0xc1c9ad=_0x295dd7;localStorage[_0xc1c9ad(0xdf)](_0xc1c9ad(0xff),'0'),localStorage[_0xc1c9ad(0xdf)](_0xc1c9ad(0xf5),'0'),localStorage[_0xc1c9ad(0xdf)]('countPNs','0'),localStorage[_0xc1c9ad(0xdf)]('countPrices','0'),setElementValue(['fileInput',_0xc1c9ad(0xd3),'textarea4',_0xc1c9ad(0xd1),'textarea2'],''),document['getElementById'](_0xc1c9ad(0xf2))[_0xc1c9ad(0xe0)]=_0xc1c9ad(0xc9),document['getElementById'](_0xc1c9ad(0xbb))[_0xc1c9ad(0xe0)]=_0xc1c9ad(0xc9),document['getElementById']('next3')[_0xc1c9ad(0xe0)]=_0xc1c9ad(0xc9),document[_0xc1c9ad(0xbf)]('left1')[_0xc1c9ad(0xe0)]='Remaining<br>--',document[_0xc1c9ad(0xbf)](_0xc1c9ad(0xb7))['innerHTML']=_0xc1c9ad(0xc0),document[_0xc1c9ad(0xbf)]('left3')[_0xc1c9ad(0xe0)]=_0xc1c9ad(0xc0),document['getElementById'](_0xc1c9ad(0xdb))[_0xc1c9ad(0xcc)]=![],document[_0xc1c9ad(0xbf)]('pncopy')[_0xc1c9ad(0xcc)]=![],document[_0xc1c9ad(0xbf)](_0xc1c9ad(0xc4))['disabled']=![];}function autoCopyAndDelete(){const _0x2ae7b6=_0x295dd7,_0x3130c2=document['getElementById']('textarea5')['value'],_0x2e6e4c=_0x3130c2[_0x2ae7b6(0xe7)]('\x0a');if(_0x2e6e4c[_0x2ae7b6(0xc7)]>0x0){const _0x1a6a1b=_0x2e6e4c[0x0][_0x2ae7b6(0xb5)]();_0x1a6a1b!==''&&navigator[_0x2ae7b6(0xf6)][_0x2ae7b6(0xf0)](_0x1a6a1b)[_0x2ae7b6(0xe1)](()=>{const _0xc82025=_0x2ae7b6;let _0x5774a9=parseInt(localStorage[_0xc82025(0xee)](_0xc82025(0xf5)))-0x1;if(_0x5774a9===0x0){document[_0xc82025(0xbf)](_0xc82025(0xf2))[_0xc82025(0xe0)]=_0xc82025(0xc9),document['getElementById'](_0xc82025(0xd9))[_0xc82025(0xe0)]=_0xc82025(0xc0),document['getElementById'](_0xc82025(0xd3))[_0xc82025(0xf4)]='',document[_0xc82025(0xbf)](_0xc82025(0xdb))['disabled']=!![];return;}const _0x303321=_0x2e6e4c[0x1][_0xc82025(0xb5)]()||'',_0x429449=_0x2e6e4c[_0xc82025(0xd4)](0x1)[_0xc82025(0xbc)]('\x0a');document[_0xc82025(0xbf)]('textarea5')[_0xc82025(0xf4)]=_0x429449,document[_0xc82025(0xbf)](_0xc82025(0xf2))[_0xc82025(0xe0)]=_0xc82025(0xd2)+_0x303321,document[_0xc82025(0xbf)](_0xc82025(0xd9))[_0xc82025(0xe0)]='Remaining<br>'+_0x5774a9,localStorage[_0xc82025(0xdf)](_0xc82025(0xf5),_0x5774a9);})[_0x2ae7b6(0xda)](_0x51b37b=>{const _0x589974=_0x2ae7b6;console[_0x589974(0xc5)](_0x589974(0x102),_0x51b37b);});}}function partnumberCopyAndDelete(){const _0x3d7b17=_0x295dd7,_0x3052ac=document[_0x3d7b17(0xbf)]('textarea3')[_0x3d7b17(0xf4)],_0x542622=_0x3052ac[_0x3d7b17(0xe7)]('\x0a');if(_0x542622[_0x3d7b17(0xc7)]>0x0){const _0x3be0ab=_0x542622[0x0][_0x3d7b17(0xb5)]();_0x3be0ab!==''&&navigator[_0x3d7b17(0xf6)][_0x3d7b17(0xf0)](_0x3be0ab)[_0x3d7b17(0xe1)](()=>{const _0x4d2592=_0x3d7b17;let _0x92af23=parseInt(localStorage['getItem'](_0x4d2592(0xef)))-0x1;if(_0x92af23===0x0){document[_0x4d2592(0xbf)](_0x4d2592(0xbb))['innerHTML']=_0x4d2592(0xc9),document[_0x4d2592(0xbf)](_0x4d2592(0xb7))[_0x4d2592(0xe0)]='Remaining<br>--',document[_0x4d2592(0xbf)]('textarea3')[_0x4d2592(0xf4)]='',document[_0x4d2592(0xbf)](_0x4d2592(0xeb))[_0x4d2592(0xcc)]=!![];return;}const _0x21ca4f=_0x542622[0x1][_0x4d2592(0xb5)]()||'',_0x936372=_0x542622['slice'](0x1)[_0x4d2592(0xbc)]('\x0a');document[_0x4d2592(0xbf)]('textarea3')[_0x4d2592(0xf4)]=_0x936372,document[_0x4d2592(0xbf)](_0x4d2592(0xbb))[_0x4d2592(0xe0)]=_0x4d2592(0xd2)+_0x21ca4f,document[_0x4d2592(0xbf)](_0x4d2592(0xb7))[_0x4d2592(0xe0)]=_0x4d2592(0xe6)+_0x92af23,localStorage[_0x4d2592(0xdf)](_0x4d2592(0xef),_0x92af23);})['catch'](_0x10d680=>{const _0x6edabe=_0x3d7b17;console[_0x6edabe(0xc5)](_0x6edabe(0x102),_0x10d680);});}}function partpriceCopyAndDelete(){const _0x3024dc=_0x295dd7,_0x47bc90=document[_0x3024dc(0xbf)](_0x3024dc(0xdd))[_0x3024dc(0xf4)],_0x3c3c97=_0x47bc90[_0x3024dc(0xe7)]('\x0a');if(_0x3c3c97['length']>0x0){const _0x45c9b3=_0x3c3c97[0x0][_0x3024dc(0xb5)]();_0x45c9b3!==''&&navigator[_0x3024dc(0xf6)][_0x3024dc(0xf0)](_0x45c9b3)[_0x3024dc(0xe1)](()=>{const _0x46ee22=_0x3024dc;let _0x479b73=parseInt(localStorage[_0x46ee22(0xee)]('countPrices'))-0x1;if(_0x479b73===0x0){document[_0x46ee22(0xbf)](_0x46ee22(0xe8))[_0x46ee22(0xe0)]=_0x46ee22(0xc9),document[_0x46ee22(0xbf)](_0x46ee22(0xe5))[_0x46ee22(0xe0)]='Remaining<br>--',document[_0x46ee22(0xbf)]('textarea4')['value']='',document[_0x46ee22(0xbf)](_0x46ee22(0xc4))['disabled']=!![];return;}const _0xa9b283=_0x3c3c97[0x1][_0x46ee22(0xb5)]()||'',_0x7b4e8a=_0x3c3c97[_0x46ee22(0xd4)](0x1)[_0x46ee22(0xbc)]('\x0a');document[_0x46ee22(0xbf)](_0x46ee22(0xdd))[_0x46ee22(0xf4)]=_0x7b4e8a,document['getElementById'](_0x46ee22(0xe8))['innerHTML']=_0x46ee22(0xd2)+_0xa9b283,document[_0x46ee22(0xbf)](_0x46ee22(0xe5))[_0x46ee22(0xe0)]=_0x46ee22(0xe6)+_0x479b73,localStorage[_0x46ee22(0xdf)](_0x46ee22(0xf7),_0x479b73);})[_0x3024dc(0xda)](_0x3f406b=>{const _0x18531b=_0x3024dc;console['error'](_0x18531b(0x102),_0x3f406b);});}}function setElementValue(_0x11723b,_0x52d9f1){const _0x3bc8cc=_0x295dd7;_0x11723b[_0x3bc8cc(0xed)](_0x592fd4=>{const _0x48ce17=_0x3bc8cc,_0x57d403=document[_0x48ce17(0xbf)](_0x592fd4);_0x57d403&&(_0x57d403[_0x48ce17(0xf4)]=_0x52d9f1);});}