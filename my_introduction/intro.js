var _ = require('ramda'),
	ljs = require('lambdajs').expose(global);

var MESSY_INTRODUCTION = 'H....i465, 4I65 A45m54 4Ta/%=%!(mas** A {T223232ec!+"!"!h Mat(=/(/%(/ch!+%/!%/ -Ma/%!/%!/ker. %!/%!=!/%!=W<íħ<ħork]Đđ][Đđ]ing %!/%=/=/with hI<>&#GH<<[<] FLÍŁÍĦŁY c-_,-,,-.??om111pan435435435ies=(/=(/=%())) al>@&#l ov111er th+%!+e wo11rl<>&d c000on¤¤¤necti!%%!+/ng sma797979rt g32143324423uysłŁłŁŁłŁ wit]đ]đĐ[]Đđh outs%//!%!!%anding op213141port[Đ]Đ[]]uniti[][][ħ[ħ[ħħ[ħ[ħes. S01010o i58568f yß$ß$ßß$$$ou... are b11or:::::::--ed w1111ith your j============/%!43/4+/ob..... Pin56546g Me! looki=%/=/(/=ng for a new challen&Đđ[Đđ][Đ][Đ]4643654434534ges..... Pin1111g M33333e! ge3333t7777ting fe&Đđ&@đĐ@Đđ[d up with your 11111lead333333er..... P}{}{}{}{}{}ing Me! like to give a tal+"%"%"k on somethi1112223242ng..... Ping Me! an+%+!%+"!%noyed by the bure;@[@>@aucr!%!+"%atic sys3333tem..... Ping Me! want more Bli+!+"!ngBli@[@[Đ@[Đ@Đ[ng..... Ping Me! OR j21313ust lik/=/%=e to dri@&@&#@nk a bełíħłħíłer a&&&&nd ha222ve f<<<<un..... ab@&@&#@solu34532523453425tely Ping Me33333! a@&@&#@s we11111ll a/%!/s Le34324324t me know i@&@&#@f you have any q@&@&#@uestion 53425325d/%!=%=%!o no;;;;;t hes/%!=%=%!ita[Đ][Đđ][Đđ]đĐ[]te t][đĐex¤¤t me ta][Đđmßßß¤as do][Đđ]đĐ[]t p**us48ki] at is]đĐ[]ee33q dßß¤ot co+"+"!+"" exclßß¤amation ma*rk H¤¤¤AVßß¤E an AW{]}ESOM3E Dß¤AY smißley T+a3maß¤s ';

var wordsLegnthGreaterThanFourteen = _.gt(14),
	wordsLengthLessThanOne = _.lte(1);

var filterWordsByLength = _.filter(_.where({
	length: _.both(wordsLengthLessThanOne, wordsLegnthGreaterThanFourteen)
}));

var splitTheContent = _.split(' ');

var alsoDoSomeOtherCosmetics = _.replace(/[^a-zA-Z ]/g, "");

var replaceThisAndThatToSeeSomeContent = _.replace(/\s+/g, " ");

var doLowerCaseEverything = _.toLower;

var stringTheMess = _.toString;


var MY_PITCH = compose(
	filterWordsByLength,
	splitTheContent,
	alsoDoSomeOtherCosmetics,
	replaceThisAndThatToSeeSomeContent,
	doLowerCaseEverything,
	stringTheMess
);

console.log((MY_PITCH(MESSY_INTRODUCTION) + ' from data to tada!!!!:) '));
