const _0x4597a9=_0x5d21;(function(_0x46e35f,_0x2e084c){const _0x48b304=_0x5d21,_0x4c39b4=_0x46e35f();while(!![]){try{const _0x27e772=-parseInt(_0x48b304(0x1c4))/0x1*(-parseInt(_0x48b304(0x1ad))/0x2)+-parseInt(_0x48b304(0x199))/0x3*(parseInt(_0x48b304(0x1a4))/0x4)+-parseInt(_0x48b304(0x1b0))/0x5*(-parseInt(_0x48b304(0x1af))/0x6)+parseInt(_0x48b304(0x1bc))/0x7*(parseInt(_0x48b304(0x1c1))/0x8)+-parseInt(_0x48b304(0x1a6))/0x9*(parseInt(_0x48b304(0x1a2))/0xa)+-parseInt(_0x48b304(0x1d1))/0xb+parseInt(_0x48b304(0x1cf))/0xc*(parseInt(_0x48b304(0x1ab))/0xd);if(_0x27e772===_0x2e084c)break;else _0x4c39b4['push'](_0x4c39b4['shift']());}catch(_0x2908f6){_0x4c39b4['push'](_0x4c39b4['shift']());}}}(_0x53f4,0x2f5b7));const _0x2be151=(function(){let _0x463368=!![];return function(_0x501709,_0x125afd){const _0x207bfb=_0x463368?function(){const _0x7f65b=_0x5d21;if(_0x125afd){const _0x23f2bb=_0x125afd[_0x7f65b(0x1b1)](_0x501709,arguments);return _0x125afd=null,_0x23f2bb;}}:function(){};return _0x463368=![],_0x207bfb;};}()),_0x3bbc12=_0x2be151(this,function(){const _0x13754d=_0x5d21,_0x4f512b={'oNfzQ':_0x13754d(0x1a3)};return _0x3bbc12['toString']()['search'](_0x4f512b[_0x13754d(0x19c)])['toString']()[_0x13754d(0x194)](_0x3bbc12)['search']('(((.+)+)+)+$');});_0x3bbc12(),document['getElementById']('fileInput')[_0x4597a9(0x1cb)]('change',processUploadedFile),document[_0x4597a9(0x1c8)]('autocopy')[_0x4597a9(0x1cb)]('click',autoCopyAndDelete),document['getElementById']('pncopy')['addEventListener']('click',partnumberCopyAndDelete),document[_0x4597a9(0x1c8)]('pricecopy')['addEventListener'](_0x4597a9(0x1ae),partpriceCopyAndDelete),document[_0x4597a9(0x1c8)]('resetFile')['addEventListener']('click',resetAutoCopyComponents);function _0x53f4(){const _0x1f39ae=['VCncN','textarea4','tTeQV','then','LBTAb','countAlls','1408169kmjdOt','next3','setItem','trim','copy3','8mfEnKC','Error\x20parsing\x20JSON\x20file:\x20','left1','4WUVCAt','Failed\x20to\x20copy\x20text:\x20','ZCMrk','partNumber','getElementById','forEach','Copied','addEventListener','error','value','Part\x20Name:\x20','276btEAJJ','JPnuI','3753695bZfQGn','textarea5','textarea3','Quantity:\x20','innerHTML','repeat','constructor','clipboard','catch','copy2','disabled','6hzKYKO','quantity','target','oNfzQ','getItem','countLefts','countPNs','writeText','cSLJj','180YuLiGR','(((.+)+)+)+$','709040pwbVxm','left2','90639xjolZd','length','left3','aKyLJ','ZEChO','376493uKgJGU','TVBZd','66854BdwPad','click','4080ZAWmli','515PanyTn','apply','countPrices','next1','qlWeH','pncopy'];_0x53f4=function(){return _0x1f39ae;};return _0x53f4();}const remaining='Remaining',copied=_0x4597a9(0x1ca),next='Next',brLine='<br>',dash='--';function processUploadedFile(_0x523cb8){const _0x46e7df=_0x4597a9,_0x58d255={'KKlkB':'left2','ebtqP':function(_0x1724d1,_0x3549f2){return _0x1724d1+_0x3549f2;},'IXWll':function(_0x2b7785,_0x230859){return _0x2b7785(_0x230859);}},_0x1ba817=_0x523cb8[_0x46e7df(0x19b)]['files'][0x0];if(!_0x1ba817){alert('No\x20file\x20selected.');return;}const _0x5c9fc0=new FileReader();_0x5c9fc0['onload']=function(_0x5c59aa){const _0x13914c=_0x46e7df;try{const _0x31c725=JSON['parse'](_0x5c59aa['target']['result']);if(Array['isArray'](_0x31c725)&&_0x31c725[_0x13914c(0x1a7)]>0x0){const _0x419db7=formatJsons(_0x31c725);document['getElementById']('textarea2')[_0x13914c(0x1cd)]=_0x419db7;const _0x18d76e=_0x31c725['length'];sessionStorage['setItem'](_0x13914c(0x19e),_0x18d76e);const _0x1de56f=_0x18d76e*0x4;sessionStorage['setItem']('countAlls',_0x1de56f),sessionStorage['setItem'](_0x13914c(0x19f),_0x18d76e),sessionStorage[_0x13914c(0x1be)]('countPrices',_0x18d76e),document['getElementById'](_0x13914c(0x1c3))['innerHTML']=remaining+brLine+_0x1de56f,document[_0x13914c(0x1c8)](_0x58d255['KKlkB'])['innerHTML']=remaining+brLine+_0x18d76e,document[_0x13914c(0x1c8)]('left3')['innerHTML']=_0x58d255['ebtqP'](remaining,brLine)+_0x18d76e;}else alert('Invalid\x20JSON\x20structure.');}catch(_0x3f3ed0){_0x58d255['IXWll'](alert,_0x58d255['ebtqP'](_0x13914c(0x1c2),_0x3f3ed0['message']));}},_0x5c9fc0['readAsText'](_0x1ba817);}function formatJsons(_0x240b19,_0x1e287e=0x0){const _0x463cce={'RnGzc':function(_0x5cc3d2,_0x5e1eea,_0x2dab5e){return _0x5cc3d2(_0x5e1eea,_0x2dab5e);}};let _0x20b88f='';return _0x240b19['forEach'](_0x514991=>{_0x20b88f+=_0x463cce['RnGzc'](formatPart,_0x514991,_0x1e287e);}),_0x20b88f;}function formatPart(_0x51602f,_0x505835){const _0x240254=_0x4597a9,_0x3ea866={'LyoSd':function(_0x10d58a,_0x40098d){return _0x10d58a(_0x40098d);},'jGGJZ':'textarea5','Ocupj':function(_0x2192c8,_0x3962c1){return _0x2192c8+_0x3962c1;}};let _0x17a530='';_0x17a530+='\x20'[_0x240254(0x193)](_0x505835)+'Part\x20Number:\x20'+_0x51602f['partNumber']+'\x0a',_0x17a530+='\x20'['repeat'](_0x505835)+_0x240254(0x1ce)+_0x51602f['partName']+'\x0a',_0x17a530+='\x20'['repeat'](_0x505835)+_0x240254(0x1d4)+_0x51602f['quantity']+'\x0a',_0x17a530+='\x20'['repeat'](_0x505835)+'RF\x20Price:\x20$'+_0x3ea866['LyoSd'](parseFloat,_0x51602f['priceEach'])['toFixed'](0x2)+'\x0a\x0a',document['getElementById'](_0x3ea866['jGGJZ'])['value']+=_0x51602f['partNumber']+'\x0a'+_0x51602f['partName']+'\x0a'+_0x51602f[_0x240254(0x19a)]+'\x0a'+parseFloat(_0x51602f['priceEach'])['toFixed'](0x2)+'\x0a',document[_0x240254(0x1c8)]('textarea4')[_0x240254(0x1cd)]+=parseFloat(_0x51602f['priceEach'])['toFixed'](0x2)+'\x0a',document[_0x240254(0x1c8)](_0x240254(0x1d3))[_0x240254(0x1cd)]+=_0x51602f['partNumber']+'\x0a';let _0x1d8b71=parseInt(sessionStorage['getItem']('countLefts'))+0x1;return _0x1d8b71===0x1&&(document[_0x240254(0x1c8)](_0x240254(0x1b3))['innerHTML']=_0x3ea866['Ocupj'](next+brLine,_0x51602f[_0x240254(0x1c7)]),document['getElementById']('next2')['innerHTML']=next+brLine+_0x51602f[_0x240254(0x1c7)],document['getElementById']('next3')['innerHTML']=next+brLine+parseFloat(_0x51602f['priceEach'])['toFixed'](0x2)),sessionStorage['setItem']('countLefts',_0x1d8b71),_0x17a530;}function resetAutoCopyComponents(){const _0xcd6975=_0x4597a9,_0x29a62d={'ZCMrk':'countAlls','TVBZd':'textarea5','cSLJj':'textarea2','lgIrG':function(_0x228576,_0x1dc188){return _0x228576+_0x1dc188;},'dsmsN':function(_0x133d52,_0x4b87b8){return _0x133d52+_0x4b87b8;},'PjasB':_0xcd6975(0x1b3),'ZEChO':'next2','tTeQV':function(_0x4b014a,_0x5cee62){return _0x4b014a+_0x5cee62;},'LBTAb':_0xcd6975(0x1bd),'qlWeH':function(_0x481476,_0x263f2b){return _0x481476+_0x263f2b;},'VNYIQ':_0xcd6975(0x1a8),'hvXjR':function(_0x8d8841,_0x4cdfb5){return _0x8d8841+_0x4cdfb5;}};sessionStorage[_0xcd6975(0x1be)](_0xcd6975(0x19e),'0'),sessionStorage[_0xcd6975(0x1be)](_0x29a62d[_0xcd6975(0x1c6)],'0'),sessionStorage[_0xcd6975(0x1be)]('countPNs','0'),sessionStorage['setItem'](_0xcd6975(0x1b2),'0'),setElementValue(['fileInput',_0x29a62d[_0xcd6975(0x1ac)],_0xcd6975(0x1b7),'textarea3',_0x29a62d[_0xcd6975(0x1a1)]],''),document['getElementById']('copy1')['innerHTML']=_0x29a62d['lgIrG'](copied,brLine)+dash,document[_0xcd6975(0x1c8)]('copy2')[_0xcd6975(0x192)]=_0x29a62d['dsmsN'](copied,brLine)+dash,document[_0xcd6975(0x1c8)](_0xcd6975(0x1c0))['innerHTML']=copied+brLine+dash,document['getElementById'](_0x29a62d['PjasB'])['innerHTML']=next+brLine+dash,document['getElementById'](_0x29a62d[_0xcd6975(0x1aa)])['innerHTML']=_0x29a62d[_0xcd6975(0x1b8)](next,brLine)+dash,document['getElementById'](_0x29a62d[_0xcd6975(0x1ba)])['innerHTML']=_0x29a62d[_0xcd6975(0x1b4)](next,brLine)+dash,document['getElementById']('left1')[_0xcd6975(0x192)]=remaining+brLine+dash,document[_0xcd6975(0x1c8)]('left2')['innerHTML']=remaining+brLine+dash,document['getElementById'](_0x29a62d['VNYIQ'])['innerHTML']=_0x29a62d['hvXjR'](remaining+brLine,dash),document['getElementById']('autocopy')[_0xcd6975(0x198)]=![],document['getElementById']('pncopy')[_0xcd6975(0x198)]=![],document[_0xcd6975(0x1c8)]('pricecopy')[_0xcd6975(0x198)]=![];}function _0x5d21(_0x445e96,_0x12de43){const _0x5807e3=_0x53f4();return _0x5d21=function(_0x3bbc12,_0x2be151){_0x3bbc12=_0x3bbc12-0x192;let _0x53f4b4=_0x5807e3[_0x3bbc12];return _0x53f4b4;},_0x5d21(_0x445e96,_0x12de43);}function autoCopyAndDelete(){const _0x49f9c6=_0x4597a9,_0x291433={'pHXKc':'copy1','VCncN':function(_0x4e56e8,_0x1bb738){return _0x4e56e8+_0x1bb738;},'JPnuI':_0x49f9c6(0x1d2)},_0x1d9424=document['getElementById'](_0x49f9c6(0x1d2))['value'],_0xc64954=_0x1d9424['split']('\x0a');if(_0xc64954['length']>0x0){const _0x417345=_0xc64954[0x0]['trim']();_0x417345!==''&&navigator[_0x49f9c6(0x195)]['writeText'](_0x417345)[_0x49f9c6(0x1b9)](()=>{const _0x3c2ea7=_0x49f9c6;let _0x2eb060=parseInt(sessionStorage['getItem']('countAlls'))-0x1;if(_0x2eb060===0x0){document['getElementById'](_0x291433['pHXKc'])['innerHTML']=_0x291433[_0x3c2ea7(0x1b6)](copied+brLine,_0x417345),document['getElementById']('left1')['innerHTML']=remaining+brLine+dash,document[_0x3c2ea7(0x1c8)](_0x3c2ea7(0x1b3))['innerHTML']=next+brLine+dash,document['getElementById'](_0x291433[_0x3c2ea7(0x1d0)])['value']='',document['getElementById']('autocopy')['disabled']=!![];return;}const _0x5e18f9=_0xc64954['length']>0x1?_0xc64954[0x1]['trim']():dash,_0x193a95=_0xc64954['slice'](0x1)['join']('\x0a');document['getElementById'](_0x3c2ea7(0x1d2))['value']=_0x193a95,document['getElementById']('next1')['innerHTML']=next+brLine+_0x5e18f9,document['getElementById']('copy1')[_0x3c2ea7(0x192)]=copied+brLine+_0x417345,document['getElementById'](_0x3c2ea7(0x1c3))['innerHTML']=_0x291433['VCncN'](remaining,brLine)+_0x2eb060,sessionStorage[_0x3c2ea7(0x1be)](_0x3c2ea7(0x1bb),_0x2eb060);})[_0x49f9c6(0x196)](_0x1fc0e3=>{const _0x2998ee=_0x49f9c6;console[_0x2998ee(0x1cc)]('Failed\x20to\x20copy\x20text:\x20',_0x1fc0e3);});}}function partnumberCopyAndDelete(){const _0x450fd4=_0x4597a9,_0x2ff0c6={'aKyLJ':function(_0x15ddc6,_0x3aa866){return _0x15ddc6+_0x3aa866;},'KDfJP':_0x450fd4(0x197),'XjBFt':function(_0x2f40ba,_0x19d8b9){return _0x2f40ba+_0x19d8b9;},'yeLTH':function(_0xc77f49,_0x566b2a){return _0xc77f49+_0x566b2a;}},_0x1cf18f=document[_0x450fd4(0x1c8)]('textarea3')['value'],_0x1c6c27=_0x1cf18f['split']('\x0a');if(_0x1c6c27['length']>0x0){const _0x1d8d92=_0x1c6c27[0x0]['trim']();_0x1d8d92!==''&&navigator['clipboard']['writeText'](_0x1d8d92)['then'](()=>{const _0x5e9fde=_0x450fd4;let _0xcfccc1=parseInt(sessionStorage[_0x5e9fde(0x19d)]('countPNs'))-0x1;if(_0xcfccc1===0x0){document[_0x5e9fde(0x1c8)]('copy2')[_0x5e9fde(0x192)]=_0x2ff0c6[_0x5e9fde(0x1a9)](copied,brLine)+_0x1d8d92,document['getElementById']('next2')[_0x5e9fde(0x192)]=next+brLine+dash,document['getElementById']('left2')['innerHTML']=remaining+brLine+dash,document['getElementById'](_0x5e9fde(0x1d3))[_0x5e9fde(0x1cd)]='',document['getElementById'](_0x5e9fde(0x1b5))['disabled']=!![];return;}const _0x57064e=_0x1c6c27['length']>0x1?_0x1c6c27[0x1]['trim']():dash,_0x55db33=_0x1c6c27['slice'](0x1)['join']('\x0a');document['getElementById']('textarea3')[_0x5e9fde(0x1cd)]=_0x55db33,document['getElementById']('next2')[_0x5e9fde(0x192)]=_0x2ff0c6['aKyLJ'](next,brLine)+_0x57064e,document[_0x5e9fde(0x1c8)](_0x2ff0c6['KDfJP'])['innerHTML']=_0x2ff0c6['XjBFt'](_0x2ff0c6['yeLTH'](copied,brLine),_0x1d8d92),document['getElementById'](_0x5e9fde(0x1a5))['innerHTML']=_0x2ff0c6['aKyLJ'](remaining+brLine,_0xcfccc1),sessionStorage['setItem']('countPNs',_0xcfccc1);})['catch'](_0x2a5ab5=>{const _0x379df6=_0x450fd4;console[_0x379df6(0x1cc)](_0x379df6(0x1c5),_0x2a5ab5);});}}function partpriceCopyAndDelete(){const _0xa0d292=_0x4597a9,_0xe103ea={'gDGmY':_0xa0d292(0x1b2),'PeMWA':function(_0x32c39e,_0x486a63){return _0x32c39e+_0x486a63;},'cqeQP':'textarea4','qyyjE':'next3'},_0x1923ca=document['getElementById']('textarea4')[_0xa0d292(0x1cd)],_0x33bf4b=_0x1923ca['split']('\x0a');if(_0x33bf4b['length']>0x0){const _0x319cae=_0x33bf4b[0x0]['trim']();_0x319cae!==''&&navigator['clipboard'][_0xa0d292(0x1a0)](_0x319cae)['then'](()=>{const _0x5584ba=_0xa0d292;let _0x37f31b=parseInt(sessionStorage[_0x5584ba(0x19d)](_0xe103ea['gDGmY']))-0x1;if(_0x37f31b===0x0){document['getElementById'](_0x5584ba(0x1c0))['innerHTML']=copied+brLine+_0x319cae,document[_0x5584ba(0x1c8)]('next3')[_0x5584ba(0x192)]=_0xe103ea['PeMWA'](next+brLine,dash),document[_0x5584ba(0x1c8)](_0x5584ba(0x1a8))['innerHTML']=remaining+brLine+dash,document['getElementById'](_0xe103ea['cqeQP'])['value']='',document[_0x5584ba(0x1c8)]('pricecopy')['disabled']=!![];return;}const _0xa1057e=_0x33bf4b[_0x5584ba(0x1a7)]>0x1?_0x33bf4b[0x1][_0x5584ba(0x1bf)]():dash,_0x5d14d6=_0x33bf4b['slice'](0x1)['join']('\x0a');document['getElementById']('textarea4')['value']=_0x5d14d6,document[_0x5584ba(0x1c8)](_0xe103ea['qyyjE'])[_0x5584ba(0x192)]=next+brLine+_0xa1057e,document['getElementById']('copy3')['innerHTML']=_0xe103ea['PeMWA'](copied+brLine,_0x319cae),document['getElementById'](_0x5584ba(0x1a8))['innerHTML']=remaining+brLine+_0x37f31b,sessionStorage['setItem']('countPrices',_0x37f31b);})['catch'](_0x1d308f=>{const _0x524be0=_0xa0d292;console[_0x524be0(0x1cc)]('Failed\x20to\x20copy\x20text:\x20',_0x1d308f);});}}function setElementValue(_0x259848,_0x25f518){const _0x38bc04=_0x4597a9;_0x259848[_0x38bc04(0x1c9)](_0xebce2b=>{const _0xd0d478=document['getElementById'](_0xebce2b);_0xd0d478&&(_0xd0d478['value']=_0x25f518);});}