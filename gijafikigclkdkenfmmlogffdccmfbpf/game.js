//(function() {
//    function detectDevTools() {
//        // Kral
//        setTimeout(detectDevTools, 1000);
//    }
//
//    detectDevTools();
//
//    (function check() {
//        setTimeout(check, 1000);
//        debugger;
//    })();
//})();

eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c.toString(36);
  };
  if (!''.replace(/^/, String)) {
    while (c--) {
      d[c.toString(a)] = k[c] || c.toString(a);
    }
    k = [function (e) {
      return d[e];
    }];
    e = function () {
      return "\\w+";
    };
    c = 1;
  }
  ;
  while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp("\\b" + e(c) + "\\b", 'g'), k[c]);
    }
  }
  return p;
}("8.9('g',2(1){a(1.7===0){b()}});8.9('e',2(1){a(1.7===0){c()}});2 b(){6=d}2 c(){6=3}4 3=5;4 d=f;4 6=3;", 17, 17, '|event|function|normalSpeed|var||wormSpeed|button|document|addEventListener|if|speedUpWorm|slowDownWorm|increasedSpeed|mouseup|10|mousedown'.split('|'), 0, {}));
window['detectLog'] = null;
const _wrmxt = {
  'BETAisSkinCustom'(_0x1fec4d) {
    return "string" === typeof _0x1fec4d && /[a-zA-Z]/["test"](_0x1fec4d);
  },
  'testSkinCustom': function (_0x45e62d) {
    return _wrmxt["BETAisSkinCustom"](_0x45e62d) ? 0x22 || 0x21 : _0x45e62d;
  },
  'testSkinMod': function (_0x56342c) {
    return 0x18f <= _0x56342c && 0x3e7 > _0x56342c;
  },
  'testWear': function (_0x3676b7) {
    return 0x18f <= _0x3676b7 && 0x3e7 > _0x3676b7;
  },
  'isNumberValid': function (_0x5d770b) {
    return '' !== _0x5d770b && null !== _0x5d770b && undefined !== _0x5d770b && !isNaN(_0x5d770b);
  },
  'validInput': function (_0x9fdd65) {
    if (!_wrmxt["testSkinMod"](_0x9fdd65) && !_wrmxt["BETAisSkinCustom"](_0x9fdd65)) {
      return _0x9fdd65;
    }
    try {
      let _0x642615 = $("#inputReplaceSkin")['val']();
      return encodeURI(_wrmxt["isNumberValid"](_0x642615) ? _0x642615 : 0x23);
    } catch (_0x27b166) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};
var inputReplaceSkin = localStorage['getItem']("inputReplaceSkin");
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window['keyMove'] = 0x51;
var theoEvents = {
  'eventoPrincipal': null,
  'joystick': {
    'positionMode': 'L',
    'checked': true,
    'size': 0x5a,
    'mode': "dynamic",
    'position': {
      'left': "110px",
      'bottom': "110px"
    },
    'color': '#FF3B3B',
    'pxy': 0x6e
  }
};
var theoKzObjects = {
  'FB_UserID': '',
  'smoothCamera': 0.5,
  'eat_animation': 0.0025,
  'flag': "https://imgur.com/a/ukLHrwb.png",
  'PortionSize': localStorage['PotenciadorSize'] || 0x2,
  'PortionAura': localStorage['PotenciadorAura'] || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'ModeStremer': false,
  'ModeStremerbatop': false,
  'ModeStremeremoj': false,
  'ModeStremerheadshot': false,
  'ModeStremersaveheadshot': false,
  'arrow': false,
  'KeyCodeRespawn': localStorage["KeyRespawn"] || 0x52,
  'KeyCodeAutoMov': localStorage["KeyAutoMov"] || window["keyMove"],
  'AbilityZ': false,
  'FoodShadow': localStorage["ComidaShadow"] || 0x2,
  'FoodSize': localStorage['ComidaSize'] || 0x2,
  'headshot': 0x0,
  'visibleSkin': [],
  'pL': [],
  'gamePad': theoEvents['joystick'],
  'mobile': false,
  'loading': false,
  'kill': 0x0,
  'totalKills': 0x0,
  'totalHeadshots': 0x0,
  'adblock': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage['getItem']('SaveGameXT');
if (saveGameLocal && "null" !== saveGameLocal) {
  let t = JSON["parse"](saveGameLocal);
  for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects["loading"] = true;
const PhoneChecked = function () {
  let _0x595b53 = false;
  theoKzObjects["mobile"] = false;
  var _0x189eaf = navigator["userAgent"] || navigator["vendor"] || window["opera"];
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i["test"](_0x189eaf) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i["test"](_0x189eaf["substr"](0x0, 0x4))) {
    theoKzObjects['mobile'] = true;
    _0x595b53 = true;
  }
  return _0x595b53;
};
const RechekingPhone = function () {
  let _0x4c6b73 = false;
  var _0xdd1580 = navigator['userAgent'] || navigator["vendor"] || window['opera'];
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i["test"](_0xdd1580) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i["test"](_0xdd1580["substr"](0x0, 0x4))) {
    _0x4c6b73 = true;
  }
  return _0x4c6b73;
};
const loadJoy = function (_0x3661c6) {
  let _0x1e6a6e;
  try {
    console["log"](_0x3661c6);
    if (!theoKzObjects['gamePad']) {
      theoKzObjects['gamePad'] = theoEvents["joystick"];
    }
    if (RechekingPhone() && (_0x3661c6 || theoKzObjects['gamePad']['checked'])) {
      _0x1e6a6e = nipplejs['create'](theoKzObjects['gamePad']);
      _0x1e6a6e['on']("move", function (_0x25c769, _0x282a66) {
        theoEvents['eventoPrincipal']['sk'] = _0x282a66["angle"]["radian"] <= Math['PI'] ? -0x1 * _0x282a66["angle"]["radian"] : Math['PI'] - (_0x282a66["angle"]['radian'] - Math['PI']);
        console["log"](_0x282a66);
      });
    }
    return _0x1e6a6e;
  } catch (_0x19a903) {
    console["log"](_0x19a903);
  }
};
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
};
let servers = {
  'Api_listServer': []
};
async function loadUsers() {
  await fetch("https://wormatefriendsturkey.com/api/users.php")["then"](_0x24053d => _0x24053d['json']())["then"](_0x183973 => {
    if (_0x183973["success"]) {
      let _0x38bce1 = _0x183973["Users"];
      clientes["clientesActivos"] = _0x38bce1["filter"](_0x3178f0 => {
        return _0x3178f0['cliente_ID'];
      });
    } else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
      };
      alert("An error occurred while loading clients");
    }
  });
}
eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c.toString(36);
  };
  if (!''.replace(/^/, String)) {
    while (c--) {
      d[c.toString(a)] = k[c] || c.toString(a);
    }
    k = [function (e) {
      return d[e];
    }];
    e = function () {
      return "\\w+";
    };
    c = 1;
  }
  ;
  while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp("\\b" + e(c) + "\\b", 'g'), k[c]);
    }
  }
  return p;
}("w d c(){k{4 5=7 e(\"f://g.h/i/j.m\");4 2=7 5.n();o(2.l){0.8=2.0}q{r s 6(2.1||\"6 3 0\")}}t(1){u.1(\"9 1 a b 3 0: \"+1);0={8:[]};v(\"9 1 a b 3 p 0\")}}", 33, 33, 'servers|error|data|loading|const|response|Error|await|Api_listServer|An|occurred|while|loadServers|function|fetch|https|wormatefriendsturkey|com|api|server|try|success|php|json|if|the|else|throw|new|catch|console|alert|async'.split('|'), 0, {}));
loadUsers();
loadServers();
$(".store-view-cont")['append']("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  'fontStyle': {
    'name': new PIXI["TextStyle"]({
      'fill': "#FFFF00",
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#EFFA45",
      'fontFamily': 'yildo',
      'fontWeight': "bold"
    }),
    'blanco': new PIXI["TextStyle"]({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xc,
      'lineJoin': 'round',
      'stroke': "#FFF",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'morado': new PIXI["TextStyle"]({
      'align': "center",
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontFamily': "wormatefriends",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'morado1': new PIXI["TextStyle"]({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormatefriends",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'amarillo': new PIXI["TextStyle"]({
      'align': "center",
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': '#FAA845',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormatefriends",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'amarillo1': new PIXI["TextStyle"]({
      'align': "center",
      'fill': '#FFF',
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': '#FAA845',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormatefriends",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'anheadshot': new PIXI["TextStyle"]({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0x0,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': 'yildo',
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'keysColor': new PIXI["TextStyle"]({
      'align': "center",
      'fill': "#fff009",
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': '#fff009',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontWeight': "bold",
      'fontFamily': 'yildo',
      'wordWrap': true
    })
  }
};
ctx['clock'] = PIXI['Sprite']["fromImage"]("https://asserts.wormworld.io/images/clock.png");
ctx["clock"]["width"] = 0x64;
ctx["clock"]['height'] = 0x64;
ctx['clock']['x'] = -0x32;
ctx["clock"]['y'] = -0x32;


const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(app.view);

// GÃ¶rselleri oluÅŸturma ve boyutlandÄ±rma
ctx.hoisinhnhanh = PIXI.Sprite.from("https://i.imgur.com/QZfm7vv.png");
ctx.hoisinhnhanh.width = 23;
ctx.hoisinhnhanh.height = 23;

ctx.quaytron = PIXI.Sprite.from("https://i.imgur.com/a7lVOy5.png");
ctx.quaytron.width = 23;
ctx.quaytron.height = 23;

// GÃ¶rselleri sahneye ekleme
app.stage.addChild(ctx.hoisinhnhanh);
app.stage.addChild(ctx.quaytron);

// GÃ¶rsellerin konumlarÄ±nÄ± ayarlayan fonksiyon
function updateSpritePositions() {
    const offsetX = 300; // Sola kaydÄ±rma mesafesi
    const topMargin = -50; // YukarÄ±dan boÅŸluk (yukarÄ± kaydÄ±rmak iÃ§in negatif deÄŸer)

    ctx.hoisinhnhanh.x = window.innerWidth - ctx.hoisinhnhanh.width - offsetX;
    ctx.hoisinhnhanh.y = topMargin;

    ctx.quaytron.x = ctx.hoisinhnhanh.x - ctx.quaytron.width - 10;
    ctx.quaytron.y = topMargin;
}

// BaÅŸlangÄ±Ã§ta konumlarÄ± ayarla
updateSpritePositions();

// Pencere yeniden boyutlandÄ±rÄ±ldÄ±ÄŸÄ±nda konumlarÄ± gÃ¼ncelle
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    updateSpritePositions();
});









ctx['value_server'] = new PIXI["Text"]("WFT", ctx["fontStyle"]["name"]);
ctx['value_server']['x'] = 0x19;
ctx["value_server"]['y'] = -0x12;
ctx["label_hs"] = new PIXI["Text"]('HS', ctx["fontStyle"]['amarillo']);
ctx["value1_hs"] = new PIXI["Text"]('0', ctx['fontStyle']["amarillo"]);
ctx["label_kill"] = new PIXI["Text"]('KL', ctx['fontStyle']["morado"]);
ctx["value1_kill"] = new PIXI["Text"]('0', ctx['fontStyle']["morado"]);
if (theoKzObjects["ModeStremersaveheadshot"]) {
  ctx['value2_hs'] = new PIXI["Text"]('', ctx['fontStyle']["amarillo1"]);
  ctx["value2_kill"] = new PIXI['Text']('', ctx["fontStyle"]['morado1']);
} else {
  ctx["value2_hs"] = new PIXI["Text"]('', ctx['fontStyle']["amarillo1"]);
  ctx["value2_kill"] = new PIXI["Text"]('', ctx["fontStyle"]['morado1']);
}
;
ctx["label_hs"]['x'] = 0x41;
ctx["label_hs"]['y'] = 0x64;
ctx["label_kill"]['x'] = 0xf;
ctx["label_kill"]['y'] = 0x64;
ctx["value1_hs"]['x'] = 0x41;
ctx["value1_hs"]['y'] = 0x74;
ctx["value1_kill"]['x'] = 0xf;
ctx["value1_kill"]['y'] = 0x74;
ctx['value2_hs']['x'] = 0x41;
ctx['value2_hs']['y'] = 0x85;
ctx['value2_kill']['x'] = 0xf;
ctx["value2_kill"]['y'] = 0x85;
ctx["containerCountInfo"] = new PIXI["Container"]();
ctx["containerCountInfo"]['x'] = -0x2d;
ctx["containerCountInfo"]['y'] = -0x34;
ctx["containerCountInfo"]["addChild"](ctx["value_server"]);
ctx["containerCountInfo"]['addChild'](ctx['label_hs']);
ctx["containerCountInfo"]['addChild'](ctx["value1_hs"]);
ctx["containerCountInfo"]["addChild"](ctx["value2_hs"]);
ctx["containerCountInfo"]['addChild'](ctx["label_kill"]);
ctx["containerCountInfo"]["addChild"](ctx["value1_kill"]);
ctx["containerCountInfo"]["addChild"](ctx["value2_kill"]);
ctx['imgServerbase'] = PIXI['Texture']["fromImage"]("https://imgur.com/a/ukLHrwb.png");
ctx["borderurl"] = PIXI["Texture"]["fromImage"]("https://imgur.com/a/ukLHrwb.png");
ctx["onclickServer"] = PIXI["Texture"]["fromImage"](theoKzObjects["flag"]);
ctx["containerImgS"] = new PIXI["Sprite"](ctx['imgServerbase']);
ctx["containerImgS"]["anchor"]["set"](0.5);
ctx["containerImgS"]['x'] = 0x0;
ctx["containerImgS"]['y'] = -0xa;
ctx["containerImgS"]["width"] = 0x19;
ctx["containerImgS"]["height"] = 0x14;
ctx['borderImg'] = new PIXI["Sprite"](ctx["borderurl"]);
ctx["borderImg"]["anchor"]['set'](0.5);
ctx["borderImg"]['x'] = -0x2;
ctx["borderImg"]['y'] = 0x4e;
ctx["borderImg"]["width"] = 0x6e;
ctx["borderImg"]["height"] = 0x3c;
ctx["setServer"] = function (_0x21c7e6) {
  ctx['value_server']["text"] = _0x21c7e6 || "WFT";
};
ctx["setCountGame"] = function (_0x52b1cd, _0x2ba13d, _0x496e06, _0x4cfc32) {
  ctx["value1_hs"]["text"] = _0x2ba13d;
  ctx['value1_kill']['text'] = _0x52b1cd;
  ;
  if (theoKzObjects["ModeStremersaveheadshot"]) {
    ctx["value2_hs"]["text"] = _0x4cfc32;
    ctx["value2_kill"]["text"] = _0x496e06;
  } else {}
  ;
};
'use strict';
var _typeof = "function" == typeof Symbol && 'symbol' == typeof Symbol["iterator"] ? function (_0x4db28a) {
  return typeof _0x4db28a;
} : function (_0x3ee188) {
  return _0x3ee188 && "function" == typeof Symbol && _0x3ee188["constructor"] === Symbol && _0x3ee188 !== Symbol['prototype'] ? "symbol" : typeof _0x3ee188;
};
var GoogleAuth;
!function () {
  try {
    console["log"](function (_0x31aba4, _0x1f806a) {
      for (var _0x39254c = 0x0; _0x39254c < _0x1f806a["length"]; _0x39254c += 0x2) {
        _0x31aba4 = _0x31aba4["replaceAll"](_0x1f806a[_0x39254c], _0x1f806a[_0x39254c + 0x1]);
      }
      return _0x31aba4;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', 'hhhh', 'Q', "ssss", 'M', "mmm", 'Y', 'yyy', 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', '  ', 'N', "\n"]));
  } catch (_0x4df4cf) {}
}();
window["addEventListener"]('load', function () {
  function _0x104698() {
    (function (_0x257527, _0xa11417, _0x2ea1f1) {
      function _0x5d1690(_0x22aecd, _0x2be05b) {
        return (undefined === _0x22aecd ? 'undefined' : _typeof(_0x22aecd)) === _0x2be05b;
      }
      function _0x30389c() {
        return "function" != typeof _0xa11417["createElement"] ? _0xa11417['createElement'](arguments[0x0]) : _0x2e68c7 ? _0xa11417["createElementNS"]['call'](_0xa11417, "http://www.w3.org/2000/svg", arguments[0x0]) : _0xa11417["createElement"]["apply"](_0xa11417, arguments);
      }
      var _0x41ff7d = [];
      var _0x27a4ce = [];
      var _0x1211ff = {
        '_version': "3.3.1",
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x1c9414, _0x53850c) {
          var _0x45f5d7 = this;
          setTimeout(function () {
            _0x53850c(_0x45f5d7[_0x1c9414]);
          }, 0x0);
        },
        'addTest': function (_0x21f1ad, _0x2e6f08, _0x49ff44) {
          _0x27a4ce["push"]({
            'name': _0x21f1ad,
            'fn': _0x2e6f08,
            'options': _0x49ff44
          });
        },
        'addAsyncTest': function (_0x49b270) {
          _0x27a4ce["push"]({
            'name': null,
            'fn': _0x49b270
          });
        }
      };
      var _0x38645f = function () {};
      _0x38645f["prototype"] = _0x1211ff;
      _0x38645f = new _0x38645f();
      var _0x4be9e4 = false;
      try {
        _0x4be9e4 = "WebSocket" in _0x257527 && 0x2 === _0x257527["WebSocket"]['CLOSING'];
      } catch (_0x40231b) {}
      _0x38645f["addTest"]('websockets', _0x4be9e4);
      var _0x102a00 = _0xa11417["documentElement"];
      var _0x2e68c7 = "svg" === _0x102a00["nodeName"]['toLowerCase']();
      _0x38645f["addTest"]("canvas", function () {
        var _0x20c845 = _0x30389c("canvas");
        return !(!_0x20c845["getContext"] || !_0x20c845['getContext']('2d'));
      });
      _0x38645f["addTest"]('canvastext', function () {
        return false !== _0x38645f["canvas"] && "function" == typeof _0x30389c("canvas")["getContext"]('2d')["fillText"];
      });
      (function () {
        var _0x66b476;
        var _0x3a11e0;
        var _0x69ada;
        var _0x14e630;
        var _0x5d5b1b;
        var _0x2f02c0;
        var _0x3ba7be;
        for (var _0x3db66a in _0x27a4ce) if (_0x27a4ce["hasOwnProperty"](_0x3db66a)) {
          _0x66b476 = [];
          _0x3a11e0 = _0x27a4ce[_0x3db66a];
          if (_0x3a11e0["name"] && (_0x66b476['push'](_0x3a11e0["name"]["toLowerCase"]()), _0x3a11e0["options"] && _0x3a11e0["options"]["aliases"] && _0x3a11e0["options"]["aliases"]["length"])) {
            for (_0x69ada = 0x0; _0x69ada < _0x3a11e0["options"]["aliases"]["length"]; _0x69ada++) {
              _0x66b476["push"](_0x3a11e0["options"]['aliases'][_0x69ada]['toLowerCase']());
            }
          }
          _0x14e630 = _0x5d1690(_0x3a11e0['fn'], "function") ? _0x3a11e0['fn']() : _0x3a11e0['fn'];
          for (_0x5d5b1b = 0x0; _0x5d5b1b < _0x66b476["length"]; _0x5d5b1b++) {
            _0x2f02c0 = _0x66b476[_0x5d5b1b];
            _0x3ba7be = _0x2f02c0["split"]('.');
            if (0x1 === _0x3ba7be['length']) {
              _0x38645f[_0x3ba7be[0x0]] = _0x14e630;
            } else {
              if (!(!_0x38645f[_0x3ba7be[0x0]] || _0x38645f[_0x3ba7be[0x0]] instanceof Boolean)) {
                _0x38645f[_0x3ba7be[0x0]] = new Boolean(_0x38645f[_0x3ba7be[0x0]]);
              }
              _0x38645f[_0x3ba7be[0x0]][_0x3ba7be[0x1]] = _0x14e630;
            }
            _0x41ff7d["push"]((_0x14e630 ? '' : "no-") + _0x3ba7be["join"]('-'));
          }
        }
      })();
      (function (_0x28a006) {
        var _0x4ceb9c = _0x102a00["className"];
        var _0xad2a55 = _0x38645f["_config"]["classPrefix"] || '';
        if (_0x2e68c7) {
          _0x4ceb9c = _0x4ceb9c["baseVal"];
        }
        if (_0x38645f['_config']["enableJSClass"]) {
          var _0x1cb0d7 = new RegExp("(^|\\s)" + _0xad2a55 + "no-js(\\s|$)");
          _0x4ceb9c = _0x4ceb9c["replace"](_0x1cb0d7, '$1' + _0xad2a55 + "js$2");
        }
        if (_0x38645f["_config"]["enableClasses"]) {
          _0x4ceb9c += ' ' + _0xad2a55 + _0x28a006["join"](' ' + _0xad2a55);
          if (_0x2e68c7) {
            _0x102a00['className']["baseVal"] = _0x4ceb9c;
          } else {
            _0x102a00["className"] = _0x4ceb9c;
          }
        }
      })(_0x41ff7d);
      delete _0x1211ff['addTest'];
      delete _0x1211ff['addAsyncTest'];
      for (var _0x322a02 = 0x0; _0x322a02 < _0x38645f['_q']["length"]; _0x322a02++) {
        _0x38645f['_q'][_0x322a02]();
      }
      _0x257527["Modernizr"] = _0x38645f;
    })(window, document);
    return Modernizr["websockets"] && Modernizr["canvas"] && Modernizr["canvastext"];
  }
  function _0x15e089(_0x425074, _0x2109da, _0x18022b) {
    const _0x2267df = [0x26, 0x26, 0x26, 0x78, 0x26, 0x19, 0x26];
    const _0x7f2df3 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let _0x2e9e27 = _0x2267df[_0x2109da] - parseInt((0.99 == _0x18022b ? 0x1 : _0x18022b) * _0x2267df[_0x2109da] / 0x1);
    const _0x394d6f = new PIXI["TextStyle"]({
      'align': "center",
      'fill': _0x7f2df3[_0x2109da],
      'fontSize': 0x19,
      'lineJoin': "round",
      'whiteSpace': "normal",
      'wordWrap': true,
      'fontFamily': "wormatefriends",
      'fontWeight': 'bold'
    });
    let _0x46f97c = 'pwr_clock' + _0x2109da;
    if (!pwrups[_0x46f97c] && _0x2267df[_0x2109da] === _0x2e9e27) {
      pwrups[_0x46f97c] = new PIXI["Text"](_0x2e9e27, _0x394d6f);
      pwrups[_0x46f97c]['y'] = 0x3d;
      _0x425074['Tf'][_0x2109da]["addChild"](pwrups[_0x46f97c]);
    }
    if (pwrups[_0x46f97c]) {
      pwrups[_0x46f97c]['x'] = _0x2e9e27 >= 0x64 ? 0xb : _0x2e9e27 >= 0xa ? 0x12 : 0x1a;
      pwrups[_0x46f97c]["text"] = _0x2e9e27;
      if (_0x2e9e27 === 0x0) {
        delete pwrups[_0x46f97c];
      }
    }
  }
  document["getElementById"]("game-wrap")["style"]['display'] = "block";
  if (!_0x104698()) {
    return void (document['getElementById']("error-view")["style"]["display"] = "block");
  }
  !function () {
    function _0x2a65a9() {
      return window["anApp"] = _0x5a818;
    }
    function _0x5ab50d(_0x37fcc0) {
      const _0x36cb59 = _0x37fcc0 + '=';
      const _0x3aacae = document['cookie']["split"](';');
      for (let _0x222319 = 0x0; _0x222319 < _0x3aacae["length"]; _0x222319++) {
        let _0x5a7d60 = _0x3aacae[_0x222319];
        while (_0x5a7d60['charAt'](0x0) === ' ') {
          _0x5a7d60 = _0x5a7d60["substring"](0x1);
        }
        if (_0x5a7d60['indexOf'](_0x36cb59) === 0x0) {
          return _0x5a7d60["substring"](_0x36cb59["length"], _0x5a7d60["length"]);
        }
      }
      return '';
    }
    function _0x59c0bc(_0x19dc87, _0xe42a59, _0x27289a) {
      var _0x3d416b = new Date();
      _0x3d416b["setTime"](_0x3d416b["getTime"]() + 0x5265c00 * _0x27289a);
      var _0x5bb9b3 = "expires=" + _0x3d416b["toUTCString"]();
      document['cookie'] = _0x19dc87 + '=' + _0xe42a59 + '; ' + _0x5bb9b3 + "; path=/";
    }
    function _0x1e75e8(_0x482452) {
      return window["I18N_MESSAGES"][_0x482452];
    }
    function _0x1fd68a(_0x16c5d8) {
      return _0x16c5d8[_0x1b2237] ? _0x16c5d8[_0x1b2237] : _0x16c5d8['en'] ? _0x16c5d8['en'] : _0x16c5d8['x'];
    }
    function _0x5f5241(_0x274b0b) {
      var _0x7a20b7 = (Math["floor"](_0x274b0b) % 0x3c)["toString"]();
      var _0x1a6236 = (Math["floor"](_0x274b0b / 0x3c) % 0x3c)["toString"]();
      var _0x21cdf6 = (Math['floor'](_0x274b0b / 0xe10) % 0x18)["toString"]();
      var _0x407888 = Math["floor"](_0x274b0b / 0x15180)['toString']();
      var _0x476d63 = _0x1e75e8("util.time.days");
      var _0x427134 = _0x1e75e8("util.time.hours");
      var _0x3d29c7 = _0x1e75e8("util.time.min");
      var _0x27360f = _0x1e75e8('util.time.sec');
      return _0x407888 > 0x0 ? _0x407888 + ' ' + _0x476d63 + ' ' + _0x21cdf6 + ' ' + _0x427134 + ' ' + _0x1a6236 + ' ' + _0x3d29c7 + ' ' + _0x7a20b7 + ' ' + _0x27360f : _0x21cdf6 > 0x0 ? _0x21cdf6 + ' ' + _0x427134 + ' ' + _0x1a6236 + ' ' + _0x3d29c7 + ' ' + _0x7a20b7 + ' ' + _0x27360f : _0x1a6236 > 0x0 ? _0x1a6236 + ' ' + _0x3d29c7 + ' ' + _0x7a20b7 + ' ' + _0x27360f : _0x7a20b7 + ' ' + _0x27360f;
    }
    function _0x26ca7(_0x26de69) {
      return _0x26de69["includes"]("href") ? _0x26de69['replaceAll']("href", "target=\"_black\" href") : _0x26de69;
    }
    function _0x125754(_0x302db9, _0x548c6b, _0x540e56) {
      var _0x5aec0f = document["createElement"]("script");
      var _0xa66390 = true;
      if (_0x548c6b) {
        _0x5aec0f['id'] = _0x548c6b;
      }
      _0x5aec0f["async"] = "async";
      _0x5aec0f["type"] = "text/javascript";
      _0x5aec0f['src'] = _0x302db9;
      if (_0x540e56) {
        _0x5aec0f["onload"] = _0x5aec0f["onreadystatechange"] = function () {
          _0xa66390 = false;
          try {
            _0x540e56();
          } catch (_0x1adf92) {
            console["log"](_0x1adf92);
          }
          _0x5aec0f["onload"] = _0x5aec0f["onreadystatechange"] = null;
        };
      }
      (document["head"] || document["getElementsByTagName"]("head")[0x0])["appendChild"](_0x5aec0f);
    }
    function _0x56cc5d(_0x6dfcdd, _0x4117a4) {
      _0x4117a4['prototype'] = Object['create'](_0x6dfcdd['prototype']);
      _0x4117a4["prototype"]["constructor"] = _0x4117a4;
      _0x4117a4["parent"] = _0x6dfcdd;
      return _0x4117a4;
    }
    function _0x3e51f2(_0x247887) {
      _0x247887 %= _0x3fc009;
      return _0x247887 < 0x0 ? _0x247887 + _0x3fc009 : _0x247887;
    }
    function _0x3b2cf9(_0x516451, _0x590a43, _0x8fb569) {
      return _0x513ec7(_0x8fb569, _0x516451, _0x590a43);
    }
    function _0x513ec7(_0x3be1ab, _0x59d0b5, _0x25c70b) {
      return _0x3be1ab > _0x25c70b ? _0x25c70b : _0x3be1ab < _0x59d0b5 ? _0x59d0b5 : Number["isFinite"](_0x3be1ab) ? _0x3be1ab : 0.5 * (_0x59d0b5 + _0x25c70b);
    }
    function _0x36cfb7(_0x5ba505, _0x2e2bb8, _0x40fdf2, _0x1502a1) {
      return _0x2e2bb8 > _0x5ba505 ? Math['min'](_0x2e2bb8, _0x5ba505 + _0x40fdf2 * _0x1502a1) : Math['max'](_0x2e2bb8, _0x5ba505 - _0x40fdf2 * _0x1502a1);
    }
    function _0x57cd84(_0x4f2dc2, _0x1b9ae7, _0x2b6726, _0x3f6694, _0x5130be) {
      return _0x1b9ae7 + (_0x4f2dc2 - _0x1b9ae7) * Math["pow"](0x1 - _0x3f6694, _0x2b6726 / _0x5130be);
    }
    function _0x26f33f(_0x5e18dc, _0x1d4dba, _0x193750) {
      return _0x5e18dc * (0x1 - _0x193750) + _0x1d4dba * _0x193750;
    }
    function _0x47e910(_0x11227e, _0x575d73, _0x5cce05, _0x4ad6f9) {
      var _0x908c0c = _0x575d73 + _0x4ad6f9;
      if (null == _0x11227e) {
        throw new TypeError("this is null or not defined");
      }
      var _0x26f8fb = _0x11227e['length'] >>> 0x0;
      var _0xa8c3f5 = _0x5cce05 >> 0x0;
      var _0x5c4208 = _0xa8c3f5 < 0x0 ? Math['max'](_0x26f8fb + _0xa8c3f5, 0x0) : Math['min'](_0xa8c3f5, _0x26f8fb);
      var _0x4696ac = _0x575d73 >> 0x0;
      var _0xe199b4 = _0x4696ac < 0x0 ? Math['max'](_0x26f8fb + _0x4696ac, 0x0) : Math["min"](_0x4696ac, _0x26f8fb);
      var _0x9d789c = undefined === _0x908c0c ? _0x26f8fb : _0x908c0c >> 0x0;
      var _0x2b807c = _0x9d789c < 0x0 ? Math['max'](_0x26f8fb + _0x9d789c, 0x0) : Math["min"](_0x9d789c, _0x26f8fb);
      var _0x58cc36 = Math["min"](_0x2b807c - _0xe199b4, _0x26f8fb - _0x5c4208);
      var _0x25e26e = 0x1;
      for (_0xe199b4 < _0x5c4208 && _0x5c4208 < _0xe199b4 + _0x58cc36 && (_0x25e26e = -0x1, _0xe199b4 += _0x58cc36 - 0x1, _0x5c4208 += _0x58cc36 - 0x1); _0x58cc36 > 0x0;) {
        if (_0xe199b4 in _0x11227e) {
          _0x11227e[_0x5c4208] = _0x11227e[_0xe199b4];
        } else {
          delete _0x11227e[_0x5c4208];
        }
        _0xe199b4 += _0x25e26e;
        _0x5c4208 += _0x25e26e;
        _0x58cc36--;
      }
      return _0x11227e;
    }
    function _0x21385c(_0x1e1d53) {
      if (null != _0x1e1d53['parent']) {
        _0x1e1d53["parent"]["removeChild"](_0x1e1d53);
      }
    }
    function _0x4779db(_0x1a89c9) {
      return _0x1a89c9[parseInt(Math['random']() * _0x1a89c9['length'])];
    }
    function _0x35efd8() {
      return Math["random"]()["toString"](0x24)["substring"](0x2, 0xf);
    }
    function _0x3a35eb(_0x170399, _0x2f3a1a, _0x16e230) {
      var _0x4ab56b = (0x1 - Math["abs"](0x2 * _0x16e230 - 0x1)) * _0x2f3a1a;
      var _0x2a3dd7 = _0x4ab56b * (0x1 - Math["abs"](_0x170399 / 0x3c % 0x2 - 0x1));
      var _0x410c70 = _0x16e230 - _0x4ab56b / 0x2;
      return 0x0 <= _0x170399 && _0x170399 < 0x3c ? [_0x410c70 + _0x4ab56b, _0x410c70 + _0x2a3dd7, _0x410c70 + 0x0] : 0x3c <= _0x170399 && _0x170399 < 0x78 ? [_0x410c70 + _0x2a3dd7, _0x410c70 + _0x4ab56b, _0x410c70 + 0x0] : 0x78 <= _0x170399 && _0x170399 < 0xb4 ? [_0x410c70 + 0x0, _0x410c70 + _0x4ab56b, _0x410c70 + _0x2a3dd7] : 0xb4 <= _0x170399 && _0x170399 < 0xf0 ? [_0x410c70 + 0x0, _0x410c70 + _0x2a3dd7, _0x410c70 + _0x4ab56b] : 0xf0 <= _0x170399 && _0x170399 < 0x12c ? [_0x410c70 + _0x2a3dd7, _0x410c70 + 0x0, _0x410c70 + _0x4ab56b] : [_0x410c70 + _0x4ab56b, _0x410c70 + 0x0, _0x410c70 + _0x2a3dd7];
    }
    function _0x28f2bb() {
      function _0x3a00dd() {
        let _0x5f4111 = theoKzObjects["adblock"] ? 0x1 : 0x5;
        $("#adbl-1")["text"](_0x1e75e8("index.game.antiadblocker.msg1"));
        $('#adbl-2')["text"](_0x1e75e8("index.game.antiadblocker.msg2"));
        $('#adbl-3')["text"](_0x1e75e8("index.game.antiadblocker.msg3"));
        $('#adbl-4')["text"](_0x1e75e8("index.game.antiadblocker.msg4")["replace"]('{0}', 0xa));
        $("#adbl-continue span")["text"](_0x1e75e8("index.game.antiadblocker.continue"));
        $("#adbl-continue")["hide"]();
        $("#JDHnkHtYwyXyVgG9")['fadeIn'](0x1f4);
        var _0x1abe71 = _0x5f4111;
        for (var _0x1dd6d3 = 0x0; _0x1dd6d3 < _0x5f4111; _0x1dd6d3++) {
          setTimeout(function () {
            _0x1abe71--;
            $("#adbl-4")["text"](_0x1e75e8("index.game.antiadblocker.msg4")["replace"]("{0}", _0x1abe71));
            if (0x0 === _0x1abe71) {
              console['log']("aipAABC");
              try {
                ga("send", 'event', "antiadblocker", window['runtimeHash'] + "_complete");
              } catch (_0x3825de) {}
              $('#adbl-continue')["fadeIn"](0xc8);
            }
          }, 0x3e8 * (_0x1dd6d3 + 0x1));
        }
      }
      var _0xd5d3e9 = false;
      var _0x2780a1 = function () {};
      var _0x45aa0c = {};
      $('#adbl-continue')['click'](function () {
        $("#JDHnkHtYwyXyVgG9")["fadeOut"](0x1f4);
        _0x2780a1(false);
      });
      _0x45aa0c['a'] = function (_0x55688d) {
        _0x2780a1 = _0x55688d;
        if (!_0xd5d3e9) {
          try {
            aiptag['cmd']["player"]['push'](function () {
              aiptag["adplayer"] = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document["getElementById"]("1eaom01c3pxu9wd3");
                },
                'AIP_COMPLETE': function (_0x5120a8) {
                  console["log"]("aipC");
                  _0x2780a1(true);
                  $("#1eaom01c3pxu9wd3")["hide"]();
                  $("#JDHnkHtYwyXyVgG9")["hide"]();
                  try {
                    ga("send", "event", "preroll", window["runtimeHash"] + "_complete");
                  } catch (_0x57fbf9) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0xd5d3e9 = true;
          } catch (_0x17269f) {}
        }
      };
      _0x45aa0c['b'] = function () {
        if (undefined !== aiptag["adplayer"]) {
          console["log"]('aipS');
          try {
            ga("send", "event", "preroll", window["runtimeHash"] + "_request");
          } catch (_0x235b19) {}
          _0x3a00dd();
        } else {
          console["log"]("aipAABS");
          try {
            ga('send', "event", "antiadblocker", window["runtimeHash"] + "_start");
          } catch (_0x2fc7c8) {}
          _0x3a00dd();
        }
      };
      return _0x45aa0c;
    }
    function _0x4632b8(_0x5cc8df, _0x41c1d3) {
      var _0x1eefbd = $('#' + _0x5cc8df);
      var _0x502463 = {};
      var _0x12a375 = false;
      _0x502463['a'] = function () {
        if (!_0x12a375) {
          _0x1eefbd["empty"]();
          _0x1eefbd["append"]("<div id='" + _0x41c1d3 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window["runtimeHash"] + "_display");
            } catch (_0x168a03) {}
            aiptag["cmd"]["display"]["push"](function () {
              aipDisplayTag["display"](_0x41c1d3);
            });
            _0x12a375 = true;
          } catch (_0x2893af) {}
        }
      };
      _0x502463['c'] = function () {
        try {
          try {
            ga("send", "event", "banner", window["runtimeHash"] + "_refresh");
          } catch (_0x2c8626) {}
          aiptag["cmd"]["display"]["push"](function () {
            aipDisplayTag["display"](_0x41c1d3);
          });
        } catch (_0x25bf12) {}
      };
      return _0x502463;
    }
    function _0x49b89b() {
      function _0x5a4627(_0x44e77d) {
        var _0x548584 = _0x44e77d + 0x25 * Math["floor"](0xffff * Math["random"]());
        _0x59c0bc(_0x1cdd73['d'], _0x548584, 0x1e);
      }
      function _0x1d77c0() {
        return parseInt(_0x5ab50d(_0x1cdd73['d'])) % 0x25;
      }
      return function () {
        var _0x355ea1 = _0x1d77c0();
        console["log"]("init1 pSC: " + _0x355ea1);
        if (!(_0x355ea1 >= 0x0 && _0x355ea1 < _0x34c9e9['e'])) {
          _0x355ea1 = Math["max"](0x0, _0x34c9e9['e'] - 0x2);
          console['log']("init2 pSC: " + _0x355ea1);
        }
        var _0x3e8696 = {};
        _0x5a818 = _0x3e8696;
        _0x3e8696['f'] = _0x34c9e9;
        _0x3e8696['g'] = false;
        _0x3e8696['i'] = Date["now"]();
        _0x3e8696['j'] = 0x0;
        _0x3e8696['k'] = 0x0;
        _0x3e8696['l'] = null;
        _0x3e8696['m'] = _0x7ce184;
        _0x3e8696['n'] = _0x1b2237;
        _0x3e8696['o'] = null;
        _0x3e8696['p'] = null;
        _0x3e8696['q'] = null;
        _0x3e8696['r'] = null;
        _0x3e8696['s'] = null;
        _0x3e8696['t'] = null;
        _0x3e8696['u'] = null;
        try {
          if (navigator && navigator["geolocation"]) {
            navigator['geolocation']["getCurrentPosition"](function (_0x24a7c3) {
              if (undefined !== _0x24a7c3["coords"]) {
                var _0x13425f = _0x24a7c3["coords"];
                if (undefined !== _0x13425f["latitude"] && undefined !== _0x13425f["longitude"]) {
                  _0x3e8696['l'] = _0x24a7c3;
                }
              }
            }, function (_0x1ceb9c) {});
          }
        } catch (_0x25d8bb) {}
        _0x3e8696['v'] = function () {
          _0x3e8696['p'] = new _0x1583e9();
          _0x3e8696['q'] = new _0x1f78d7();
          _0x3e8696['r'] = new _0x4eafb1();
          _0x3e8696['s'] = new _0x3ddd94();
          _0x3e8696['t'] = new _0x475e87();
          _0x3e8696['u'] = new _0x5dd50f();
          _0x3e8696['o'] = new _0x137ad4();
          _0x3e8696['o']['z'] = new _0x526141(_0x3e8696['o']);
          _0x3e8696['a']();
        };
        _0x3e8696['a'] = function () {
          try {
            ga('send', 'event', "app", window["runtimeHash"] + "_init");
          } catch (_0x3ba37d) {}
          _0x3e8696['o']['A'] = function () {
            _0x3e8696['o']['B']();
          };
          _0x3e8696['o']['C'] = function () {
            var _0xba0f1a = _0x3e8696['s']['F']['D']();
            try {
              ga('send', "event", "game", window['runtimeHash'] + '_start', _0xba0f1a);
            } catch (_0x17a1ce) {}
            _0x3e8696['r']['G'](_0x4eafb1["AudioState"]['H']);
            _0x3e8696['s']['I'](_0x3e8696['s']['H']['J']());
          };
          _0x3e8696['o']['B'] = function () {
            try {
              ga("send", "event", "game", window["runtimeHash"] + "_end");
            } catch (_0x45e6be) {}
            if ($("body")["height"]() >= 0x1ae) {
              _0x3e8696['f']['K']['c']();
            }
            _0x3e8696['p']['L']();
            (function () {
              var _0xeaf32b = Math["floor"](_0x3e8696['o']['N']['M']);
              var _0x185c5d = _0x3e8696['o']['O'];
              if (_0x3e8696['u']['P']()) {
                _0x3e8696['u']['Q'](function () {
                  _0x3e8696['R'](_0xeaf32b, _0x185c5d);
                });
              } else {
                _0x3e8696['R'](_0xeaf32b, _0x185c5d);
              }
            })();
          };
          _0x3e8696['o']['S'] = function (_0x55a4b9) {
            _0x55a4b9(_0x3e8696['s']['H']['T'](), _0x3e8696['s']['H']['U']());
          };
          _0x3e8696['u']['V'](function () {
            if (_0x3e8696['p']['W']) {
              _0x3e8696['r']['G'](_0x4eafb1["AudioState"]['F']);
              _0x3e8696['s']['I'](_0x3e8696['s']['F']);
            }
            if (_0x3e8696['u']['P']()) {
              try {
                var _0x48a1d7 = _0x3e8696['u']['X']();
                ga('set', "userId", _0x48a1d7);
              } catch (_0x3160a7) {}
            }
            if (_0x3e8696['Y']() && _0x3e8696['u']['P']() && !_0x3e8696['u']['Z']()) {
              _0x3e8696['$'](false, false);
              _0x3e8696['s']['aa']['_'](new _0x98bf64());
            } else {
              _0x3e8696['ba'](true);
            }
          });
          _0x3e8696['p']['ca'](function () {
            _0x3e8696['r']['G'](_0x4eafb1['AudioState']['F']);
            _0x3e8696['s']['I'](_0x3e8696['s']['F']);
          });
          _0x3e8696['q']['a'](function () {
            _0x3e8696['o']['a']();
            _0x3e8696['r']['a']();
            _0x3e8696['s']['a']();
            _0x3e8696['t']['a']();
            _0x3e8696['p']['a']();
            _0x3e8696['u']['a']();
            if (_0x3e8696['Y']() && !_0x3e8696['Z']()) {
              _0x3e8696['s']['aa']['_'](new _0x98bf64());
            } else {
              _0x3e8696['ba'](true);
            }
          });
        };
        _0x3e8696['da'] = function (_0x3a4a2f) {
          if (_0x3e8696['u']['P']()) {
            var _0x143b17 = _0x3e8696['u']['ea']();
            $['get'](_0x1b9f2f + "/pub/wuid/" + _0x143b17 + "/consent/change?value=" + encodeURI(_0x3a4a2f), function (_0x44e250) {});
          }
        };
        _0x3e8696['fa'] = function (_0x47517c) {
          var _0x4bfe46 = _0x3e8696['u']['ea']();
          var _0x2187b6 = _0x3e8696['s']['F']['D']();
          var _0x47c057 = _0x3e8696['s']['F']['ga']();
          var _0x48d615 = _0x3e8696['t']['ha'](_0x54cad9['ia']);
          var _0x5802f7 = _0x3e8696['t']['ha'](_0x54cad9['ja']);
          var _0x2b104c = _0x3e8696['t']['ha'](_0x54cad9['ka']);
          var _0x85dec6 = _0x3e8696['t']['ha'](_0x54cad9['la']);
          var _0x5d2e6d = _0x3e8696['t']['ha'](_0x54cad9['ma']);
          var _0x342335 = 0x0;
          if (null != _0x3e8696['l']) {
            var _0x117a58 = _0x3e8696['l']["coords"]['latitude'];
            var _0x3de075 = _0x3e8696['l']["coords"]["longitude"];
            _0x342335 = 0x1 | Math["max"](0x0, Math["min"](0x7fff, (_0x117a58 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math["max"](0x0, Math["min"](0xffff, (_0x3de075 + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          _wrmxt["testSkinCustom"](_0x48d615);
          let _0x28bb40 = 'x' + (0x270f < _0x48d615 ? "0000" : _0x48d615["toString"]()["padStart"](0x4, 0x0)) + (0x3e7 < _0x5d2e6d ? "000" : _0x5d2e6d['toString']()["padStart"](0x3, 0x0)) + (0x3e7 < _0x5802f7 ? "000" : _0x5802f7["toString"]()["padStart"](0x3, 0x0)) + (0x3e7 < _0x2b104c ? "000" : _0x2b104c['toString']()["padStart"](0x3, 0x0));
          _0x47c057 = (0x20 <= _0x47c057["length"] ? _0x47c057['substr'](0x0, 0x10) : _0x47c057["substr"](0x0, 0x10)["padEnd"](0x10, '_')) + _0x28bb40;
          _0x47c057 = _0x47c057['trim']();
          console["log"](_0x47c057);
          var _0x3e1c8a = _0x1b9f2f + '/pub/wuid/' + _0x4bfe46 + "/start?gameMode=" + encodeURI(_0x2187b6) + "&gh=" + _0x342335 + "&nickname=" + encodeURI(_0x47c057) + "&skinId=" + _wrmxt['validInput'](_0x48d615) + '&eyesId=' + encodeURI(_0x5802f7) + "&mouthId=" + encodeURI(_0x2b104c) + '&glassesId=' + encodeURI(_0x85dec6) + '&hatId=' + encodeURI(_0x5d2e6d);
          console['log']("urlRequest: " + _0x3e1c8a);
          $["get"](_0x3e1c8a, function (_0x29a27f) {
            var _0x2ff2a3 = _0x29a27f["server_url"];
            _0x47517c(_0x2ff2a3);
          });
        };
        _0x3e8696['na'] = function () {
          _0x355ea1++;
          console['log']('start pSC: ' + _0x355ea1);
          if (!_0x3e8696['f']['oa'] && _0x355ea1 >= _0x3e8696['f']['e']) {
            _0x3e8696['s']['I'](_0x3e8696['s']['pa']);
            _0x3e8696['r']['G'](_0x4eafb1["AudioState"]['qa']);
            _0x3e8696['f']['ra']['b']();
          } else {
            _0x5a4627(_0x355ea1);
            _0x3e8696['sa']();
          }
        };
        _0x3e8696['sa'] = function (_0x4ac02a) {
          if (_0x3e8696['o']['ta']()) {
            _0x3e8696['s']['I'](_0x3e8696['s']['ua']);
            _0x3e8696['r']['G'](_0x4eafb1["AudioState"]['ua']);
            var _0xbf64b1 = _0x3e8696['s']['F']['D']();
            _0x59c0bc(_0x1cdd73['va'], _0xbf64b1, 0x1e);
            console["log"]("save gm: " + _0xbf64b1);
            var _0x11a3bb = _0x3e8696['s']['xa']['wa']();
            _0x59c0bc(_0x1cdd73['ya'], _0x11a3bb, 0x1e);
            console["log"]('save sPN: ' + _0x11a3bb);
            if (_0x3e8696['u']['P']()) {
              _0x3e8696['fa'](function (_0x34e54c) {
                hoisinhnhanh = _0x4ac02a ? _0x4ac02a : _0x34e54c;
                _0x3e8696['o']['za'](window['server_url'] || _0x34e54c, _0x3e8696['u']['ea']());
              });
            } else {
              var _0x34a323 = _0x3e8696['s']['F']['ga']();
              _0x59c0bc(_0x1cdd73['Aa'], _0x34a323, 0x1e);
              var _0x551e17 = _0x3e8696['t']['ha'](_0x54cad9['ia']);
              _0x59c0bc(_0x1cdd73['Ba'], _0x551e17, 0x1e);
              _0x3e8696['fa'](function (_0x3c436e) {
                hoisinhnhanh = _0x4ac02a ? _0x4ac02a : _0x3c436e;
                _0x3e8696['o']['Ca'](_0x3c436e, _0x34a323, _0x551e17);
              });
            }
          }
        };
        _0x3e8696['R'] = function (_0x591aa6, _0xda472c) {
          var _0x9d7f31 = _0x3e8696['s']['F']['ga']();
          _0x3e8696['s']['H']['Da'](_0x591aa6, _0xda472c, _0x9d7f31);
          _0x3e8696['r']['G'](_0x4eafb1["AudioState"]['Ea']);
          _0x3e8696['s']['I'](_0x3e8696['s']['H']['Fa']());
        };
        _0x3e8696['Ga'] = function () {
          if (!_0x3e8696['Ha']()) {
            return _0x3e8696['t']['Ia']();
          }
          var _0x3f19c1 = parseInt(_0x5ab50d(_0x1cdd73['Ba']));
          return null != _0x3f19c1 && _0x3e8696['t']['Ja'](_0x3f19c1, _0x54cad9['ia']) ? _0x3f19c1 : _0x3e8696['t']['Ia']();
        };
        _0x3e8696['Ka'] = function (_0x21d273) {
          _0x59c0bc(_0x1cdd73['La'], !!_0x21d273, 0x708);
        };
        _0x3e8696['Ha'] = function () {
          return "true" === _0x5ab50d(_0x1cdd73['La']);
        };
        _0x3e8696['ba'] = function (_0x5a75d4) {
          if (_0x5a75d4 != _0x3e8696['g']) {
            _0x3e8696['g'] = _0x5a75d4;
            var _0x4955a3 = _0x4955a3 || {};
            _0x4955a3["consented"] = _0x5a75d4;
            _0x4955a3['gdprConsent'] = _0x5a75d4;
            _0x3e8696['f']['Ma']['a']();
            _0x3e8696['f']['K']['a']();
            _0x3e8696['f']['ra']['a'](function (_0x1d203d) {
              if (_0x1d203d) {
                _0x5a4627(_0x355ea1 = 0x0);
              }
              _0x3e8696['sa']();
            });
          }
        };
        _0x3e8696['$'] = function (_0x1685f4, _0x155555) {
          _0x59c0bc(_0x1cdd73['Na'], _0x1685f4 ? "true" : "false");
          if (_0x155555) {
            _0x3e8696['da'](_0x1685f4);
          }
          _0x3e8696['ba'](_0x1685f4);
        };
        _0x3e8696['Z'] = function () {
          switch (_0x5ab50d(_0x1cdd73['Na'])) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x3e8696['Y'] = function () {
          try {
            return !!window["isIPInEEA"] || !(null == _0x3e8696['l'] || !_0x54d138['Oa'](_0x3e8696['l']['coords']["latitude"], _0x3e8696['l']["coords"]["longitude"]));
          } catch (_0x2b7591) {
            return true;
          }
        };
        _0x3e8696['Pa'] = function () {
          _0x3e8696['j'] = Date["now"]();
          _0x3e8696['k'] = _0x3e8696['j'] - _0x3e8696['i'];
          _0x3e8696['o']['Qa'](_0x3e8696['j'], _0x3e8696['k']);
          _0x3e8696['s']['Qa'](_0x3e8696['j'], _0x3e8696['k']);
          _0x3e8696['i'] = _0x3e8696['j'];
        };
        _0x3e8696['Ra'] = function () {
          _0x3e8696['s']['Ra']();
        };
        return _0x3e8696;
      }();
    }
    function _0x137ad4() {
      var _0x43ffc1 = {
        'Sa': 0x0,
        'Ta': 0x1,
        'Ua': 0x2,
        'Va': 0x3
      };
      var _0x7f4b6a = {};
      _0x7f4b6a['Wa'] = 0x1e;
      _0x7f4b6a['Xa'] = new Float32Array(0x64);
      _0x7f4b6a['Ya'] = 0x0;
      _0x7f4b6a['Za'] = 0x0;
      _0x7f4b6a['$a'] = 0x0;
      _0x7f4b6a['_a'] = 0x0;
      _0x7f4b6a['ab'] = 0x0;
      _0x7f4b6a['bb'] = 0x0;
      _0x7f4b6a['cb'] = _0x43ffc1['Sa'];
      _0x7f4b6a['db'] = null;
      _0x7f4b6a['eb'] = 0x12c;
      _0x7f4b6a['C'] = function () {};
      _0x7f4b6a['B'] = function () {};
      _0x7f4b6a['S'] = function () {};
      _0x7f4b6a['A'] = function () {};
      _0x7f4b6a['fb'] = new _0x2f2f2b();
      _0x7f4b6a['z'] = null;
      _0x7f4b6a['N'] = null;
      _0x7f4b6a['gb'] = {};
      _0x7f4b6a['hb'] = {};
      _0x7f4b6a['ib'] = 12.5;
      _0x7f4b6a['jb'] = 0x28;
      _0x7f4b6a['kb'] = 0x1;
      _0x7f4b6a['lb'] = -0x1;
      _0x7f4b6a['mb'] = 0x1;
      _0x7f4b6a['nb'] = 0x1;
      _0x7f4b6a['ob'] = -0x1;
      _0x7f4b6a['pb'] = -0x1;
      _0x7f4b6a['qb'] = 0x1;
      _0x7f4b6a['rb'] = 0x1;
      _0x7f4b6a['sb'] = -0x1;
      _0x7f4b6a['O'] = 0x1f4;
      _0x7f4b6a['tb'] = 0x1f4;
      _0x7f4b6a['fb']['ub'] = 0x1f4;
      _0x7f4b6a['N'] = new _0x41c914(_0x7f4b6a['fb']);
      _0x7f4b6a['a'] = function () {
        _0x7f4b6a['N']['vb'](_0x2a65a9()['s']['H']['wb']);
        setInterval(function () {
          _0x7f4b6a['S'](function (_0x713ab1, _0x3fbbde) {
            _0x7f4b6a['xb'](_0x713ab1, _0x3fbbde);
          });
        }, 0xa);
      };
      _0x7f4b6a['yb'] = function (_0x1db1ab, _0x277040, _0x4794ca, _0x4bd885) {
        _0x7f4b6a['lb'] = _0x1db1ab;
        _0x7f4b6a['mb'] = _0x277040;
        _0x7f4b6a['nb'] = _0x4794ca;
        _0x7f4b6a['ob'] = _0x4bd885;
        _0x7f4b6a['zb']();
      };
      _0x7f4b6a['Ab'] = function (_0x8e0e33) {
        _0x7f4b6a['kb'] = _0x8e0e33;
        _0x7f4b6a['zb']();
      };
      _0x7f4b6a['zb'] = function () {
        _0x7f4b6a['pb'] = _0x7f4b6a['lb'] - _0x7f4b6a['kb'];
        _0x7f4b6a['qb'] = _0x7f4b6a['mb'] + _0x7f4b6a['kb'];
        _0x7f4b6a['rb'] = _0x7f4b6a['nb'] - _0x7f4b6a['kb'];
        _0x7f4b6a['sb'] = _0x7f4b6a['ob'] + _0x7f4b6a['kb'];
      };
      _0x7f4b6a['Qa'] = function (_0x10b088, _0x5aa649) {
        _0x7f4b6a['$a'] += _0x5aa649;
        _0x7f4b6a['Za'] -= 0.2 * _0x7f4b6a['Ya'] * _0x5aa649;
        _0x7f4b6a['z']['Bb']();
        if (!(null == _0x7f4b6a['db'] || _0x7f4b6a['cb'] !== _0x43ffc1['Ua'] && _0x7f4b6a['cb'] !== _0x43ffc1['Va'])) {
          _0x7f4b6a['Cb'](_0x10b088, _0x5aa649);
          _0x7f4b6a['jb'] = 0x4 + _0x7f4b6a['ib'] * _0x7f4b6a['N']['Db'];
        }
        var _0x1d2066 = 0x3e8 / Math["max"](0x1, _0x5aa649);
        var _0x2ec152 = 0x0;
        var _0x44c3ae = 0x0;
        for (; _0x44c3ae < _0x7f4b6a['Xa']["length"] - 0x1; _0x44c3ae++) {
          _0x2ec152 = _0x2ec152 + _0x7f4b6a['Xa'][_0x44c3ae];
          _0x7f4b6a['Xa'][_0x44c3ae] = _0x7f4b6a['Xa'][_0x44c3ae + 0x1];
        }
        _0x7f4b6a['Xa'][_0x7f4b6a['Xa']['length'] - 0x1] = _0x1d2066;
        _0x7f4b6a['Wa'] = (_0x2ec152 + _0x1d2066) / _0x7f4b6a['Xa']["length"];
      };
      _0x7f4b6a['Eb'] = function (_0x40ca41, _0x56cb65) {
        return _0x40ca41 > _0x7f4b6a['pb'] && _0x40ca41 < _0x7f4b6a['qb'] && _0x56cb65 > _0x7f4b6a['rb'] && _0x56cb65 < _0x7f4b6a['sb'];
      };
      _0x7f4b6a['Cb'] = function (_0xcea479, _0x438837) {
        var _0xe1dcfd = _0x7f4b6a['$a'] + _0x7f4b6a['Za'];
        var _0xb8a74b = (_0xe1dcfd - _0x7f4b6a['_a']) / (_0x7f4b6a['ab'] - _0x7f4b6a['_a']);
        _0x7f4b6a['N']['Fb'](_0xcea479, _0x438837);
        _0x7f4b6a['N']['Gb'](_0xcea479, _0x438837, _0xb8a74b, _0x7f4b6a['Eb']);
        var _0x5551d1 = 0x0;
        var _0x23c7a2;
        for (_0x23c7a2 in _0x7f4b6a['hb']) {
          var _0x3e99a3 = _0x7f4b6a['hb'][_0x23c7a2];
          _0x3e99a3['Fb'](_0xcea479, _0x438837);
          _0x3e99a3['Gb'](_0xcea479, _0x438837, _0xb8a74b, _0x7f4b6a['Eb']);
          if (_0x3e99a3['Hb'] && _0x3e99a3['Db'] > _0x5551d1) {
            _0x5551d1 = _0x3e99a3['Db'];
          }
          if (!(_0x3e99a3['Ib'] || !(_0x3e99a3['Jb'] < 0.005) && _0x3e99a3['Hb'])) {
            _0x3e99a3['Kb']();
            delete _0x7f4b6a['hb'][_0x3e99a3['Mb']['Lb']];
          }
        }
        _0x7f4b6a['Ab'](0x3 * _0x5551d1);
        var _0x17d6c6;
        for (_0x17d6c6 in _0x7f4b6a['gb']) {
          var _0x510c19 = _0x7f4b6a['gb'][_0x17d6c6];
          _0x510c19['Fb'](_0xcea479, _0x438837);
          _0x510c19['Gb'](_0xcea479, _0x438837, _0x7f4b6a['Eb']);
          if (_0x510c19['Nb'] && (_0x510c19['Jb'] < 0.005 || !_0x7f4b6a['Eb'](_0x510c19['Ob'], _0x510c19['Pb']))) {
            _0x510c19['Kb']();
            delete _0x7f4b6a['gb'][_0x510c19['Mb']['Lb']];
          }
        }
      };
      _0x7f4b6a['Qb'] = function (_0x26a1dd, _0x35cdd8) {
        if (_0x7f4b6a['cb'] === _0x43ffc1['Ta']) {
          _0x7f4b6a['cb'] = _0x43ffc1['Ua'];
          _0x7f4b6a['C']();
        }
        var _0x5671f2 = _0x2a65a9()['j'];
        _0x7f4b6a['bb'] = _0x26a1dd;
        if (0x0 === _0x26a1dd) {
          _0x7f4b6a['_a'] = _0x5671f2 - 0x5f;
          _0x7f4b6a['ab'] = _0x5671f2;
          _0x7f4b6a['$a'] = _0x7f4b6a['_a'];
          _0x7f4b6a['Za'] = 0x0;
        } else {
          _0x7f4b6a['_a'] = _0x7f4b6a['ab'];
          _0x7f4b6a['ab'] = _0x7f4b6a['ab'] + _0x35cdd8;
        }
        var _0x38303e = _0x7f4b6a['$a'] + _0x7f4b6a['Za'];
        _0x7f4b6a['Ya'] = (_0x38303e - _0x7f4b6a['_a']) / (_0x7f4b6a['ab'] - _0x7f4b6a['_a']);
      };
      _0x7f4b6a['Rb'] = function () {
        if (_0x7f4b6a['cb'] === _0x43ffc1['Ta'] || _0x7f4b6a['cb'] === _0x43ffc1['Ua']) {
          _0x7f4b6a['cb'] = _0x43ffc1['Va'];
          var _0x464f1b = _0x7f4b6a['db'];
          setTimeout(function () {
            if (_0x7f4b6a['cb'] === _0x43ffc1['Va']) {
              _0x7f4b6a['cb'] = _0x43ffc1['Sa'];
            }
            if (null != _0x464f1b && _0x464f1b === _0x7f4b6a['db']) {
              _0x7f4b6a['db']["close"]();
              _0x7f4b6a['db'] = null;
            }
          }, 0x1388);
          _0x7f4b6a['B']();
        }
      };
      _0x7f4b6a['ta'] = function () {
        return _0x7f4b6a['cb'] !== _0x43ffc1['Ua'] && (_0x7f4b6a['cb'] = _0x43ffc1['Ta'], _0x7f4b6a['z']['Sb'](), _0x7f4b6a['gb'] = {}, _0x7f4b6a['hb'] = {}, _0x7f4b6a['N']['Tb'](), null != _0x7f4b6a['db'] && (_0x7f4b6a['db']["close"](), _0x7f4b6a['db'] = null), true);
      };
      _0x7f4b6a['Ub'] = function () {
        _0x7f4b6a['db'] = null;
        _0x7f4b6a['z']['Sb']();
        if (_0x7f4b6a['cb'] !== _0x43ffc1['Va']) {
          _0x7f4b6a['A']();
        }
        _0x7f4b6a['cb'] = _0x43ffc1['Sa'];
      };
      _0x7f4b6a['za'] = function (_0x255557, _0x563d3d) {
        _0x7f4b6a['Vb'](_0x255557, function () {
          var _0x485667 = Math['min'](0x800, _0x563d3d["length"]);
          var _0x4f828a = new ArrayBuffer(0x6 + 0x2 * _0x485667);
          var _0x24f23b = new DataView(_0x4f828a);
          var _0x289035 = 0x0;
          _0x24f23b["setInt8"](_0x289035, 0x81);
          _0x289035 = _0x289035 + 0x1;
          _0x24f23b["setInt16"](_0x289035, 0xaf0);
          _0x289035 = _0x289035 + 0x2;
          _0x24f23b["setInt8"](_0x289035, 0x1);
          _0x289035 = _0x289035 + 0x1;
          _0x24f23b['setInt16'](_0x289035, _0x485667);
          _0x289035 = _0x289035 + 0x2;
          var _0x521663 = 0x0;
          for (; _0x521663 < _0x485667; _0x521663++) {
            _0x24f23b['setInt16'](_0x289035, _0x563d3d["charCodeAt"](_0x521663));
            _0x289035 = _0x289035 + 0x2;
          }
          _0x7f4b6a['Wb'](_0x4f828a);
        });
      };
      _0x7f4b6a['Ca'] = function (_0x361adc, _0x112c61, _0x42112c) {
        _0x7f4b6a['Vb'](_0x361adc, function () {
          var _0x572f8f = Math["min"](0x20, _0x112c61["length"]);
          var _0x1c994d = new ArrayBuffer(0x7 + 0x2 * _0x572f8f);
          var _0x4df7bf = new DataView(_0x1c994d);
          var _0x1e29c6 = 0x0;
          _0x4df7bf["setInt8"](_0x1e29c6, 0x81);
          _0x1e29c6 = _0x1e29c6 + 0x1;
          _0x4df7bf["setInt16"](_0x1e29c6, 0xaf0);
          _0x1e29c6 = _0x1e29c6 + 0x2;
          _0x4df7bf["setInt8"](_0x1e29c6, 0x0);
          _0x1e29c6 = _0x1e29c6 + 0x1;
          _0x4df7bf["setInt16"](_0x1e29c6, _0x42112c);
          _0x1e29c6 = _0x1e29c6 + 0x2;
          _0x4df7bf['setInt8'](_0x1e29c6, _0x572f8f);
          _0x1e29c6++;
          var _0x25fb10 = 0x0;
          for (; _0x25fb10 < _0x572f8f; _0x25fb10++) {
            _0x4df7bf["setInt16"](_0x1e29c6, _0x112c61["charCodeAt"](_0x25fb10));
            _0x1e29c6 = _0x1e29c6 + 0x2;
          }
          _0x7f4b6a['Wb'](_0x1c994d);
        });
      };
      _0x7f4b6a['Wb'] = function (_0x1939a2) {
        try {
          if (null != _0x7f4b6a['db'] && _0x7f4b6a['db']['readyState'] === WebSocket["OPEN"]) {
            _0x7f4b6a['db']["send"](_0x1939a2);
          }
        } catch (_0x20ce2e) {
          console['log']("Socket send error: " + _0x20ce2e);
          _0x7f4b6a['Ub']();
        }
      };
      _0x7f4b6a['xb'] = function (_0x1aa1fa, _0x5128e9) {
        var _0xbda047 = _0x5128e9 ? 0x80 : 0x0;
        var _0x2bfb32 = _0x3e51f2(_0x1aa1fa) / _0x3fc009 * 0x80 & 0x7f;
        var _0x104494 = 0xff & (_0xbda047 | _0x2bfb32);
        if (_0x7f4b6a['eb'] !== _0x104494) {
          var _0x1c91af = new ArrayBuffer(0x1);
          new DataView(_0x1c91af)["setInt8"](0x0, _0x104494);
          _0x7f4b6a['Wb'](_0x1c91af);
          _0x7f4b6a['eb'] = _0x104494;
        }
      };
      _0x7f4b6a['Vb'] = function (_0xea9664, _0xcf105e) {
        let _0xf1491 = loadJoy(!theoKzObjects["mobile"]);
        var _0x22ed5f = _0x7f4b6a['db'] = new WebSocket(_0xea9664);
        _0x22ed5f["binaryType"] = "arraybuffer";
        window["onOpen"] = _0x22ed5f["onopen"] = function () {
          _0x30f657("open");
          if (_0x7f4b6a['db'] === _0x22ed5f) {
            console['log']("Socket opened");
            _0xcf105e();
          }
          isPlaying = true;
        };
        window['onclose'] = _0x22ed5f["onclose"] = function () {
          _0x30f657("closed");
          _wrmxt['aload'] = false;
          if (_0x7f4b6a['db'] === _0x22ed5f) {
            console["log"]("Socket closed");
            _0x7f4b6a['Ub']();
          }
          isPlaying = false;
          if (_0xf1491) {
            _0xf1491['destroy']();
          }
        };
        _0x22ed5f["onerror"] = function (_0x19c027) {
          if (_0x7f4b6a['db'] === _0x22ed5f) {
            console['log']("Socket error");
            _0x7f4b6a['Ub']();
          }
          isPlaying = false;
          if (_0xf1491) {
            _0xf1491["destroy"]();
          }
        };
        _0x22ed5f["onmessage"] = function (_0x202a39) {
          if (_0x7f4b6a['db'] === _0x22ed5f) {
            _0x7f4b6a['z']['Xb'](_0x202a39['data']);
          }
        };
      };
      return _0x7f4b6a;
    }
    var _0x1b9f2f = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=");
    var _0x4cce51 = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==");
    var _0x1b2237 = window["I18N_LANG"];
    if (!_0x1b2237) {
      _0x1b2237 = 'en';
    }
    var _0x7ce184 = undefined;
    switch (_0x1b2237) {
      case 'uk':
        _0x7ce184 = "uk_UA";
        break;
      case 'de':
        _0x7ce184 = "de_DE";
        break;
      case 'fr':
        _0x7ce184 = "fr_FR";
        break;
      case 'ru':
        _0x7ce184 = "ru_RU";
        break;
      case 'es':
        _0x7ce184 = "es_ES";
        break;
      default:
        _0x7ce184 = "en_US";
    }
    moment["locale"](_0x7ce184);
    var _0x5a818 = undefined;
    var _0x37651d = function () {
      var _0x470c4f = {
        'Yb': eval(atob("UElYSQ=="))
      };
      var _0x43f4ce = _0x470c4f['Yb'][atob("QkxFTkRfTU9ERVM=")];
      var _0x206a20 = _0x470c4f['Yb'][atob("V1JBUF9NT0RFUw==")];
      return {
        'Zb': _0x470c4f['Yb'][atob("Q29udGFpbmVy")],
        '$b': _0x470c4f['Yb'][atob("QmFzZVRleHR1cmU=")],
        '_b': _0x470c4f['Yb'][atob('VGV4dHVyZQ==')],
        'ac': _0x470c4f['Yb'][atob("UmVuZGVyZXI=")],
        'bc': _0x470c4f['Yb'][atob("R3JhcGhpY3M=")],
        'cc': _0x470c4f['Yb'][atob("U2hhZGVy")],
        'dc': _0x470c4f['Yb'][atob("UmVjdGFuZ2xl")],
        'ec': _0x470c4f['Yb'][atob("U3ByaXRl")],
        'fc': _0x470c4f['Yb'][atob('VGV4dA==')],
        'gc': _0x470c4f['Yb'][atob("R2VvbWV0cnk=")],
        'hc': _0x470c4f['Yb'][atob("TWVzaA==")],
        'ic': {
          'jc': _0x43f4ce[atob("QURE")]
        },
        'kc': {
          'lc': _0x206a20[atob("UkVQRUFU")]
        }
      };
    }();
    var _0x3fc009 = 0x2 * Math['PI'];
    !function () {
      var _0x929954 = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView["prototype"]['mc'] = function (_0x40c6cf) {
        return this[_0x929954[0x0]](_0x40c6cf);
      };
      DataView["prototype"]['nc'] = function (_0x1454d4) {
        return this[_0x929954[0x1]](_0x1454d4);
      };
      DataView["prototype"]['oc'] = function (_0x48a922) {
        return this[_0x929954[0x2]](_0x48a922);
      };
      DataView["prototype"]['pc'] = function (_0x1afcfc) {
        return this[_0x929954[0x3]](_0x1afcfc);
      };
      DataView['prototype']['qc'] = function (_0x42ae09) {
        return this[_0x929954[0x4]](_0x42ae09);
      };
    }();
    var _0x1f11ca = function () {
      function _0x238da8(_0x358ec5) {
        this['rc'] = _0x358ec5;
        this['sc'] = false;
        this['tc'] = 0x1;
      }
      _0x238da8["VELOCITY_TYPE"] = 0x0;
      _0x238da8['FLEXIBLE_TYPE'] = 0x1;
      _0x238da8["MAGNETIC_TYPE"] = 0x2;
      _0x238da8["ZOOM_TYPE"] = 0x7;
      _0x238da8["X2_TYPE"] = 0x3;
      _0x238da8['X5_TYPE'] = 0x4;
      _0x238da8["X10_TYPE"] = 0x5;
      return _0x238da8;
    }();
    var _0x1583e9 = function () {
      function _0x498d95() {
        this['uc'] = [];
        this['vc'] = {};
        this['wc'] = null;
        this['xc'] = _0x3427e7['yc']();
      }
      function _0xa23557(_0x57fbd2, _0x526d00) {
        for (var _0x24e50d in _0x57fbd2) if (_0x57fbd2["hasOwnProperty"](_0x24e50d)) {
          _0x526d00(_0x24e50d, _0x57fbd2[_0x24e50d]);
        }
      }
      _0x498d95["prototype"]['a'] = function () {
        this['L']();
      };
      _0x498d95["prototype"]['W'] = function () {
        return null != this['wc'];
      };
      _0x498d95["prototype"]['zc'] = function () {
        return null != this['wc'] ? this['wc']["revision"] : -0x1;
      };
      _0x498d95["prototype"]['Ac'] = function () {
        return this['wc'];
      };
      _0x498d95['prototype']['L'] = function () {
        var _0x5eaaf8 = this;
        $['get'](_0x4cce51 + "/dynamic/assets/revision.json", function (_0x192090) {
          if (_0x192090 > _0x5eaaf8['zc']()) {
            _0x5eaaf8['Bc']();
          }
        });
      };
      _0x498d95["prototype"]['Bc'] = function () {
        var _0xdee228 = this;
        $["get"](_0x4cce51 + "/dynamic/assets/registry.json", function (_0x226ad3) {
          if (_0x226ad3["revision"] > _0xdee228['zc']()) {
            _0xdee228['Cc'](_0x226ad3);
          }
        });
      };
      _0x498d95['prototype']['ca'] = function (_0x41bfa2) {
        this['uc']["push"](_0x41bfa2);
      };
      _0x498d95["prototype"]['Dc'] = function () {
        return this['xc'];
      };
      _0x498d95['prototype']['Ec'] = function () {
        for (var _0xb32eef = 0x0; _0xb32eef < this['uc']["length"]; _0xb32eef++) {
          this['uc'][_0xb32eef]();
        }
      };
      _0x498d95['prototype']['Fc'] = function (_0x418ffd, _0x4bf06b) {
        if (!(_0x418ffd["revision"] <= this['zc']())) {
          _0xa23557(this['vc'], function (_0x21e905, _0xf09fe1) {
            var _0x83f9df = _0x4bf06b[_0x21e905];
            if (!(null != _0x83f9df && _0xf09fe1['Gc'] === _0x83f9df['Gc'])) {
              print("disposing prev texture: " + _0x21e905 + " at " + _0xf09fe1['Gc']);
              _0xf09fe1['Hc']["destroy"]();
            }
          });
          this['vc'] = _0x4bf06b;
          this['wc'] = _0x418ffd;
          this['xc'] = _0x3427e7['Ic'](this['wc'], this['vc']);
          this['Ec']();
        }
      };
      _0x498d95['prototype']['Cc'] = function (_0x58d9d8) {
        var _0x563a0c = {};
        (function (_0x42ddb2, _0x3ad111) {
          for (var _0x4ea9a1 in _0x42ddb2) if (_0x42ddb2["hasOwnProperty"](_0x4ea9a1)) {
            _0x3ad111(_0x4ea9a1, _0x42ddb2[_0x4ea9a1]);
          }
        })(_0x58d9d8["textureDict"], function (_0x449dd3, _0x52aab8) {
          var _0x4b71a2 = _0x52aab8["custom"] ? _0x52aab8["relativePath"] : _0x4cce51 + _0x52aab8["relativePath"];
          try {
            _0x563a0c[_0x449dd3] = new _0x28d90b(_0x4b71a2, _0x37651d['$b']["from"](_0x52aab8['file'] || _0x4b71a2));
          } catch (_0x3925c9) {
            console["log"](_0x4b71a2);
          }
        });
        this['Fc'](_0x58d9d8, _0x563a0c);
      };
      return _0x498d95;
    }();
    var _0x3427e7 = function () {
      function _0x114505() {
        this['Jc'] = null;
        this['Kc'] = null;
        this['Lc'] = null;
        this['Mc'] = null;
        this['Nc'] = null;
        this['Oc'] = null;
        this['Pc'] = null;
        this['Qc'] = null;
        this['Rc'] = null;
        this['Sc'] = null;
        this['Tc'] = null;
        this['Uc'] = null;
        this['Vc'] = null;
        this['Wc'] = null;
        this['Xc'] = null;
        this['Yc'] = null;
      }
      function _0x4422d2(_0x5885ff, _0x3eadbe) {
        for (var _0x2cc7cc in _0x5885ff) if (_0x5885ff["hasOwnProperty"](_0x2cc7cc)) {
          _0x3eadbe(_0x2cc7cc, _0x5885ff[_0x2cc7cc]);
        }
      }
      _0x114505['yc'] = function () {
        var _0x149fb1 = new _0x3427e7();
        _0x149fb1['Jc'] = {};
        _0x149fb1['Kc'] = {
          'Zc': null,
          '$c': null
        };
        _0x149fb1['Lc'] = {};
        _0x149fb1['Mc'] = {
          'Zc': null
        };
        _0x149fb1['Nc'] = {};
        _0x149fb1['Oc'] = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x149fb1['Pc'] = {};
        _0x149fb1['Qc'] = {
          'ad': {},
          'bd': _0x149fb1['Oc'],
          'cd': _0x149fb1['Kc']
        };
        _0x149fb1['Rc'] = {};
        _0x149fb1['Sc'] = {
          'Zc': []
        };
        _0x149fb1['Tc'] = {};
        _0x149fb1['Uc'] = {
          'Zc': []
        };
        _0x149fb1['Vc'] = {};
        _0x149fb1['Wc'] = {
          'Zc': []
        };
        _0x149fb1['Xc'] = {};
        _0x149fb1['Yc'] = {
          'Zc': []
        };
        return _0x149fb1;
      };
      _0x114505['Ic'] = function (_0x2fc8bb, _0x204907) {
        var _0xcb1b44 = new _0x3427e7();
        var _0x1b4a33 = {};
        _0x4422d2(_0x2fc8bb['colorDict'], function (_0x2e1232, _0xb0340d) {
          _0x1b4a33[_0x2e1232] = _0xb0340d;
        });
        var _0x16b7d0 = {};
        _0x4422d2(_0x2fc8bb["regionDict"], function (_0x114bfb, _0x2f18f0) {
          _0x16b7d0[_0x114bfb] = new _0x19f781(_0x204907[_0x2f18f0["texture"]]['Hc'], _0x2f18f0['x'], _0x2f18f0['y'], _0x2f18f0['w'], _0x2f18f0['h'], _0x2f18f0['px'], _0x2f18f0['py'], _0x2f18f0['pw'], _0x2f18f0['ph']);
        });
        _0xcb1b44['Nc'] = {};
        for (var _0x4ad67a = 0x0; _0x4ad67a < _0x2fc8bb["skinArrayDict"]["length"]; _0x4ad67a++) {
          var _0xe5fa67 = _0x2fc8bb["skinArrayDict"][_0x4ad67a];
          _0xcb1b44['Nc'][_0xe5fa67['id']] = new _0x3427e7["WormSkinData"]('#' + _0x1b4a33[_0xe5fa67["prime"]], _0xe5fa67['base']["map"](function (_0x398a3d) {
            return _0x16b7d0[_0x398a3d];
          }), _0xe5fa67["glow"]["map"](function (_0x311f78) {
            return _0x16b7d0[_0x311f78];
          }));
        }
        var _0x3e522a = _0x2fc8bb["skinUnknown"];
        _0xcb1b44['Oc'] = new _0x3427e7["WormSkinData"]('#' + _0x1b4a33[_0x3e522a["prime"]], _0x3e522a["base"]["map"](function (_0x540d9c) {
          return _0x16b7d0[_0x540d9c];
        }), _0x3e522a["glow"]['map'](function (_0x4b054a) {
          return _0x16b7d0[_0x4b054a];
        }));
        _0xcb1b44['Rc'] = {};
        _0x4422d2(_0x2fc8bb['eyesDict'], function (_0x521da2, _0x2fb0f2) {
          _0x521da2 = parseInt(_0x521da2);
          _0xcb1b44['Rc'][_0x521da2] = new _0x3427e7["WearSkinData"](_0x2fb0f2['base']["map"](function (_0x4fdd4d) {
            return _0x16b7d0[_0x4fdd4d["region"]];
          }));
        });
        _0xcb1b44['Sc'] = new _0x3427e7['WearSkinData'](_0x2fc8bb["eyesUnknown"]["base"]["map"](function (_0x2b2684) {
          return _0x16b7d0[_0x2b2684['region']];
        }));
        _0xcb1b44['Tc'] = {};
        _0x4422d2(_0x2fc8bb["mouthDict"], function (_0x5565ac, _0x1b04e3) {
          _0x5565ac = parseInt(_0x5565ac);
          _0xcb1b44['Tc'][_0x5565ac] = new _0x3427e7['WearSkinData'](_0x1b04e3["base"]["map"](function (_0x5b3c32) {
            return _0x16b7d0[_0x5b3c32["region"]];
          }));
        });
        _0xcb1b44['Uc'] = new _0x3427e7["WearSkinData"](_0x2fc8bb['mouthUnknown']["base"]['map'](function (_0x1993e7) {
          return _0x16b7d0[_0x1993e7["region"]];
        }));
        _0xcb1b44['Vc'] = {};
        _0x4422d2(_0x2fc8bb["glassesDict"], function (_0x5cce78, _0x1aa6b3) {
          _0x5cce78 = parseInt(_0x5cce78);
          _0xcb1b44['Vc'][_0x5cce78] = new _0x3427e7["WearSkinData"](_0x1aa6b3["base"]["map"](function (_0x4b11ac) {
            return _0x16b7d0[_0x4b11ac["region"]];
          }));
        });
        _0xcb1b44['Wc'] = new _0x3427e7["WearSkinData"](_0x2fc8bb["glassesUnknown"]['base']["map"](function (_0x3dc60c) {
          return _0x16b7d0[_0x3dc60c["region"]];
        }));
        _0xcb1b44['Xc'] = {};
        _0x4422d2(_0x2fc8bb['hatDict'], function (_0x5161b5, _0x259800) {
          _0x5161b5 = parseInt(_0x5161b5);
          _0xcb1b44['Xc'][_0x5161b5] = new _0x3427e7["WearSkinData"](_0x259800["base"]["map"](function (_0x499728) {
            return _0x16b7d0[_0x499728["region"]];
          }));
        });
        _0xcb1b44['Yc'] = new _0x3427e7["WearSkinData"](_0x2fc8bb["hatUnknown"]["base"]['map'](function (_0x5956ed) {
          return _0x16b7d0[_0x5956ed["region"]];
        }));
        _0xcb1b44['Jc'] = {};
        _0x4422d2(_0x2fc8bb["portionDict"], function (_0x2e2bda, _0x3390dc) {
          _0x2e2bda = parseInt(_0x2e2bda);
          _0xcb1b44['Jc'][_0x2e2bda] = new _0x3427e7["PortionSkinData"](_0x16b7d0[_0x3390dc["base"]], _0x16b7d0[_0x3390dc["glow"]]);
        });
        var _0x578f44 = _0x2fc8bb["portionUnknown"];
        _0xcb1b44['Kc'] = new _0x3427e7["PortionSkinData"](_0x16b7d0[_0x578f44["base"]], _0x16b7d0[_0x578f44['glow']]);
        _0xcb1b44['Lc'] = {};
        _0x4422d2(_0x2fc8bb["abilityDict"], function (_0x1b9a92, _0x5d929d) {
          _0x1b9a92 = parseInt(_0x1b9a92);
          _0xcb1b44['Lc'][_0x1b9a92] = new _0x3427e7["AbilitySkinData"](_0x16b7d0[_0x5d929d["base"]]);
        });
        var _0x58c10c = _0x2fc8bb['abilityUnknown'];
        _0xcb1b44['Mc'] = new _0x3427e7['AbilitySkinData'](_0x16b7d0[_0x58c10c["base"]]);
        _0xcb1b44['Pc'] = {};
        _0x4422d2(_0x2fc8bb['teamDict'], function (_0x14fcd3, _0x674043) {
          _0x14fcd3 = parseInt(_0x14fcd3);
          _0xcb1b44['Pc'][_0x14fcd3] = new _0x3427e7["TeamSkinData"](_0x674043["name"], new _0x3427e7["WormSkinData"]('#' + _0x1b4a33[_0x674043['skin']["prime"]], [], _0x674043['skin']['glow']["map"](function (_0x58fdaa) {
            return _0x16b7d0[_0x58fdaa];
          })), new _0x3427e7['PortionSkinData']([], _0x16b7d0[_0x674043["portion"]["glow"]]));
        });
        _0xcb1b44['Qc'] = new _0x3427e7["TeamSkinData"]({}, _0xcb1b44['Oc'], _0xcb1b44['Kc']);
        return _0xcb1b44;
      };
      _0x114505["prototype"]['dd'] = function (_0x473533) {
        var _0x209005 = this['Nc'][_0x473533];
        return _0x209005 || this['Oc'];
      };
      _0x114505['prototype']['ed'] = function (_0x2dd806) {
        var _0x15f5a9 = this['Pc'][_0x2dd806];
        return _0x15f5a9 || this['Qc'];
      };
      _0x114505["prototype"]['fd'] = function (_0x4b886f) {
        var _0x3d05df = this['Rc'][_0x4b886f];
        return _0x3d05df || this['Sc'];
      };
      _0x114505['prototype']['gd'] = function (_0x427183) {
        var _0x2f7327 = this['Tc'][_0x427183];
        return _0x2f7327 || this['Uc'];
      };
      _0x114505["prototype"]['hd'] = function (_0x321a42) {
        var _0x6f7c85 = this['Vc'][_0x321a42];
        return _0x6f7c85 || this['Wc'];
      };
      _0x114505["prototype"]['jd'] = function (_0x17ce82) {
        var _0x20825e = this['Xc'][_0x17ce82];
        return _0x20825e || this['Yc'];
      };
      _0x114505['prototype']['kd'] = function (_0x69db70) {
        var _0x1c0e35 = this['Jc'][_0x69db70];
        return _0x1c0e35 || this['Kc'];
      };
      _0x114505["prototype"]['ld'] = function (_0x52a921) {
        var _0x5dd24a = this['Lc'][_0x52a921];
        return _0x5dd24a || this['Mc'];
      };
      _0x114505["TeamSkinData"] = function () {
        function _0x153779(_0x16c4dd, _0x264270, _0xdb1442) {
          this['ad'] = _0x16c4dd;
          this['bd'] = _0x264270;
          this['cd'] = _0xdb1442;
        }
        return _0x153779;
      }();
      _0x114505["WormSkinData"] = function () {
        function _0x37edd1(_0x250fee, _0x385ee5, _0x2cf0e9) {
          this['_c'] = _0x250fee;
          this['Zc'] = _0x385ee5;
          this['$c'] = _0x2cf0e9;
        }
        return _0x37edd1;
      }();
      _0x114505["WearSkinData"] = function () {
        function _0x43e333(_0x2ce82c) {
          this['Zc'] = _0x2ce82c;
        }
        return _0x43e333;
      }();
      _0x114505["PortionSkinData"] = function () {
        function _0x2f279c(_0x28a932, _0x2d0516) {
          this['Zc'] = _0x28a932;
          this['$c'] = _0x2d0516;
        }
        return _0x2f279c;
      }();
      _0x114505["AbilitySkinData"] = function () {
        function _0x4059ad(_0x500c7d) {
          this['Zc'] = _0x500c7d;
        }
        return _0x4059ad;
      }();
      return _0x114505;
    }();
    var _0x4eafb1 = function () {
      function _0x3a75d6() {
        this['md'] = _0x4eafb1["AudioState"]['ua'];
        this['nd'] = false;
        this['od'] = false;
        this['pd'] = null;
        this['qd'] = null;
      }
      _0x3a75d6['prototype']['a'] = function () {};
      _0x3a75d6['prototype']['rd'] = function (_0x135c4a) {
        this['od'] = _0x135c4a;
      };
      _0x3a75d6["prototype"]['G'] = function (_0x1880dc) {
        this['md'] = _0x1880dc;
        this['sd']();
      };
      _0x3a75d6['prototype']['td'] = function (_0x4e09ea) {
        this['nd'] = _0x4e09ea;
        this['sd']();
      };
      _0x3a75d6["prototype"]['sd'] = function () {};
      _0x3a75d6['prototype']['ud'] = function (_0x120507, _0x219fce) {
        if (!_0x2a65a9()['p']['W']) {
          return null;
        }
        var _0x30bc32 = _0x120507[_0x219fce];
        return null == _0x30bc32 || 0x0 == _0x30bc32["length"] ? null : _0x30bc32[Math["floor"](Math["random"]() * _0x30bc32["length"])]['cloneNode']();
      };
      _0x3a75d6["prototype"]['vd'] = function (_0x4952ce, _0xfbf1b, _0x11373a) {
        if (this['od'] && !(_0x11373a <= 0x0)) {
          var _0x27e4e5 = this['ud'](_0x4952ce, _0xfbf1b);
          if (null != _0x27e4e5) {
            _0x27e4e5['volume'] = Math["min"](0x1, _0x11373a);
            _0x27e4e5['play']();
          }
        }
      };
      _0x3a75d6["prototype"]['wd'] = function (_0x4a3d0f, _0x59c588) {
        if (this['md']['xd']) {
          this['vd'](app['q']['yd'], _0x4a3d0f, _0x59c588);
        }
      };
      _0x3a75d6['prototype']['zd'] = function (_0x16d6d5, _0x1972bb) {
        if (this['md']['Ad']) {
          this['vd'](app['q']['Bd'], _0x16d6d5, _0x1972bb);
        }
      };
      _0x3a75d6['prototype']['Cd'] = function () {};
      _0x3a75d6["prototype"]['Dd'] = function () {};
      _0x3a75d6["prototype"]['Ed'] = function () {};
      _0x3a75d6["prototype"]['Fd'] = function () {};
      _0x3a75d6["prototype"]['Gd'] = function () {};
      _0x3a75d6["prototype"]['Hd'] = function () {};
      _0x3a75d6['prototype']['Id'] = function (_0x3ff4c2, _0x1fc2bd, _0x1a228b) {};
      _0x3a75d6["prototype"]['Jd'] = function (_0x36b006) {};
      _0x3a75d6["prototype"]['Kd'] = function (_0x32a20c) {};
      _0x3a75d6['prototype']['Ld'] = function (_0x3302f1) {};
      _0x3a75d6["prototype"]['Md'] = function (_0x235fda) {};
      _0x3a75d6["prototype"]['Nd'] = function (_0x35069c) {};
      _0x3a75d6['prototype']['Od'] = function (_0x466029) {};
      _0x3a75d6['prototype']['Pd'] = function (_0x72823e) {};
      _0x3a75d6['prototype']['Qd'] = function (_0x4a9f9e) {};
      _0x3a75d6["prototype"]['Rd'] = function (_0x4d71e2) {};
      _0x3a75d6["prototype"]['Sd'] = function (_0x2957a1) {};
      _0x3a75d6["prototype"]['Td'] = function (_0x5e4e54) {};
      _0x3a75d6["prototype"]['Ud'] = function (_0x58ad8a) {};
      _0x3a75d6["prototype"]['Vd'] = function (_0x296a70) {};
      _0x3a75d6['prototype']['Wd'] = function (_0x358112) {};
      _0x3a75d6["prototype"]['Xd'] = function (_0x1b94a6, _0x3282cd) {};
      _0x3a75d6['prototype']['Yd'] = function (_0x28c5bd) {};
      _0x3a75d6["prototype"]['Zd'] = function (_0x5bad3c, _0xba1cef, _0x2d6236) {};
      (function () {
        function _0x5541ce(_0x5b60c3) {
          this['$d'] = new _0x3a370b(_0x5b60c3, 0.5);
          this['$d']['_d']["loop"] = true;
          this['ae'] = false;
        }
        _0x5541ce['prototype']['be'] = function (_0x479902) {
          if (_0x479902) {
            this['b']();
          } else {
            this['ce']();
          }
        };
        _0x5541ce["prototype"]['b'] = function () {
          if (!this['ae']) {
            this['ae'] = true;
            this['$d']['de'] = 0x0;
            this['$d']['ee'](0x5dc, 0x64);
          }
        };
        _0x5541ce['prototype']['ce'] = function () {
          if (this['ae']) {
            this['ae'] = false;
            this['$d']['fe'](0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x4c943f(_0x320b0a) {
          this['ge'] = _0x320b0a['map'](function (_0x25dd64) {
            return new _0x3a370b(_0x25dd64, 0.4);
          });
          _0x2f636c(this['ge'], 0x0, this['ge']["length"]);
          this['he'] = null;
          this['ie'] = 0x0;
          this['ae'] = false;
          this['je'] = 0x2710;
        }
        function _0x2f636c(_0x61a06c, _0x3102cc, _0x53a323) {
          for (var _0x37c493 = _0x53a323 - 0x1; _0x37c493 > _0x3102cc; _0x37c493--) {
            var _0xcac084 = _0x3102cc + Math["floor"](Math["random"]() * (_0x37c493 - _0x3102cc + 0x1));
            var _0x32ac25 = _0x61a06c[_0x37c493];
            _0x61a06c[_0x37c493] = _0x61a06c[_0xcac084];
            _0x61a06c[_0xcac084] = _0x32ac25;
          }
        }
        _0x4c943f["prototype"]['be'] = function (_0xefb976) {
          if (_0xefb976) {
            this['b']();
          } else {
            this['ce']();
          }
        };
        _0x4c943f['prototype']['b'] = function () {
          if (!this['ae']) {
            this['ae'] = true;
            this['ke'](0x5dc);
          }
        };
        _0x4c943f['prototype']['ce'] = function () {
          if (this['ae']) {
            this['ae'] = false;
            if (null != this['he']) {
              this['he']['fe'](0x320, 0x32);
            }
          }
        };
        _0x4c943f["prototype"]['ke'] = function (_0x3792f2) {
          if (this['ae']) {
            if (null == this['he']) {
              this['he'] = this['le']();
            }
            if (this['he']['_d']['currentTime'] + this['je'] / 0x3e8 > this['he']['_d']["duration"]) {
              this['he'] = this['le']();
              this['he']['_d']["currentTime"] = 0x0;
            }
            console['log']("Current track '" + this['he']['_d']["src"] + "', change in (ms) " + (0x3e8 * (this['he']['_d']["duration"] - this['he']['_d']["currentTime"]) - this['je']));
            this['he']['de'] = 0x0;
            this['he']['ee'](_0x3792f2, 0x64);
            var _0xdc6213 = 0x3e8 * (this['he']['_d']["duration"] - this['he']['_d']['currentTime']) - this['je'];
            var _0x11afe0 = this;
            var _0x4f91e7 = setTimeout(function () {
              if (_0x11afe0['ae'] && _0x4f91e7 == _0x11afe0['ie']) {
                _0x11afe0['he']['fe'](_0x11afe0['je'], 0x64);
                _0x11afe0['he'] = _0x11afe0['le']();
                _0x11afe0['he']['_d']["currentTime"] = 0x0;
                _0x11afe0['ke'](_0x11afe0['je']);
              }
            }, _0xdc6213);
            this['ie'] = _0x4f91e7;
          }
        };
        _0x4c943f["prototype"]['le'] = function () {
          var _0x4d5eef = this['ge'][0x0];
          var _0x21afab = Math["max"](0x1, this['ge']['length'] / 0x2);
          _0x2f636c(this['ge'], _0x21afab, this['ge']["length"]);
          this['ge']["push"](this['ge']["shift"]());
          return _0x4d5eef;
        };
      })();
      var _0x3a370b = function () {
        function _0x3d7b92(_0x5d3ab2, _0x5dc29f) {
          this['_d'] = _0x5d3ab2;
          this['me'] = _0x5dc29f;
          this['de'] = 0x0;
          _0x5d3ab2['volume'] = 0x0;
          this['ne'] = 0x0;
          this['oe'] = false;
        }
        _0x3d7b92['prototype']['ee'] = function (_0x4cbe52, _0x4fb842) {
          console["log"]("fade IN " + this['_d']["src"]);
          this['pe'](true, _0x4cbe52, _0x4fb842);
        };
        _0x3d7b92['prototype']['fe'] = function (_0x5a9328, _0x445b38) {
          console["log"]("fade OUT " + this['_d']['src']);
          this['pe'](false, _0x5a9328, _0x445b38);
        };
        _0x3d7b92['prototype']['pe'] = function (_0x1a294a, _0x4d1d46, _0x380d14) {
          if (this['oe']) {
            clearInterval(this['ne']);
          }
          var _0x63304c = this;
          var _0x4918ba = 0x1 / (_0x4d1d46 / _0x380d14);
          var _0x308f63 = setInterval(function () {
            if (_0x63304c['oe'] && _0x308f63 != _0x63304c['ne']) {
              return void clearInterval(_0x308f63);
            }
            if (_0x1a294a) {
              _0x63304c['de'] = Math["min"](0x1, _0x63304c['de'] + _0x4918ba);
              _0x63304c['_d']["volume"] = _0x63304c['de'] * _0x63304c['me'];
              if (_0x63304c['de'] >= 0x1) {
                _0x63304c['oe'] = false;
                clearInterval(_0x308f63);
              }
            } else {
              _0x63304c['de'] = Math['max'](0x0, _0x63304c['de'] - _0x4918ba);
              _0x63304c['_d']["volume"] = _0x63304c['de'] * _0x63304c['me'];
              if (_0x63304c['de'] <= 0x0) {
                _0x63304c['_d']["pause"]();
                _0x63304c['oe'] = false;
                clearInterval(_0x308f63);
              }
            }
          }, _0x380d14);
          this['oe'] = true;
          this['ne'] = _0x308f63;
          this['_d']['play']();
        };
        return _0x3d7b92;
      }();
      _0x3a75d6["AudioState"] = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
        },
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
        },
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
        }
      };
      return _0x3a75d6;
    }();
    var _0x40ab91 = function () {
      function _0x3433cb(_0x3896ad) {
        this['se'] = _0x3896ad;
        this['te'] = _0x3896ad['get']()[0x0];
        this['ue'] = new _0x37651d['ac']({
          'view': this['te'],
          'backgroundColor': 0x0,
          'antialias': true
        });
        this['ve'] = new _0x37651d['Zb']();
        this['ve']["sortableChildren"] = true;
        this['we'] = [];
        this['xe'] = [];
        this['ye'] = [];
        this['a']();
      }
      var _0xf8b47 = function (_0x4be838, _0x1d595f) {
        return _0x4be838 + Math["random"](_0x1d595f - _0x4be838);
      };
      var _0x2a1846 = function (_0x223e0f) {
        return _0x223e0f >= 0x0 ? Math["cos"](_0x223e0f % _0x3fc009) : Math["cos"](_0x223e0f % _0x3fc009 + _0x3fc009);
      };
      var _0x39dabe = function (_0x1f1391) {
        return _0x1f1391 >= 0x0 ? Math["sin"](_0x1f1391 % _0x3fc009) : Math['sin'](_0x1f1391 % _0x3fc009 + _0x3fc009);
      };
      var _0x235573 = [{
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': _0xf8b47(0x0, _0x3fc009),
        'Ae': _0xf8b47(0x0, _0x3fc009),
        'Be': _0xf8b47(0.1, 0.5),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0x3433cb["prototype"]['a'] = function () {
        var _0x2f6679 = _0x2a65a9();
        this['ue']["backgroundColor"] = 0x0;
        this['we'] = new Array(_0x235573["length"]);
        for (var _0x3f4945 = 0x0; _0x3f4945 < this['we']["length"]; _0x3f4945++) {
          this['we'][_0x3f4945] = new _0x37651d['ec']();
          this['we'][_0x3f4945]["texture"] = _0x2f6679['q']['Fe'];
          this['we'][_0x3f4945]["anchor"]["set"](0.5);
          this['we'][_0x3f4945]["zIndex"] = 0x1;
          this['ve']['addChild'](this['we'][_0x3f4945]);
        }
        this['xe'] = new Array(_0x2f6679['q']['Ge']["length"]);
        for (var _0x554766 = 0x0; _0x554766 < this['xe']["length"]; _0x554766++) {
          this['xe'][_0x554766] = new _0x37651d['ec']();
          this['xe'][_0x554766]['texture'] = _0x2f6679['q']['Ge'][_0x554766];
          this['xe'][_0x554766]["anchor"]["set"](0.5);
          this['xe'][_0x554766]['zIndex'] = 0x2;
          this['ve']["addChild"](this['xe'][_0x554766]);
        }
        this['ye'] = new Array(this['xe']["length"]);
        for (var _0x55c701 = 0x0; _0x55c701 < this['ye']['length']; _0x55c701++) {
          this['ye'][_0x55c701] = {
            'He': Math["random"](),
            'Ie': Math["random"](),
            'Je': Math["random"](),
            'Ke': Math["random"]()
          };
        }
        this['Ra']();
      };
      _0x3433cb['sc'] = false;
      _0x3433cb['Le'] = function (_0x12fbad) {
        _0x3433cb['sc'] = _0x12fbad;
      };
      _0x3433cb['prototype']['Ra'] = function () {
        var _0x344b74 = window["devicePixelRatio"] ? window["devicePixelRatio"] : 0x1;
        var _0x32396c = this['se']["width"]();
        var _0x3fe3c5 = this['se']["height"]();
        this['ue']["resize"](_0x32396c, _0x3fe3c5);
        this['ue']['resolution'] = _0x344b74;
        this['te']["width"] = _0x344b74 * _0x32396c;
        this['te']["height"] = _0x344b74 * _0x3fe3c5;
        var _0x2426d7 = 0.8 * Math['max'](_0x32396c, _0x3fe3c5);
        for (var _0x3dcd69 = 0x0; _0x3dcd69 < this['we']["length"]; _0x3dcd69++) {
          this['we'][_0x3dcd69]["width"] = _0x2426d7;
          this['we'][_0x3dcd69]['height'] = _0x2426d7;
        }
      };
      _0x3433cb["prototype"]['Pa'] = function (_0x56ce0e, _0x5ec621) {
        if (_0x3433cb['sc']) {
          var _0x2fc4cd = _0x56ce0e / 0x3e8;
          var _0x18ddb6 = _0x5ec621 / 0x3e8;
          var _0x16f91c = this['se']["width"]();
          var _0x328c1a = this['se']["height"]();
          for (var _0x34ef96 = 0x0; _0x34ef96 < this['we']["length"]; _0x34ef96++) {
            var _0xf0648f = _0x235573[_0x34ef96 % _0x235573["length"]];
            var _0x2d7cf2 = this['we'][_0x34ef96];
            var _0x1971b6 = _0x2a1846(_0xf0648f['Ce'] * (0.08 * _0x2fc4cd) + _0xf0648f['Ae']);
            var _0xc24d3f = _0x39dabe(_0xf0648f['De'] * (0.08 * _0x2fc4cd));
            var _0x18555a = 0.2 + 0.2 * _0x2a1846(_0xf0648f['Ae'] + _0xf0648f['Be'] * _0x2fc4cd);
            _0x2d7cf2['tint'] = _0xf0648f['Ee'];
            _0x2d7cf2["alpha"] = _0x18555a;
            _0x2d7cf2["position"]["set"](_0x16f91c * (0.2 + 0.5 * (_0x1971b6 + 0x1) * 0.6), _0x328c1a * (0.1 + 0.5 * (_0xc24d3f + 0x1) * 0.8));
          }
          var _0x3d7461 = 0.05 * Math["max"](_0x16f91c, _0x328c1a);
          for (var _0x548edb = 0x0; _0x548edb < this['xe']["length"]; _0x548edb++) {
            var _0x46bb00 = this['ye'][_0x548edb];
            var _0x38ceff = this['xe'][_0x548edb];
            var _0x165a63 = _0x3fc009 * _0x548edb / this['xe']['length'] + _0x46bb00['He'];
            _0x46bb00['Ke'] += _0x46bb00['Ie'] * _0x18ddb6;
            if (_0x46bb00['Ke'] > 1.3) {
              _0x46bb00['He'] = Math["random"]() * _0x3fc009;
              _0x46bb00['Ie'] = 0.66 * (0.09 + 0.07 * Math['random']());
              _0x46bb00['Je'] = 0.15 + 0.7 * Math["random"]();
              _0x46bb00['Ke'] = -0.3;
            }
            var _0x115452 = _0x46bb00['Je'] + 0.03 * Math["sin"](0x6 * Math["sin"](_0x165a63 + 0.48 * _0x2fc4cd));
            var _0x56ced2 = _0x46bb00['Ke'];
            var _0x4f295c = _0x513ec7(Math['sin'](Math['PI'] * _0x56ced2), 0.1, 0x1);
            var _0x3400d8 = 0.5 * (0.4 + 0.5 * (0x1 + Math['sin'](_0x165a63 + 0.12 * _0x2fc4cd)) * 1.2);
            var _0x271c9b = _0x165a63 + 0x2 * _0x46bb00['Ie'] * _0x2fc4cd;
            _0x38ceff["alpha"] = _0x4f295c;
            _0x38ceff['position']["set"](_0x16f91c * _0x115452, _0x328c1a * _0x56ced2);
            _0x38ceff["rotation"] = _0x271c9b;
            var _0x51523f = _0x38ceff["texture"]['width'] / _0x38ceff['texture']["height"];
            _0x38ceff["width"] = _0x3400d8 * _0x3d7461;
            _0x38ceff["height"] = _0x3400d8 * _0x3d7461 * _0x51523f;
          }
          this['ue']["render"](this['ve'], null, true);
        }
      };
      return _0x3433cb;
    }();
    var _0x1cdd73 = function () {
      function _0x37e634() {}
      _0x37e634['Na'] = "consent_state_2";
      _0x37e634['ya'] = "showPlayerNames";
      _0x37e634['Me'] = "musicEnabled";
      _0x37e634['Ne'] = "sfxEnabled";
      _0x37e634['Oe'] = "account_type";
      _0x37e634['va'] = "gameMode";
      _0x37e634['Aa'] = "nickname";
      _0x37e634['Ba'] = "skin";
      _0x37e634['d'] = "prerollCount";
      _0x37e634['La'] = "shared";
      return _0x37e634;
    }();
    var _0x54d138 = function () {
      function _0xecb820(_0x2dbd62, _0xeb7818, _0x17867f) {
        var _0x762496 = false;
        var _0x10319f = _0x17867f["length"];
        var _0x382d04 = 0x0;
        for (var _0x234b82 = _0x10319f - 0x1; _0x382d04 < _0x10319f; _0x234b82 = _0x382d04++) {
          if (_0x17867f[_0x382d04][0x1] > _0xeb7818 != _0x17867f[_0x234b82][0x1] > _0xeb7818 && _0x2dbd62 < (_0x17867f[_0x234b82][0x0] - _0x17867f[_0x382d04][0x0]) * (_0xeb7818 - _0x17867f[_0x382d04][0x1]) / (_0x17867f[_0x234b82][0x1] - _0x17867f[_0x382d04][0x1]) + _0x17867f[_0x382d04][0x0]) {
            _0x762496 = !_0x762496;
          }
        }
        return _0x762496;
      }
      var _0xc141f = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x442e4b, _0x3dd915) {
          return _0xecb820(_0x3dd915, _0x442e4b, _0xc141f);
        }
      };
    }();
    var _0x13cb34 = function () {
      function _0x10e19d(_0x41b2df) {
        var _0x550db4 = undefined;
        _0x550db4 = _0x41b2df > 0x0 ? '+' + Math["floor"](_0x41b2df) : _0x41b2df < 0x0 ? '-' + Math["floor"](_0x41b2df) : '0';
        var _0x3227f3 = Math['min'](1.5, 0.5 + _0x41b2df / 0x258);
        var _0x2b03e5 = undefined;
        if (_0x41b2df < 0x1) {
          _0x2b03e5 = "0xFFFFFF";
        } else {
          if (_0x41b2df < 0x1e) {
            var _0x2c28c0 = (_0x41b2df - 0x1) / 0x1d;
            _0x2b03e5 = _0xcea9af(0x1 * (0x1 - _0x2c28c0) + 0.96 * _0x2c28c0, 0x1 * (0x1 - _0x2c28c0) + 0.82 * _0x2c28c0, 0x1 * (0x1 - _0x2c28c0) + 0x0 * _0x2c28c0);
          } else {
            if (_0x41b2df < 0x12c) {
              var _0x1093db = (_0x41b2df - 0x1e) / 0x10e;
              _0x2b03e5 = _0xcea9af(0.96 * (0x1 - _0x1093db) + 0.93 * _0x1093db, 0.82 * (0x1 - _0x1093db) + 0.34 * _0x1093db, 0x0 * (0x1 - _0x1093db) + 0.25 * _0x1093db);
            } else {
              if (_0x41b2df < 0x2bc) {
                var _0x17441b = (_0x41b2df - 0x12c) / 0x190;
                _0x2b03e5 = _0xcea9af(0.93 * (0x1 - _0x17441b) + 0.98 * _0x17441b, 0.34 * (0x1 - _0x17441b) + 0x0 * _0x17441b, 0.25 * (0x1 - _0x17441b) + 0.98 * _0x17441b);
              } else {
                _0x2b03e5 = _0xcea9af(0.98, 0x0, 0.98);
              }
            }
          }
        }
        var _0x5f1e59 = Math["random"]();
        var _0x40224e = 0x1 + 0.5 * Math["random"]();
        return new _0x1dabf3(_0x550db4, _0x2b03e5, true, 0.5, _0x3227f3, _0x5f1e59, _0x40224e);
      }
      function _0x59898a(_0x54c32e, _0x14facb) {
        var _0x10a2bb = undefined;
        var _0x7ec613 = undefined;
        if (_0x14facb) {
          _0x10a2bb = 1.3;
          _0x7ec613 = _0xcea9af(0.93, 0.34, 0.25);
        } else {
          _0x10a2bb = 1.1;
          _0x7ec613 = _0xcea9af(0.96, 0.82, 0x0);
        }
        return new _0x1dabf3(_0x54c32e, _0x7ec613, true, 0.5, _0x10a2bb, 0.5, 0.7);
      }
      function _0xcea9af(_0x21199d, _0x483936, _0xf65e95) {
        return ((0xff * _0x21199d & 0xff) << 0x10) + ((0xff * _0x483936 & 0xff) << 0x8) + (0xff * _0xf65e95 & 0xff);
      }
      var _0x32f59e = _0x56cc5d(_0x37651d['Zb'], function () {
        _0x37651d['Zb']["call"](this);
        this['Pe'] = [];
        this['Qe'] = 0x0;
      });
      _0x32f59e["prototype"]['Re'] = function (_0x473c69) {
        this['Qe'] += _0x473c69;
        if (this['Qe'] >= 0x1) {
          var _0xfb7f8a = Math["floor"](this['Qe']);
          this['Qe'] -= _0xfb7f8a;
          var _0x329e35 = _0x10e19d(_0xfb7f8a);
          this["addChild"](_0x329e35);
          this['Pe']['push'](_0x329e35);
        }
      };
      _0x32f59e["prototype"]['Se'] = function (_0x199b12) {
        _0x30f657("count", _0x199b12);
        if (_0x199b12) {
          if (theoKzObjects["ModeStremerheadshot"]) {} else {
            var _0x4772a3 = document["createElement"]("audio");
            _0x4772a3["src"] = "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
            _0x4772a3['preload'] = 'auto';
            _0x4772a3["play"]();
          }
          ;
          var _0x2ab7d5 = _0x59898a(_0x1e75e8("index.game.floating.headshot"), true);
          this["addChild"](_0x2ab7d5);
          this['Pe']['push'](_0x2ab7d5);
          if (_0x2ab7d5) {
            theoKzObjects["emoji_headshot"] = true;
            setTimeout(function () {
              theoKzObjects["emoji_headshot"] = false;
            }, 0xbb8);
          }
        } else {
          var _0x2ab7d5 = _0x59898a(_0x1e75e8("index.game.floating.wellDone"), false);
          this["addChild"](_0x2ab7d5);
          this['Pe']["push"](_0x2ab7d5);
          if (_0x2ab7d5) {
            theoKzObjects['emoji_kill'] = true;
            setTimeout(function () {
              theoKzObjects["emoji_kill"] = false;
            }, 0xbb8);
          }
        }
      };
      _0x32f59e['prototype']['Te'] = function (_0xc49c23, _0x32d226) {
        var _0x2aafc4 = _0x2a65a9()['s']['H']['wb'];
        var _0x32e8ac = _0x2aafc4['ue']["width"] / _0x2aafc4['ue']["resolution"];
        var _0x36a9c6 = _0x2aafc4['ue']["height"] / _0x2aafc4['ue']["resolution"];
        var _0x92bd7a = 0x0;
        for (; _0x92bd7a < this['Pe']["length"];) {
          var _0x9235b9 = this['Pe'][_0x92bd7a];
          _0x9235b9['Ue'] = _0x9235b9['Ue'] + _0x32d226 / 0x7d0 * _0x9235b9['Ve'];
          _0x9235b9['We'] = _0x9235b9['We'] + _0x32d226 / 0x7d0 * _0x9235b9['Xe'];
          _0x9235b9['alpha'] = 0.5 * Math["sin"](Math['PI'] * _0x9235b9['We']);
          _0x9235b9['scale']["set"](_0x9235b9['Ue']);
          _0x9235b9["position"]['x'] = _0x32e8ac * (0.25 + 0.5 * _0x9235b9['Ye']);
          _0x9235b9["position"]['y'] = _0x9235b9['Ze'] ? _0x36a9c6 * (0x1 - 0.5 * (0x1 + _0x9235b9['We'])) : _0x36a9c6 * (0x1 - 0.5 * (0x0 + _0x9235b9['We']));
          if (_0x9235b9['We'] > 0x1) {
            _0x21385c(_0x9235b9);
            this['Pe']['splice'](_0x92bd7a, 0x1);
            _0x92bd7a--;
          }
          _0x92bd7a++;
        }
      };
      var _0x1dabf3 = function () {
        return _0x56cc5d(_0x37651d['fc'], function (_0x283816, _0x2d51c2, _0xa41297, _0x40a58a, _0x165146, _0x59d0e3, _0x14cc9a) {
          _0x37651d['fc']["call"](this, _0x283816, {
            'fill': _0x2d51c2,
            'fontFamily': "wormatefriends",
            'fontSize': 0x24
          });
          this["anchor"]["set"](0.5);
          this['Ze'] = _0xa41297;
          this['Ue'] = _0x40a58a;
          this['Ve'] = _0x165146;
          this['Ye'] = _0x59d0e3;
          this['We'] = 0x0;
          this['Xe'] = _0x14cc9a;
        });
      }();
      return _0x32f59e;
    }();
    var _0x28d90b = function () {
      function _0x1257ed(_0x50125a, _0x4a167f) {
        this['Gc'] = _0x50125a;
        this['Hc'] = _0x4a167f;
      }
      return _0x1257ed;
    }();
    var _0x1160d2 = {
      '$e': 0x0,
      '_e': 0x10
    };
    var _0x2f2f2b = function () {
      function _0x59f7a4() {
        this['af'] = _0x1160d2['$e'];
        this['bf'] = 0x0;
        this['ub'] = 0x1f4;
        this['cf'] = 0xfa0;
        this['df'] = 0x1b58;
      }
      _0x59f7a4['TEAM_DEFAULT'] = 0x0;
      _0x59f7a4["prototype"]['ef'] = function () {
        return 1.02 * this['ub'];
      };
      return _0x59f7a4;
    }();
    var _0x29556d = function () {
      function _0x5ec87e(_0x247e79) {
        this['se'] = _0x247e79;
        this['te'] = _0x247e79["get"]()[0x0];
        this['ue'] = new _0x37651d['ac']({
          'view': this['te'],
          'backgroundColor': 0x0,
          'antialias': true
        });
        this['ve'] = new _0x37651d['Zb']();
        this['ve']["sortableChildren"] = true;
        this['ff'] = Math['floor'](0x168 * Math["random"]());
        this['gf'] = 0x0;
        this['hf'] = 0x0;
        this['if'] = 0xf;
        this['jf'] = 0.5;
        this['kf'] = 0x0;
        this['lf'] = new _0x11c489();
        this['mf'] = new _0x37651d['bc']();
        this['nf'] = new _0x37651d['Zb']();
        this['pf'] = new _0x37651d['Zb']();
        this['pf']["sortableChildren"] = true;
        this['qf'] = new _0x37651d['Zb']();
        this['rf'] = new _0x37651d['Zb']();
        this['rf']["sortableChildren"] = true;
        this['sf'] = new _0x37651d['Zb']();
        this['tf'] = new _0x297373();
        this['uf'] = new _0x545440();
        this['vf'] = new _0x550733();
        this['wf'] = new _0x13cb34();
        this['xf'] = new _0x37651d['ec']();
        this['yf'] = {
          'x': 0x0,
          'y': -0x14
        };
        this['a']();
      }
      _0x5ec87e["prototype"]['a'] = function () {
        this['ue']["backgroundColor"] = 0x0;
        this['lf']['zf']["zIndex"] = 0xa;
        this['ve']['addChild'](this['lf']['zf']);
        this['mf']["zIndex"] = 0x14;
        this['ve']["addChild"](this['mf']);
        this['nf']["zIndex"] = 0x1388;
        this['ve']["addChild"](this['nf']);
        this['pf']["zIndex"] = 0x13ec;
        this['ve']['addChild'](this['pf']);
        this['qf']["zIndex"] = 0x2710;
        this['ve']["addChild"](this['qf']);
        this['xf']["texture"] = _0x2a65a9()['q']['Af'];
        this['xf']["anchor"]['set'](0.5);
        this['xf']['zIndex'] = 0x1;
        this['rf']["addChild"](this['xf']);
        this['sf']["alpha"] = 0.6;
        this['sf']["zIndex"] = 0x2;
        this['rf']["addChild"](this['sf']);
        this['wf']['zIndex'] = 0x3;
        this['rf']["addChild"](this['wf']);
        this['tf']["alpha"] = 0.8;
        this['tf']["zIndex"] = 0x4;
        this['rf']['addChild'](this['tf']);
        this['uf']["zIndex"] = 0x5;
        this['rf']["addChild"](this['uf']);
        this['vf']['zIndex'] = 0x6;
        this['rf']["addChild"](this['vf']);
        this['Ra']();
      };
      _0x5ec87e["prototype"]['Ra'] = function () {
        var _0x19dc67 = window["devicePixelRatio"] ? window["devicePixelRatio"] : 0x1;
        var _0x34f2d3 = this['se']["width"]();
        var _0x3dc805 = this['se']['height']();
        this['ue']["resize"](_0x34f2d3, _0x3dc805);
        this['ue']["resolution"] = _0x19dc67;
        this['te']["width"] = _0x19dc67 * _0x34f2d3;
        this['te']["height"] = _0x19dc67 * _0x3dc805;
        this['jf'] = Math["min"](Math['min'](_0x34f2d3, _0x3dc805), 0.625 * Math["max"](_0x34f2d3, _0x3dc805));
        this['xf']['position']['x'] = _0x34f2d3 / 0x2;
        this['xf']["position"]['y'] = _0x3dc805 / 0x2;
        this['xf']["width"] = _0x34f2d3;
        this['xf']['height'] = _0x3dc805;
        this['vf']["position"]['x'] = _0x34f2d3 - 0xe1;
        this['vf']["position"]['y'] = 0x1;
        window["changedNf"] = () => this['jf'] = Math["min"](Math["max"](_0x34f2d3, _0x3dc805), window["multiplier"] * Math["min"](_0x34f2d3, _0x3dc805));
        if (theoKzObjects["ModeStremer"]) {
          this['tf']['position']['x'] = 0x316;
          this['uf']["position"]['x'] = 0x267;
          this['vf']["position"]['x'] = _0x34f2d3 - 0x33e;
        } else {
          this['tf']["position"]['x'] = 0x3c;
          this['uf']["position"]['x'] = 0x6e;
          this['vf']["position"]['x'] = _0x34f2d3 - 0xc8;
        }
        this['tf']["position"]['y'] = 0x3c;
        this['uf']["position"]['y'] = 0xa;
        this['vf']["position"]['y'] = 0x14;
        this['tf']["addChild"](ctx["hoisinhnhanh"]);
        this['tf']["addChild"](ctx["clock"]);
        this['tf']["addChild"](ctx["quaytron"]);
        this['vf']["addChild"](ctx["value_server"]);
        this['vf']["addChild"](ctx['containerImgS']);
        this['tf']["addChild"](ctx['borderImg']);
        window['retundFlagError'] = () => {
          return ctx["containerImgS"]["texture"] = PIXI['Texture']['fromImage'](theoKzObjects["flag"]);
        };
        this['tf']["addChild"](ctx["containerCountInfo"]);
      };
      _0x5ec87e["prototype"]['Te'] = function (_0x427b3f, _0x534755) {
        var _0xf7ff09 = _0x2a65a9();
        this['if'] = 0xf;
        this['nf']["removeChildren"]();
        this['pf']["removeChildren"]();
        this['qf']['removeChildren']();
        this['sf']["removeChildren"]();
        this['lf']['Bf'](_0x427b3f['af'] == _0x1160d2['$e'] ? _0xf7ff09['q']['Cf'] : _0xf7ff09['q']['Df']);
        var _0x183f38 = this['mf'];
        _0x183f38['clear']();
        _0x183f38["lineStyle"](0.8, 0xffff);
        _0x183f38["drawCircle"](0x0, 0x0, _0x427b3f['ub']);
        _0x183f38['endFill']();
        this['vf']['Ef'] = _0x534755;
        this['sf']['visible'] = _0x534755;
      };
      _0x5ec87e["prototype"]['Pa'] = function (_0x160bdb, _0x85b29) {
        if (!(this['ue']["width"] <= 0x5)) {
          var _0x5726c5 = _0x2a65a9();
          var _0x1372f5 = _0x5726c5['o']['N'];
          var _0x3e9894 = this['ue']["width"] / this['ue']["resolution"];
          var _0x369b41 = this['ue']["height"] / this['ue']["resolution"];
          this['if'] = _0x36cfb7(this['if'], _0x5726c5['o']['jb'], _0x85b29, 0.002);
          var _0x44a9bf = this['jf'] / this['if'];
          var _0x124f78 = _0x5726c5['o']['N']['Ff'][_0x1f11ca["ZOOM_TYPE"]];
          var _0x2d2f1d = null != _0x124f78 && _0x124f78['sc'];
          this['kf'] = _0x3b2cf9(0x0, 0x1, this['kf'] + _0x85b29 / 0x3e8 * (0.1 * (_0x2d2f1d ? 0x1 : 0x0) - this['kf']));
          this['xf']['alpha'] = this['kf'];
          this['ff'] = this['ff'] + 0.01 * _0x85b29;
          if (this['ff'] > 0x168) {
            this['ff'] = this['ff'] % 0x168;
          }
          this['gf'] = Math["sin"](_0x160bdb / 0x4b0 * 0x2 * Math['PI']);
          var _0x1dfb46 = _0x1372f5['Gf']();
          this['yf']['x'] = _0x57cd84(this['yf']['x'], _0x1dfb46['x'], _0x85b29, theoKzObjects['smoothCamera'], 33.333);
          this['yf']['y'] = _0x57cd84(this['yf']['y'], _0x1dfb46['y'], _0x85b29, 0.5, 33.333);
          var _0x18049c = _0x3e9894 / _0x44a9bf / 0x2;
          var _0x484d40 = _0x369b41 / _0x44a9bf / 0x2;
          _0x5726c5['o']['yb'](this['yf']['x'] - 1.3 * _0x18049c, this['yf']['x'] + 1.3 * _0x18049c, this['yf']['y'] - 1.3 * _0x484d40, this['yf']['y'] + 1.3 * _0x484d40);
          this['lf']['Te'](this['yf']['x'], this['yf']['y'], 0x2 * _0x18049c, 0x2 * _0x484d40);
          var _0x4e2fb1 = _0x5726c5['o']['fb']['ub'];
          this['ve']["scale"]['x'] = _0x44a9bf;
          this['ve']["scale"]['y'] = _0x44a9bf;
          this['ve']["position"]['x'] = _0x3e9894 / 0x2 - this['yf']['x'] * _0x44a9bf;
          this['ve']['position']['y'] = _0x369b41 / 0x2 - this['yf']['y'] * _0x44a9bf;
          var _0x190903 = Math["hypot"](_0x1dfb46['x'], _0x1dfb46['y']);
          if (_0x190903 > _0x4e2fb1 - 0xa) {
            this['hf'] = _0x3b2cf9(0x0, 0x1, 0x1 + (_0x190903 - _0x4e2fb1) / 0xa);
            var _0x1390d7 = Math['cos'](this['ff'] * _0x3fc009 / 0x168) * (0x1 - this['hf']) + 0x1 * this['hf'];
            var _0xcbd0bc = Math['sin'](this['ff'] * _0x3fc009 / 0x168) * (0x1 - this['hf']);
            var _0x5a775b = (Math['atan2'](_0xcbd0bc, _0x1390d7) + _0x3fc009) % _0x3fc009 * 0x168 / _0x3fc009;
            var _0x1bdd41 = this['hf'] * (0.5 + 0.5 * this['gf']);
            var _0x2a6fed = _0x3a35eb(Math['floor'](_0x5a775b), 0x1, 0.75 - 0.25 * this['hf']);
            this['lf']['Hf'](_0x2a6fed[0x0], _0x2a6fed[0x1], _0x2a6fed[0x2], 0.1 + 0.2 * _0x1bdd41);
          } else {
            this['hf'] = 0x0;
            var _0x2c9ba5 = _0x3a35eb(Math["floor"](this['ff']), 0x1, 0.75);
            this['lf']['Hf'](_0x2c9ba5[0x0], _0x2c9ba5[0x1], _0x2c9ba5[0x2], 0.1);
          }
          var _0x38d2df = 0x0;
          for (; _0x38d2df < this['sf']["children"]['length']; _0x38d2df++) {
            var _0x5ae20a = this['sf']["children"][_0x38d2df];
            _0x5ae20a['position']['x'] = _0x3e9894 / 0x2 - (this['yf']['x'] - _0x5ae20a['If']['x']) * _0x44a9bf;
            _0x5ae20a["position"]['y'] = _0x369b41 / 0x2 - (this['yf']['y'] - _0x5ae20a['If']['y']) * _0x44a9bf;
          }
          this['tf']['Jf']["position"]['x'] = _0x1dfb46['x'] / _0x4e2fb1 * this['tf']['Kf'];
          this['tf']['Jf']["position"]['y'] = _0x1dfb46['y'] / _0x4e2fb1 * this['tf']['Kf'];
          this['uf']['Qa'](_0x160bdb);
          this['wf']['Te'](_0x160bdb, _0x85b29);
          this['ue']['render'](this['ve'], null, true);
          this['ue']["render"](this['rf'], null, false);
        }
      };
      _0x5ec87e["prototype"]['Lf'] = function (_0x140e27, _0x211485) {
        _0x211485['Of']['Nf']['Mf']()["zIndex"] = (_0x140e27 + 0x80000000) / 0x100000000 * 0x1388;
        this['nf']["addChild"](_0x211485['Of']['Pf']['Mf']());
        this['pf']['addChild'](_0x211485['Of']['Nf']['Mf']());
      };
      _0x5ec87e["prototype"]['Qf'] = function (_0x16fbf8, _0x217743, _0x51b5ed) {
        _0x217743['Rf']["zIndex"] = _0x2a65a9()['o']['fb']['bf'] ? 0x0 : 0xa + (_0x16fbf8 + 0x8000) / 0x10000 * 0x1388;
        this['qf']["addChild"](_0x217743['Rf']);
        if (_0x16fbf8 != _0x2a65a9()['o']['fb']['bf']) {
          this['sf']['addChild'](_0x51b5ed);
        }
      };
      var _0x297373 = function () {
        return _0x56cc5d(_0x37651d['Zb'], function () {
          _0x37651d['Zb']["call"](this);
          this['Kf'] = 0x28;
          this['Sf'] = new _0x37651d['ec']();
          this['Sf']["anchor"]["set"](0.5);
          this['Jf'] = new _0x37651d['bc']();
          var _0x4e8fef = new _0x37651d['bc']();
          _0x4e8fef["beginFill"]("black", 0.4);
          _0x4e8fef["drawCircle"](0x0, 0x0, this['Kf']);
          _0x4e8fef["endFill"]();
          _0x4e8fef['lineStyle'](0x2, 0xffffff);
          _0x4e8fef['drawCircle'](0x0, 0x0, this['Kf']);
          _0x4e8fef["moveTo"](0x0, -this['Kf']);
          _0x4e8fef['lineTo'](0x0, +this['Kf']);
          _0x4e8fef["moveTo"](-this['Kf'], 0x0);
          _0x4e8fef['lineTo'](+this['Kf'], 0x0);
          _0x4e8fef["endFill"]();
          this['Sf']["alpha"] = 0.55;
          this['Jf']["zIndex"] = 0x2;
          this['Jf']['alpha'] = 0.9;
          this['Jf']["beginFill"](0xff0000);
          this['Jf']["drawCircle"](0x0, 0x0, 0.12 * this['Kf']);
          this['Jf']["endFill"]();
          this['Jf']["lineStyle"](0x1, "black");
          this['Jf']['drawCircle'](0x0, 0x0, 0.12 * this['Kf']);
          this['Jf']["endFill"]();
          this['addChild'](_0x4e8fef);
          this["addChild"](this['Sf']);
          this["addChild"](this['Jf']);
        });
      }();
      var _0x545440 = function () {
        var _0x4de4c9 = _0x56cc5d(_0x37651d['Zb'], function () {
          _0x37651d['Zb']["call"](this);
          this['Tf'] = {};
        });
        _0x4de4c9["prototype"]['Qa'] = function (_0x5cb8ed) {
          var _0x480672 = 0.5 + 0.5 * Math['cos'](_0x3fc009 * (_0x5cb8ed / 0x3e8 / 1.6));
          var _0x11264b;
          for (_0x11264b in this['Tf']) {
            var _0x21c18e = this['Tf'][_0x11264b];
            var _0x383154 = _0x21c18e['Uf'];
            _0x21c18e["alpha"] = 0x1 - _0x383154 + _0x383154 * _0x480672;
          }
        };
        _0x4de4c9["prototype"]['Te'] = function (_0x4eb101) {
          var _0x39577f;
          for (_0x39577f in this['Tf']) {
            if (!(null != _0x4eb101[_0x39577f] && _0x4eb101[_0x39577f]['sc'])) {
              _0x21385c(this['Tf'][_0x39577f]);
              delete this['Tf'][_0x39577f];
            }
          }
          var _0x53d7b5 = 0x0;
          var _0x4cf8f8;
          for (_0x4cf8f8 in _0x4eb101) {
            var _0x180ca1 = _0x4eb101[_0x4cf8f8];
            if (_0x180ca1['sc']) {
              var _0x33b120 = this['Tf'][_0x4cf8f8];
              if (!_0x33b120) {
                var _0x341812 = _0x2a65a9()['p']['Dc']()['ld'](_0x180ca1['rc'])['Zc'];
                _0x33b120 = new _0x52784b();
                _0x33b120['texture'] = _0x341812['Hc'];
                _0x33b120['width'] = 0x23;
                _0x33b120["height"] = 0x23;
                this['Tf'][_0x4cf8f8] = _0x33b120;
                this["addChild"](_0x33b120);
              }
              _0x15e089(this, _0x4cf8f8, _0x180ca1['tc']);
              _0x33b120['Uf'] = _0x180ca1['tc'];
              if (theoKzObjects["ModeStremer"]) {
                _0x33b120['position']['x'] = _0x53d7b5 + 0xe1;
              } else {
                _0x33b120["position"]['x'] = _0x53d7b5;
              }
              _0x53d7b5 = _0x53d7b5 + 0x28;
            }
          }
        };
        var _0x52784b = function () {
          return _0x56cc5d(_0x37651d['ec'], function () {
            _0x37651d['ec']["call"](this);
            this['Uf'] = 0x0;
          });
        }();
        return _0x4de4c9;
      }();
      var _0x550733 = function () {
        var _0x4c9784 = _0x56cc5d(_0x37651d['Zb'], function () {
          _0x37651d['Zb']['call'](this);
          this['Ef'] = true;
          this['Vf'] = 0xc;
          this['Wf'] = 0x9;
          this['Pe'] = [];
          var _0x1fbc58 = 0x0;
          for (; _0x1fbc58 < 0xe; _0x1fbc58++) {
            this['Xf']();
          }
        });
        _0x4c9784["prototype"]['Te'] = function (_0x5509ac) {
          var _0x376d2a = _0x2a65a9();
          var _0x2477e0 = _0x376d2a['o']['fb']['af'] == _0x1160d2['_e'];
          var _0x28fca1 = 0x0;
          var _0x16f402 = 0x0;
          if (_0x16f402 >= this['Pe']["length"]) {
            this['Xf']();
          }
          this['Pe'][_0x16f402]['Yf'](0x5, "white");
          this['Pe'][_0x16f402]['Zf']('', _0x1e75e8("index.game.leader.top10"), '(' + _0x376d2a['o']['tb'] + " online)");
          this['Pe'][_0x16f402]["position"]['y'] = _0x28fca1;
          _0x28fca1 = _0x28fca1 + this['Vf'];
          _0x16f402 = _0x16f402 + 0x1;
          if (_0x5509ac['$f']['length'] > 0x0) {
            _0x28fca1 = _0x28fca1 + this['Wf'];
          }
          var _0x2915fa = 0x0;
          for (; _0x2915fa < _0x5509ac['$f']["length"]; _0x2915fa++) {
            var _0x29d6d5 = _0x5509ac['$f'][_0x2915fa];
            var _0x51ecb3 = _0x376d2a['p']['Dc']()['ed'](_0x29d6d5['_f']);
            if (_0x16f402 >= this['Pe']["length"]) {
              this['Xf']();
            }
            this['Pe'][_0x16f402]['Yf'](0.8, _0x51ecb3['bd']['_c']);
            this['Pe'][_0x16f402]['Zf']('' + (_0x2915fa + 0x1), _0x1fd68a(_0x51ecb3['ad']), '' + Math["floor"](_0x29d6d5['M']));
            this['Pe'][_0x16f402]['position']['y'] = _0x28fca1;
            _0x28fca1 = _0x28fca1 + this['Vf'];
            _0x16f402 = _0x16f402 + 0x1;
          }
          if (_0x5509ac['ag']["length"] > 0x0) {
            _0x28fca1 = _0x28fca1 + this['Wf'];
          }
          var _0x1ae47b = 0x0;
          for (; _0x1ae47b < _0x5509ac['ag']["length"]; _0x1ae47b++) {
            var _0x18b99d = _0x5509ac['ag'][_0x1ae47b];
            var _0x862e6a = _0x376d2a['o']['fb']['bf'] == _0x18b99d['bg'];
            var _0x4a01e9 = undefined;
            var _0x349a94 = undefined;
            if (_0x862e6a) {
              _0x4a01e9 = "yellow";
              _0x349a94 = _0x376d2a['o']['N']['Mb']['ad'];
            } else {
              var _0x51fd96 = _0x376d2a['o']['hb'][_0x18b99d['bg']];
              if (null != _0x51fd96) {
                _0x4a01e9 = _0x2477e0 ? _0x376d2a['p']['Dc']()['ed'](_0x51fd96['Mb']['cg'])['bd']['_c'] : _0x376d2a['p']['Dc']()['dd'](_0x51fd96['Mb']['dg'])['_c'];
                _0x349a94 = this['Ef'] ? _0x51fd96['Mb']['ad'] : "---";
              } else {
                _0x4a01e9 = "gray";
                _0x349a94 = '?';
              }
            }
            if (_0x862e6a) {
              _0x28fca1 = _0x28fca1 + this['Wf'];
            }
            if (_0x16f402 >= this['Pe']["length"]) {
              this['Xf']();
            }
            this['Pe'][_0x16f402]['Yf'](_0x862e6a ? 0x1 : 0.8, _0x4a01e9);
            var _0x112b0 = Math["floor"](_0x18b99d['M']);
            _0x112b0['dotFormat']();
            this['Pe'][_0x16f402]['Zf']('' + (_0x1ae47b + 0x1), _0x349a94, '' + _0x112b0["dotFormat"]());
            this['Pe'][_0x16f402]["position"]['y'] = _0x28fca1;
            _0x28fca1 = _0x28fca1 + this['Vf'];
            _0x16f402 = _0x16f402 + 0x1;
            if (_0x862e6a) {
              _0x28fca1 = _0x28fca1 + this['Wf'];
            }
          }
          if (_0x376d2a['o']['O'] > _0x5509ac['ag']["length"]) {
            _0x28fca1 = _0x28fca1 + this['Wf'];
            if (_0x16f402 >= this['Pe']['length']) {
              this['Xf']();
            }
            this['Pe'][_0x16f402]['Yf'](0x2, 'white');
            window["tuNewScore"] = Math['floor'](_0x376d2a['o']['N']['M']);
            window["tuNewScore"]["dotFormat"]();
            this['Pe'][_0x16f402]['Zf']('' + _0x376d2a['o']['O'], _0x376d2a['o']['N']['Mb']['ad'], '' + window["tuNewScore"]["dotFormat"]());
            this['Pe'][_0x16f402]["position"]['y'] = _0x28fca1;
            _0x28fca1 = _0x28fca1 + this['Vf'];
            _0x16f402 = _0x16f402 + 0x1;
            _0x28fca1 = _0x28fca1 + this['Wf'];
          }
          for (; this['Pe']["length"] > _0x16f402;) {
            _0x21385c(this['Pe']["pop"]());
          }
        };
        _0x4c9784["prototype"]['Xf'] = function () {
          var _0x370992 = new _0x2f0541();
          _0x370992["position"]['y'] = 0x0;
          if (this['Pe']["length"] > 0x0) {
            _0x370992["position"]['y'] = this['Pe'][this['Pe']["length"] - 0x1]["position"]['y'] + this['Vf'];
          }
          this['Pe']["push"](_0x370992);
          this["addChild"](_0x370992);
        };
        var _0x2f0541 = function () {
          var _0x2872d2 = _0x56cc5d(_0x37651d['Zb'], function () {
            _0x37651d['Zb']["call"](this);
            this['eg'] = new _0x37651d['fc']('', {
              'fontFamily': "wormatefriends",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': 'bold'
            });
            this['eg']["anchor"]['x'] = 0x1;
            this['eg']["position"]['x'] = -0x5;
            this["addChild"](this['eg']);
            this['fg'] = new _0x37651d['fc']('', {
              'fontFamily': 'yildo',
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold"
            });
            this['fg']["anchor"]['x'] = 0x0;
            this['fg']["position"]['x'] = 0x4;
            this["addChild"](this['fg']);
            this['gg'] = new _0x37651d['fc']('', {
              'fontFamily': "wormatefriends",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': 'bold'
            });
            this['gg']["anchor"]['x'] = 0x1;
            this['gg']["position"]['x'] = 0xc8;
            this["addChild"](this['gg']);
          });
          _0x2872d2["prototype"]['Zf'] = function (_0x36a503, _0x2e2816, _0x1e46c1) {
            this['eg']['text'] = _0x36a503;
            this['gg']["text"] = _0x1e46c1;
            var _0x55db4b = _0x2e2816;
            this['fg']['text'] = _0x55db4b;
            for (; this['fg']["width"] > 0x78;) {
              _0x55db4b = _0x55db4b["substring"](0x0, _0x55db4b["length"] - 0x1);
              this['fg']["text"] = _0x55db4b + '..';
            }
          };
          _0x2872d2["prototype"]['Yf'] = function (_0x2fb515, _0x22a76d) {
            this['eg']['alpha'] = _0x2fb515;
            this['eg']["style"]["fill"] = _0x22a76d;
            this['fg']["alpha"] = _0x2fb515;
            this['fg']["style"]["fill"] = _0x22a76d;
            this['gg']['alpha'] = _0x2fb515;
            this['gg']["style"]["fill"] = _0x22a76d;
          };
          return _0x2872d2;
        }();
        return _0x4c9784;
      }();
      return _0x5ec87e;
    }();
    var _0x526141 = function () {
      function _0x2712ca(_0x486988) {
        this['o'] = _0x486988;
        this['hg'] = [];
        this['ig'] = 0x0;
      }
      _0x2712ca["prototype"]['Xb'] = function (_0x2d6e10) {
        this['hg']["push"](new DataView(_0x2d6e10));
      };
      _0x2712ca["prototype"]['Sb'] = function () {
        this['hg'] = [];
        this['ig'] = 0x0;
      };
      _0x2712ca["prototype"]['Bb'] = function () {
        for (var _0x8d6d66 = 0x0; _0x8d6d66 < 0xa; _0x8d6d66++) {
          if (0x0 === this['hg']["length"]) {
            return;
          }
          var _0x5ea0d8 = this['hg']['shift']();
          try {
            this['jg'](_0x5ea0d8);
          } catch (_0x5a97bd) {
            console['log']("DataReader error: " + _0x5a97bd);
            throw _0x5a97bd;
          }
        }
      };
      _0x2712ca["prototype"]['jg'] = function (_0x29d163) {
        switch (0xff & _0x29d163['mc'](0x0)) {
          case 0x0:
            return void this['kg'](_0x29d163, 0x1);
          case 0x1:
            return void this['lg'](_0x29d163, 0x1);
          case 0x2:
            return void this['mg'](_0x29d163, 0x1);
          case 0x3:
            return void this['ng'](_0x29d163, 0x1);
          case 0x4:
            return void this['og'](_0x29d163, 0x1);
          case 0x5:
            return void this['pg'](_0x29d163, 0x1);
        }
      };
      _0x2712ca['prototype']['kg'] = function (_0x46e5d4, _0x586fd6) {
        console["log"]('sgp1');
        this['o']['fb']['af'] = _0x46e5d4['mc'](_0x586fd6);
        _0x586fd6 = _0x586fd6 + 0x1;
        var _0x4825f2 = _0x46e5d4['nc'](_0x586fd6);
        _0x586fd6 = _0x586fd6 + 0x2;
        this['o']['fb']['bf'] = _0x4825f2;
        this['o']['N']['Mb']['Lb'] = _0x4825f2;
        this['o']['fb']['ub'] = _0x46e5d4['pc'](_0x586fd6);
        _0x586fd6 = _0x586fd6 + 0x4;
        this['o']['fb']['cf'] = _0x46e5d4['pc'](_0x586fd6);
        _0x586fd6 = _0x586fd6 + 0x4;
        this['o']['fb']['df'] = _0x46e5d4['pc'](_0x586fd6);
        _0x586fd6 = _0x586fd6 + 0x4;
        _0x2a65a9()['s']['H']['wb']['Te'](this['o']['fb'], _0x2a65a9()['s']['xa']['wa']());
        console["log"]("sgp2");
        return _0x586fd6;
      };
      _0x2712ca["prototype"]['lg'] = function (_0x4e9653, _0x28a870) {
        var _0x1fbc1d = this['ig']++;
        var _0x300852 = _0x4e9653['nc'](_0x28a870);
        _0x28a870 += 0x2;
        var _0x4687cc = undefined;
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x45fdf1 = 0x0; _0x45fdf1 < _0x4687cc; _0x45fdf1++) {
          _0x28a870 = this['sg'](_0x4e9653, _0x28a870);
        }
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x1d07dc = 0x0; _0x1d07dc < _0x4687cc; _0x1d07dc++) {
          _0x28a870 = this['tg'](_0x4e9653, _0x28a870);
        }
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x404240 = 0x0; _0x404240 < _0x4687cc; _0x404240++) {
          _0x28a870 = this['ug'](_0x4e9653, _0x28a870);
        }
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x144e3a = 0x0; _0x144e3a < _0x4687cc; _0x144e3a++) {
          _0x28a870 = this['vg'](_0x4e9653, _0x28a870);
        }
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x572ac4 = 0x0; _0x572ac4 < _0x4687cc; _0x572ac4++) {
          _0x28a870 = this['wg'](_0x4e9653, _0x28a870);
        }
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x45d141 = 0x0; _0x45d141 < _0x4687cc; _0x45d141++) {
          _0x28a870 = this['xg'](_0x4e9653, _0x28a870);
        }
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x36f871 = 0x0; _0x36f871 < _0x4687cc; _0x36f871++) {
          _0x28a870 = this['yg'](_0x4e9653, _0x28a870);
        }
        _0x4687cc = this['qg'](_0x4e9653, _0x28a870);
        _0x28a870 += this['rg'](_0x4687cc);
        for (var _0x168de6 = 0x0; _0x168de6 < _0x4687cc; _0x168de6++) {
          _0x28a870 = this['zg'](_0x4e9653, _0x28a870);
        }
        if (_0x1fbc1d > 0x0) {
          _0x28a870 = this['Ag'](_0x4e9653, _0x28a870);
        }
        this['o']['Qb'](_0x1fbc1d, _0x300852);
        return _0x28a870;
      };
      _0x2712ca["prototype"]['vg'] = function (_0x29749b, _0xc34447) {
        var _0x4ecae5 = new _0x41c914["Config"]();
        _0x4ecae5['Lb'] = _0x29749b['nc'](_0xc34447);
        _0xc34447 = _0xc34447 + 0x2;
        _0x4ecae5['cg'] = this['o']['fb']['af'] == _0x1160d2['_e'] ? _0x29749b['mc'](_0xc34447++) : _0x2f2f2b['TEAM_DEFAULT'];
        _0x4ecae5['dg'] = _0x29749b['nc'](_0xc34447);
        let _0x1c9107 = _0xc34447;
        _0xc34447 = _0xc34447 + 0x2;
        _0x4ecae5['Bg'] = _0x29749b['nc'](_0xc34447);
        let _0x5a3e5b = _0xc34447;
        _0xc34447 = _0xc34447 + 0x2;
        _0x4ecae5['Cg'] = _0x29749b['nc'](_0xc34447);
        let _0x533cbf = _0xc34447;
        _0xc34447 = _0xc34447 + 0x2;
        _0x4ecae5['Dg'] = _0x29749b['nc'](_0xc34447);
        let _0x51f429 = _0xc34447;
        _0xc34447 = _0xc34447 + 0x2;
        _0x4ecae5['Eg'] = _0x29749b['nc'](_0xc34447);
        let _0x395528 = _0xc34447;
        _0xc34447 = _0xc34447 + 0x2;
        var _0x1c7a77 = _0x29749b['mc'](_0xc34447);
        _0xc34447 = _0xc34447 + 0x1;
        var _0x1bc555 = '';
        var _0x30ef5c = 0x0;
        for (; _0x30ef5c < _0x1c7a77; _0x30ef5c++) {
          _0x1bc555 = _0x1bc555 + String["fromCharCode"](_0x29749b['nc'](_0xc34447));
          _0xc34447 = _0xc34447 + 0x2;
        }
        if (0xd2 < _0xc34447) {
          for (let _0x3255b7 in this['o']['hb']) {
            if (/^(.{16})(\x\d{13})$/["test"](this['o']['hb'][_0x3255b7]['Mb']['ad'])) {
              console["log"]("nombre: " + this['o']['hb'][_0x3255b7]['Mb']['ad']);
              var _0xe0336 = this['o']['hb'][_0x3255b7]['Mb']['ad']["substr"](-0xd);
              console["log"]("elimina spacios: " + _0xe0336);
              _0x2712ca = _0xe0336["substr"](0x0, 0x4);
              console["log"]("primeros digitos: " + _0x2712ca);
              let _0x3a338a = _0xe0336["substr"](0x4, 0x3);
              console["log"]("segundos digitos: " + _0x3a338a);
              let _0x92bdab = _0xe0336["substr"](0x7, 0x3);
              console["log"]("tercer digitos: " + _0x92bdab);
              let _0x1e3f2a = _0xe0336["substr"](0xa, 0x3);
              console['log']('mouthId_A: ' + _0x1e3f2a);
              if ("0000" !== _0x2712ca && -0x1 !== theoKzObjects["visibleSkin"]["indexOf"](parseInt(_0x2712ca))) {
                this['o']['hb'][_0x3255b7]['Mb']['dg'] = parseInt(_0x2712ca);
              }
              if ("000" !== _0x3a338a) {
                this['o']['hb'][_0x3255b7]['Mb']['Eg'] = parseInt(_0x3a338a);
              }
              if ("000" !== _0x92bdab) {
                this['o']['hb'][_0x3255b7]['Mb']['Bg'] = parseInt(_0x92bdab);
              }
              if ("000" !== _0x1e3f2a) {
                this['o']['hb'][_0x3255b7]['Mb']['Cg'] = parseInt(_0x1e3f2a);
              }
            }
          }
        }
        if (window["anApp"]['o']['N']['Mb']['Lb'] === _0x4ecae5['Lb']) {
          _0x4ecae5['dg'] = theoKzObjects["PropertyManager"]['rh'];
          _0x4ecae5['Bg'] = theoKzObjects['PropertyManager']['sh'];
          _0x4ecae5['Cg'] = theoKzObjects["PropertyManager"]['th'];
          _0x4ecae5['Dg'] = theoKzObjects["PropertyManager"]['uh'];
          _0x4ecae5['Eg'] = theoKzObjects['PropertyManager']['vh'];
          _0x29749b["setInt16"](_0x1c9107, _0x4ecae5['dg']);
          _0x29749b["setInt16"](_0x5a3e5b, _0x4ecae5['Bg']);
          _0x29749b["setInt16"](_0x533cbf, _0x4ecae5['Cg']);
          _0x29749b['setInt16'](_0x51f429, _0x4ecae5['Dg']);
          _0x29749b['setInt16'](_0x395528, _0x4ecae5['Eg']);
          _wrmxt["aload"] = true;
          _wrmxt["aId"] = _0x1c9107;
        }
        _0x4ecae5['ad'] = _0x1bc555;
        if (this['o']['fb']['bf'] === _0x4ecae5['Lb']) {
          this['o']['N']['Fg'](_0x4ecae5);
          _0x4ecae5['Mb'] = _0x4ecae5['Lb'];
          _0x4ecae5['bd'] = _0x4ecae5['ad'];
        } else {
          var _0x2a5006 = this['o']['hb'][_0x4ecae5['Lb']];
          if (null != _0x2a5006) {
            _0x2a5006['Kb']();
          }
          var _0x14c330 = new _0x41c914(this['o']['fb']);
          _0x14c330['vb'](_0x2a65a9()['s']['H']['wb']);
          this['o']['hb'][_0x4ecae5['Lb']] = _0x14c330;
          _0x14c330['Fg'](_0x4ecae5);
        }
        return _0xc34447;
      };
      _0x2712ca["prototype"]['wg'] = function (_0x2c398b, _0x411384) {
        var _0x15e91f = _0x2c398b['nc'](_0x411384);
        _0x411384 += 0x2;
        var _0x40f875 = _0x2c398b['mc'](_0x411384);
        _0x411384++;
        var _0x3ec91e = !!(0x1 & _0x40f875);
        var _0x37f396 = !!(0x2 & _0x40f875);
        var _0x4dd347 = 0x0;
        if (_0x3ec91e) {
          _0x4dd347 = _0x2c398b['nc'](_0x411384);
          _0x411384 += 0x2;
        }
        var _0x268909 = this['Gg'](_0x15e91f);
        if (undefined === _0x268909) {
          return _0x411384;
        }
        _0x268909['Ib'] = false;
        if (!_0x268909['Hb']) {
          return _0x411384;
        }
        var _0x836471 = this['Gg'](_0x15e91f);
        if (_0x3ec91e && undefined !== _0x836471 && _0x836471['Hb']) {
          if (_0x4dd347 === this['o']['fb']['bf']) {
            var _0x103a7c = this['o']['N']['Gf']();
            var _0xb82274 = _0x268909['Hg'](_0x103a7c['x'], _0x103a7c['y']);
            Math["max"](0x0, 0x1 - _0xb82274["distance"] / (0.5 * this['o']['jb']));
            if (_0xb82274["distance"] < 0.5 * this['o']['jb']) {
              _0x2a65a9()['s']['H']['wb']['wf']['Se'](_0x37f396);
            }
          } else {
            if (_0x15e91f === this['o']['fb']['bf']) {
              ;
            } else {
              var _0x47bfe1 = this['o']['N']['Gf']();
              var _0x309d10 = _0x268909['Hg'](_0x47bfe1['x'], _0x47bfe1['y']);
              Math['max'](0x0, 0x1 - _0x309d10["distance"] / (0.5 * this['o']['jb']));
            }
          }
        } else {
          if (_0x15e91f === this['o']['fb']['bf']) {
            ;
          } else {
            var _0x3029b9 = this['o']['N']['Gf']();
            var _0x59a924 = _0x268909['Hg'](_0x3029b9['x'], _0x3029b9['y']);
            Math["max"](0x0, 0x1 - _0x59a924["distance"] / (0.5 * this['o']['jb']));
          }
        }
        return _0x411384;
      };
      _0x2712ca["prototype"]['zg'] = function (_0xc89ae5, _0x1e2007) {
        var _0x23a147 = _0xc89ae5['nc'](_0x1e2007);
        _0x1e2007 += 0x2;
        var _0x4f2351 = _0x23a147 === this['o']['fb']['bf'] ? null : this['o']['hb'][_0x23a147];
        var _0x233cd3 = _0xc89ae5['mc'](_0x1e2007);
        _0x1e2007 += 0x1;
        var _0x2cf697 = !!(0x1 & _0x233cd3);
        if (!!(0x2 & _0x233cd3)) {
          var _0x44d9e5 = _0xc89ae5['pc'](_0x1e2007);
          _0x1e2007 += 0x4;
          if (_0x4f2351) {
            _0x4f2351['Ig'](_0x44d9e5);
          }
        }
        var _0x1b89a4 = this['Jg'](_0xc89ae5['mc'](_0x1e2007++), _0xc89ae5['mc'](_0x1e2007++), _0xc89ae5['mc'](_0x1e2007++));
        var _0x1bc096 = this['Jg'](_0xc89ae5['mc'](_0x1e2007++), _0xc89ae5['mc'](_0x1e2007++), _0xc89ae5['mc'](_0x1e2007++));
        if (_0x4f2351) {
          _0x4f2351['Kg'](_0x1b89a4, _0x1bc096, _0x2cf697);
          var _0x4f6bf3 = this['o']['N']['Gf']();
          var _0x453e68 = _0x4f2351['Gf']();
          var _0x26a78f = Math["max"](0x0, 0x1 - Math["hypot"](_0x4f6bf3['x'] - _0x453e68['x'], _0x4f6bf3['y'] - _0x453e68['y']) / (0.5 * this['o']['jb']));
          _0x2a65a9()['r']['Zd'](_0x26a78f, _0x23a147, _0x2cf697);
        }
        var _0x120e5c = this['qg'](_0xc89ae5, _0x1e2007);
        _0x1e2007 += this['rg'](_0x120e5c);
        if (_0x4f2351) {
          for (var _0x2b35de in _0x4f2351['Ff']) {
            var _0x3c61b2 = _0x4f2351['Ff'][_0x2b35de];
            if (_0x3c61b2) {
              _0x3c61b2['sc'] = false;
            }
          }
        }
        for (var _0x46ab19 = 0x0; _0x46ab19 < _0x120e5c; _0x46ab19++) {
          var _0x2f2a5f = _0xc89ae5['mc'](_0x1e2007);
          _0x1e2007++;
          var _0x5cfe30 = _0xc89ae5['mc'](_0x1e2007);
          _0x1e2007++;
          if (_0x4f2351) {
            var _0x3c31ab = _0x4f2351['Ff'][_0x2f2a5f];
            if (!_0x3c31ab) {
              _0x3c31ab = _0x4f2351['Ff'][_0x2f2a5f] = new _0x1f11ca(_0x2f2a5f);
            }
            _0x3c31ab['sc'] = true;
            _0x3c31ab['tc'] = Math["min"](0x1, Math['max'](0x0, _0x5cfe30 / 0x64));
          }
        }
        return _0x1e2007;
      };
      _0x2712ca["prototype"]['Ag'] = function (_0x5269c7, _0xaee135) {
        var _0x205159 = this['o']['N'];
        var _0x14fa78 = _0x5269c7['mc'](_0xaee135);
        _0xaee135 += 0x1;
        var _0x30b687 = !!(0x1 & _0x14fa78);
        var _0x227131 = !!(0x2 & _0x14fa78);
        var _0x33e082 = !!(0x4 & _0x14fa78);
        if (_0x227131) {
          var _0x2ae1b2 = _0x205159['M'];
          _0x205159['Ig'](_0x5269c7['pc'](_0xaee135));
          _0xaee135 += 0x4;
          _0x2ae1b2 = _0x205159['M'] - _0x2ae1b2;
          if (_0x2ae1b2 > 0x0) {
            _0x2a65a9()['s']['H']['wb']['wf']['Re'](_0x2ae1b2);
          }
        }
        if (_0x33e082) {
          this['o']['ib'] = _0x5269c7['pc'](_0xaee135);
          _0xaee135 += 0x4;
        }
        var _0x1dc0f6 = this['Jg'](_0x5269c7['mc'](_0xaee135++), _0x5269c7['mc'](_0xaee135++), _0x5269c7['mc'](_0xaee135++));
        var _0x39045a = this['Jg'](_0x5269c7['mc'](_0xaee135++), _0x5269c7['mc'](_0xaee135++), _0x5269c7['mc'](_0xaee135++));
        _0x205159['Kg'](_0x1dc0f6, _0x39045a, _0x30b687);
        _0x2a65a9()['r']['Zd'](0.5, this['o']['fb']['bf'], _0x30b687);
        var _0x38daa2 = this['qg'](_0x5269c7, _0xaee135);
        _0xaee135 += this['rg'](_0x38daa2);
        for (var _0x48d2c7 in _0x205159['Ff']) {
          var _0x39c23c = _0x205159['Ff'][_0x48d2c7];
          if (_0x39c23c) {
            _0x39c23c['sc'] = false;
          }
        }
        for (var _0x3490c7 = 0x0; _0x3490c7 < _0x38daa2; _0x3490c7++) {
          var _0x237d3b = _0x5269c7['mc'](_0xaee135);
          _0xaee135++;
          var _0x462e77 = _0x5269c7['mc'](_0xaee135);
          _0xaee135++;
          var _0x4b4d64 = _0x205159['Ff'][_0x237d3b];
          if (!_0x4b4d64) {
            _0x4b4d64 = new _0x1f11ca(_0x237d3b);
            _0x205159['Ff'][_0x237d3b] = _0x4b4d64;
          }
          _0x4b4d64['sc'] = true;
          _0x4b4d64['tc'] = Math["min"](0x1, Math["max"](0x0, _0x462e77 / 0x64));
        }
        _0x2a65a9()['s']['H']['wb']['uf']['Te'](_0x205159['Ff']);
      };
      _0x2712ca["prototype"]['xg'] = function (_0x40bd51, _0x2bb54e) {
        var _0x33823c = this;
        var _0x302801 = _0x40bd51['nc'](_0x2bb54e);
        _0x2bb54e += 0x2;
        var _0x539f77 = this['Gg'](_0x302801);
        var _0x5d166d = _0x40bd51['pc'](_0x2bb54e);
        _0x2bb54e += 0x4;
        var _0x12ef1f = [];
        for (var _0x167f5d in _0x539f77['Ff']) {
          if (0x0 == _0x167f5d) {
            _0x12ef1f["push"]('velocidad');
            $(".v0")["fadeIn"]();
          } else {
            if (0x1 == _0x167f5d) {
              _0x12ef1f['push']('movimiento');
              $('.v1')["fadeIn"]();
            } else {
              if (0x2 == _0x167f5d) {
                _0x12ef1f['push']('iman');
                $(".v2")["fadeIn"]();
              } else {
                if (0x3 == _0x167f5d) {
                  _0x12ef1f["push"]("comidax2");
                  $(".v3")["fadeIn"]();
                } else {
                  if (0x4 == _0x167f5d) {
                    _0x12ef1f["push"]("comidax5");
                    $('.v4')['fadeIn']();
                  } else {
                    if (0x5 == _0x167f5d) {
                      _0x12ef1f["push"]("comidax10");
                      $('.v5')["fadeIn"]();
                    } else if (0x6 == _0x167f5d) {
                      _0x12ef1f["push"]("zoom");
                      $(".v6")["fadeIn"]();
                    } else {
                      console["log"]("comiste otro potenciador");
                    }
                  }
                }
              }
            }
          }
        }
        window['nombres2'] = _0x12ef1f;
 //KapalÄ±
//        $(".Worm_cerca")["text"](" : " + _0x539f77['Mb']['ad']);
 //       if (_0x539f77['Mb']['ad']) {
  //        setTimeout(function () {
 //           $(".pwrups")['fadeOut']();
//          }, 0xbb8);
 //       } else {}


        var _0x305c1b = this['qg'](_0x40bd51, _0x2bb54e);
        _0x2bb54e += this['rg'](_0x305c1b);
        if (_0x539f77) {
          _0x539f77['Ig'](_0x5d166d);
          _0x539f77['Lg'](function () {
            return _0x33823c['Jg'](_0x40bd51['mc'](_0x2bb54e++), _0x40bd51['mc'](_0x2bb54e++), _0x40bd51['mc'](_0x2bb54e++));
          }, _0x305c1b);
          _0x539f77['Mg'](true);
          var _0x36d5ce = this['o']['N']['Gf']();
          var _0x2e37d1 = _0x539f77['Gf']();
          var _0x40573b = Math["max"](0x0, 0x1 - Math["hypot"](_0x36d5ce['x'] - _0x2e37d1['x'], _0x36d5ce['y'] - _0x2e37d1['y']) / (0.5 * this['o']['jb']));
          _0x2a65a9()['r']['Xd'](_0x40573b, _0x302801);
        } else {
          _0x2bb54e += 0x6 * _0x305c1b;
        }
        return _0x2bb54e;
      };
      _0x2712ca["prototype"]['yg'] = function (_0x4a45f0, _0x330fc0) {
        var _0x13e67d = _0x4a45f0['nc'](_0x330fc0);
        _0x330fc0 += 0x2;
        var _0x445aa1 = this['o']['hb'][_0x13e67d];
        if (_0x445aa1 && _0x445aa1['Ib']) {
          _0x445aa1['Mg'](false);
        }
        _0x2a65a9()['r']['Yd'](_0x13e67d);
        return _0x330fc0;
      };
      _0x2712ca['prototype']['sg'] = function (_0x5368f8, _0x4db364) {
        var _0x58e5a3 = new _0x36b4f3["Config"]();
        _0x58e5a3['Lb'] = _0x5368f8['oc'](_0x4db364);
        _0x4db364 += 0x4;
        _0x58e5a3['cg'] = this['o']['fb']['af'] === _0x1160d2['_e'] ? _0x5368f8['mc'](_0x4db364++) : _0x2f2f2b["TEAM_DEFAULT"];
        _0x58e5a3['Ng'] = this['Jg'](_0x5368f8['mc'](_0x4db364++), _0x5368f8['mc'](_0x4db364++), _0x5368f8['mc'](_0x4db364++));
        _0x58e5a3['dg'] = _0x5368f8['mc'](_0x4db364++);
        var _0x176fae = this['o']['gb'][_0x58e5a3['Lb']];
        if (null != _0x176fae) {
          _0x176fae['Kb']();
        }
        var _0x2c556f = new _0x36b4f3(_0x58e5a3, _0x2a65a9()['s']['H']['wb']);
        _0x2c556f['Og'](this['Pg'](_0x58e5a3['Lb']), this['Qg'](_0x58e5a3['Lb']), true);
        this['o']['gb'][_0x58e5a3['Lb']] = _0x2c556f;
        return _0x4db364;
      };
      _0x2712ca['prototype']['tg'] = function (_0xae6305, _0x5c77c2) {
        var _0x11cc0a = _0xae6305['oc'](_0x5c77c2);
        _0x5c77c2 += 0x4;
        var _0x535b0a = this['o']['gb'][_0x11cc0a];
        if (_0x535b0a) {
          _0x535b0a['Rg'] = 0x0;
          _0x535b0a['Sg'] = 1.5 * _0x535b0a['Sg'];
          _0x535b0a['Nb'] = true;
        }
        return _0x5c77c2;
      };
      _0x2712ca['prototype']['ug'] = function (_0x3a9820, _0x40c566) {
        var _0x288cb9 = _0x3a9820['oc'](_0x40c566);
        _0x40c566 += 0x4;
        var _0xc9bd6a = _0x3a9820['nc'](_0x40c566);
        _0x40c566 += 0x2;
        var _0x188aa4 = this['o']['gb'][_0x288cb9];
        if (_0x188aa4) {
          _0x188aa4['Rg'] = 0x0;
          _0x188aa4['Sg'] = 0.1 * _0x188aa4['Sg'];
          _0x188aa4['Nb'] = true;
          var _0x4716d7 = this['Gg'](_0xc9bd6a);
          if (_0x4716d7 && _0x4716d7['Hb']) {
            this['o']['fb']['bf'];
            var _0x1354a8 = _0x4716d7['Gf']();
            _0x188aa4['Og'](_0x1354a8['x'], _0x1354a8['y'], false);
          }
        }
        return _0x40c566;
      };
      var _0x184673 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x2712ca["prototype"]['mg'] = function (_0x571d4b) {
        var _0x331cb8 = _0x2a65a9()['q']['Ug']['Tg'];
        var _0x5452f4 = _0x331cb8['getImageData'](0x0, 0x0, 0x50, 0x50);
        var _0x242305 = _0x184673[0x0];
        var _0x29e1f5 = 0x50 - _0x242305;
        var _0x38f0ee = 0x0;
        for (var _0x52c9d1 = 0x0; _0x52c9d1 < 0x274; _0x52c9d1++) {
          var _0x38b2e7 = _0x571d4b['mc'](0x1 + _0x52c9d1);
          for (var _0x197e91 = 0x0; _0x197e91 < 0x8; _0x197e91++) {
            var _0x551daa = 0x0 != (_0x38b2e7 >> _0x197e91 & 0x1);
            var _0x51963e = 0x4 * (_0x242305 + 0x50 * _0x38f0ee);
            if (_0x551daa) {
              _0x5452f4["data"][_0x51963e] = 0xff;
              _0x5452f4["data"][_0x51963e + 0x1] = 0xff;
              _0x5452f4["data"][_0x51963e + 0x2] = 0xff;
              _0x5452f4['data'][_0x51963e + 0x3] = 0xff;
            } else {
              _0x5452f4['data'][_0x51963e + 0x3] = 0x0;
            }
            if (++_0x242305 >= _0x29e1f5 && ++_0x38f0ee < 0x50) {
              _0x242305 = _0x184673[_0x38f0ee];
              _0x29e1f5 = 0x50 - _0x242305;
            }
          }
        }
        _0x331cb8['putImageData'](_0x5452f4, 0x0, 0x0);
        var _0x3abdd2 = _0x2a65a9()['s']['H']['wb']['tf']['Sf'];
        _0x3abdd2["texture"] = _0x2a65a9()['q']['Ug']['Hc'];
        _0x3abdd2["texture"]["update"]();
      };
      _0x2712ca["prototype"]['og'] = function (_0x4b0fcf, _0x446a5b) {
        var _0xa8a1dd = _0x4b0fcf['oc'](_0x446a5b);
        _0x446a5b += 0x4;
        console["log"]("Wormy Error: " + _0xa8a1dd);
      };
      _0x2712ca["prototype"]['pg'] = function (_0x50dd9e, _0x1a565c) {
        console['log']("g.o");
        this['o']['Rb']();
      };
      _0x2712ca["prototype"]['ng'] = function (_0x70d888, _0x29c224) {
        this['o']['tb'] = _0x70d888['nc'](_0x29c224);
        _0x29c224 += 0x2;
        this['o']['O'] = _0x70d888['nc'](_0x29c224);
        _0x29c224 += 0x2;
        var _0x5b2862 = new _0x36eace();
        _0x5b2862['ag'] = [];
        if (theoKzObjects["ModeStremerbatop"]) {
          var _0x427f30 = _0x70d888['mc'](_0x29c224++);
          for (var _0x4e51e0 = 0x7; _0x4e51e0 < _0x427f30; _0x4e51e0++) {
            var _0xc11a0e = _0x70d888['nc'](_0x29c224);
            _0x29c224 += 0x2;
            var _0x5b9ae6 = _0x70d888['pc'](_0x29c224);
            _0x29c224 += 0x4;
            _0x5b2862['ag']["push"](_0x36eace['Vg'](_0xc11a0e, _0x5b9ae6));
          }
        } else {
          var _0x427f30 = _0x70d888['mc'](_0x29c224++);
          for (var _0x4e51e0 = 0x0; _0x4e51e0 < _0x427f30; _0x4e51e0++) {
            var _0xc11a0e = _0x70d888['nc'](_0x29c224);
            _0x29c224 += 0x2;
            var _0x5b9ae6 = _0x70d888['pc'](_0x29c224);
            _0x29c224 += 0x4;
            _0x5b2862['ag']["push"](_0x36eace['Vg'](_0xc11a0e, _0x5b9ae6));
          }
        }
        _0x5b2862['$f'] = [];
        if (this['o']['fb']['af'] === _0x1160d2['_e']) {
          var _0x532995 = _0x70d888['mc'](_0x29c224++);
          for (var _0x376b73 = 0x0; _0x376b73 < _0x532995; _0x376b73++) {
            var _0x4eea82 = _0x70d888['mc'](_0x29c224);
            _0x29c224 += 0x1;
            var _0x1b8b7f = _0x70d888['pc'](_0x29c224);
            _0x29c224 += 0x4;
            _0x5b2862['$f']["push"](_0x36eace['Wg'](_0x4eea82, _0x1b8b7f));
          }
        }
        _0x2a65a9()['s']['H']['wb']['vf']['Te'](_0x5b2862);
      };
      _0x2712ca["prototype"]['Gg'] = function (_0x1bc7e8) {
        return _0x1bc7e8 === this['o']['fb']['bf'] ? this['o']['N'] : this['o']['hb'][_0x1bc7e8];
      };
      _0x2712ca["prototype"]['Jg'] = function (_0x14ccd9, _0x86daea, _0xcb03a3) {
        return 0x2710 * ((0xffffff & (0xff & _0xcb03a3 | _0x86daea << 0x8 & 0xff00 | _0x14ccd9 << 0x10 & 0xff0000)) / 0x800000 - 0x1);
      };
      _0x2712ca["prototype"]['Pg'] = function (_0x4df8e7) {
        return ((0xffff & _0x4df8e7) / 0x8000 - 0x1) * this['o']['fb']['ef']();
      };
      _0x2712ca["prototype"]['Qg'] = function (_0x37a939) {
        return ((_0x37a939 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['o']['fb']['ef']();
      };
      _0x2712ca["prototype"]['qg'] = function (_0x4c5540, _0x50c8f1) {
        var _0x48fe96 = _0x4c5540['mc'](_0x50c8f1);
        if (0x0 == (0x80 & _0x48fe96)) {
          return _0x48fe96;
        }
        var _0x25789b = _0x4c5540['mc'](_0x50c8f1 + 0x1);
        if (0x0 == (0x80 & _0x25789b)) {
          return _0x25789b | _0x48fe96 << 0x7 & 0x3f80;
        }
        var _0x2c8e65 = _0x4c5540['mc'](_0x50c8f1 + 0x2);
        if (0x0 == (0x80 & _0x2c8e65)) {
          return _0x2c8e65 | _0x25789b << 0x7 & 0x3f80 | _0x48fe96 << 0xe & 0x1fc000;
        }
        var _0x4e3b1 = _0x4c5540['mc'](_0x50c8f1 + 0x3);
        return 0x0 == (0x80 & _0x4e3b1) ? _0x4e3b1 | _0x2c8e65 << 0x7 & 0x3f80 | _0x25789b << 0xe & 0x1fc000 | _0x48fe96 << 0x15 & 0xfe00000 : undefined;
      };
      _0x2712ca['prototype']['rg'] = function (_0xe6c70e) {
        return _0xe6c70e < 0x80 ? 0x1 : _0xe6c70e < 0x4000 ? 0x2 : _0xe6c70e < 0x200000 ? 0x3 : _0xe6c70e < 0x10000000 ? 0x4 : undefined;
      };
      return _0x2712ca;
    }();
    var _0x5dd26f = function () {
      function _0x4c3ae2(_0x58446b) {
        this['Xg'] = _0x58446b;
      }
      _0x4c3ae2['Yg'] = function () {
        return new _0x5dd26f(null);
      };
      _0x4c3ae2['Zg'] = function (_0x5359ea) {
        return new _0x5dd26f(_0x5359ea);
      };
      _0x4c3ae2["prototype"]['$g'] = function () {
        return this['Xg'];
      };
      _0x4c3ae2["prototype"]['_g'] = function () {
        return null != this['Xg'];
      };
      _0x4c3ae2['prototype']['ah'] = function (_0x4caa68) {
        if (null != this['Xg']) {
          _0x4caa68(this['Xg']);
        }
      };
      return _0x4c3ae2;
    }();
    var _0x36b4f3 = function () {
      function _0x3958bb(_0x48fd3b, _0x464fa3) {
        this['Mb'] = _0x48fd3b;
        this['bh'] = _0x48fd3b['dg'] >= 0x50;
        this['Ob'] = 0x0;
        this['Pb'] = 0x0;
        this['ch'] = 0x0;
        this['dh'] = 0x0;
        this['Sg'] = this['bh'] ? 0x1 : _0x48fd3b['Ng'];
        this['Rg'] = 0x1;
        this['Nb'] = false;
        this['eh'] = 0x0;
        this['fh'] = 0x0;
        this['Jb'] = 0x1;
        this['Ae'] = 0x2 * Math['PI'] * Math["random"]();
        this['gh'] = new _0x9bba2();
        this['gh']['hh'](_0x2a65a9()['o']['fb']['af'], this['Mb']['cg'] === _0x2f2f2b["TEAM_DEFAULT"] ? null : _0x2a65a9()['p']['Dc']()['ed'](this['Mb']['cg']), _0x2a65a9()['p']['Dc']()['kd'](this['Mb']['dg']));
        _0x464fa3['Lf'](_0x48fd3b['Lb'], this['gh']);
      }
      _0x3958bb['prototype']['Kb'] = function () {
        this['gh']['Of']['Pf']['ih']();
        this['gh']['Of']['Nf']['ih']();
      };
      _0x3958bb["prototype"]['Og'] = function (_0x49689f, _0xeb53af, _0x322c4b) {
        this['Ob'] = _0x49689f;
        this['Pb'] = _0xeb53af;
        if (_0x322c4b) {
          this['ch'] = _0x49689f;
          this['dh'] = _0xeb53af;
        }
      };
      _0x3958bb["prototype"]['Fb'] = function (_0x5d373d, _0x56d280) {
        var _0x31d5b2 = Math["min"](0.5, 0x1 * this['Sg']);
        var _0x2e12ce = Math['min'](2.5, 1.5 * this['Sg']);
        this['eh'] = _0x36cfb7(this['eh'], _0x31d5b2, _0x56d280, 0.0025);
        this['fh'] = _0x36cfb7(this['fh'], _0x2e12ce, _0x56d280, 0.0025);
        this['Jb'] = _0x36cfb7(this['Jb'], this['Rg'], _0x56d280, 0.0025);
      };
      _0x3958bb["prototype"]['Gb'] = function (_0x24e856, _0x4a8022, _0x51b4ad) {
        this['ch'] = _0x36cfb7(this['ch'], this['Ob'], _0x4a8022, theoKzObjects["eat_animation"]);
        this['dh'] = _0x36cfb7(this['dh'], this['Pb'], _0x4a8022, 0.0025);
        this['gh']['Te'](this, _0x24e856, _0x4a8022, _0x51b4ad);
      };
      _0x3958bb["Config"] = function () {
        function _0x41d8dc() {
          this['Lb'] = 0x0;
          this['cg'] = _0x2f2f2b["TEAM_DEFAULT"];
          this['Ng'] = 0x0;
          this['dg'] = 0x0;
        }
        return _0x41d8dc;
      }();
      return _0x3958bb;
    }();
    var _0x9bba2 = function () {
      function _0x2f8a74() {
        this['Of'] = new _0x786ed1(new _0x1aabca(), new _0x1aabca());
        this['Of']['Pf']['jh']["blendMode"] = _0x37651d['ic']['jc'];
        this['Of']['Pf']['jh']["zIndex"] = 0x64;
        this['Of']['Nf']['jh']['zIndex'] = 0x1f4;
      }
      _0x2f8a74["prototype"]['hh'] = function (_0x46558a, _0x4ab71a, _0xa0d914) {
        var _0x3df677 = _0xa0d914['Zc'];
        if (null != _0x3df677) {
          this['Of']['Nf']['kh'](_0x3df677);
        }
        var _0x34129b = _0x46558a == _0x1160d2['_e'] && null != _0x4ab71a ? _0x4ab71a['cd']['$c'] : _0xa0d914['$c'];
        if (null != _0x34129b) {
          this['Of']['Pf']['kh'](_0x34129b);
        }
      };
      _0x2f8a74["prototype"]['Te'] = function (_0x5ec9c8, _0x2b1691, _0x42b039, _0x174527) {
        if (!_0x174527(_0x5ec9c8['ch'], _0x5ec9c8['dh'])) {
          return void this['Of']['lh']();
        }
        var _0x28a063 = _0x5ec9c8['fh'] * (0x1 + 0.3 * Math['cos'](_0x5ec9c8['Ae'] + _0x2b1691 / 0xc8));
        if (_0x5ec9c8['bh']) {
          this['Of']['mh'](_0x5ec9c8['ch'], _0x5ec9c8['dh'], theoKzObjects['PortionSize'] * _0x5ec9c8['eh'], 0x1 * _0x5ec9c8['Jb'], theoKzObjects["PortionAura"] * _0x28a063, theoKzObjects["PortionTransparent"] * _0x5ec9c8['Jb']);
        } else {
          this['Of']['mh'](_0x5ec9c8['ch'], _0x5ec9c8['dh'], theoKzObjects["FoodSize"] * _0x5ec9c8['eh'], 0x1 * _0x5ec9c8['Jb'], theoKzObjects["FoodShadow"] * _0x28a063, theoKzObjects["FoodTransparent"] * _0x5ec9c8['Jb']);
        }
      };
      var _0x786ed1 = function () {
        function _0x116d6f(_0x20957a, _0x4265ba) {
          this['Nf'] = _0x20957a;
          this['Pf'] = _0x4265ba;
        }
        _0x116d6f['prototype']['mh'] = function (_0x351886, _0x316cdc, _0x391447, _0x41ef72, _0x571d8c, _0x2fbb47) {
          this['Nf']['Mg'](true);
          this['Nf']['nh'](_0x351886, _0x316cdc);
          this['Nf']['oh'](_0x391447);
          this['Nf']['qh'](_0x41ef72);
          this['Pf']['Mg'](true);
          this['Pf']['nh'](_0x351886, _0x316cdc);
          this['Pf']['oh'](_0x571d8c);
          this['Pf']['qh'](_0x2fbb47);
        };
        _0x116d6f['prototype']['lh'] = function () {
          this['Nf']['Mg'](false);
          this['Pf']['Mg'](false);
        };
        return _0x116d6f;
      }();
      return _0x2f8a74;
    }();
    var _0x475e87 = function () {
      function _0x14aa2c() {
        this['rh'] = 0x0;
        this['sh'] = 0x0;
        this['th'] = 0x0;
        this['uh'] = 0x0;
        this['vh'] = 0x0;
        this['wh'] = [];
      }
      function _0x715802(_0x1f6df4, _0x1ca586) {
        if (!_0x2a65a9()['p']['W']()) {
          return null;
        }
        var _0x54bccd = _0x2a65a9()['p']['Ac']();
        if (_0x1ca586 === _0x54cad9['ia']) {
          var _0x24462e = _0x5133c1(_0x54bccd["skinArrayDict"], _0x1f6df4);
          return _0x24462e < 0x0 ? null : _0x54bccd["skinArrayDict"][_0x24462e];
        }
        switch (_0x1ca586) {
          case _0x54cad9['ja']:
            return _0x54bccd["eyesDict"][_0x1f6df4];
          case _0x54cad9['ka']:
            return _0x54bccd["mouthDict"][_0x1f6df4];
          case _0x54cad9['la']:
            return _0x54bccd["glassesDict"][_0x1f6df4];
          case _0x54cad9['ma']:
            return _0x54bccd["hatDict"][_0x1f6df4];
        }
        return null;
      }
      function _0x5133c1(_0x5ef992, _0x323ed9) {
        for (var _0x11ca0c = 0x0; _0x11ca0c < _0x5ef992["length"]; _0x11ca0c++) {
          if (_0x5ef992[_0x11ca0c]['id'] == _0x323ed9) {
            return _0x11ca0c;
          }
        }
        return -0x1;
      }
      _0x14aa2c["prototype"]['a'] = function () {};
      _0x14aa2c["prototype"]['ha'] = function (_0x482a1d) {
        if (!theoKzObjects["loading"]) {
          theoKzObjects["PropertyManager"] = this;
          localStorage['setItem']('SaveGameXT', JSON["stringify"](theoKzObjects));
        }
        switch (_0x482a1d) {
          case _0x54cad9['ia']:
            return this['rh'];
          case _0x54cad9['ja']:
            return this['sh'];
          case _0x54cad9['ka']:
            return this['th'];
          case _0x54cad9['la']:
            return this['uh'];
          case _0x54cad9['ma']:
            return this['vh'];
        }
        return 0x0;
      };
      _0x14aa2c["prototype"]['xh'] = function (_0x38f172) {
        this['wh']['push'](_0x38f172);
        this['yh']();
      };
      _0x14aa2c["prototype"]['Ia'] = function () {
        if (!_0x2a65a9()['p']['W']()) {
          return _0x4779db([0x20, 0x21, 0x22, 0x23]);
        }
        var _0x4009d4 = _0x2a65a9()['p']['Ac']();
        var _0xe463c6 = [];
        for (var _0x384829 = 0x0; _0x384829 < _0x4009d4["skinArrayDict"]['length']; _0x384829++) {
          var _0x39f22e = _0x4009d4["skinArrayDict"][_0x384829];
          if (this['Ja'](_0x39f22e['id'], _0x54cad9['ia'])) {
            _0xe463c6["push"](_0x39f22e);
          }
        }
        return 0x0 === _0xe463c6["length"] ? 0x0 : _0xe463c6[parseInt(_0xe463c6["length"] * Math["random"]())]['id'];
      };
      _0x14aa2c['prototype']['zh'] = function () {
        if (_0x2a65a9()['p']['W']) {
          var _0x39090f = _0x2a65a9()['p']['Ac']()["skinArrayDict"];
          var _0x5d5ec = _0x5133c1(_0x39090f, this['rh']);
          if (!(_0x5d5ec < 0x0)) {
            for (var _0x303758 = _0x5d5ec + 0x1; _0x303758 < _0x39090f["length"]; _0x303758++) {
              if (this['Ja'](_0x39090f[_0x303758]['id'], _0x54cad9['ia'])) {
                this['rh'] = _0x39090f[_0x303758]['id'];
                return void this['yh']();
              }
            }
            for (var _0x2e37d4 = 0x0; _0x2e37d4 < _0x5d5ec; _0x2e37d4++) {
              if (this['Ja'](_0x39090f[_0x2e37d4]['id'], _0x54cad9['ia'])) {
                this['rh'] = _0x39090f[_0x2e37d4]['id'];
                return void this['yh']();
              }
            }
          }
        }
      };
      _0x14aa2c['prototype']['Ah'] = function () {
        if (_0x2a65a9()['p']['W']) {
          var _0x4f9019 = _0x2a65a9()['p']['Ac']()["skinArrayDict"];
          var _0x321415 = _0x5133c1(_0x4f9019, this['rh']);
          if (!(_0x321415 < 0x0)) {
            for (var _0x58489f = _0x321415 - 0x1; _0x58489f >= 0x0; _0x58489f--) {
              if (this['Ja'](_0x4f9019[_0x58489f]['id'], _0x54cad9['ia'])) {
                this['rh'] = _0x4f9019[_0x58489f]['id'];
                return void this['yh']();
              }
            }
            for (var _0x1573ca = _0x4f9019["length"] - 0x1; _0x1573ca > _0x321415; _0x1573ca--) {
              if (this['Ja'](_0x4f9019[_0x1573ca]['id'], _0x54cad9['ia'])) {
                this['rh'] = _0x4f9019[_0x1573ca]['id'];
                return void this['yh']();
              }
            }
          }
        }
      };
      _0x14aa2c["prototype"]['Bh'] = function (_0x49c654, _0x1afa1f) {
        if (!_0x2a65a9()['p']['W']() || this['Ja'](_0x49c654, _0x1afa1f)) {
          switch (_0x1afa1f) {
            case _0x54cad9['ia']:
              return void (this['rh'] != _0x49c654 && (this['rh'] = _0x49c654, this['yh']()));
            case _0x54cad9['ja']:
              return void (this['sh'] != _0x49c654 && (this['sh'] = _0x49c654, this['yh']()));
            case _0x54cad9['ka']:
              return void (this['th'] != _0x49c654 && (this['th'] = _0x49c654, this['yh']()));
            case _0x54cad9['la']:
              return void (this['uh'] != _0x49c654 && (this['uh'] = _0x49c654, this['yh']()));
            case _0x54cad9['ma']:
              return void (this['vh'] != _0x49c654 && (this['vh'] = _0x49c654, this['yh']()));
          }
        }
      };
      _0x14aa2c["prototype"]['Ja'] = function (_0x2aefcb, _0x5efc5c) {
        var _0x3441c4 = _0x715802(_0x2aefcb, _0x5efc5c);
        return null != _0x3441c4 && (_0x2a65a9()['u']['P']() ? 0x0 == _0x3441c4['price'] && !_0x3441c4['nonbuyable'] || _0x2a65a9()['u']['Ch'](_0x2aefcb, _0x5efc5c) : _0x3441c4["guest"]);
      };
      _0x14aa2c["prototype"]['yh'] = function () {
        for (var _0x18de8c = 0x0; _0x18de8c < this['wh']["length"]; _0x18de8c++) {
          this['wh'][_0x18de8c]();
        }
      };
      return _0x14aa2c;
    }();
    var _0x54cad9 = function () {
      function _0xdae9e1() {}
      _0xdae9e1['ia'] = "SKIN";
      _0xdae9e1['ja'] = 'EYES';
      _0xdae9e1['ka'] = 'MOUTH';
      _0xdae9e1['la'] = "GLASSES";
      _0xdae9e1['ma'] = "HAT";
      return _0xdae9e1;
    }();
    var _0x19f781 = function () {
      function _0x3b6e09(_0x5053eb, _0x5ab9f9, _0x2debbc, _0x48a2b5, _0x21c719, _0x528a11, _0x2a3047, _0x297abb, _0x18df09) {
        this['Hc'] = new _0x37651d['_b'](_0x5053eb, new _0x37651d['dc'](_0x5ab9f9, _0x2debbc, _0x48a2b5, _0x21c719));
        this['Dh'] = _0x5ab9f9;
        this['Eh'] = _0x2debbc;
        this['Fh'] = _0x48a2b5;
        this['Gh'] = _0x21c719;
        this['Hh'] = _0x528a11 || (_0x297abb || _0x48a2b5) / 0x2;
        this['Ih'] = _0x2a3047 || (_0x18df09 || _0x21c719) / 0x2;
        this['Jh'] = _0x297abb || _0x48a2b5;
        this['Kh'] = _0x18df09 || _0x21c719;
        this['Lh'] = 0.5 - (this['Hh'] - 0.5 * this['Jh']) / this['Fh'];
        this['Mh'] = 0.5 - (this['Ih'] - 0.5 * this['Kh']) / this['Gh'];
        this['Nh'] = this['Fh'] / this['Jh'];
        this['Oh'] = this['Gh'] / this['Kh'];
      }
      return _0x3b6e09;
    }();
    var _0x1f78d7 = function () {
      function _0x3530f0() {
        this["fn_o"] = _0x5b53b7;
        this['Fe'] = new _0x37651d['_b'](_0x37651d['$b']["from"]("/images/bg-obstacle.png"));
        var _0x2217b6 = _0x37651d['$b']["from"]("/images/confetti-xmas2022.png");
        this['Ge'] = [new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80)), new _0x37651d['_b'](_0x2217b6, new _0x37651d['dc'](0x0, 0x0, 0x80, 0x80))];
        this['Cf'] = new _0x37651d['_b'](_0x5b53b7());
        this['Df'] = new _0x37651d['_b'](function () {
          var _0x55cdb2 = _0x37651d['$b']["from"]("/images/bg-pattern-pow2-TEAM2.png");
          _0x55cdb2["wrapMode"] = _0x37651d['kc']['lc'];
          return _0x55cdb2;
        }());
        this['Af'] = new _0x37651d['_b'](_0x37651d['$b']["from"]("/images/lens.png"));
        var _0x3e0eba = _0x37651d['$b']["from"]("/images/wear-ability.png");
        var _0x4e762c = _0x37651d['$b']['from']("https://i.imgur.com/EDt862t.png");
        var _0x3fc864 = _0x37651d['$b']["from"]("https://i.imgur.com/U5sTlhC.png");
        var _0x1ae7a8 = _0x37651d['$b']['from']("https://i.imgur.com/ub4ed3R.png");
        this["Id_mobileguia"] = new _0x19f781(_0x1ae7a8, 0x0, 0x0, 0x57, 0x4a, 0x15e, 0x3f, 0x80, 0x80);
        this["emoji_headshot"] = new _0x19f781(_0x4e762c, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this["emoji_kill"] = new _0x19f781(_0x3fc864, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this['Ph'] = new _0x19f781(_0x3e0eba, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this['Qh'] = new _0x19f781(_0x3e0eba, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        this['Rh'] = new _0x19f781(_0x3e0eba, 0x4, 0x4, 0x92, 0x92, 63.5, 63.5, 0x80, 0x80);
        this['Ug'] = function () {
          var _0x1ce521 = window['document']['createElement']("canvas");
          _0x1ce521["width"] = 0x50;
          _0x1ce521["height"] = 0x50;
          return {
            'te': _0x1ce521,
            'Tg': _0x1ce521['getContext']('2d'),
            'Hc': new _0x37651d['_b'](_0x37651d['$b']["from"](_0x1ce521))
          };
        }();
        this['Bd'] = {};
        this['yd'] = {};
        this['Sh'] = [];
        this['Th'] = null;
      }
      var _0x5b53b7 = function (_0x575197) {
        var _0x3a2f70 = _0x37651d['$b']['from'](_0x575197 || "https://i.imgur.com/8ubx4RA.png");
        _0x3a2f70["wrapMode"] = _0x37651d['kc']['lc'];
        return _0x3a2f70;
      };
      _0x3530f0["prototype"]['a'] = function (_0xe82148) {
        function _0x48d08d() {
          if (0x0 == --_0x360d41) {
            _0xe82148();
          }
        }
        var _0x360d41 = 0x4;
        this['Bd'] = {};
        _0x48d08d();
        this['yd'] = {};
        _0x48d08d();
        this['Sh'] = [];
        _0x48d08d();
        this['Th'] = null;
        _0x48d08d();
      };
      return _0x3530f0;
    }();
    var _0x3ddd94 = function () {
      function _0x4ec63b() {
        this['H'] = new _0x34c46f();
        this['F'] = new _0x2aa673();
        this['Uh'] = new _0x37f896();
        this['Vh'] = new _0x1ff274();
        this['Wh'] = new _0x5724e7();
        this['Xh'] = new _0x42dd2f();
        this['Yh'] = new _0x13ef41();
        this['Zh'] = new _0x514baf();
        this['xa'] = new _0x44bfd4();
        this['$h'] = new _0x29ab1d();
        this['_h'] = new _0x548854();
        this['ai'] = new _0x2ebadb();
        this['aa'] = new _0xb89b52();
        this['ua'] = new _0x51f883();
        this['pa'] = new _0x5ed307();
        this['bi'] = [];
        this['ci'] = null;
      }
      function _0x8f83fd(_0x1fe55e, _0x4171ce) {
        if (0x0 != _0x4171ce) {
          var _0x43e5d2 = _0x1fe55e[_0x4171ce];
          _0x47e910(_0x1fe55e, 0x0, 0x1, _0x4171ce);
          _0x1fe55e[0x0] = _0x43e5d2;
        }
      }
      function _0x26010f(_0x3e9615, _0x1501f0) {
        if (_0x1501f0 != _0x3e9615["length"] + 0x1) {
          var _0x190032 = _0x3e9615[_0x1501f0];
          _0x47e910(_0x3e9615, _0x1501f0 + 0x1, _0x1501f0, _0x3e9615["length"] - _0x1501f0 - 0x1);
          _0x3e9615[_0x3e9615["length"] - 0x1] = _0x190032;
        }
      }
      function _0x39a4a0(_0x567689, _0x42ec4b) {
        for (var _0x5c10bd = 0x0; _0x5c10bd < _0x567689["length"]; _0x5c10bd++) {
          if (_0x567689[_0x5c10bd] == _0x42ec4b) {
            return _0x5c10bd;
          }
        }
        return -0x1;
      }
      _0x4ec63b["prototype"]['a'] = function () {
        this['bi'] = [this['H'], this['F'], this['Uh'], this['Vh'], this['Wh'], this['Xh'], this['Yh'], this['Zh'], this['xa'], this['$h'], this['_h'], this['ai'], this['aa'], this['ua'], this['pa']];
        for (var _0x1ac557 = 0x0; _0x1ac557 < this['bi']["length"]; _0x1ac557++) {
          this['bi'][_0x1ac557]['a']();
        }
        this['ci'] = new _0x40ab91(_0x46ee3f['di']);
      };
      _0x4ec63b["prototype"]['Qa'] = function (_0x28fab1, _0x21afa9) {
        for (var _0x53e55f = this['bi']["length"] - 0x1; _0x53e55f >= 0x0; _0x53e55f--) {
          this['bi'][_0x53e55f]['Pa'](_0x28fab1, _0x21afa9);
        }
        if (this['bi'][0x0] != this['H'] && this['bi'][0x0] != this['pa'] && null != this['ci']) {
          this['ci']['Pa'](_0x28fab1, _0x21afa9);
        }
      };
      _0x4ec63b["prototype"]['Ra'] = function () {
        for (var _0x46fb56 = this['bi']["length"] - 0x1; _0x46fb56 >= 0x0; _0x46fb56--) {
          this['bi'][_0x46fb56]['Ra']();
        }
        if (null != this['ci']) {
          this['ci']['Ra']();
        }
      };
      _0x4ec63b["prototype"]['I'] = function (_0x4d9fa) {
        var _0x4b7ebe = _0x39a4a0(this['bi'], _0x4d9fa);
        if (!(_0x4b7ebe < 0x0)) {
          this['bi'][0x0]['ei']();
          _0x8f83fd(this['bi'], _0x4b7ebe);
          this['fi']();
        }
      };
      _0x4ec63b["prototype"]['gi'] = function () {
        this['bi'][0x0]['ei']();
        do {
          _0x26010f(this['bi'], 0x0);
        } while (this['bi'][0x0]['rc'] != _0x516244['hi']);
        this['fi']();
      };
      _0x4ec63b["prototype"]['fi'] = function () {
        var _0x230afa = this['bi'][0x0];
        _0x230afa['ii']();
        _0x230afa['ji']();
        this['ki']();
      };
      _0x4ec63b["prototype"]['li'] = function () {
        return 0x0 != this['bi']["length"] && this['bi'][0x0]['rc'] == _0x516244['hi'] && this['aa']['mi']();
      };
      _0x4ec63b["prototype"]['ki'] = function () {
        if (this['li']()) {
          this['I'](this['aa']);
        }
      };
      return _0x4ec63b;
    }();
    var _0x36eace = function () {
      function _0xecac39() {
        this['ag'] = [];
        this['$f'] = [];
      }
      _0xecac39['Vg'] = function (_0x363c7b, _0x368bbc) {
        return {
          'bg': _0x363c7b,
          'M': _0x368bbc
        };
      };
      _0xecac39['Wg'] = function (_0x1517cf, _0xc5f79e) {
        return {
          '_f': _0x1517cf,
          'M': _0xc5f79e
        };
      };
      return _0xecac39;
    }();
    var _0x5dd50f = function () {
      function _0x21cd91() {
        this['ni'] = [];
        this['oi'] = [];
        this['pi'] = [];
        this['qi'] = false;
        this['ri'] = "guest";
        this['si'] = {};
        this['ti'] = null;
      }
      _0x21cd91["prototype"]['a'] = function () {
        this['vi']();
      };
      _0x21cd91['prototype']['X'] = function () {
        return this['qi'] ? this['si']['userId'] : '';
      };
      _0x21cd91['prototype']['wi'] = function () {
        return this['qi'] ? this['si']["username"] : '';
      };
      _0x21cd91['prototype']['ga'] = function () {
        return this['qi'] ? this['si']['nickname'] : '';
      };
      _0x21cd91["prototype"]['xi'] = function () {
        return this['qi'] ? this['si']["avatarUrl"] : "/images/guest-avatar-xmas2022.png";
      };
      _0x21cd91["prototype"]['yi'] = function () {
        return this['qi'] && this['si']['isBuyer'];
      };
      _0x21cd91["prototype"]['Z'] = function () {
        return this['qi'] && this['si']["isConsentGiven"];
      };
      _0x21cd91["prototype"]['zi'] = function () {
        return this['qi'] ? this['si']['coins'] : 0x0;
      };
      _0x21cd91["prototype"]['Ai'] = function () {
        return this['qi'] ? this['si']["level"] : 0x1;
      };
      _0x21cd91["prototype"]['Bi'] = function () {
        return this['qi'] ? this['si']["expOnLevel"] : 0x0;
      };
      _0x21cd91['prototype']['Ci'] = function () {
        return this['qi'] ? this['si']["expToNext"] : 0x32;
      };
      _0x21cd91["prototype"]['Di'] = function () {
        return this['qi'] ? this['si']["skinId"] : 0x0;
      };
      _0x21cd91["prototype"]['Ei'] = function () {
        return this['qi'] ? this['si']['eyesId'] : 0x0;
      };
      _0x21cd91["prototype"]['Fi'] = function () {
        return this['qi'] ? this['si']["mouthId"] : 0x0;
      };
      _0x21cd91["prototype"]['Gi'] = function () {
        return this['qi'] ? this['si']["glassesId"] : 0x0;
      };
      _0x21cd91["prototype"]['Hi'] = function () {
        return this['qi'] ? this['si']["hatId"] : 0x0;
      };
      _0x21cd91["prototype"]['Ii'] = function () {
        return this['qi'] ? this['si']["highScore"] : 0x0;
      };
      _0x21cd91["prototype"]['Ji'] = function () {
        return this['qi'] ? this['si']["bestSurvivalTimeSec"] : 0x0;
      };
      _0x21cd91['prototype']['Ki'] = function () {
        return this['qi'] ? this['si']["kills"] : 0x0;
      };
      _0x21cd91['prototype']['Li'] = function () {
        return this['qi'] ? this['si']["headShots"] : 0x0;
      };
      _0x21cd91["prototype"]['Mi'] = function () {
        return this['qi'] ? this['si']["sessionsPlayed"] : 0x0;
      };
      _0x21cd91["prototype"]['Ni'] = function () {
        return this['qi'] ? this['si']["totalPlayTimeSec"] : 0x0;
      };
      _0x21cd91['prototype']['Oi'] = function () {
        return this['qi'] ? this['si']["regDate"] : {};
      };
      _0x21cd91['prototype']['V'] = function (_0x4b0e97) {
        this['ni']["push"](_0x4b0e97);
        _0x4b0e97();
      };
      _0x21cd91["prototype"]['Pi'] = function (_0x2fc53f) {
        this['oi']['push'](_0x2fc53f);
        _0x2fc53f();
      };
      _0x21cd91["prototype"]['Qi'] = function (_0x1524ec) {
        this['pi']["push"](_0x1524ec);
      };
      _0x21cd91["prototype"]['Ch'] = function (_0x4d2c9e, _0x345247) {
        var _0x3ddf4e = this['si']['propertyList']["concat"](theoKzObjects['pL'] || []);
        if (!_0x3ddf4e) {
          return false;
        }
        for (var _0x5122b4 = 0x0; _0x5122b4 < _0x3ddf4e['length']; _0x5122b4++) {
          var _0x55482f = _0x3ddf4e[_0x5122b4];
          if (_0x55482f['id'] == _0x4d2c9e && _0x55482f["type"] === _0x345247) {
            return true;
          }
        }
        return false;
      };
      _0x21cd91["prototype"]['P'] = function () {
        return this['qi'];
      };
      _0x21cd91["prototype"]['ea'] = function () {
        return this['ri'];
      };
      _0x21cd91["prototype"]['Q'] = function (_0x7d16ee) {
        var _0x5d77c7 = this;
        if (this['qi']) {
          this['Ri'](function (_0x398b16) {
            if (_0x398b16) {
              var _0x286fcd = _0x5d77c7['zi']();
              var _0x4c3d9d = _0x5d77c7['Ai']();
              _0x5d77c7['si'] = _0x398b16;
              _0x507d6f(_0x5d77c7['si']);
              _0x5d77c7['Si']();
              var _0x18332f = _0x5d77c7['zi']();
              var _0x448e59 = _0x5d77c7['Ai']();
              if (_0x448e59 > 0x1 && _0x448e59 != _0x4c3d9d) {
                _0x2a65a9()['s']['aa']['Ti'](new _0x94be84(_0x448e59));
              }
              var _0x1eecec = _0x18332f - _0x286fcd;
              if (_0x1eecec >= 0x14) {
                _0x2a65a9()['s']['aa']['Ti'](new _0x4eb4f3(_0x1eecec));
              }
            }
            if (_0x7d16ee) {
              _0x7d16ee();
            }
          });
        }
      };
      _0x21cd91["prototype"]['Ri'] = function (_0x5b59de) {
        $["get"](_0x1b9f2f + "/pub/wuid/" + this['ri'] + "/getUserData", function (_0x475fdf) {
          _0x5b59de(_0x475fdf["user_data"]);
        });
      };
      _0x21cd91["prototype"]['Ui'] = function (_0xc6a8be, _0x213dfb, _0x3281be) {
        var _0x133553 = this;
        $["get"](_0x1b9f2f + "/pub/wuid/" + this['ri'] + "/buyProperty?id=" + _0xc6a8be + "&type=" + _0x213dfb, function (_0x11db4e) {
          if (0x4b0 == _0x11db4e["code"]) {
            _0x133553['Q'](_0x3281be);
          } else {
            _0x3281be();
          }
        })["fail"](function () {
          _0x3281be();
        });
      };
      _0x21cd91["prototype"]['Vi'] = function () {
        var _0x39206b = this;
        this['Wi']();
        if ("undefined" == typeof FB) {
          return void this['Xi']();
        }
        FB["getLoginStatus"](function (_0x3d5cf2) {
          if ("connected" === _0x3d5cf2["status"]) {
            return void (_0x3d5cf2['authResponse'] && _0x3d5cf2['authResponse']['accessToken'] ? _0x39206b['Yi']('facebook', "fb_" + _0x3d5cf2["authResponse"]['accessToken']) : _0x39206b['Xi']());
          }
          FB['login'](function (_0x226686) {
            if ('connected' === _0x226686["status"] && _0x226686["authResponse"] && _0x226686["authResponse"]['accessToken']) {
              _0x39206b['Yi']("facebook", "fb_" + _0x226686["authResponse"]["accessToken"]);
            } else {
              _0x39206b['Xi']();
            }
          });
        });
      };
      _0x21cd91["prototype"]['Zi'] = function () {
        var _0x510b0b = this;
        this['Wi']();
        if (undefined === GoogleAuth) {
          return void this['Xi']();
        }
        console["log"]("gsi:l");
        GoogleAuth["then"](function () {
          console["log"]('gsi:then');
          if (GoogleAuth["isSignedIn"]["get"]()) {
            console['log']('gsi:sil');
            var _0x5379a8 = GoogleAuth["currentUser"]["get"]();
            return void _0x510b0b['Yi']('google', "gg_" + _0x5379a8["getAuthResponse"]()["id_token"]);
          }
          GoogleAuth["signIn"]()["then"](function (_0x20905c) {
            return undefined !== _0x20905c["error"] ? (console["log"]('gsi:e: ' + _0x20905c['error']), void _0x510b0b['Xi']()) : _0x20905c["isSignedIn"]() ? (console["log"]('gsi:s'), void _0x510b0b['Yi']("google", "gg_" + _0x20905c["getAuthResponse"]()["id_token"])) : (console["log"]('gsi:c'), void _0x510b0b['Xi']());
          });
        });
      };
      _0x21cd91["prototype"]['Wi'] = function () {
        console["log"]("iSI: " + this['qi']);
        var _0xb0345 = this['ri'];
        var _0x18fb60 = this['ti'];
        this['qi'] = false;
        this['ri'] = "guest";
        this['si'] = {};
        this['ti'] = null;
        _0x59c0bc(_0x1cdd73['Oe'], '', 0x3c);
        switch (_0x18fb60) {
          case 'facebook':
            this['$i']();
            break;
          case 'google':
            this['_i']();
        }
        if (_0xb0345 !== this['ri']) {
          this['aj']();
        } else {
          this['Si']();
        }
      };
      _0x21cd91["prototype"]['bj'] = function () {
        console["log"]('dA');
        if (this['qi']) {
          $["get"](_0x1b9f2f + '/pub/wuid/' + this['ri'] + "/deleteAccount", function (_0x79b2ac) {
            if (0x4b0 === _0x79b2ac["code"]) {
              console['log']('dA: OK');
            } else {
              console["log"]('dA: NO');
            }
          })['fail'](function () {
            console["log"]('dA: FAIL');
          });
        }
      };
      _0x21cd91["prototype"]['vi'] = function () {
        console['log']('rs');
        var _0x48d2fa = _0x5ab50d(_0x1cdd73['Oe']);
        var _0x197377 = this;
        if ("facebook" == _0x48d2fa) {
          console["log"]("rs:fb");
          (function _0x413e41() {
            if ("undefined" != typeof FB) {
              _0x197377['Vi']();
            } else {
              setTimeout(_0x413e41, 0x64);
            }
          })();
        } else if ("google" == _0x48d2fa) {
          console["log"]("rs:gg");
          (function _0xdc811() {
            if (undefined !== GoogleAuth) {
              _0x197377['Zi']();
            } else {
              setTimeout(_0xdc811, 0x64);
            }
          })();
        } else {
          console["log"]("rs:lo");
          this['Wi']();
        }
      };
      _0x21cd91["prototype"]['aj'] = function () {
        var _0x4ccf52 = 0x0;
        for (; _0x4ccf52 < this['ni']['length']; _0x4ccf52++) {
          this['ni'][_0x4ccf52]();
        }
        this['Si']();
      };
      _0x21cd91["prototype"]['Si'] = function () {
        var _0x4d2273 = 0x0;
        for (; _0x4d2273 < this['oi']["length"]; _0x4d2273++) {
          this['oi'][_0x4d2273]();
        }
        var _0x399143 = this['pi'];
        this['pi'] = [];
        var _0x526aff = 0x0;
        for (; _0x526aff < _0x399143["length"]; _0x526aff++) {
          _0x399143[_0x526aff]();
        }
      };
      _0x21cd91["prototype"]['Yi'] = function (_0x371c77, _0x1f8303) {
        var _0x7b58e5 = this;
        var _0x1551ac = 0x0;
        var _0x3500b3 = localStorage["getItem"]("token__gg");
        if (_0x3500b3) {
          console['log']("Using the stored token:", _0x3500b3);
          $["get"](_0x1b9f2f + "/pub/wuid/" + _0x3500b3 + "/login", function (_0x4f01c4) {
            if (_0x4f01c4 && _0x4f01c4["code"] === 0x5cd && _0x4f01c4["error"] === "expired_token") {
              _0x1551ac++;
              console["log"]("auto login attempt:", _0x1551ac);
              $("#login-view")["html"]("<h2>Auto Login Google: " + _0x1551ac + "</h2>");
              _0x5cf0e1();
            } else {
              _0x1ce9e0(_0x4f01c4);
            }
          })['fail'](function () {
            _0x5cf0e1();
          });
        } else {
          _0x5cf0e1();
        }
        function _0x5cf0e1() {
          console['log']("Fetching a new token...");
          $["get"](_0x1b9f2f + "/pub/wuid/" + _0x1f8303 + '/login', function (_0x578dcf) {
            if (_0x578dcf && _0x578dcf["code"] === 0x5cd && _0x578dcf["error"] === "expired_token") {
              _0x1551ac++;
              console['log']("auto login attempt:", _0x1551ac);
              $('#login-view')['html']("<h2>Auto Login Google : " + _0x1551ac + "</h2>");
              _0x5cf0e1();
            } else {
              _0x1ce9e0(_0x578dcf);
            }
          })["fail"](function () {
            _0x7b58e5['Xi']();
          });
        }
        function _0x1ce9e0(_0x4ace51) {
          if (_0x4ace51 && _0x4ace51["user_data"]) {
            _0x507d6f(_0x4ace51["user_data"]);
            var _0x202436 = this['ri'];
            _0x7b58e5['qi'] = true;
            _0x7b58e5['ri'] = _0x1f8303;
            _0x7b58e5['si'] = _0x4ace51["user_data"];
            theoKzObjects["FB_UserID"] = _0x4ace51["user_data"]["userId"];
            _0x7b58e5['ti'] = _0x371c77;
            _0x59c0bc(_0x1cdd73['Oe'], _0x7b58e5['ti'], 0x3c);
            _0x5cf835();
            for (var _0x50217a = 0x0; _0x50217a < clientes['clientesActivos']['length']; _0x50217a++) {
              var _0x44dc73 = clientes['clientesActivos'][_0x50217a]["cliente_NOMBRE"];
              var _0x456093 = clientes["clientesActivos"][_0x50217a]['cliente_ID'];
              var _0x301f75 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin"];
              var _0x3b0951 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin1"];
              var _0x3e404b = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin2"];
              var _0x1adec2 = clientes['clientesActivos'][_0x50217a]["Client_VisibleSkin3"];
              var _0x3abb7e = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin4"];
              var _0x1296d1 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin5"];
              var _0x2021cc = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin6"];
              var _0x50e6ff = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin7"];
              var _0x2d671c = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin8"];
              var _0xcfc4ce = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin9"];
              var _0x49aaa6 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin10"];
              var _0x554b82 = clientes['clientesActivos'][_0x50217a]["Client_VisibleSkin11"];
              var _0x3be108 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin12"];
              var _0x287c93 = clientes['clientesActivos'][_0x50217a]["Client_VisibleSkin13"];
              var _0x3d72d0 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin14"];
              var _0x2b6df0 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin15"];
              var _0x30a991 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin16"];
              var _0x5d9cc7 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin17"];
              var _0x18838b = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin18"];
              var _0x34a505 = clientes["clientesActivos"][_0x50217a]["Client_VisibleSkin19"];
              var _0x5eb409 = clientes['clientesActivos'][_0x50217a]["Client_VisibleSkin20"];
              var _0x1e1cfd = clientes["clientesActivos"][_0x50217a]["Client_KeyAccecs"];
              var _0x1cea18 = clientes['clientesActivos'][_0x50217a]["cliente_DateExpired"];
              if (theoKzObjects["FB_UserID"] == 0x0) {} else {
                if (theoKzObjects["FB_UserID"] == _0x456093) {
                  $(".column-left")["append"]("<div class='het-han'> Data de ativação : " + _0x1cea18 + '</div>');
                  _0x4f10c0();
                  _0x42f088();
                } else {}
              }
            }
            theoKzObjects['loading'] = false;
            if (_0x202436 !== _0x1f8303) {
              _0x7b58e5['aj']();
            } else {
              _0x7b58e5['Si']();
            }
            localStorage["setItem"]("token__gg", _0x1f8303);
          } else {
            _0x7b58e5['Xi']();
          }
        }
      };
      _0x21cd91["prototype"]['Xi'] = function () {
        this['Wi']();
      };
      _0x21cd91["prototype"]['$i'] = function () {
        console["log"]("lo:fb");
        FB["logout"](function () {});
      };
      _0x21cd91["prototype"]['_i'] = function () {
        console["log"]("lo:gg");
        GoogleAuth['signOut']();
      };
      return _0x21cd91;
    }();
    var _0x11c489 = function () {
      function _0xd1d95a() {
        this['cj'] = {};
        this['cj'][_0x3a14d2] = [0x1, 0.5, 0.25, 0.5];
        this['cj'][_0x3b1bdf] = _0x37651d['_b']["WHITE"];
        this['cj'][_0xd99f9a] = [0x0, 0x0];
        this['cj'][_0x3f41b1] = [0x0, 0x0];
        var _0x7b7efa = _0x37651d['cc']['from'](_0x3d183d, _0x44c9a2, this['cj']);
        this['zf'] = new _0x37651d['hc'](_0x4e7235, _0x7b7efa);
      }
      var _0x5a435a = "a1_" + _0x35efd8();
      var _0x4e3b04 = "a2_" + _0x35efd8();
      var _0x19139a = atob("dHJhbnNsYXRpb25NYXRyaXg=");
      var _0x327ef0 = atob("cHJvamVjdGlvbk1hdHJpeA==");
      var _0x3a14d2 = "u3_" + _0x35efd8();
      var _0x3b1bdf = "u4_" + _0x35efd8();
      var _0xd99f9a = 'u5_' + _0x35efd8();
      var _0x3f41b1 = "u6_" + _0x35efd8();
      var _0x2a89b0 = "v1_" + _0x35efd8();
      var _0x4e7235 = new _0x37651d['gc']()["addAttribute"](_0x5a435a, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)["addAttribute"](_0x4e3b04, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x3d183d = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + _0x5a435a + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + _0x4e3b04 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x19139a + atob("O3VuaWZvcm0gbWF0MyA=") + _0x327ef0 + atob("O3ZhcnlpbmcgdmVjMiA=") + _0x2a89b0 + atob("O3ZvaWQgbWFpbigpew==") + _0x2a89b0 + atob('PQ==') + _0x4e3b04 + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + _0x327ef0 + atob('Kg==') + _0x19139a + atob('KnZlYzMo') + _0x5a435a + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
      var _0x44c9a2 = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + _0x2a89b0 + atob("O3VuaWZvcm0gdmVjNCA=") + _0x3a14d2 + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + _0x3b1bdf + atob("O3VuaWZvcm0gdmVjMiA=") + _0xd99f9a + atob("O3VuaWZvcm0gdmVjMiA=") + _0x3f41b1 + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + _0x2a89b0 + atob("Kg==") + _0xd99f9a + atob("Kw==") + _0x3f41b1 + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + _0x3a14d2 + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + _0x3b1bdf + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
      _0xd1d95a["prototype"]['Hf'] = function (_0x168d91, _0x4642bc, _0xcdeb00, _0x2af321) {
        var _0x2a50da = this['cj'][_0x3a14d2];
        _0x2a50da[0x0] = _0x168d91;
        _0x2a50da[0x1] = _0x4642bc;
        _0x2a50da[0x2] = _0xcdeb00;
        _0x2a50da[0x3] = _0x2af321;
      };
      _0xd1d95a['prototype']['Bf'] = function (_0x1db98b) {
        this['cj'][_0x3b1bdf] = _0x1db98b;
      };
      _0xd1d95a["prototype"]['Te'] = function (_0x249836, _0x380320, _0x45f273, _0x801238) {
        this['zf']["position"]['x'] = _0x249836;
        this['zf']["position"]['y'] = _0x380320;
        this['zf']["scale"]['x'] = _0x45f273;
        this['zf']["scale"]['y'] = _0x801238;
        var _0x262d81 = this['cj'][_0xd99f9a];
        _0x262d81[0x0] = 0.2520615384615385 * _0x45f273;
        _0x262d81[0x1] = 0.4357063736263738 * _0x801238;
        var _0x3be4e = this['cj'][_0x3f41b1];
        _0x3be4e[0x0] = 0.2520615384615385 * _0x249836;
        _0x3be4e[0x1] = 0.4357063736263738 * _0x380320;
      };
      return _0xd1d95a;
    }();
    var _0x1aabca = function () {
      function _0x5ceca4() {
        this['jh'] = new _0x37651d['ec']();
        this['dj'] = 0x0;
        this['ej'] = 0x0;
      }
      _0x5ceca4["prototype"]['kh'] = function (_0x596450) {
        if (_0x596450 && _0x596450['Hc']) {
          this['jh']["texture"] = _0x596450['Hc'];
          this['jh']["anchor"]["set"](_0x596450['Lh'], _0x596450['Mh']);
          this['dj'] = _0x596450['Nh'];
          this['ej'] = _0x596450['Oh'];
        }
      };
      _0x5ceca4["prototype"]['oh'] = function (_0x421c15) {
        this['jh']['width'] = _0x421c15 * this['dj'];
        this['jh']["height"] = _0x421c15 * this['ej'];
      };
      _0x5ceca4["prototype"]['fj'] = function (_0x3a4aed) {
        this['jh']["rotation"] = _0x3a4aed;
      };
      _0x5ceca4["prototype"]['nh'] = function (_0x26f00a, _0x251ab2) {
        this['jh']['position']["set"](_0x26f00a, _0x251ab2);
      };
      _0x5ceca4["prototype"]['Mg'] = function (_0x754778) {
        this['jh']["visible"] = _0x754778;
      };
      _0x5ceca4["prototype"]['gj'] = function () {
        return this['jh']["visible"];
      };
      _0x5ceca4["prototype"]['qh'] = function (_0x15ba41) {
        this['jh']["alpha"] = _0x15ba41;
      };
      _0x5ceca4["prototype"]['Mf'] = function () {
        return this['jh'];
      };
      _0x5ceca4['prototype']['ih'] = function () {
        _0x21385c(this['jh']);
      };
      return _0x5ceca4;
    }();
    var _0x41c914 = function () {
      function _0x116979(_0x31fe55) {
        this['fb'] = _0x31fe55;
        this['Mb'] = new _0x41c914["Config"]();
        this['Hb'] = false;
        this['Ib'] = true;
        this['hj'] = false;
        this['Db'] = 0x0;
        this['ij'] = 0x0;
        this['Jb'] = 0x1;
        this['jj'] = 0x0;
        this['M'] = 0x0;
        this['Ff'] = {};
        this['kj'] = 0x0;
        this['lj'] = new Float32Array(400);
        this['mj'] = new Float32Array(400);
        this['nj'] = new Float32Array(400);
        this['oj'] = null;
        this['pj'] = null;
        this['qj'] = null;
        this['Tb']();
      }
      _0x116979["prototype"]['Kb'] = function () {
        if (null != this['pj']) {
          _0x21385c(this['pj']['Rf']);
        }
        if (null != this['qj']) {
          _0x21385c(this['qj']);
        }
      };
      _0x116979["prototype"]['Tb'] = function () {
        this['Ig'](0.25);
        this['Mb']['ad'] = '';
        this['Ib'] = true;
        this['Ff'] = {};
        this['Mg'](false);
      };
      _0x116979["prototype"]['Fg'] = function (_0x19e101) {
        this['Mb'] = _0x19e101;
        this['rj'](this['Hb']);
      };
      _0x116979["prototype"]['Mg'] = function (_0x528612) {
        var _0x86b0e8 = this['Hb'];
        this['Hb'] = _0x528612;
        this['rj'](_0x86b0e8);
      };
      _0x116979["prototype"]['Ig'] = function (_0x21ec0a) {
        this['M'] = 0x32 * _0x21ec0a;
        var _0xcc3e3f = _0x21ec0a;
        if (_0x21ec0a > this['fb']['cf']) {
          _0xcc3e3f = Math["atan"]((_0x21ec0a - this['fb']['cf']) / this['fb']['df']) * this['fb']['df'] + this['fb']['cf'];
        }
        var _0x478ada = Math['sqrt'](0x4 * Math['pow'](0x5 * _0xcc3e3f, 0.707106781186548) + 0x19);
        var _0x517ad1 = Math["min"](0xc8, Math["max"](0x3, 0x5 * (_0x478ada - 0x5) + 0x1));
        var _0x46e413 = this['kj'];
        this['Db'] = 0.025 * (0x5 + 0.9 * _0x478ada);
        this['kj'] = Math["floor"](_0x517ad1);
        this['ij'] = _0x517ad1 - this['kj'];
        if (_0x46e413 > 0x0 && _0x46e413 < this['kj']) {
          var _0x516613 = this['lj'][0x2 * _0x46e413 - 0x2];
          var _0x4bc372 = this['lj'][0x2 * _0x46e413 - 0x1];
          var _0x373d3a = this['mj'][0x2 * _0x46e413 - 0x2];
          var _0x13ca0b = this['mj'][0x2 * _0x46e413 - 0x1];
          var _0x4e0525 = this['nj'][0x2 * _0x46e413 - 0x2];
          var _0x35ea4b = this['nj'][0x2 * _0x46e413 - 0x1];
          for (var _0x59671f = _0x46e413; _0x59671f < this['kj']; _0x59671f++) {
            this['lj'][0x2 * _0x59671f] = _0x516613;
            this['lj'][0x2 * _0x59671f + 0x1] = _0x4bc372;
            this['mj'][0x2 * _0x59671f] = _0x373d3a;
            this['mj'][0x2 * _0x59671f + 0x1] = _0x13ca0b;
            this['nj'][0x2 * _0x59671f] = _0x4e0525;
            this['nj'][0x2 * _0x59671f + 0x1] = _0x35ea4b;
          }
        }
      };
      _0x116979["prototype"]['Lg'] = function (_0xaac0c4, _0x3f2fe1) {
        this['kj'] = _0x3f2fe1;
        for (var _0x172881 = 0x0; _0x172881 < this['kj']; _0x172881++) {
          this['lj'][0x2 * _0x172881] = this['mj'][0x2 * _0x172881] = this['nj'][0x2 * _0x172881] = _0xaac0c4();
          this['lj'][0x2 * _0x172881 + 0x1] = this['mj'][0x2 * _0x172881 + 0x1] = this['nj'][0x2 * _0x172881 + 0x1] = _0xaac0c4();
        }
      };
      _0x116979["prototype"]['Kg'] = function (_0x404d72, _0x3c5f59, _0x4df348) {
        this['hj'] = _0x4df348;
        for (var _0x1af13c = 0x0; _0x1af13c < this['kj']; _0x1af13c++) {
          this['lj'][0x2 * _0x1af13c] = this['mj'][0x2 * _0x1af13c];
          this['lj'][0x2 * _0x1af13c + 0x1] = this['mj'][0x2 * _0x1af13c + 0x1];
        }
        var _0x1882af = _0x404d72 - this['mj'][0x0];
        var _0x2feb5b = _0x3c5f59 - this['mj'][0x1];
        this['sj'](_0x1882af, _0x2feb5b, this['kj'], this['mj']);
      };
      _0x116979["prototype"]['sj'] = function (_0x2ccc1f, _0x10ae23, _0x5d43cd, _0x86f961) {
        var _0x1bf4f4 = Math["hypot"](_0x2ccc1f, _0x10ae23);
        if (!(_0x1bf4f4 <= 0x0)) {
          var _0x57e020 = _0x86f961[0x0];
          var _0x1e9d10 = undefined;
          _0x86f961[0x0] += _0x2ccc1f;
          var _0x29f6f0 = _0x86f961[0x1];
          var _0x153fd3 = undefined;
          _0x86f961[0x1] += _0x10ae23;
          var _0x19c86d = this['Db'] / (this['Db'] + _0x1bf4f4);
          var _0xda18cb = 0x1 - 0x2 * _0x19c86d;
          var _0x3640cb = 0x1;
          for (var _0x2d3876 = _0x5d43cd - 0x1; _0x3640cb < _0x2d3876; _0x3640cb++) {
            _0x1e9d10 = _0x86f961[0x2 * _0x3640cb];
            _0x86f961[0x2 * _0x3640cb] = _0x86f961[0x2 * _0x3640cb - 0x2] * _0xda18cb + (_0x1e9d10 + _0x57e020) * _0x19c86d;
            _0x57e020 = _0x1e9d10;
            _0x153fd3 = _0x86f961[0x2 * _0x3640cb + 0x1];
            _0x86f961[0x2 * _0x3640cb + 0x1] = _0x86f961[0x2 * _0x3640cb - 0x1] * _0xda18cb + (_0x153fd3 + _0x29f6f0) * _0x19c86d;
            _0x29f6f0 = _0x153fd3;
          }
          _0x19c86d = this['ij'] * this['Db'] / (this['ij'] * this['Db'] + _0x1bf4f4);
          _0xda18cb = 0x1 - 0x2 * _0x19c86d;
          _0x86f961[0x2 * _0x5d43cd - 0x2] = _0x86f961[0x2 * _0x5d43cd - 0x4] * _0xda18cb + (_0x86f961[0x2 * _0x5d43cd - 0x2] + _0x57e020) * _0x19c86d;
          _0x86f961[0x2 * _0x5d43cd - 0x1] = _0x86f961[0x2 * _0x5d43cd - 0x3] * _0xda18cb + (_0x86f961[0x2 * _0x5d43cd - 0x1] + _0x29f6f0) * _0x19c86d;
        }
      };
      _0x116979['prototype']['Gf'] = function () {
        return {
          'x': this['nj'][0x0],
          'y': this['nj'][0x1]
        };
      };
      _0x116979["prototype"]['Hg'] = function (_0x44b5e7, _0x22a3bb) {
        var _0x327aea = 0xf4240;
        var _0xb86087 = _0x44b5e7;
        var _0xc188b = _0x22a3bb;
        for (var _0x4ad768 = 0x0; _0x4ad768 < this['kj']; _0x4ad768++) {
          var _0x27c532 = this['nj'][0x2 * _0x4ad768];
          var _0x2f31b3 = this['nj'][0x2 * _0x4ad768 + 0x1];
          var _0x4f8241 = Math["hypot"](_0x44b5e7 - _0x27c532, _0x22a3bb - _0x2f31b3);
          if (_0x4f8241 < _0x327aea) {
            _0x327aea = _0x4f8241;
            _0xb86087 = _0x27c532;
            _0xc188b = _0x2f31b3;
          }
        }
        return {
          'x': _0xb86087,
          'y': _0xc188b,
          'distance': _0x327aea
        };
      };
      _0x116979["prototype"]['vb'] = function (_0xad62ff) {
        this['oj'] = _0xad62ff;
      };
      _0x116979["prototype"]['Fb'] = function (_0x2bc4bc, _0x216115) {
        this['Jb'] = _0x36cfb7(this['Jb'], this['Ib'] ? this['hj'] ? 0.9 + 0.1 * Math["cos"](_0x2bc4bc / 0x190 * Math['PI']) : 0x1 : 0x0, _0x216115, 0.00125);
        this['jj'] = _0x36cfb7(this['jj'], this['Ib'] ? this['hj'] ? 0x1 : 0x0 : 0x1, _0x216115, 0.0025);
        if (null != this['pj']) {
          this['pj']['Rf']["alpha"] = this['Jb'];
        }
        if (null != this['qj']) {
          this['qj']['alpha'] = this['Jb'];
        }
      };
      _0x116979["prototype"]['Gb'] = function (_0x143371, _0x405ce7, _0x5ce2db, _0x21a1de) {
        if (this['Hb'] && this['Ib']) {
          var _0x3f0212 = Math["pow"](0.11112, _0x405ce7 / 0x5f);
          for (var _0x37cd01 = 0x0; _0x37cd01 < this['kj']; _0x37cd01++) {
            var _0x579376 = _0x26f33f(this['lj'][0x2 * _0x37cd01], this['mj'][0x2 * _0x37cd01], _0x5ce2db);
            var _0x5c0981 = _0x26f33f(this['lj'][0x2 * _0x37cd01 + 0x1], this['mj'][0x2 * _0x37cd01 + 0x1], _0x5ce2db);
            this['nj'][0x2 * _0x37cd01] = _0x26f33f(_0x579376, this['nj'][0x2 * _0x37cd01], _0x3f0212);
            this['nj'][0x2 * _0x37cd01 + 0x1] = _0x26f33f(_0x5c0981, this['nj'][0x2 * _0x37cd01 + 0x1], _0x3f0212);
          }
        }
        if (null != this['pj'] && this['Hb']) {
          this['pj']['tj'](this, _0x143371, _0x405ce7, _0x21a1de);
        }
        if (null != this['qj']) {
          this['qj']['If']['x'] = this['nj'][0x0];
          this['qj']['If']['y'] = this['nj'][0x1] - 0x3 * this['Db'];
        }
      };
      _0x116979["prototype"]['rj'] = function (_0x1bbc1e) {
        if (this['Hb']) {
          if (!_0x1bbc1e) {
            this['uj']();
          }
        } else {
          if (null != this['pj']) {
            _0x21385c(this['pj']['Rf']);
          }
          if (null != this['qj']) {
            _0x21385c(this['qj']);
          }
        }
      };
      _0x116979["prototype"]['uj'] = function () {
        var _0x40bf69 = _0x2a65a9();
        if (null == this['pj']) {
          this['pj'] = new _0x23a10a();
        } else {
          _0x21385c(this['pj']['Rf']);
        }
        this['pj']['hh'](_0x40bf69['o']['fb']['af'], _0x40bf69['p']['Dc']()['ed'](this['Mb']['cg']), _0x40bf69['p']['Dc']()['dd'](this['Mb']['dg']), _0x40bf69['p']['Dc']()['fd'](this['Mb']['Bg']), _0x40bf69['p']['Dc']()['gd'](this['Mb']['Cg']), _0x40bf69['p']['Dc']()['hd'](this['Mb']['Dg']), _0x40bf69['p']['Dc']()['jd'](this['Mb']['Eg']));
        if (null == this['qj']) {
          this['qj'] = new _0x1775ea('');
          this['qj']["style"]["fontFamily"] = 'yildo';
          this['qj']["anchor"]["set"](0.5);
        } else {
          _0x21385c(this['qj']);
        }
        this['qj']['style']["fontSize"] = 0xf;
        this['qj']["style"]["fill"] = _0x40bf69['p']['Dc']()['dd'](this['Mb']['dg'])['_c'];
        this['qj']["text"] = this['Mb']['ad'];
        this['oj']['Qf'](this['Mb']['Lb'], this['pj'], this['qj']);
      };
      _0x116979["Config"] = function () {
        function _0x36bed9() {
          this['Lb'] = 0x0;
          this['cg'] = _0x2f2f2b["TEAM_DEFAULT"];
          this['dg'] = 0x0;
          this['Bg'] = 0x0;
          this['Cg'] = 0x0;
          this['Dg'] = 0x0;
          this['Eg'] = 0x0;
          this['ad'] = '';
        }
        return _0x36bed9;
      }();
      return _0x116979;
    }();
    var _0x1775ea = function () {
      return _0x56cc5d(_0x37651d['fc'], function (_0x3704a2, _0x3e0907, _0x4fdb5e) {
        _0x37651d['fc']["call"](this, _0x3704a2, _0x3e0907, _0x4fdb5e);
        this['If'] = {
          'x': 0x0,
          'y': 0x0
        };
      });
    }();
    var _0x23a10a = function () {
      function _0x5ee4fb() {
        this['Rf'] = new _0x37651d['Zb']();
        this['Rf']["sortableChildren"] = true;
        this['vj'] = new _0x1b8927();
        this['vj']["zIndex"] = 1.6;
        this['wj'] = 0x0;
        this['xj'] = new Array(0x31d);
        this['xj'][0x0] = this['yj'](0x0, new _0x1aabca(), new _0x1aabca());
        for (var _0x386f8d = 0x1; _0x386f8d < 0x31d; _0x386f8d++) {
          this['xj'][_0x386f8d] = this['yj'](_0x386f8d, new _0x1aabca(), new _0x1aabca());
        }
        this['zj'] = 0x0;
        this['Aj'] = 0x0;
        this['Bj'] = 0x0;
      }
      var _0x4e1e8e = 0.1 * Math['PI'];
      var _0x1ef6e1 = -0.06640625;
      var _0x59f8ad = -0.03515625;
      var _0x23c7b5 = -0.0625;
      var _0x3e2052 = 0x3 * _0x1ef6e1 + 0.84375;
      var _0x2018e1 = 0.2578125 - 0x3 * _0x1ef6e1;
      var _0x21a717 = _0x1ef6e1 + _0x59f8ad;
      var _0xfff081 = _0x23c7b5 + _0x23c7b5;
      var _0x41f0fc = 0x3 * _0x59f8ad + 0.2578125;
      var _0x2905b7 = 0.84375 - 0x3 * _0x59f8ad;
      var _0x850ae5 = _0x59f8ad + _0x1ef6e1;
      _0x5ee4fb["prototype"]['yj'] = function (_0x142a36, _0x1470c0, _0x569d69) {
        var _0x14d9d9 = new _0x41ceb8(_0x1470c0, _0x569d69);
        _0x1470c0['jh']["zIndex"] = 0.001 * (0x2 * (0x31d - _0x142a36) + 0x1 + 0x3);
        _0x569d69['jh']['zIndex'] = 0.001 * (0x2 * (0x31d - _0x142a36) - 0x2 + 0x3);
        return _0x14d9d9;
      };
      _0x5ee4fb["prototype"]['hh'] = function (_0x5c5677, _0x3ffa10, _0x330441, _0x1a10bf, _0x5bbb12, _0x2a1625, _0x2e7d4f) {
        var _0x45cc83 = _0x330441['Zc'];
        var _0x3db3ac = _0x5c5677 == _0x1160d2['_e'] ? _0x3ffa10['bd']['$c'] : _0x330441['$c'];
        if (_0x45cc83["length"] > 0x0 && _0x3db3ac["length"] > 0x0) {
          for (var _0x4638a5 = 0x0; _0x4638a5 < this['xj']["length"]; _0x4638a5++) {
            this['xj'][_0x4638a5]['Nf']['kh'](_0x45cc83[_0x4638a5 % _0x45cc83["length"]]);
            this['xj'][_0x4638a5]['Pf']['kh'](_0x3db3ac[_0x4638a5 % _0x3db3ac['length']]);
          }
        }
        this['vj']['hh'](_0x1a10bf, _0x5bbb12, _0x2a1625, _0x2e7d4f);
      };
      var _0x1b8927 = function () {
        var _0x3eabc9 = _0x56cc5d(_0x37651d['Zb'], function () {
          _0x37651d['Zb']["call"](this);
          this["sortableChildren"] = true;
          this['Cj'] = [];
          this['Dj'] = [];
          this['Ej'] = [];
          this['Fj'] = [];
          this['Gj'] = new _0x37651d['Zb']();
          this['Hj'] = [];
          for (var _0x1bd2eb = 0x0; _0x1bd2eb < 0x4; _0x1bd2eb++) {
            var _0x58906c = new _0x1aabca();
            _0x58906c['kh'](_0x2a65a9()['q']['Ph']);
            this['Gj']["addChild"](_0x58906c['jh']);
            this['Hj']["push"](_0x58906c);
          }
          this['Gj']['zIndex'] = 0.0011;
          this["addChild"](this['Gj']);
          this['Ij']();
          this['Jj'] = new _0x1aabca();
          this['Jj']['kh'](_0x2a65a9()['q']['Qh']);
          this['Jj']['jh']["zIndex"] = 0.001;
          this["addChild"](this['Jj']['jh']);
          this['Kj']();
          this["xEmojiType_headshot"] = new _0x1aabca();
          this["xEmojiType_headshot"]['kh'](_0x2a65a9()['q']["emoji_headshot"]);
          this["xEmojiType_headshot"]['jh']["zIndex"] = 0.001;
          this["addChild"](this["xEmojiType_headshot"]['jh']);
          this["xzs"]();
          this["xEmojiType_kill"] = new _0x1aabca();
          this['xEmojiType_kill']['kh'](_0x2a65a9()['q']["emoji_kill"]);
          this['xEmojiType_kill']['jh']['zIndex'] = 0.001;
          this['addChild'](this["xEmojiType_kill"]['jh']);
          this["zas"]();
          this["guia_mobile"] = new _0x1aabca();
          this["guia_mobile"]['kh'](_0x2a65a9()['q']["Id_mobileguia"]);
          this['guia_mobile']['jh']["zIndex"] = 0.001;
          this["addChild"](this["guia_mobile"]['jh']);
        });
        _0x3eabc9['prototype']['hh'] = function (_0x148159, _0x5eb209, _0x2b6f4c, _0x55eb49) {
          this['Lj'](0.002, this['Cj'], _0x148159['Zc']);
          this['Lj'](0.003, this['Dj'], _0x5eb209['Zc']);
          this['Lj'](0.004, this['Fj'], _0x55eb49['Zc']);
          this['Lj'](0.005, this['Ej'], _0x2b6f4c['Zc']);
        };
        _0x3eabc9['prototype']['Lj'] = function (_0x100662, _0x2c5fff, _0x25daec) {
          for (; _0x25daec["length"] > _0x2c5fff["length"];) {
            var _0x6e538f = new _0x1aabca();
            _0x2c5fff["push"](_0x6e538f);
            this['addChild'](_0x6e538f['Mf']());
          }
          for (; _0x25daec['length'] < _0x2c5fff["length"];) {
            _0x2c5fff["pop"]()['ih']();
          }
          var _0x1b0958 = _0x100662;
          for (var _0x7cec65 = 0x0; _0x7cec65 < _0x25daec["length"]; _0x7cec65++) {
            _0x1b0958 += 0.0001;
            var _0x58c886 = _0x2c5fff[_0x7cec65];
            _0x58c886['kh'](_0x25daec[_0x7cec65]);
            _0x58c886['jh']['zIndex'] = _0x1b0958;
          }
        };
        _0x3eabc9["prototype"]['mh'] = function (_0x3add51, _0x1a9f69, _0x341b38, _0xb8a9a7) {
          this["visible"] = true;
          this["position"]['set'](_0x3add51, _0x1a9f69);
          this["rotation"] = _0xb8a9a7;
          for (var _0x372205 = 0x0; _0x372205 < this['Cj']["length"]; _0x372205++) {
            this['Cj'][_0x372205]['oh'](_0x341b38);
          }
          for (var _0x256802 = 0x0; _0x256802 < this['Dj']["length"]; _0x256802++) {
            this['Dj'][_0x256802]['oh'](_0x341b38);
          }
          for (var _0x15fce4 = 0x0; _0x15fce4 < this['Ej']["length"]; _0x15fce4++) {
            this['Ej'][_0x15fce4]['oh'](_0x341b38);
          }
          for (var _0x556a60 = 0x0; _0x556a60 < this['Fj']['length']; _0x556a60++) {
            this['Fj'][_0x556a60]['oh'](_0x341b38);
          }
        };
        _0x3eabc9["prototype"]['lh'] = function () {
          this["visible"] = false;
        };
        _0x3eabc9["prototype"]['Mj'] = function (_0x2bd0bd, _0x2598ad, _0x5271f8, _0x233afb) {
          this['Gj']['visible'] = true;
          var _0x392373 = _0x5271f8 / 0x3e8;
          var _0x4c7bbd = 0x1 / this['Hj']["length"];
          for (var _0x5d6dba = 0x0; _0x5d6dba < this['Hj']["length"]; _0x5d6dba++) {
            var _0x142636 = 0x1 - (_0x392373 + _0x4c7bbd * _0x5d6dba) % 0x1;
            this['Hj'][_0x5d6dba]['jh']["alpha"] = 0x1 - _0x142636;
            this['Hj'][_0x5d6dba]['oh'](_0x2598ad * (0.5 + 4.5 * _0x142636));
          }
        };
        _0x3eabc9['prototype']['Ij'] = function () {
          this['Gj']["visible"] = false;
        };
        _0x3eabc9["prototype"]['Nj'] = function (_0x30d39c, _0x5845d7, _0x20ae48, _0x4bb57f) {
          this['Jj']['jh']['visible'] = true;
          this['Jj']['jh']["alpha"] = _0x36cfb7(this['Jj']['jh']['alpha'], _0x30d39c['hj'] ? 0.9 : 0.2, _0x4bb57f, 0.0025);
          this['Jj']['oh'](_0x5845d7);
        };
        _0x3eabc9['prototype']['Kj'] = function () {
          this['Jj']['jh']['visible'] = false;
        };
        _0x3eabc9["prototype"]["xzs"] = function () {
          this["xEmojiType_headshot"]['jh']["visible"] = false;
        };
        _0x3eabc9["prototype"]["zas"] = function () {
          this["xEmojiType_kill"]['jh']["visible"] = false;
        };
        _0x3eabc9['prototype']['Rx'] = function (_0x532e70, _0x3e0ca0, _0x3dde5b, _0x272990) {
          this["guia_mobile"]['jh']["visible"] = true;
          this["guia_mobile"]['oh'](_0x3e0ca0);
        };
        _0x3eabc9['prototype']['Njh'] = function (_0x370635, _0x285ba5, _0x25b2d0, _0x5fbf71) {
          this["xEmojiType_headshot"]['jh']["visible"] = true;
          this["xEmojiType_headshot"]['oh'](_0x285ba5);
        };
        _0x3eabc9["prototype"]["Njk"] = function (_0x12dac2, _0x383b9a, _0x1863c3, _0x559ec2) {
          this['xEmojiType_kill']['jh']["visible"] = true;
          this["xEmojiType_kill"]['oh'](_0x383b9a);
        };
        return _0x3eabc9;
      }();
      _0x5ee4fb["prototype"]['Oj'] = function (_0x4f0f6e) {
        return this['Aj'] + this['Bj'] * Math['sin'](_0x4f0f6e * _0x4e1e8e - this['zj']);
      };
      _0x5ee4fb['prototype']['tj'] = function (_0x31693c, _0x3eabde, _0x599290, _0x1bdc46) {
        var _0x40b35c = 0x2 * _0x31693c['Db'];
        var _0x3d1e5b = _0x31693c['nj'];
        var _0x2a7753 = _0x31693c['kj'];
        var _0x33ea00 = 0x4 * _0x2a7753 - 0x3;
        this['zj'] = _0x3eabde / 0x190 * Math['PI'];
        this['Aj'] = 1.5 * _0x40b35c;
        this['Bj'] = 0.15 * _0x40b35c * _0x31693c['jj'];
        var _0x5aff66 = undefined;
        var _0x5bb906 = undefined;
        var _0x293344 = undefined;
        var _0x364a80 = undefined;
        var _0x1ba3eb = undefined;
        var _0xce4012 = undefined;
        var _0x1fb011 = undefined;
        var _0x7a34a0 = undefined;
        _0x5bb906 = _0x3d1e5b[0x0];
        _0xce4012 = _0x3d1e5b[0x1];
        if (_0x1bdc46(_0x5bb906, _0xce4012)) {
          _0x293344 = _0x3d1e5b[0x2];
          _0x1fb011 = _0x3d1e5b[0x3];
          _0x364a80 = _0x3d1e5b[0x4];
          _0x7a34a0 = _0x3d1e5b[0x5];
          var _0x15ba82 = Math["atan2"](_0x7a34a0 + 0x2 * _0xce4012 - 0x3 * _0x1fb011, _0x364a80 + 0x2 * _0x5bb906 - 0x3 * _0x293344);
          this['vj']['mh'](_0x5bb906, _0xce4012, _0x40b35c, _0x15ba82);
          this['xj'][0x0]['mh'](_0x5bb906, _0xce4012, _0x40b35c, this['Oj'](0x0), _0x15ba82);
          this['xj'][0x1]['mh'](_0x3e2052 * _0x5bb906 + _0x2018e1 * _0x293344 + _0x21a717 * _0x364a80, _0x3e2052 * _0xce4012 + _0x2018e1 * _0x1fb011 + _0x21a717 * _0x7a34a0, _0x40b35c, this['Oj'](0x1), _0x41ceb8["angleBetween"](this['xj'][0x0], this['xj'][0x2]));
          this['xj'][0x2]['mh'](0.375 * _0x5bb906 + 0.75 * _0x293344 + _0xfff081 * _0x364a80, 0.375 * _0xce4012 + 0.75 * _0x1fb011 + _0xfff081 * _0x7a34a0, _0x40b35c, this['Oj'](0x2), _0x41ceb8["angleBetween"](this['xj'][0x1], this['xj'][0x3]));
          this['xj'][0x3]['mh'](_0x41f0fc * _0x5bb906 + _0x2905b7 * _0x293344 + _0x850ae5 * _0x364a80, _0x41f0fc * _0xce4012 + _0x2905b7 * _0x1fb011 + _0x850ae5 * _0x7a34a0, _0x40b35c, this['Oj'](0x3), _0x41ceb8["angleBetween"](this['xj'][0x2], this['xj'][0x4]));
        } else {
          this['vj']['lh']();
          this['xj'][0x0]['lh']();
          this['xj'][0x1]['lh']();
          this['xj'][0x2]['lh']();
          this['xj'][0x3]['lh']();
        }
        var _0x60256b = 0x4;
        var _0x1b12af = 0x2;
        for (var _0x45b160 = 0x2 * _0x2a7753 - 0x4; _0x1b12af < _0x45b160; _0x1b12af += 0x2) {
          _0x5bb906 = _0x3d1e5b[_0x1b12af];
          _0xce4012 = _0x3d1e5b[_0x1b12af + 0x1];
          if (_0x1bdc46(_0x5bb906, _0xce4012)) {
            _0x5aff66 = _0x3d1e5b[_0x1b12af - 0x2];
            _0x1ba3eb = _0x3d1e5b[_0x1b12af - 0x1];
            _0x293344 = _0x3d1e5b[_0x1b12af + 0x2];
            _0x1fb011 = _0x3d1e5b[_0x1b12af + 0x3];
            _0x364a80 = _0x3d1e5b[_0x1b12af + 0x4];
            _0x7a34a0 = _0x3d1e5b[_0x1b12af + 0x5];
            this['xj'][_0x60256b]['mh'](_0x5bb906, _0xce4012, _0x40b35c, this['Oj'](_0x60256b), _0x41ceb8["angleBetween"](this['xj'][_0x60256b - 0x1], this['xj'][_0x60256b + 0x1]));
            _0x60256b++;
            this['xj'][_0x60256b]['mh'](_0x1ef6e1 * _0x5aff66 + 0.84375 * _0x5bb906 + 0.2578125 * _0x293344 + _0x59f8ad * _0x364a80, _0x1ef6e1 * _0x1ba3eb + 0.84375 * _0xce4012 + 0.2578125 * _0x1fb011 + _0x59f8ad * _0x7a34a0, _0x40b35c, this['Oj'](_0x60256b), _0x41ceb8["angleBetween"](this['xj'][_0x60256b - 0x1], this['xj'][_0x60256b + 0x1]));
            _0x60256b++;
            this['xj'][_0x60256b]['mh'](_0x23c7b5 * _0x5aff66 + 0.5625 * _0x5bb906 + 0.5625 * _0x293344 + _0x23c7b5 * _0x364a80, _0x23c7b5 * _0x1ba3eb + 0.5625 * _0xce4012 + 0.5625 * _0x1fb011 + _0x23c7b5 * _0x7a34a0, _0x40b35c, this['Oj'](_0x60256b), _0x41ceb8['angleBetween'](this['xj'][_0x60256b - 0x1], this['xj'][_0x60256b + 0x1]));
            _0x60256b++;
            this['xj'][_0x60256b]['mh'](_0x59f8ad * _0x5aff66 + 0.2578125 * _0x5bb906 + 0.84375 * _0x293344 + _0x1ef6e1 * _0x364a80, _0x59f8ad * _0x1ba3eb + 0.2578125 * _0xce4012 + 0.84375 * _0x1fb011 + _0x1ef6e1 * _0x7a34a0, _0x40b35c, this['Oj'](_0x60256b), _0x41ceb8['angleBetween'](this['xj'][_0x60256b - 0x1], this['xj'][_0x60256b + 0x1]));
            _0x60256b++;
          } else {
            this['xj'][_0x60256b]['lh']();
            _0x60256b++;
            this['xj'][_0x60256b]['lh']();
            _0x60256b++;
            this['xj'][_0x60256b]['lh']();
            _0x60256b++;
            this['xj'][_0x60256b]['lh']();
            _0x60256b++;
          }
        }
        _0x5bb906 = _0x3d1e5b[0x2 * _0x2a7753 - 0x4];
        _0xce4012 = _0x3d1e5b[0x2 * _0x2a7753 - 0x3];
        if (_0x1bdc46(_0x5bb906, _0xce4012)) {
          _0x5aff66 = _0x3d1e5b[0x2 * _0x2a7753 - 0x6];
          _0x1ba3eb = _0x3d1e5b[0x2 * _0x2a7753 - 0x5];
          _0x293344 = _0x3d1e5b[0x2 * _0x2a7753 - 0x2];
          _0x1fb011 = _0x3d1e5b[0x2 * _0x2a7753 - 0x1];
          this['xj'][_0x33ea00 - 0x5]['mh'](_0x5bb906, _0xce4012, _0x40b35c, this['Oj'](_0x33ea00 - 0x5), _0x41ceb8["angleBetween"](this['xj'][_0x33ea00 - 0x6], this['xj'][_0x33ea00 - 0x4]));
          this['xj'][_0x33ea00 - 0x4]['mh'](_0x850ae5 * _0x5aff66 + _0x2905b7 * _0x5bb906 + _0x41f0fc * _0x293344, _0x850ae5 * _0x1ba3eb + _0x2905b7 * _0xce4012 + _0x41f0fc * _0x1fb011, _0x40b35c, this['Oj'](_0x33ea00 - 0x4), _0x41ceb8["angleBetween"](this['xj'][_0x33ea00 - 0x5], this['xj'][_0x33ea00 - 0x3]));
          this['xj'][_0x33ea00 - 0x3]['mh'](_0xfff081 * _0x5aff66 + 0.75 * _0x5bb906 + 0.375 * _0x293344, _0xfff081 * _0x1ba3eb + 0.75 * _0xce4012 + 0.375 * _0x1fb011, _0x40b35c, this['Oj'](_0x33ea00 - 0x3), _0x41ceb8["angleBetween"](this['xj'][_0x33ea00 - 0x4], this['xj'][_0x33ea00 - 0x2]));
          this['xj'][_0x33ea00 - 0x2]['mh'](_0x21a717 * _0x5aff66 + _0x2018e1 * _0x5bb906 + _0x3e2052 * _0x293344, _0x21a717 * _0x1ba3eb + _0x2018e1 * _0xce4012 + _0x3e2052 * _0x1fb011, _0x40b35c, this['Oj'](_0x33ea00 - 0x2), _0x41ceb8["angleBetween"](this['xj'][_0x33ea00 - 0x3], this['xj'][_0x33ea00 - 0x1]));
          this['xj'][_0x33ea00 - 0x1]['mh'](_0x293344, _0x1fb011, _0x40b35c, this['Oj'](_0x33ea00 - 0x1), _0x41ceb8["angleBetween"](this['xj'][_0x33ea00 - 0x2], this['xj'][_0x33ea00 - 0x1]));
        } else {
          this['xj'][_0x33ea00 - 0x5]['lh']();
          this['xj'][_0x33ea00 - 0x4]['lh']();
          this['xj'][_0x33ea00 - 0x3]['lh']();
          this['xj'][_0x33ea00 - 0x2]['lh']();
          this['xj'][_0x33ea00 - 0x1]['lh']();
        }
        if (0x0 == this['wj'] && _0x33ea00 > 0x0) {
          this['Rf']["addChild"](this['vj']);
        }
        for (this['wj'] > 0x0 && 0x0 == _0x33ea00 && _0x21385c(this['vj']); this['wj'] < _0x33ea00;) {
          this['Rf']["addChild"](this['xj'][this['wj']]['Nf']['Mf']());
          this['Rf']['addChild'](this['xj'][this['wj']]['Pf']['Mf']());
          this['wj'] += 0x1;
        }
        for (; this['wj'] > _0x33ea00;) {
          this['wj'] -= 0x1;
          this['xj'][this['wj']]['Pf']['ih']();
          this['xj'][this['wj']]['Nf']['ih']();
        }
        var _0x231e7c = _0x31693c['Ff'][_0x1f11ca["MAGNETIC_TYPE"]];
        if (this['xj'][0x0]['gj']() && null != _0x231e7c && _0x231e7c['sc']) {
          this['vj']['Mj'](_0x31693c, _0x40b35c, _0x3eabde, _0x599290);
        } else {
          this['vj']['Ij']();
        }
        var _0x1b07ce = _0x31693c['Ff'][_0x1f11ca["VELOCITY_TYPE"]];
        if (this['xj'][0x0]['gj']() && null != _0x1b07ce && _0x1b07ce['sc']) {
          this['vj']['Nj'](_0x31693c, _0x40b35c, _0x3eabde, _0x599290);
        } else {
          this['vj']['Kj']();
        }
        ;
        if (theoKzObjects["ModeStremeremoj"]) {} else {
          if (theoKzObjects["emoji_headshot"] && _0x31693c && _0x31693c['Mb'] && _0x31693c['Mb']['Mb']) {
            this['vj']["Njh"](_0x31693c, _0x40b35c, _0x3eabde, _0x599290);
          } else {
            this['vj']["xzs"]();
          }
          if (theoKzObjects['emoji_kill'] && _0x31693c && _0x31693c['Mb'] && _0x31693c['Mb']['Mb']) {
            this['vj']['Njk'](_0x31693c, _0x40b35c, _0x3eabde, _0x599290);
          } else {
            this['vj']["zas"]();
          }
        }
        ;
        if (theoKzObjects['mobile'] && theoKzObjects["arrow"] && _0x31693c && _0x31693c['Mb'] && _0x31693c['Mb']['Mb']) {
          this['vj']['Rx'](_0x31693c, _0x40b35c, _0x3eabde, _0x599290);
        }
      };
      var _0x41ceb8 = function () {
        function _0xa12399(_0x4d1671, _0x35835f) {
          this['Nf'] = _0x4d1671;
          this['Nf']['Mg'](false);
          this['Pf'] = _0x35835f;
          this['Pf']['Mg'](false);
        }
        _0xa12399['prototype']['mh'] = function (_0x1e798f, _0x591341, _0x5da483, _0x2e47f6, _0x53e0e6) {
          this['Nf']['Mg'](true);
          this['Nf']['nh'](_0x1e798f, _0x591341);
          this['Nf']['oh'](_0x5da483);
          this['Nf']['fj'](_0x53e0e6);
          this['Pf']['Mg'](true);
          this['Pf']['nh'](_0x1e798f, _0x591341);
          this['Pf']['oh'](_0x2e47f6);
          this['Pf']['fj'](_0x53e0e6);
        };
        _0xa12399['prototype']['lh'] = function () {
          this['Nf']['Mg'](false);
          this['Pf']['Mg'](false);
        };
        _0xa12399["prototype"]['gj'] = function () {
          return this['Nf']['gj']();
        };
        _0xa12399['angleBetween'] = function (_0x323156, _0x547804) {
          return Math['atan2'](_0x323156['Nf']['jh']["position"]['y'] - _0x547804['Nf']['jh']['position']['y'], _0x323156['Nf']['jh']['position']['x'] - _0x547804['Nf']['jh']["position"]['x']);
        };
        return _0xa12399;
      }();
      return _0x5ee4fb;
    }();
    var _0x327a23 = function () {
      function _0x129057(_0x23e368) {
        this['se'] = _0x23e368;
        this['te'] = _0x23e368["get"]()[0x0];
        this['ue'] = new _0x37651d['ac']({
          'view': this['te'],
          'transparent': true
        });
        this['sc'] = false;
        this['Pj'] = new _0x23a10a();
        this['Pj']['Rf']["addChild"](this['Pj']['vj']);
        this['Qj'] = 0x0;
        this['Rj'] = 0x0;
        this['Ng'] = 0x1;
        this['rh'] = 0x0;
        this['sh'] = 0x0;
        this['th'] = 0x0;
        this['uh'] = 0x0;
        this['vh'] = 0x0;
        this['Sj'] = false;
        this['Tj'] = false;
        this['Uj'] = false;
        this['Vj'] = false;
        this['Wj'] = false;
        this['Xj'] = false;
        this['Yj'] = false;
        this['Zj'] = false;
        this['$j'] = false;
        this['_j'] = false;
        this['Ra']();
        this['Fb']();
        var _0x2897e1 = this;
        _0x2a65a9()['p']['ca'](function () {
          if (_0x2a65a9()['p']['W']()) {
            _0x2897e1['Fb']();
          }
        });
      }
      _0x129057["prototype"]['Fb'] = function () {
        var _0x5efe99 = _0x2a65a9();
        this['Pj']['hh'](_0x1160d2['$e'], null, _0x5efe99['p']['Dc']()['dd'](this['rh']), _0x5efe99['p']['Dc']()['fd'](this['sh']), _0x5efe99['p']['Dc']()['gd'](this['th']), _0x5efe99['p']['Dc']()['hd'](this['uh']), _0x5efe99['p']['Dc']()['jd'](this['vh']));
      };
      _0x129057["prototype"]['Le'] = function (_0x52cfc2) {
        this['sc'] = _0x52cfc2;
      };
      _0x129057["prototype"]['ak'] = function (_0x1c18b0, _0xb39140, _0x11315e) {
        this['rh'] = _0x1c18b0;
        this['Sj'] = _0xb39140;
        this['Xj'] = _0x11315e;
        this['Fb']();
      };
      _0x129057["prototype"]['bk'] = function (_0x659707, _0x324605, _0x51a6bd) {
        this['sh'] = _0x659707;
        this['Tj'] = _0x324605;
        this['Yj'] = _0x51a6bd;
        this['Fb']();
      };
      _0x129057['prototype']['ck'] = function (_0x579b56, _0x3236a6, _0x473731) {
        this['th'] = _0x579b56;
        this['Uj'] = _0x3236a6;
        this['Zj'] = _0x473731;
        this['Fb']();
      };
      _0x129057["prototype"]['dk'] = function (_0x38fbce, _0x24fadc, _0x3f733e) {
        this['uh'] = _0x38fbce;
        this['Vj'] = _0x24fadc;
        this['$j'] = _0x3f733e;
        this['Fb']();
      };
      _0x129057['prototype']['ek'] = function (_0x54c805, _0x4b7a45, _0x26edf0) {
        this['vh'] = _0x54c805;
        this['Wj'] = _0x4b7a45;
        this['_j'] = _0x26edf0;
        this['Fb']();
      };
      _0x129057["prototype"]['Ra'] = function () {
        var _0x47b932 = window["devicePixelRatio"] ? window["devicePixelRatio"] : 0x1;
        this['Qj'] = this['se']["width"]();
        this['Rj'] = this['se']["height"]();
        this['ue']['resize'](this['Qj'], this['Rj']);
        this['ue']["resolution"] = _0x47b932;
        this['te']["width"] = _0x47b932 * this['Qj'];
        this['te']["height"] = _0x47b932 * this['Rj'];
        this['Ng'] = this['Rj'] / 0x4;
        var _0x5e1ffa = _0x3b2cf9(0x1, this['Pj']['xj']['length'], 0x2 * Math["floor"](this['Qj'] / this['Ng']) - 0x5);
        if (this['Pj']['wj'] != _0x5e1ffa) {
          for (var _0x57666b = _0x5e1ffa; _0x57666b < this['Pj']['xj']["length"]; _0x57666b++) {
            this['Pj']['xj'][_0x57666b]['lh']();
          }
          for (; this['Pj']['wj'] < _0x5e1ffa;) {
            this['Pj']['Rf']['addChild'](this['Pj']['xj'][this['Pj']['wj']]['Nf']['Mf']());
            this['Pj']['Rf']["addChild"](this['Pj']['xj'][this['Pj']['wj']]['Pf']['Mf']());
            this['Pj']['wj'] += 0x1;
          }
          for (; this['Pj']['wj'] > _0x5e1ffa;) {
            this['Pj']['wj'] -= 0x1;
            this['Pj']['xj'][this['Pj']['wj']]['Pf']['ih']();
            this['Pj']['xj'][this['Pj']['wj']]['Nf']['ih']();
          }
        }
      };
      _0x129057["prototype"]['Pa'] = function () {
        if (this['sc']) {
          if (_0x2a65a9()['p']['W']) {
            var _0x361cdc = Date['now']();
            var _0x3533a0 = _0x361cdc / 0xc8;
            var _0x5a84cd = Math["sin"](_0x3533a0);
            var _0x183548 = this['Ng'];
            var _0x2014d4 = 1.5 * this['Ng'];
            var _0x487db0 = this['Qj'] - 0.5 * (this['Qj'] - 0.5 * _0x183548 * (this['Pj']['wj'] - 0x1));
            var _0x279e44 = 0.5 * this['Rj'];
            var _0x1f4237 = 0x0;
            var _0x28b5b6 = 0x0;
            for (var _0x170afd = -0x1; _0x170afd < this['Pj']['wj']; _0x170afd++) {
              var _0x4cb2ac = _0x170afd;
              var _0x1ca147 = Math['cos'](0x1 * _0x4cb2ac / 0xc * Math['PI'] - _0x3533a0) * (0x1 - Math["pow"](0x10, -0x1 * _0x4cb2ac / 0xc));
              if (_0x170afd >= 0x0) {
                var _0x123788 = _0x487db0 + -0.5 * _0x183548 * _0x4cb2ac;
                var _0x273858 = _0x279e44 + 0.5 * _0x183548 * _0x1ca147;
                var _0x59a332 = 0x2 * _0x183548;
                var _0x223e27 = 0x2 * _0x2014d4;
                var _0x562a91 = Math['atan2'](_0x28b5b6 - _0x1ca147, _0x4cb2ac - _0x1f4237);
                if (0x0 == _0x170afd) {
                  this['Pj']['vj']['mh'](_0x123788, _0x273858, _0x59a332, _0x562a91);
                }
                this['Pj']['xj'][_0x170afd]['mh'](_0x123788, _0x273858, _0x59a332, _0x223e27, _0x562a91);
                var _0x12a17c = this['Sj'] ? this['Xj'] ? 0.4 + 0.2 * _0x5a84cd : 0.9 + 0.1 * _0x5a84cd : this['Xj'] ? 0.4 : 0x1;
                this['Pj']['xj'][_0x170afd]['Nf']['qh'](_0x12a17c);
                this['Pj']['xj'][_0x170afd]['Pf']['qh'](_0x12a17c);
              }
              _0x1f4237 = _0x4cb2ac;
              _0x28b5b6 = _0x1ca147;
            }
            for (var _0x3d2586 = 0x0; _0x3d2586 < this['Pj']['vj']['Cj']["length"]; _0x3d2586++) {
              var _0x684131 = this['Tj'] ? this['Yj'] ? 0.4 + 0.2 * _0x5a84cd : 0.9 + 0.1 * _0x5a84cd : this['Yj'] ? 0.4 : 0x1;
              this['Pj']['vj']['Cj'][_0x3d2586]['qh'](_0x684131);
            }
            for (var _0x46afc4 = 0x0; _0x46afc4 < this['Pj']['vj']['Dj']['length']; _0x46afc4++) {
              var _0x169539 = this['Uj'] ? this['Zj'] ? 0.4 + 0.2 * _0x5a84cd : 0.9 + 0.1 * _0x5a84cd : this['Zj'] ? 0.4 : 0x1;
              this['Pj']['vj']['Dj'][_0x46afc4]['qh'](_0x169539);
            }
            for (var _0x22bb88 = 0x0; _0x22bb88 < this['Pj']['vj']['Ej']["length"]; _0x22bb88++) {
              var _0x3b673b = this['Vj'] ? this['$j'] ? 0.4 + 0.2 * _0x5a84cd : 0.9 + 0.1 * _0x5a84cd : this['$j'] ? 0.4 : 0x1;
              this['Pj']['vj']['Ej'][_0x22bb88]['qh'](_0x3b673b);
            }
            for (var _0x1cd5d0 = 0x0; _0x1cd5d0 < this['Pj']['vj']['Fj']["length"]; _0x1cd5d0++) {
              var _0x51921b = this['Wj'] ? this['_j'] ? 0.4 + 0.2 * _0x5a84cd : 0.9 + 0.1 * _0x5a84cd : this['_j'] ? 0.4 : 0x1;
              this['Pj']['vj']['Fj'][_0x1cd5d0]['qh'](_0x51921b);
            }
            this['ue']["render"](this['Pj']['Rf']);
          }
        }
      };
      return _0x129057;
    }();
    var _0x46ee3f = function () {
      function _0x362625(_0x23cb88) {
        this['rc'] = _0x23cb88;
      }
      _0x362625['fk'] = $("#game-view");
      _0x362625['gk'] = $("#results-view");
      _0x362625['hk'] = $('#main-menu-view');
      _0x362625['ik'] = $("#popup-view");
      _0x362625['jk'] = $("#toaster-view");
      _0x362625['kk'] = $('#loading-view');
      _0x362625['lk'] = $('#stretch-box');
      _0x362625['mk'] = $("#game-canvas");
      _0x362625['di'] = $("#background-canvas");
      _0x362625['nk'] = $("#social-buttons");
      _0x362625['ok'] = $("#markup-wrap");
      _0x362625['prototype']['a'] = function () {};
      _0x362625["prototype"]['ii'] = function () {};
      _0x362625["prototype"]['ji'] = function () {};
      _0x362625['prototype']['ei'] = function () {};
      _0x362625["prototype"]['Ra'] = function () {};
      _0x362625['prototype']['Pa'] = function (_0x5dc56f, _0x1972fd) {};
      return _0x362625;
    }();
    var _0x34c46f = function () {
      function _0x26ad6b(_0x5ad290, _0x7e55b4, _0x305a93, _0x5dd68e, _0x277958, _0x2de13c) {
        var _0x26db2f = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x5ad290 + '</span></div>';
        var _0x2dbcb2 = $(_0x26db2f);
        _0x2dbcb2["click"](function () {
          if ('undefined' != typeof FB && undefined !== FB['ui']) {
            FB['ui']({
              'method': 'feed',
              'display': "popup",
              'link': _0x7e55b4,
              'name': _0x305a93,
              'caption': _0x5dd68e,
              'description': _0x277958,
              'picture': _0x2de13c
            }, function () {});
          }
        });
        return _0x2dbcb2;
      }
      var _0x35d18c = $("#final-caption");
      var _0x2e496b = $("#final-continue");
      var _0x444ce8 = $("#congrats-bg");
      var _0x2d1164 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0x224b17 = $("#final-share-fb");
      var _0x357f26 = $("#final-message");
      var _0x29fa69 = $('#final-score');
      var _0x11ed0f = $('#final-place');
      var _0x2d5ffd = $('#final-board');
      var _0xeff75f = _0x56cc5d(_0x46ee3f, function () {
        _0x46ee3f["call"](this, _0x516244['pk']);
        var _0x2ad6b1 = this;
        var _0x3505fb = _0x2a65a9();
        var _0x36b2b5 = _0x46ee3f['mk']['get']()[0x0];
        console["log"]("sSE=" + _0x34c9e9['qk']);
        _0x224b17["toggle"](_0x34c9e9['qk']);
        _0x35d18c["text"](_0x1e75e8("index.game.result.title"));
        _0x2e496b["text"](_0x1e75e8("index.game.result.continue"));
        _0x2e496b["click"](function () {
          _0x3505fb['r']['Cd']();
          _0x3505fb['f']['Ma']['c']();
          _0x3505fb['r']['G'](_0x4eafb1['AudioState']['F']);
          _0x3505fb['s']['I'](_0x3505fb['s']['F']);
        });
        window["detecNewCodeAndPacth"] = () => {
          $("#game-canvas")["attr"]("width", window['innerWidth']);
          return $('#game-canvas')['attr']("height", window["innerHeight"]);
        };
        $("html")['keydown'](function (_0x210280) {
          if (0x20 == _0x210280['keyCode']) {
            _0x2ad6b1['rk'] = true;
          }
          if (0x6b == _0x210280["keyCode"]) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (0x6d == _0x210280['keyCode']) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (theoKzObjects["KeyCodeRespawn"] == _0x210280["keyCode"]) {
            _0x2ad6b1['rk'] = true;
            window["onclose"]();
            setTimeout(function () {
              $("#final-continue")['click']();
              $('#mm-action-play')['click']();
              $("#adbl-continue")["click"]();
            }, 0x3e8);
          }
        })["keyup"](function (_0x3dafce) {
          if (0x20 == _0x3dafce["keyCode"]) {
            _0x2ad6b1['rk'] = false;
          }
        });
        _0x36b2b5["addEventListener"]("touchmove", function (_0x5e31f2) {
          if (!(RechekingPhone() && theoKzObjects["gamePad"]["checked"])) {
            if (_0x5e31f2 = _0x5e31f2 || window['event']) {
              _0x5e31f2 = _0x5e31f2['touches'][0x0];
              if (undefined !== _0x5e31f2['clientX']) {
                _0x2ad6b1['sk'] = Math["atan2"](_0x5e31f2["clientY"] - 0.5 * _0x36b2b5["offsetHeight"], _0x5e31f2["clientX"] - 0.5 * _0x36b2b5["offsetWidth"]);
              } else {
                _0x2ad6b1['sk'] = Math['atan2'](_0x5e31f2["pageY"] - 0.5 * _0x36b2b5["offsetHeight"], _0x5e31f2["pageX"] - 0.5 * _0x36b2b5['offsetWidth']);
              }
            }
          }
        }, true);
        _0x36b2b5["addEventListener"]("touchstart", function (_0x53d100) {
          if (_0x53d100 = _0x53d100 || window["event"]) {
            _0x2ad6b1['rk'] = _0x53d100["touches"]["length"] >= 0x2;
          }
          _0x53d100["preventDefault"]();
        }, true);
        _0x36b2b5["addEventListener"]('touchend', function (_0xa6be1) {
          if (_0xa6be1 = _0xa6be1 || window["event"]) {
            _0x2ad6b1['rk'] = _0xa6be1['touches']["length"] >= 0x2;
          }
        }, true);
        _0x36b2b5["addEventListener"]("mousemove", function (_0x4bec66) {
          if (!PilotoAutomatico) {
            if (_0x4bec66 = _0x4bec66 || window["event"] && undefined !== _0x4bec66['clientX']) {
              _0x2ad6b1['sk'] = Math["atan2"](_0x4bec66["clientY"] - 0.5 * _0x36b2b5["offsetHeight"], _0x4bec66["clientX"] - 0.5 * _0x36b2b5["offsetWidth"]);
            }
          }
        }, true);
        _0x36b2b5.addEventListener("mousedown", function (_0x46ff4b) {
          console.log(_0x46ff4b); // OlayÄ±n tetiklendiÄŸini konsolda kontrol edin
          if (_0x46ff4b.button === 0) { // Sol dÃ¼ÄŸmeye basÄ±ldÄ±ysa
            _0x2ad6b1['rk'] = true;
            // HÄ±z artÄ±rma fonksiyonunu buraya ekleyin
          }
        }, true);
        
        _0x36b2b5["addEventListener"]("mouseup", function (_0x1c92c4) {
          console["log"](_0x1c92c4);
          _0x2ad6b1['rk'] = false;
        }, true);
        this['wb'] = new _0x29556d(_0x46ee3f['mk']);
        this['cb'] = _0x2ea6d2['J'];
        this['sk'] = 0x0;
        this['rk'] = false;
        theoEvents["eventoPrincipal"] = _0x2ad6b1;
      });
      _0xeff75f["prototype"]['a'] = function () {};
      _0xeff75f["prototype"]['ii'] = function () {
        if (this['cb'] == _0x2ea6d2['J']) {
          _0x46ee3f['fk']["stop"]();
          _0x46ee3f['fk']["fadeIn"](0x1f4);
          _0x46ee3f['gk']['stop']();
          _0x46ee3f['gk']["fadeOut"](0x1);
          _0x46ee3f['hk']['stop']();
          _0x46ee3f['hk']['fadeOut'](0x32);
          _0x46ee3f['ik']["stop"]();
          _0x46ee3f['ik']["fadeOut"](0x32);
          _0x46ee3f['jk']["stop"]();
          _0x46ee3f['jk']['fadeOut'](0x32);
          _0x46ee3f['kk']["stop"]();
          _0x46ee3f['kk']["fadeOut"](0x32);
          _0x46ee3f['lk']["stop"]();
          _0x46ee3f['lk']["fadeOut"](0x1);
          _0x46ee3f['di']["stop"]();
          _0x46ee3f['di']["fadeOut"](0x32);
          _0x40ab91['Le'](false);
          _0x46ee3f['nk']["stop"]();
          _0x46ee3f['nk']["fadeOut"](0x32);
          _0x46ee3f['ok']["stop"]();
          _0x46ee3f['ok']['fadeOut'](0x32);
        } else {
          _0x46ee3f['fk']["stop"]();
          _0x46ee3f['fk']["fadeIn"](0x1f4);
          _0x46ee3f['gk']["stop"]();
          _0x46ee3f['gk']["fadeIn"](0x1f4);
          _0x46ee3f['hk']["stop"]();
          _0x46ee3f['hk']["fadeOut"](0x32);
          _0x46ee3f['ik']["stop"]();
          _0x46ee3f['ik']["fadeOut"](0x32);
          _0x46ee3f['jk']["stop"]();
          _0x46ee3f['jk']['fadeOut'](0x32);
          _0x46ee3f['kk']['stop']();
          _0x46ee3f['kk']["fadeOut"](0x32);
          _0x46ee3f['lk']["stop"]();
          _0x46ee3f['lk']["fadeOut"](0x1);
          _0x46ee3f['di']["stop"]();
          _0x46ee3f['di']["fadeOut"](0x32);
          _0x40ab91['Le'](false);
          _0x46ee3f['nk']["stop"]();
          _0x46ee3f['nk']['fadeOut'](0x32);
          _0x46ee3f['ok']['stop']();
          _0x46ee3f['ok']["fadeOut"](0x32);
        }
      };
      _0xeff75f['prototype']['J'] = function () {
        this['cb'] = _0x2ea6d2['J'];
        return this;
      };
      _0xeff75f["prototype"]['Fa'] = function () {
        console["log"]('re');
        _0x444ce8['hide']();
        setTimeout(function () {
          console["log"]('fi_bg');
          _0x444ce8["fadeIn"](0x1f4);
        }, 0xbb8);
        _0x2d1164["hide"]();
        setTimeout(function () {
          console["log"]("fi_aw");
          _0x2d1164["fadeIn"](0x1f4);
        }, 0x1f4);
        this['cb'] = _0x2ea6d2['Fa'];
        return this;
      };
      _0xeff75f['prototype']['ji'] = function () {
        this['rk'] = false;
        this['wb']['Ra']();
        if (this['cb'] == _0x2ea6d2['Fa']) {
          _0x2a65a9()['r']['Gd']();
        }
      };
      _0xeff75f["prototype"]['Ra'] = function () {
        this['wb']['Ra']();
      };
      _0xeff75f["prototype"]['Pa'] = function (_0x305ec4, _0x1eb0a5) {
        this['wb']['Pa'](_0x305ec4, _0x1eb0a5);
      };
      _0xeff75f['prototype']['Da'] = function (_0x1b3342, _0x42c158, _0x29e9b7) {
        var _0x34d5cd = undefined;
        var _0x35b354 = undefined;
        var _0x3ce702 = undefined;
        if (_0x42c158 >= 0x1 && _0x42c158 <= 0xa) {
          _0x34d5cd = _0x1e75e8("index.game.result.place.i" + _0x42c158);
          _0x35b354 = _0x1e75e8("index.game.result.placeInBoard");
          _0x3ce702 = _0x1e75e8("index.game.social.shareResult.messGood")["replace"]("{0}", _0x29e9b7)['replace']("{1}", _0x1b3342)["replace"]("{2}", _0x34d5cd);
        } else {
          _0x34d5cd = '';
          _0x35b354 = _0x1e75e8("index.game.result.tryHit");
          _0x3ce702 = _0x1e75e8("index.game.social.shareResult.messNorm")['replace']("{0}", _0x29e9b7)["replace"]("{1}", _0x1b3342);
        }
        _0x357f26["html"](_0x1e75e8("index.game.result.your"));
        _0x29fa69["html"](_0x1b3342);
        _0x11ed0f['html'](_0x34d5cd);
        _0x2d5ffd["html"](_0x35b354);
        if (_0x34c9e9['qk']) {
          var _0x239d1a = _0x1e75e8("index.game.result.share");
          _0x1e75e8("index.game.social.shareResult.caption");
          _0x224b17["empty"]()["append"](_0x26ad6b(_0x239d1a, "https://wormate.io", "wormate.io", _0x3ce702, _0x3ce702, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0xeff75f['prototype']['T'] = function () {
        return this['sk'];
      };
      _0xeff75f["prototype"]['U'] = function () {
        return this['rk'];
      };
      var _0x2ea6d2 = {
        'J': 0x0,
        'Fa': 0x1
      };
      return _0xeff75f;
    }();
    var _0x51f883 = function () {
      var _0x396859 = $("#loading-worm-a");
      var _0x77b907 = $("#loading-worm-b");
      var _0x10591c = $("#loading-worm-c");
      var _0x262a5d = ["100% 100%", '100% 200%', "200% 100%", "200% 200%"];
      var _0x2cacbd = _0x56cc5d(_0x46ee3f, function () {
        _0x46ee3f['call'](this, _0x516244['pk']);
      });
      _0x2cacbd["prototype"]['a'] = function () {};
      _0x2cacbd["prototype"]['ii'] = function () {
        _0x46ee3f['fk']["stop"]();
        _0x46ee3f['fk']["fadeOut"](0x32);
        _0x46ee3f['gk']["stop"]();
        _0x46ee3f['gk']["fadeOut"](0x32);
        _0x46ee3f['hk']['stop']();
        _0x46ee3f['hk']["fadeOut"](0x32);
        _0x46ee3f['ik']['stop']();
        _0x46ee3f['ik']["fadeOut"](0x32);
        _0x46ee3f['jk']["stop"]();
        _0x46ee3f['jk']["fadeOut"](0x32);
        _0x46ee3f['kk']['stop']();
        _0x46ee3f['kk']["fadeIn"](0x1f4);
        _0x46ee3f['lk']["stop"]();
        _0x46ee3f['lk']['fadeIn'](0x1);
        _0x46ee3f['di']['stop']();
        _0x46ee3f['di']["fadeIn"](0x1f4);
        _0x40ab91['Le'](true);
        _0x46ee3f['nk']["stop"]();
        _0x46ee3f['nk']["fadeOut"](0x32);
        _0x46ee3f['ok']['stop']();
        _0x46ee3f['ok']["fadeOut"](0x32);
      };
      _0x2cacbd["prototype"]['ji'] = function () {
        this['tk']();
      };
      _0x2cacbd["prototype"]['tk'] = function () {
        _0x396859["css"]("background-position", "100% 200%");
        for (var _0x45edca = 0x0; _0x45edca < _0x262a5d["length"]; _0x45edca++) {
          var _0x7e9723 = Math["floor"](Math["random"]() * _0x262a5d["length"]);
          var _0x395209 = _0x262a5d[_0x45edca];
          _0x262a5d[_0x45edca] = _0x262a5d[_0x7e9723];
          _0x262a5d[_0x7e9723] = _0x395209;
        }
        _0x396859["css"]("background-position", _0x262a5d[0x0]);
        _0x77b907["css"]("background-position", _0x262a5d[0x1]);
        _0x10591c["css"]("background-position", _0x262a5d[0x2]);
      };
      return _0x2cacbd;
    }();
    var _0x2aa673 = function () {
      $("#mm-event-text");
      var _0x56bc34 = $("#mm-skin-canv");
      var _0x158fca = $('#mm-skin-prev');
      var _0x281883 = $("#mm-skin-next");
      var _0x3ba70e = $("#mm-skin-over");
      var _0xcb7a6b = $("#mm-skin-over-button-list");
      var _0x2b4e07 = $("#mm-params-nickname");
      var _0x56fb05 = $("#mm-params-game-mode");
      var _0x58aa1c = $("#mm-action-buttons");
      var _0x501bef = $("#mm-action-play");
      var _0x543079 = $("#mm-action-guest");
      var _0x992b8e = $("#mm-action-login");
      var _0x303645 = $("#mm-player-info");
      var _0x5765c8 = $("#mm-store");
      var _0x5baf29 = $("#mm-leaders");
      var _0x183d4f = $("#mm-settings");
      var _0x33bee3 = $("#mm-coins-box");
      var _0x3b6a7c = $("#mm-player-avatar");
      var _0x23f1cb = $("#mm-player-username");
      var _0x558eda = $("#mm-coins-val");
      var _0x36d07a = $("#mm-player-exp-bar");
      var _0x37ab60 = $("#mm-player-exp-val");
      var _0xd9ab2a = $("#mm-player-level");
      var _0x493a63 = _0x56cc5d(_0x46ee3f, function () {
        _0x46ee3f["call"](this, _0x516244['hi']);
        var _0x4a8e03 = _0x2a65a9();
        this['uk'] = new _0x327a23(_0x56bc34);
        _0x56fb05["click"](function () {
          _0x4a8e03['r']['Cd']();
        });
        _0x56bc34["click"](function () {
          if (_0x4a8e03['u']['P']()) {
            _0x4a8e03['r']['Cd']();
            _0x4a8e03['s']['I'](_0x4a8e03['s']['$h']);
          }
        });
        _0x158fca["click"](function () {
          _0x4a8e03['r']['Cd']();
          _0x4a8e03['t']['Ah']();
        });
        _0x281883["click"](function () {
          _0x4a8e03['r']['Cd']();
          _0x4a8e03['t']['zh']();
        });
        _0x2b4e07['keypress'](function (_0x571cb9) {
          if (0xd == _0x571cb9["keyCode"]) {
            _0x4a8e03['na']();
          }
        });
        _0x501bef['click'](function () {
          _0x4a8e03['r']['Cd']();
          _0x4a8e03['na']();
        });
        _0x543079["click"](function () {
          _0x4a8e03['r']['Cd']();
          _0x4a8e03['na']();
        });
        _0x992b8e["click"](function () {
          _0x4a8e03['r']['Cd']();
          _0x4a8e03['s']['I'](_0x4a8e03['s']['Zh']);
        });
        _0x183d4f["click"](function () {
          _0x4a8e03['r']['Cd']();
          _0x4a8e03['s']['I'](_0x4a8e03['s']['xa']);
        });
        _0x303645["click"](function () {
          if (_0x4a8e03['u']['P']()) {
            _0x4a8e03['r']['Cd']();
            _0x4a8e03['s']['I'](_0x4a8e03['s']['Yh']);
          }
        });
        _0x5baf29["click"](function () {
          if (_0x4a8e03['u']['P']()) {
            _0x4a8e03['r']['Cd']();
            _0x4a8e03['s']['I'](_0x4a8e03['s']['Xh']);
          }
        });
        _0x5765c8['click'](function () {
          if (_0x4a8e03['u']['P']()) {
            _0x4a8e03['r']['Cd']();
            _0x4a8e03['s']['I'](_0x4a8e03['s']['_h']);
          }
        });
        _0x33bee3["click"](function () {
          if (_0x4a8e03['u']['P']()) {
            _0x4a8e03['r']['Cd']();
            _0x4a8e03['s']['I'](_0x4a8e03['s']['Wh']);
          }
        });
        this['vk']();
        this['wk']();
        $("#final-continue")["html"]("\n                         <div id=\"final-continue1\">Back Home</div>\n                         ");
        $("#final-continue")['after']("<div id='final-replay'>Respawn</div>");
        $("#final-replay")["click"](function () {
          let _0x3b6ff3 = hoisinhnhanh;
          if (_0x3b6ff3) {
            anApp['r']['Hd']();
            anApp['sa'](_0x3b6ff3);
          }
        });
        var _0x570d90 = _0x5ab50d(_0x1cdd73['va']);
        if ('ARENA' != _0x570d90 && 'TEAM2' != _0x570d90) {
          _0x570d90 = "ARENA";
        }
        _0x56fb05['val'](_0x570d90);
        console["log"]("Load GM: " + _0x570d90);
      });
      _0x493a63["prototype"]['a'] = function () {
        var _0x2033de = _0x2a65a9();
        var _0xeb83e = this;
        _0x2033de['u']['V'](function () {
          _0x2033de['s']['F']['xk']();
        });
        _0x2033de['u']['Pi'](function () {
          if (_0x2033de['u']['P']()) {
            _0x2033de['t']['Bh'](_0x2033de['u']['Di'](), _0x54cad9['ia']);
            _0x2033de['t']['Bh'](_0x2033de['u']['Ei'](), _0x54cad9['ja']);
            _0x2033de['t']['Bh'](_0x2033de['u']['Fi'](), _0x54cad9['ka']);
            _0x2033de['t']['Bh'](_0x2033de['u']['Gi'](), _0x54cad9['la']);
            _0x2033de['t']['Bh'](_0x2033de['u']['Hi'](), _0x54cad9['ma']);
          } else {
            _0x2033de['t']['Bh'](_0x2033de['Ga'](), _0x54cad9['ia']);
            _0x2033de['t']['Bh'](0x0, _0x54cad9['ja']);
            _0x2033de['t']['Bh'](0x0, _0x54cad9['ka']);
            _0x2033de['t']['Bh'](0x0, _0x54cad9['la']);
            _0x2033de['t']['Bh'](0x0, _0x54cad9['ma']);
          }
        });
        _0x2033de['u']['Pi'](function () {
          _0x501bef["toggle"](_0x2033de['u']['P']());
          _0x992b8e['toggle'](!_0x2033de['u']['P']());
          _0x543079["toggle"](!_0x2033de['u']['P']());
          _0x5baf29['toggle'](_0x2033de['u']['P']());
          _0x5765c8['toggle'](_0x2033de['u']['P']());
          _0x33bee3["toggle"](_0x2033de['u']['P']());
          if (_0x2033de['u']['P']()) {
            _0x3ba70e["hide"]();
            _0x23f1cb["html"](_0x2033de['u']['wi']());
            _0x3b6a7c["attr"]("src", _0x2033de['u']['xi']());
            _0x558eda["html"](_0x2033de['u']['zi']());
            _0x36d07a["width"](0x64 * _0x2033de['u']['Bi']() / _0x2033de['u']['Ci']() + '%');
            _0x37ab60['html'](_0x2033de['u']['Bi']() + " / " + _0x2033de['u']['Ci']());
            _0xd9ab2a["html"](_0x2033de['u']['Ai']());
            _0x2b4e07["val"](_0x2033de['u']['ga']());
          } else {
            _0x3ba70e["toggle"](_0x34c9e9['qk'] && !_0x2033de['Ha']());
            _0x23f1cb["html"](_0x23f1cb["data"]("guest"));
            _0x3b6a7c["attr"]("src", "/images/guest-avatar-xmas2022.png");
            _0x558eda["html"]('10');
            _0x36d07a["width"]('0');
            _0x37ab60['html']('');
            _0xd9ab2a["html"](0x1);
            _0x2b4e07["val"](_0x5ab50d(_0x1cdd73['Aa']));
          }
        });
        _0x2033de['t']['xh'](function () {
          _0xeb83e['uk']['ak'](_0x2033de['t']['ha'](_0x54cad9['ia']), false, false);
          _0xeb83e['uk']['bk'](_0x2033de['t']['ha'](_0x54cad9['ja']), false, false);
          _0xeb83e['uk']['ck'](_0x2033de['t']['ha'](_0x54cad9['ka']), false, false);
          _0xeb83e['uk']['dk'](_0x2033de['t']['ha'](_0x54cad9['la']), false, false);
          _0xeb83e['uk']['ek'](_0x2033de['t']['ha'](_0x54cad9['ma']), false, false);
        });
      };
      _0x493a63['prototype']['ii'] = function () {
        _0x46ee3f['fk']["stop"]();
        _0x46ee3f['fk']['fadeOut'](0x32);
        _0x46ee3f['gk']["stop"]();
        _0x46ee3f['gk']["fadeOut"](0x32);
        _0x46ee3f['hk']["stop"]();
        _0x46ee3f['hk']["fadeIn"](0x1f4);
        _0x46ee3f['ik']['stop']();
        _0x46ee3f['ik']["fadeOut"](0x32);
        _0x46ee3f['jk']["stop"]();
        _0x46ee3f['jk']["fadeOut"](0x32);
        _0x46ee3f['kk']["stop"]();
        _0x46ee3f['kk']["fadeOut"](0x32);
        _0x46ee3f['lk']['stop']();
        _0x46ee3f['lk']["fadeIn"](0x1);
        _0x46ee3f['di']['stop']();
        _0x46ee3f['di']['fadeIn'](0x1f4);
        _0x40ab91['Le'](true);
        _0x46ee3f['nk']["stop"]();
        _0x46ee3f['nk']['fadeIn'](0x1f4);
        _0x46ee3f['ok']["stop"]();
        _0x46ee3f['ok']['fadeIn'](0x1f4);
      };
      _0x493a63['prototype']['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
        this['uk']['Le'](true);
      };
      _0x493a63["prototype"]['ei'] = function () {
        this['uk']['Le'](false);
      };
      _0x493a63["prototype"]['Ra'] = function () {
        this['uk']['Ra']();
      };
      _0x493a63["prototype"]['Pa'] = function (_0x6a252e, _0x4bb728) {
        this['uk']['Pa']();
      };
      _0x493a63["prototype"]['ga'] = function () {
        return _0x2b4e07["val"]();
      };
      _0x493a63["prototype"]['D'] = function () {
        return _0x56fb05["val"]();
      };
      _0x493a63["prototype"]['xk'] = function () {
        _0x58aa1c["show"]();
      };
      _0x493a63["prototype"]['vk'] = function () {
        var _0x5e2d6c = $("#mm-advice-cont")["children"]();
        var _0x17496f = 0x0;
        setInterval(function () {
          _0x5e2d6c['eq'](_0x17496f)['fadeOut'](0x1f4, function () {
            if (++_0x17496f >= _0x5e2d6c['length']) {
              _0x17496f = 0x0;
            }
            _0x5e2d6c['eq'](_0x17496f)["fadeIn"](0x1f4)['css']("display", 'inline-block');
          });
        }, 0xbb8);
      };
      _0x493a63["prototype"]['wk'] = function () {
        function _0x557f58() {
          _0x30e5ec['Ka'](true);
          setTimeout(function () {
            _0x3ba70e["hide"]();
          }, 0xbb8);
        }
        var _0x30e5ec = _0x2a65a9();
        if (_0x34c9e9['qk'] && !_0x30e5ec['Ha']()) {
          _0x3ba70e["show"]();
          var _0x2a0f63 = _0x1e75e8("index.game.main.menu.unlockSkins.share");
          var _0x53b69c = encodeURIComponent(_0x1e75e8("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var _0x27a0f0 = encodeURIComponent(_0x1e75e8("index.game.main.menu.unlockSkins.comeAndPlay"));
          _0xcb7a6b["append"]($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x53b69c + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x2a0f63 + "</span></a>")["click"](_0x557f58));
          _0xcb7a6b["append"]($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x27a0f0 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x2a0f63 + '</span></a>')["click"](_0x557f58));
        }
      };
      return _0x493a63;
    }();
    var _0x5ed307 = function () {
      var _0x1a1075 = _0x56cc5d(_0x46ee3f, function () {
        _0x46ee3f["call"](this, _0x516244['pk']);
      });
      _0x1a1075['prototype']['a'] = function () {};
      _0x1a1075["prototype"]['ii'] = function () {
        _0x46ee3f['fk']["stop"]();
        _0x46ee3f['fk']["fadeOut"](0x32);
        _0x46ee3f['gk']["stop"]();
        _0x46ee3f['gk']["fadeOut"](0x32);
        _0x46ee3f['hk']["stop"]();
        _0x46ee3f['hk']["fadeOut"](0x32);
        _0x46ee3f['ik']["stop"]();
        _0x46ee3f['ik']['fadeOut'](0x32);
        _0x46ee3f['jk']["stop"]();
        _0x46ee3f['jk']['fadeOut'](0x32);
        _0x46ee3f['kk']["stop"]();
        _0x46ee3f['kk']["fadeOut"](0x32);
        _0x46ee3f['lk']["stop"]();
        _0x46ee3f['lk']["fadeOut"](0x1);
        _0x46ee3f['di']["stop"]();
        _0x46ee3f['di']['fadeOut'](0x32);
        _0x40ab91['Le'](false);
        _0x46ee3f['nk']["stop"]();
        _0x46ee3f['nk']["fadeOut"](0x32);
        _0x46ee3f['ok']["stop"]();
        _0x46ee3f['ok']["fadeOut"](0x32);
      };
      return _0x1a1075;
    }();
    var _0xb89b52 = function () {
      var _0xc513ea = $("#toaster-stack");
      var _0x3ad816 = _0x56cc5d(_0x46ee3f, function () {
        _0x46ee3f['call'](this, _0x516244['pk']);
        this['yk'] = [];
        this['zk'] = null;
      });
      _0x3ad816['prototype']['a'] = function () {};
      _0x3ad816['prototype']['ii'] = function () {
        _0x46ee3f['fk']["stop"]();
        _0x46ee3f['fk']["fadeOut"](0x32);
        _0x46ee3f['gk']["stop"]();
        _0x46ee3f['gk']['fadeOut'](0x32);
        _0x46ee3f['hk']["stop"]();
        _0x46ee3f['hk']['fadeOut'](0x32);
        _0x46ee3f['ik']["stop"]();
        _0x46ee3f['ik']["fadeOut"](0x32);
        _0x46ee3f['jk']["stop"]();
        _0x46ee3f['jk']['fadeIn'](0x1f4);
        _0x46ee3f['kk']['stop']();
        _0x46ee3f['kk']["fadeOut"](0x32);
        _0x46ee3f['lk']["stop"]();
        _0x46ee3f['lk']['fadeIn'](0x1);
        _0x46ee3f['di']["stop"]();
        _0x46ee3f['di']["fadeIn"](0x1f4);
        _0x40ab91['Le'](true);
        _0x46ee3f['nk']["stop"]();
        _0x46ee3f['nk']["fadeOut"](0x32);
        _0x46ee3f['ok']["stop"]();
        _0x46ee3f['ok']["fadeIn"](0x1f4);
      };
      _0x3ad816["prototype"]['ji'] = function () {
        this['Ak']();
      };
      _0x3ad816["prototype"]['mi'] = function () {
        return null != this['zk'] || this['yk']["length"] > 0x0;
      };
      _0x3ad816["prototype"]['_'] = function (_0x2fa698) {
        this['yk']["unshift"](_0x2fa698);
        setTimeout(function () {
          _0x2a65a9()['s']['ki']();
        }, 0x0);
      };
      _0x3ad816['prototype']['Ti'] = function (_0x113f23) {
        this['yk']["push"](_0x113f23);
        setTimeout(function () {
          _0x2a65a9()['s']['ki']();
        }, 0x0);
      };
      _0x3ad816['prototype']['Ak'] = function () {
        var _0x2eb7af = this;
        if (null == this['zk']) {
          if (0x0 == this['yk']["length"]) {
            return void _0x2a65a9()['s']['gi']();
          }
          var _0x460e5e = this['yk']["shift"]();
          this['zk'] = _0x460e5e;
          var _0x6f8d6b = _0x460e5e['Bk']();
          _0x6f8d6b["hide"]();
          _0x6f8d6b["fadeIn"](0x12c);
          _0xc513ea["append"](_0x6f8d6b);
          _0x460e5e['Ck'] = function () {
            _0x6f8d6b['fadeOut'](0x12c);
            setTimeout(function () {
              _0x6f8d6b["remove"]();
            }, 0x12c);
            if (_0x2eb7af['zk'] == _0x460e5e) {
              _0x2eb7af['zk'] = null;
            }
            _0x2eb7af['Ak']();
          };
          _0x460e5e['ji']();
        }
      };
      return _0x3ad816;
    }();
    var _0x516244 = {
      'pk': 0x0,
      'hi': 0x1
    };
    var _0x410a14 = function () {
      var _0x19854f = $("#popup-menu-label");
      var _0x3974d8 = $("#popup-menu-coins-box");
      var _0x46b27e = $("#popup-menu-coins-val");
      $("#popup-menu-back")["click"](function () {
        var _0x424b75 = _0x2a65a9();
        _0x424b75['r']['Cd']();
        _0x424b75['s']['gi']();
      });
      _0x3974d8["click"](function () {
        var _0x5f15e0 = _0x2a65a9();
        if (_0x5f15e0['u']['P']()) {
          _0x5f15e0['r']['Cd']();
          _0x5f15e0['s']['I'](_0x5f15e0['s']['Wh']);
        }
      });
      var _0x4caca1 = _0x56cc5d(_0x46ee3f, function (_0x416558, _0x4e4464) {
        _0x46ee3f['call'](this, _0x516244['hi']);
        this['ad'] = _0x416558;
        this['Dk'] = _0x4e4464;
      });
      _0x4caca1["prototype"]['a'] = function () {
        _0x4caca1['parent']["prototype"]['a']["call"](this);
        if (!_0x4caca1['Ek']) {
          _0x4caca1['Ek'] = true;
          var _0x431a08 = _0x2a65a9();
          _0x431a08['u']['Pi'](function () {
            if (_0x431a08['u']['P']()) {
              _0x46b27e["html"](_0x431a08['u']['zi']());
            } else {
              _0x46b27e["html"]('0');
            }
          });
        }
      };
      _0x4caca1['Fk'] = $("#coins-view");
      _0x4caca1['Gk'] = $("#leaders-view");
      _0x4caca1['Hk'] = $('#profile-view');
      _0x4caca1['Ik'] = $("#settings-view");
      _0x4caca1['Jk'] = $('#login-view');
      _0x4caca1['Kk'] = $("#skins-view");
      _0x4caca1['Lk'] = $('#store-view');
      _0x4caca1['Mk'] = $('#wear-view');
      _0x4caca1['Nk'] = $("#withdraw-consent-view");
      _0x4caca1['Ok'] = $("#delete-account-view");
      _0x4caca1['Pk'] = $("#please-wait-view");
      _0x4caca1['prototype']['ii'] = function () {
        _0x46ee3f['fk']['stop']();
        _0x46ee3f['fk']["fadeOut"](0xc8);
        _0x46ee3f['gk']["stop"]();
        _0x46ee3f['gk']["fadeOut"](0xc8);
        _0x46ee3f['hk']['stop']();
        _0x46ee3f['hk']["fadeOut"](0xc8);
        _0x46ee3f['ik']["stop"]();
        _0x46ee3f['ik']["fadeIn"](0xc8);
        _0x46ee3f['jk']["stop"]();
        _0x46ee3f['jk']['fadeOut'](0xc8);
        _0x46ee3f['kk']["stop"]();
        _0x46ee3f['kk']["fadeOut"](0xc8);
        _0x46ee3f['nk']["stop"]();
        _0x46ee3f['nk']["fadeIn"](0xc8);
        _0x46ee3f['ok']["stop"]();
        _0x46ee3f['ok']["fadeIn"](0xc8);
        _0x19854f["html"](this['ad']);
        _0x3974d8['toggle'](this['Dk']);
        this['Qk']();
        this['Rk']();
      };
      _0x4caca1["prototype"]['Rk'] = function () {};
      _0x4caca1["prototype"]['Sk'] = function () {
        _0x410a14['Pk']["stop"]();
        _0x410a14['Pk']['fadeIn'](0x12c);
      };
      _0x4caca1["prototype"]['Qk'] = function () {
        _0x410a14['Pk']["stop"]();
        _0x410a14['Pk']["fadeOut"](0x12c);
      };
      return _0x4caca1;
    }();
    var _0x5724e7 = function () {
      var _0x1a82eb = $("#store-buy-coins_125000");
      var _0x3f5d59 = $("#store-buy-coins_50000");
      var _0x3b3ae7 = $("#store-buy-coins_16000");
      var _0xa3c123 = $("#store-buy-coins_7000");
      var _0x3dad5e = $("#store-buy-coins_3250");
      var _0x2f607b = $("#store-buy-coins_1250");
      var _0x46e54f = _0x56cc5d(_0x410a14, function () {
        _0x410a14['call'](this, _0x1e75e8("index.game.popup.menu.coins.tab"), false);
        var _0x5c9013 = _0x2a65a9();
        var _0x370375 = this;
        _0x1a82eb['click'](function () {
          _0x5c9013['r']['Cd']();
          _0x370375['Tk']("coins_125000");
        });
        _0x3f5d59["click"](function () {
          _0x5c9013['r']['Cd']();
          _0x370375['Tk']('coins_50000');
        });
        _0x3b3ae7["click"](function () {
          _0x5c9013['r']['Cd']();
          _0x370375['Tk']('coins_16000');
        });
        _0xa3c123["click"](function () {
          _0x5c9013['r']['Cd']();
          _0x370375['Tk']("coins_7000");
        });
        _0x3dad5e["click"](function () {
          _0x5c9013['r']['Cd']();
          _0x370375['Tk']('coins_3250');
        });
        _0x2f607b['click'](function () {
          _0x5c9013['r']['Cd']();
          _0x370375['Tk']('coins_1250');
        });
      });
      _0x46e54f["prototype"]['a'] = function () {
        _0x46e54f['parent']["prototype"]['a']['call'](this);
      };
      _0x46e54f["prototype"]['Rk'] = function () {
        _0x410a14['Fk']['stop']();
        _0x410a14['Fk']["fadeIn"](0xc8);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']["fadeOut"](0x32);
        _0x410a14['Hk']["stop"]();
        _0x410a14['Hk']["fadeOut"](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']['fadeOut'](0x32);
        _0x410a14['Kk']["stop"]();
        _0x410a14['Kk']["fadeOut"](0x32);
        _0x410a14['Lk']['stop']();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']["fadeOut"](0x32);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']['stop']();
        _0x410a14['Ok']["fadeOut"](0x32);
      };
      _0x46e54f["prototype"]['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
      };
      _0x46e54f["prototype"]['Tk'] = function (_0x36c1b1) {};
      return _0x46e54f;
    }();
    var _0x42dd2f = function () {
      var _0x17f770 = $("#highscore-table");
      var _0x459cd3 = $("#leaders-button-level");
      var _0x59a6e1 = $("#leaders-button-highscore");
      var _0x4d7eec = $("#leaders-button-kills");
      var _0x13a482 = _0x56cc5d(_0x410a14, function () {
        _0x410a14["call"](this, _0x1e75e8("index.game.popup.menu.leaders.tab"), true);
        var _0x20bb18 = _0x2a65a9();
        var _0x5accf8 = this;
        this['Uk'] = {};
        this['Vk'] = {
          'Wk': {
            'Xk': _0x459cd3,
            'Yk': 'byLevel'
          },
          'Zk': {
            'Xk': _0x59a6e1,
            'Yk': 'byHighScore'
          },
          '$k': {
            'Xk': _0x4d7eec,
            'Yk': "byKillsAndHeadShots"
          }
        };
        _0x459cd3['click'](function () {
          _0x20bb18['r']['Cd']();
          _0x5accf8['_k'](_0x5accf8['Vk']['Wk']);
        });
        _0x59a6e1["click"](function () {
          _0x20bb18['r']['Cd']();
          _0x5accf8['_k'](_0x5accf8['Vk']['Zk']);
        });
        _0x4d7eec["click"](function () {
          _0x20bb18['r']['Cd']();
          _0x5accf8['_k'](_0x5accf8['Vk']['$k']);
        });
      });
      _0x13a482['prototype']['a'] = function () {
        _0x13a482["parent"]["prototype"]['a']["call"](this);
      };
      _0x13a482["prototype"]['Rk'] = function () {
        _0x410a14['Fk']['stop']();
        _0x410a14['Fk']["fadeOut"](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']["fadeIn"](0xc8);
        _0x410a14['Hk']['stop']();
        _0x410a14['Hk']["fadeOut"](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']['stop']();
        _0x410a14['Ik']['fadeOut'](0x32);
        _0x410a14['Kk']['stop']();
        _0x410a14['Kk']["fadeOut"](0x32);
        _0x410a14['Lk']["stop"]();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']['stop']();
        _0x410a14['Mk']["fadeOut"](0x32);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']["stop"]();
        _0x410a14['Ok']["fadeOut"](0x32);
      };
      _0x13a482["prototype"]['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
        var _0x55eced = this;
        this['Sk']();
        $["get"](_0x1b9f2f + "/pub/leaders", function (_0x3397c4) {
          _0x55eced['Uk'] = _0x3397c4;
          _0x55eced['_k'](null != _0x55eced['al'] ? _0x55eced['al'] : _0x55eced['Vk']['Wk']);
          _0x55eced['Qk']();
        })['done'](function () {
          _0x55eced['Qk']();
        });
      };
      _0x13a482["prototype"]['_k'] = function (_0x4540e9) {
        this['al'] = _0x4540e9;
        for (var _0x39f6c1 in this['Vk']) if (this['Vk']['hasOwnProperty'](_0x39f6c1)) {
          var _0x5b6a5a = this['Vk'][_0x39f6c1];
          _0x5b6a5a['Xk']['removeClass']("pressed");
        }
        this['al']['Xk']["addClass"]("pressed");
        var _0x36f690 = this['Uk'][this['al']['Yk']];
        var _0x2225b8 = '';
        for (var _0x5801bd = 0x0; _0x5801bd < _0x36f690["length"]; _0x5801bd++) {
          var _0x203856 = _0x36f690[_0x5801bd];
          _0x2225b8 += "<div class=\"table-row\"><span>" + (_0x5801bd + 0x1) + "</span><span><img src=\"" + _0x203856['avatarUrl'] + "\"/></span><span>" + _0x203856['username'] + "</span><span>" + _0x203856['level'] + "</span><span>" + _0x203856['highScore'] + "</span><span>" + _0x203856['headShots'] + ' / ' + _0x203856["kills"] + '</span></div>';
        }
        _0x17f770["empty"]();
        _0x17f770["append"](_0x2225b8);
      };
      return _0x13a482;
    }();
    var _0x514baf = function () {
      var _0x346f92 = $("#popup-login-gg");
      var _0x2f417f = $("#popup-login-fb");
      var _0x141247 = _0x56cc5d(_0x410a14, function () {
        _0x410a14["call"](this, _0x1e75e8("index.game.popup.menu.login.tab"), false);
        var _0x57a945 = _0x2a65a9();
        var _0x458856 = this;
        _0x346f92["click"](function () {
          _0x57a945['r']['Cd']();
          _0x458856['Sk']();
          _0x57a945['u']['Qi'](function () {
            _0x458856['Qk']();
          });
          setTimeout(function () {
            _0x458856['Qk']();
          }, 0x2710);
          _0x57a945['u']['Zi']();
        });
        _0x2f417f["click"](function () {
          _0x57a945['r']['Cd']();
          _0x458856['Sk']();
          _0x57a945['u']['Qi'](function () {
            _0x458856['Qk']();
          });
          setTimeout(function () {
            _0x458856['Qk']();
          }, 0x2710);
          _0x57a945['u']['Vi']();
        });
      });
      _0x141247["prototype"]['a'] = function () {
        _0x141247["parent"]['prototype']['a']["call"](this);
      };
      _0x141247["prototype"]['Rk'] = function () {
        _0x410a14['Fk']["stop"]();
        _0x410a14['Fk']['fadeOut'](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']['fadeOut'](0x32);
        _0x410a14['Hk']["stop"]();
        _0x410a14['Hk']['fadeOut'](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeIn"](0xc8);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']["fadeOut"](0x32);
        _0x410a14['Kk']["stop"]();
        _0x410a14['Kk']["fadeOut"](0x32);
        _0x410a14['Lk']["stop"]();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']['fadeOut'](0x32);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']['stop']();
        _0x410a14['Ok']['fadeOut'](0x32);
      };
      _0x141247["prototype"]['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
      };
      return _0x141247;
    }();
    var _0x13ef41 = function () {
      var _0x3be67d = $("#profile-avatar");
      var _0x1eefb2 = $("#profile-username");
      var _0x39502d = $("#profile-experience-bar");
      var _0x3ddffc = $("#profile-experience-val");
      var _0x25ec9a = $("#profile-level");
      var _0x514988 = $("#profile-stat-highScore");
      var _0x40e153 = $("#profile-stat-bestSurvivalTime");
      var _0x58e8be = $("#profile-stat-kills");
      var _0x46b699 = $("#profile-stat-headshots");
      var _0x473993 = $("#profile-stat-gamesPlayed");
      var _0x33c5d9 = $("#profile-stat-totalTimeSpent");
      var _0x557260 = $("#profile-stat-registrationDate");
      var _0x53b923 = _0x56cc5d(_0x410a14, function () {
        _0x410a14["call"](this, _0x1e75e8("index.game.popup.menu.profile.tab"), true);
      });
      _0x53b923["prototype"]['a'] = function () {
        _0x53b923['parent']["prototype"]['a']["call"](this);
      };
      _0x53b923['prototype']['Rk'] = function () {
        _0x410a14['Fk']['stop']();
        _0x410a14['Fk']["fadeOut"](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']["fadeOut"](0x32);
        _0x410a14['Hk']['stop']();
        _0x410a14['Hk']["fadeIn"](0xc8);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']["fadeOut"](0x32);
        _0x410a14['Kk']['stop']();
        _0x410a14['Kk']["fadeOut"](0x32);
        _0x410a14['Lk']["stop"]();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']['fadeOut'](0x32);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']["stop"]();
        _0x410a14['Ok']["fadeOut"](0x32);
      };
      _0x53b923["prototype"]['ji'] = function () {
        var _0x365a4d = _0x2a65a9();
        _0x365a4d['r']['Dd']();
        var _0x55960f = _0x365a4d['u']['Oi']();
        var _0x38991d = moment([_0x55960f["year"], _0x55960f["month"] - 0x1, _0x55960f['day']])["format"]('LL');
        _0x1eefb2["html"](_0x365a4d['u']['wi']());
        _0x3be67d["attr"]("src", _0x365a4d['u']['xi']());
        _0x39502d['width'](0x64 * _0x365a4d['u']['Bi']() / _0x365a4d['u']['Ci']() + '%');
        _0x3ddffc["html"](_0x365a4d['u']['Bi']() + " / " + _0x365a4d['u']['Ci']());
        _0x25ec9a["html"](_0x365a4d['u']['Ai']());
        _0x514988["html"](_0x365a4d['u']['Ii']());
        _0x40e153["html"](_0x5f5241(_0x365a4d['u']['Ji']()));
        _0x58e8be['html'](_0x365a4d['u']['Ki']());
        _0x46b699["html"](_0x365a4d['u']['Li']());
        _0x473993["html"](_0x365a4d['u']['Mi']());
        _0x33c5d9['html'](_0x5f5241(_0x365a4d['u']['Ni']()));
        _0x557260["html"](_0x38991d);
      };
      return _0x53b923;
    }();
    var _0x44bfd4 = function () {
      var _0x135679 = $("#settings-music-enabled-switch");
      var _0x35de34 = $("#settings-sfx-enabled-switch");
      var _0x2290c3 = $("#settings-show-names-switch");
      var _0x5de238 = $("#popup-logout");
      var _0x56fc82 = $("#popup-logout-container");
      var _0x422ca3 = $("#popup-delete-account");
      var _0x5d1811 = $("#popup-delete-account-container");
      var _0x1328a8 = $("#popup-withdraw-consent");
      var _0x219d85 = _0x56cc5d(_0x410a14, function () {
        _0x410a14['call'](this, _0x1e75e8("index.game.popup.menu.settings.tab"), false);
        var _0x3a2095 = this;
        var _0x262e11 = _0x2a65a9();
        _0x135679["click"](function () {
          var _0xe25966 = !!_0x135679["prop"]("checked");
          _0x59c0bc(_0x1cdd73['Me'], _0xe25966, 0x1e);
          _0x262e11['r']['td'](_0xe25966);
          _0x262e11['r']['Cd']();
        });
        _0x35de34["click"](function () {
          var _0x24119a = !!_0x35de34["prop"]("checked");
          _0x59c0bc(_0x1cdd73['Ne'], _0x24119a, 0x1e);
          _0x262e11['r']['rd'](_0x24119a);
          _0x262e11['r']['Cd']();
        });
        _0x2290c3["click"](function () {
          _0x262e11['r']['Cd']();
        });
        _0x5de238['click'](function () {
          _0x262e11['r']['Cd']();
          _0x3a2095['Sk']();
          setTimeout(function () {
            _0x3a2095['Qk']();
          }, 0x7d0);
          _0x262e11['u']['Wi']();
        });
        _0x422ca3["click"](function () {
          if (_0x262e11['u']['P']()) {
            _0x262e11['r']['Cd']();
            _0x262e11['s']['I'](_0x262e11['s']['Vh']);
          } else {
            _0x262e11['r']['Hd']();
          }
        });
        _0x1328a8["click"](function () {
          if (_0x262e11['Y']()) {
            _0x262e11['r']['Cd']();
            _0x262e11['s']['I'](_0x262e11['s']['Uh']);
          } else {
            _0x262e11['r']['Hd']();
          }
        });
      });
      _0x219d85["prototype"]['a'] = function () {
        _0x219d85["parent"]["prototype"]['a']['call'](this);
        var _0x5c4752 = _0x2a65a9();
        var _0x32e90c = undefined;
        switch (_0x5ab50d(_0x1cdd73['Me'])) {
          case 'false':
            _0x32e90c = false;
            break;
          default:
            _0x32e90c = true;
        }
        _0x135679['prop']("checked", _0x32e90c);
        _0x5c4752['r']['td'](_0x32e90c);
        var _0x410f7c = undefined;
        switch (_0x5ab50d(_0x1cdd73['Ne'])) {
          case 'false':
            _0x410f7c = false;
            break;
          default:
            _0x410f7c = true;
        }
        _0x35de34["prop"]('checked', _0x410f7c);
        _0x5c4752['r']['rd'](_0x410f7c);
        var _0x3980b4 = undefined;
        switch (_0x5ab50d(_0x1cdd73['ya'])) {
          case "false":
            _0x3980b4 = false;
            break;
          default:
            _0x3980b4 = true;
        }
        console['log']("Load sPN: " + _0x3980b4);
        _0x2290c3["prop"]("checked", _0x3980b4);
        _0x5c4752['u']['V'](function () {
          _0x56fc82["toggle"](_0x5c4752['u']['P']());
          _0x5d1811["toggle"](_0x5c4752['u']['P']());
        });
      };
      _0x219d85["prototype"]['Rk'] = function () {
        _0x410a14['Fk']["stop"]();
        _0x410a14['Fk']["fadeOut"](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']["fadeOut"](0x32);
        _0x410a14['Hk']['stop']();
        _0x410a14['Hk']['fadeOut'](0x32);
        _0x410a14['Jk']['stop']();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']["fadeIn"](0xc8);
        _0x410a14['Kk']['stop']();
        _0x410a14['Kk']['fadeOut'](0x32);
        _0x410a14['Lk']["stop"]();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']["fadeOut"](0x32);
        _0x410a14['Nk']['stop']();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']["stop"]();
        _0x410a14['Ok']['fadeOut'](0x32);
      };
      _0x219d85["prototype"]['ji'] = function () {
        var _0x2f19df = _0x2a65a9();
        _0x2f19df['r']['Dd']();
        if (_0x2f19df['Y']()) {
          _0x1328a8["show"]();
        } else {
          _0x1328a8["hide"]();
        }
      };
      _0x219d85["prototype"]['wa'] = function () {
        return _0x2290c3['prop']('checked');
      };
      return _0x219d85;
    }();
    var _0x29ab1d = function () {
      var _0x99edc3 = $("#store-view-canv");
      var _0x29346f = $("#skin-description-text");
      var _0x5606b6 = $("#skin-group-description-text");
      var _0x277139 = $("#store-locked-bar");
      var _0x25c4ed = $("#store-locked-bar-text");
      var _0x3abcda = $("#store-buy-button");
      var _0x22d110 = $("#store-item-price");
      var _0x200baa = $("#store-groups");
      var _0x48424d = $("#store-view-prev");
      var _0x3ee6d4 = $("#store-view-next");
      var _0x1c3d1e = _0x56cc5d(_0x410a14, function () {
        _0x410a14['call'](this, _0x1e75e8("index.game.popup.menu.skins.tab"), true);
        var _0x469a8a = this;
        var _0x4ca703 = _0x2a65a9();
        this['bl'] = null;
        this['cl'] = [];
        this['dl'] = {};
        this['el'] = new _0x327a23(_0x99edc3);
        _0x3abcda["click"](function () {
          _0x4ca703['r']['Cd']();
          _0x469a8a['fl']();
        });
        _0x48424d["click"](function () {
          _0x4ca703['r']['Cd']();
          _0x469a8a['bl']['gl']();
        });
        _0x3ee6d4["click"](function () {
          _0x4ca703['r']['Cd']();
          _0x469a8a['bl']['hl']();
        });
      });
      _0x1c3d1e["prototype"]['a'] = function () {
        _0x1c3d1e['parent']["prototype"]['a']["call"](this);
        var _0x1485eb = this;
        var _0x3d81c2 = _0x2a65a9();
        _0x3d81c2['p']['ca'](function () {
          var _0x215f38 = _0x3d81c2['p']['Ac']();
          if (null != _0x215f38) {
            _0x1485eb['cl'] = [];
            for (var _0x3c249e = 0x0; _0x3c249e < _0x215f38["skinGroupArrayDict"]["length"]; _0x3c249e++) {
              _0x1485eb['cl']["push"](new _0xfc0f36(_0x1485eb, _0x215f38["skinGroupArrayDict"][_0x3c249e]));
            }
            _0x1485eb['dl'] = {};
            for (var _0x3e8a0a = 0x0; _0x3e8a0a < _0x215f38["skinArrayDict"]["length"]; _0x3e8a0a++) {
              var _0x25eebe = _0x215f38["skinArrayDict"][_0x3e8a0a];
              _0x1485eb['dl'][_0x25eebe['id']] = _0x25eebe;
            }
          }
        });
        this['il'](false);
        _0x3d81c2['t']['xh'](function () {
          _0x1485eb['il'](false);
        });
      };
      _0x1c3d1e["prototype"]['Rk'] = function () {
        _0x410a14['Fk']["stop"]();
        _0x410a14['Fk']['fadeOut'](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']["fadeOut"](0x32);
        _0x410a14['Hk']["stop"]();
        _0x410a14['Hk']["fadeOut"](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']["fadeOut"](0x32);
        _0x410a14['Kk']["stop"]();
        _0x410a14['Kk']['fadeIn'](0xc8);
        _0x410a14['Lk']['stop']();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']['stop']();
        _0x410a14['Mk']["fadeOut"](0x32);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']["stop"]();
        _0x410a14['Ok']["fadeOut"](0x32);
      };
      _0x1c3d1e['prototype']['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
        this['jl']();
        this['el']['Le'](true);
      };
      _0x1c3d1e["prototype"]['ei'] = function () {
        this['el']['Le'](false);
      };
      _0x1c3d1e["prototype"]['Ra'] = function () {
        this['el']['Ra']();
      };
      _0x1c3d1e["prototype"]['Pa'] = function (_0x32a055, _0xaac370) {
        this['el']['Pa']();
      };
      _0x1c3d1e["prototype"]['jl'] = function () {
        var _0x30de70 = this;
        var _0xb9a3ed = this;
        var _0x418f67 = _0x2a65a9();
        _0x200baa["empty"]();
        for (var _0x3e14b4 = 0x0; _0x3e14b4 < this['cl']["length"]; _0x3e14b4++) {
          !function (_0x17ea9f) {
            var _0x40e4c0 = _0x30de70['cl'][_0x17ea9f];
            var _0x3f497c = document['createElement']('li');
            _0x200baa["append"](_0x3f497c);
            var _0x1659ac = $(_0x3f497c);
            _0x1659ac["html"](_0x40e4c0['kl']());
            _0x1659ac['click'](function () {
              _0x418f67['r']['Cd']();
              _0xb9a3ed['ll'](_0x40e4c0);
            });
            _0x40e4c0['ml'] = _0x1659ac;
          }(_0x3e14b4);
        }
        if (this['cl']["length"] > 0x0) {
          var _0x1fb76d = _0x418f67['t']['ha'](_0x54cad9['ia']);
          for (var _0x3e14b4 = 0x0; _0x3e14b4 < this['cl']["length"]; _0x3e14b4++) {
            var _0x55440b = this['cl'][_0x3e14b4];
            var _0x131ee4 = _0x55440b['nl']["list"];
            for (var _0x42fb49 = 0x0; _0x42fb49 < _0x131ee4["length"]; _0x42fb49++) {
              if (_0x131ee4[_0x42fb49] == _0x1fb76d) {
                _0x55440b['ol'] = _0x42fb49;
                return void this['ll'](_0x55440b);
              }
            }
          }
          this['ll'](this['cl'][0x0]);
        }
      };
      _0x1c3d1e["prototype"]['ll'] = function (_0x458f9c) {
        if (this['bl'] != _0x458f9c) {
          var _0x506a4c = _0x2a65a9();
          this['bl'] = _0x458f9c;
          _0x200baa["children"]()['removeClass']('pressed');
          if (this['bl']['ml']) {
            this['bl']['ml']["addClass"]("pressed");
          }
          _0x5606b6["html"]('');
          if (null != _0x458f9c['nl']) {
            var _0x40fe97 = _0x506a4c['p']['Ac']()['textDict'][_0x458f9c['nl']["description"]];
            if (null != _0x40fe97) {
              _0x5606b6['html'](_0x26ca7(_0x1fd68a(_0x40fe97)));
            }
          }
          this['il'](true);
        }
      };
      _0x1c3d1e['prototype']['pl'] = function () {
        return null == this['bl'] ? _0x5dd26f['Yg']() : this['bl']['ql']();
      };
      _0x1c3d1e["prototype"]['fl'] = function () {
        var _0x535357 = this;
        this['pl']()['ah'](function (_0x3896a0) {
          _0x535357['rl'](_0x3896a0);
        });
      };
      _0x1c3d1e["prototype"]['rl'] = function (_0x110d83) {
        var _0x299e93 = this;
        var _0x4ca8ae = _0x2a65a9();
        var _0x412b44 = this['dl'][_0x110d83]['price'];
        if (!(_0x4ca8ae['u']['zi']() < _0x412b44)) {
          this['Sk']();
          var _0x38aef6 = _0x4ca8ae['t']['ha'](_0x54cad9['ia']);
          var _0x4f9143 = _0x4ca8ae['t']['ha'](_0x54cad9['ja']);
          var _0xbb5985 = _0x4ca8ae['t']['ha'](_0x54cad9['ka']);
          var _0x431074 = _0x4ca8ae['t']['ha'](_0x54cad9['la']);
          var _0x32faf6 = _0x4ca8ae['t']['ha'](_0x54cad9['ma']);
          _0x4ca8ae['u']['Ui'](_0x110d83, _0x54cad9['ia'], function () {
            _0x4ca8ae['t']['Bh'](_0x38aef6, _0x54cad9['ia']);
            _0x4ca8ae['t']['Bh'](_0x4f9143, _0x54cad9['ja']);
            _0x4ca8ae['t']['Bh'](_0xbb5985, _0x54cad9['ka']);
            _0x4ca8ae['t']['Bh'](_0x431074, _0x54cad9['la']);
            _0x4ca8ae['t']['Bh'](_0x32faf6, _0x54cad9['ma']);
            if (_0x4ca8ae['u']['Ch'](_0x110d83, _0x54cad9['ia'])) {
              _0x4ca8ae['t']['Bh'](_0x110d83, _0x54cad9['ia']);
            }
            _0x299e93['Qk']();
          });
        }
      };
      _0x1c3d1e["prototype"]['il'] = function (_0x40aac0) {
        var _0x214f84 = _0x2a65a9();
        this['el']['bk'](_0x214f84['t']['ha'](_0x54cad9['ja']), false, false);
        this['el']['ck'](_0x214f84['t']['ha'](_0x54cad9['ka']), false, false);
        this['el']['dk'](_0x214f84['t']['ha'](_0x54cad9['la']), false, false);
        this['el']['ek'](_0x214f84['t']['ha'](_0x54cad9['ma']), false, false);
        var _0x46320b = this['pl']();
        if (_0x46320b['_g']()) {
          var _0x2c89ab = _0x46320b['$g']();
          var _0x3e16a3 = this['dl'][_0x2c89ab];
          var _0x1ba6c7 = false;
          if (_0x214f84['t']['Ja'](_0x2c89ab, _0x54cad9['ia'])) {
            _0x277139["hide"]();
            _0x3abcda["hide"]();
          } else {
            if (null == _0x3e16a3 || 0x1 == _0x3e16a3["nonbuyable"]) {
              _0x1ba6c7 = true;
              _0x277139["show"]();
              _0x3abcda["hide"]();
              _0x25c4ed["text"](_0x1e75e8("index.game.popup.menu.store.locked"));
              if (null != _0x3e16a3 && _0x3e16a3["nonbuyable"] && null != _0x3e16a3['nonbuyableCause']) {
                var _0x5cbb7c = _0x214f84['p']['Ac']()['textDict'][_0x3e16a3["nonbuyableCause"]];
                if (null != _0x5cbb7c) {
                  _0x25c4ed["text"](_0x1fd68a(_0x5cbb7c));
                }
              }
            } else {
              _0x277139["hide"]();
              _0x3abcda["show"]();
              _0x22d110["html"](_0x3e16a3["price"]);
            }
          }
          _0x29346f["html"]('');
          if (null != _0x3e16a3 && null != _0x3e16a3["description"]) {
            var _0x43911e = _0x214f84['p']['Ac']()["textDict"][_0x3e16a3["description"]];
            if (null != _0x43911e) {
              _0x29346f["html"](_0x26ca7(_0x1fd68a(_0x43911e)));
            }
          }
          StoreSkinID["html"](_0x3e16a3['id']);
          this['el']['ak'](_0x2c89ab, true, _0x1ba6c7);
          if (_0x40aac0) {
            _0x214f84['t']['Bh'](_0x2c89ab, _0x54cad9['ia']);
          }
        }
      };
      var _0xfc0f36 = function () {
        function _0x4380f3(_0x5eff2f, _0x2856ce) {
          this['sl'] = _0x5eff2f;
          this['ol'] = 0x0;
          this['nl'] = _0x2856ce;
        }
        _0x4380f3["prototype"]['gl'] = function () {
          if (--this['ol'] < 0x0) {
            this['ol'] = this['nl']['list']["length"] - 0x1;
          }
          this['sl']['il'](true);
        };
        _0x4380f3['prototype']['hl'] = function () {
          if (++this['ol'] >= this['nl']["list"]["length"]) {
            this['ol'] = 0x0;
          }
          this['sl']['il'](true);
        };
        _0x4380f3["prototype"]['kl'] = function () {
          let _0x3e7d08 = _0x1fd68a(this['nl']['name']);
          if (this['nl']["img"]) {
            var _0x49a114 = "<img src=\"";
            _0x49a114 = _0x49a114 + "https://wormate.io" + "/images/paths/" + this['nl']["img"];
            _0x3e7d08 = _0x49a114 = _0x49a114 + "\" height=\"43\" width=\"220\" />";
          }
          return _0x3e7d08;
        };
        _0x4380f3["prototype"]['ql'] = function () {
          return this['ol'] >= this['nl']['list']["length"] ? _0x5dd26f['Yg']() : _0x5dd26f['Zg'](this['nl']["list"][this['ol']]);
        };
        return _0x4380f3;
      }();
      return _0x1c3d1e;
    }();
    var _0x548854 = function () {
      var _0x2782a1 = $("#store-go-coins-button");
      var _0x3e27ee = $("#store-go-skins-button");
      var _0x59decf = $("#store-go-wear-button");
      var _0xc38171 = _0x56cc5d(_0x410a14, function () {
        _0x410a14['call'](this, _0x1e75e8("index.game.popup.menu.store.tab"), true);
        var _0x1c4821 = _0x2a65a9();
        _0x2782a1["click"](function () {
          _0x1c4821['r']['Cd']();
          _0x1c4821['s']['I'](_0x1c4821['s']['Wh']);
        });
        _0x3e27ee["click"](function () {
          _0x1c4821['r']['Cd']();
          _0x1c4821['s']['I'](_0x1c4821['s']['$h']);
        });
        _0x59decf["click"](function () {
          _0x1c4821['r']['Cd']();
          _0x1c4821['s']['I'](_0x1c4821['s']['ai']);
        });
      });
      _0xc38171["prototype"]['a'] = function () {
        _0xc38171["parent"]["prototype"]['a']["call"](this);
      };
      _0xc38171["prototype"]['Rk'] = function () {
        _0x410a14['Fk']["stop"]();
        _0x410a14['Fk']["fadeOut"](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']['fadeOut'](0x32);
        _0x410a14['Hk']["stop"]();
        _0x410a14['Hk']["fadeOut"](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']['fadeOut'](0x32);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']["fadeOut"](0x32);
        _0x410a14['Kk']["stop"]();
        _0x410a14['Kk']["fadeOut"](0x32);
        _0x410a14['Lk']["stop"]();
        _0x410a14['Lk']["fadeIn"](0xc8);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']["fadeOut"](0x32);
        _0x410a14['Nk']['stop']();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']['stop']();
        _0x410a14['Ok']["fadeOut"](0x32);
      };
      _0xc38171["prototype"]['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
      };
      return _0xc38171;
    }();
    var _0x2ebadb = function () {
      var _0x1223ba = $("#wear-view-canv");
      var _0x2d6c52 = $("#wear-description-text");
      var _0x3bd511 = $("#wear-locked-bar");
      var _0x37b915 = $("#wear-locked-bar-text");
      var _0x398306 = $("#wear-buy-button");
      var _0x4a958d = $("#wear-item-price");
      var _0x4afbe2 = $("#wear-eyes-button");
      var _0x19e070 = $("#wear-mouths-button");
      var _0x135c6b = $("#wear-glasses-button");
      var _0xbb7339 = $("#wear-hats-button");
      var _0x4f3019 = $("#wear-tint-chooser");
      var _0x4ab04b = $("#wear-view-prev");
      var _0xa25a13 = $("#wear-view-next");
      var _0x3cab46 = _0x56cc5d(_0x410a14, function () {
        var _0x25e497 = this;
        _0x410a14["call"](this, _0x1e75e8("index.game.popup.menu.wear.tab"), true);
        var _0x18c516 = _0x2a65a9();
        var _0x154225 = this;
        this['tl'] = [];
        this['ja'] = new _0x471ea8(this, _0x54cad9['ja'], _0x4afbe2);
        this['ka'] = new _0x471ea8(this, _0x54cad9['ka'], _0x19e070);
        this['la'] = new _0x471ea8(this, _0x54cad9['la'], _0x135c6b);
        this['ma'] = new _0x471ea8(this, _0x54cad9['ma'], _0xbb7339);
        this['ul'] = null;
        this['vl'] = null;
        this['wl'] = null;
        this['xl'] = null;
        this['yl'] = null;
        this['zl'] = null;
        this['Al'] = new _0x327a23(_0x1223ba);
        _0x398306['click'](function () {
          _0x18c516['r']['Cd']();
          _0x154225['Bl']();
        });
        _0x4ab04b["click"](function () {
          _0x18c516['r']['Cd']();
          _0x154225['ul']['Cl']();
        });
        _0xa25a13["click"](function () {
          _0x18c516['r']['Cd']();
          _0x154225['ul']['Dl']();
        });
        _0x4afbe2["click"](function () {
          _0x18c516['r']['Cd']();
          _0x154225['El'](_0x25e497['ja']);
        });
        _0x19e070["click"](function () {
          _0x18c516['r']['Cd']();
          _0x154225['El'](_0x25e497['ka']);
        });
        _0x135c6b["click"](function () {
          _0x18c516['r']['Cd']();
          _0x154225['El'](_0x25e497['la']);
        });
        _0xbb7339["click"](function () {
          _0x18c516['r']['Cd']();
          _0x154225['El'](_0x25e497['ma']);
        });
        this['tl']["push"](this['ja']);
        this['tl']["push"](this['ka']);
        this['tl']['push'](this['la']);
        this['tl']["push"](this['ma']);
      });
      _0x3cab46["prototype"]['a'] = function () {
        _0x3cab46["parent"]["prototype"]['a']["call"](this);
        var _0x3778ef = _0x2a65a9();
        var _0x21c7c2 = this;
        _0x3778ef['p']['ca'](function () {
          var _0x369632 = _0x3778ef['p']['Ac']();
          if (null != _0x369632) {
            _0x21c7c2['vl'] = _0x369632["eyesDict"];
            _0x21c7c2['wl'] = _0x369632["mouthDict"];
            _0x21c7c2['xl'] = _0x369632['glassesDict'];
            _0x21c7c2['yl'] = _0x369632["hatDict"];
            _0x21c7c2['zl'] = _0x369632["colorDict"];
            _0x21c7c2['ja']['Fl'](_0x369632["eyesVariantArray"]);
            _0x21c7c2['ja']['Gl'](_0x21c7c2['vl']);
            _0x21c7c2['ka']['Fl'](_0x369632["mouthVariantArray"]);
            _0x21c7c2['ka']['Gl'](_0x21c7c2['wl']);
            _0x21c7c2['la']['Fl'](_0x369632["glassesVariantArray"]);
            _0x21c7c2['la']['Gl'](_0x21c7c2['xl']);
            _0x21c7c2['ma']['Fl'](_0x369632["hatVariantArray"]);
            _0x21c7c2['ma']['Gl'](_0x21c7c2['yl']);
          }
        });
        this['il'](false);
        _0x3778ef['t']['xh'](function () {
          _0x21c7c2['il'](false);
        });
      };
      _0x3cab46["prototype"]['Rk'] = function () {
        _0x410a14['Fk']["stop"]();
        _0x410a14['Fk']["fadeOut"](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']["fadeOut"](0x32);
        _0x410a14['Hk']["stop"]();
        _0x410a14['Hk']["fadeOut"](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']['stop']();
        _0x410a14['Ik']["fadeOut"](0x32);
        _0x410a14['Kk']["stop"]();
        _0x410a14['Kk']["fadeOut"](0x32);
        _0x410a14['Lk']['stop']();
        _0x410a14['Lk']['fadeOut'](0x32);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']['fadeIn'](0xc8);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']["stop"]();
        _0x410a14['Ok']["fadeOut"](0x32);
      };
      _0x3cab46['prototype']['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
        this['El'](null != this['ul'] ? this['ul'] : this['ja']);
        this['Al']['Le'](true);
      };
      _0x3cab46['prototype']['ei'] = function () {
        this['Al']['Le'](false);
      };
      _0x3cab46["prototype"]['Ra'] = function () {
        this['Al']['Ra']();
      };
      _0x3cab46['prototype']['Pa'] = function (_0x5e997d, _0xe427c5) {
        this['Al']['Pa']();
      };
      _0x3cab46["prototype"]['El'] = function (_0x3b6401) {
        this['ul'] = _0x3b6401;
        for (var _0x4f91f2 = 0x0; _0x4f91f2 < this['tl']["length"]; _0x4f91f2++) {
          this['tl'][_0x4f91f2]['Xk']["removeClass"]("pressed");
        }
        this['ul']['Xk']["addClass"]("pressed");
        this['ul']['ii']();
      };
      _0x3cab46["prototype"]['Hl'] = function () {
        return null == this['ul'] ? _0x5dd26f['Yg']() : _0x5dd26f['Zg']({
          'Lb': this['ul']['ql'](),
          'rc': this['ul']['rc']
        });
      };
      _0x3cab46["prototype"]['Bl'] = function () {
        var _0x2b553b = this;
        this['Hl']()['ah'](function (_0x83ff04) {
          _0x2b553b['Ui'](_0x83ff04['Lb'], _0x83ff04['rc']);
        });
      };
      _0x3cab46["prototype"]['Ui'] = function (_0x4b4154, _0x303546) {
        var _0xcf6716 = this;
        var _0x1d81ef = _0x2a65a9();
        var _0x16b742 = undefined;
        switch (_0x303546) {
          case _0x54cad9['ja']:
            _0x16b742 = this['vl'][_0x4b4154]["price"];
            break;
          case _0x54cad9['ka']:
            _0x16b742 = this['wl'][_0x4b4154]["price"];
            break;
          case _0x54cad9['la']:
            _0x16b742 = this['xl'][_0x4b4154]["price"];
            break;
          case _0x54cad9['ma']:
            _0x16b742 = this['yl'][_0x4b4154]["price"];
            break;
          default:
            return;
        }
        if (!(_0x1d81ef['u']['zi']() < _0x16b742)) {
          this['Sk']();
          var _0xec75ce = _0x1d81ef['t']['ha'](_0x54cad9['ia']);
          var _0x22450a = _0x1d81ef['t']['ha'](_0x54cad9['ja']);
          var _0x47041e = _0x1d81ef['t']['ha'](_0x54cad9['ka']);
          var _0x3968db = _0x1d81ef['t']['ha'](_0x54cad9['la']);
          var _0x41d29e = _0x1d81ef['t']['ha'](_0x54cad9['ma']);
          _0x1d81ef['u']['Ui'](_0x4b4154, _0x303546, function () {
            _0x1d81ef['t']['Bh'](_0xec75ce, _0x54cad9['ia']);
            _0x1d81ef['t']['Bh'](_0x22450a, _0x54cad9['ja']);
            _0x1d81ef['t']['Bh'](_0x47041e, _0x54cad9['ka']);
            _0x1d81ef['t']['Bh'](_0x3968db, _0x54cad9['la']);
            _0x1d81ef['t']['Bh'](_0x41d29e, _0x54cad9['ma']);
            if (_0x1d81ef['u']['Ch'](_0x4b4154, _0x303546)) {
              _0x1d81ef['t']['Bh'](_0x4b4154, _0x303546);
            }
            _0xcf6716['Qk']();
          });
        }
      };
      _0x3cab46["prototype"]['Il'] = function (_0x1de431, _0x2e33d9) {
        switch (_0x2e33d9) {
          case _0x54cad9['ja']:
            return this['vl'][_0x1de431];
          case _0x54cad9['ka']:
            return this['wl'][_0x1de431];
          case _0x54cad9['la']:
            return this['xl'][_0x1de431];
          case _0x54cad9['ma']:
            return this['yl'][_0x1de431];
        }
        return null;
      };
      _0x3cab46["prototype"]['il'] = function (_0x124b05) {
        var _0x18431f = _0x2a65a9();
        this['Al']['ak'](_0x18431f['t']['ha'](_0x54cad9['ia']), false, false);
        this['Al']['bk'](_0x18431f['t']['ha'](_0x54cad9['ja']), false, false);
        this['Al']['ck'](_0x18431f['t']['ha'](_0x54cad9['ka']), false, false);
        this['Al']['dk'](_0x18431f['t']['ha'](_0x54cad9['la']), false, false);
        this['Al']['ek'](_0x18431f['t']['ha'](_0x54cad9['ma']), false, false);
        var _0x51778e = this['Hl']();
        if (_0x51778e['_g']()) {
          var _0x594e65 = _0x51778e['$g']();
          var _0x1be05e = this['Il'](_0x594e65['Lb'], _0x594e65['rc']);
          var _0x2fe146 = false;
          if (_0x18431f['t']['Ja'](_0x594e65['Lb'], _0x594e65['rc'])) {
            _0x3bd511["hide"]();
            _0x398306["hide"]();
          } else {
            if (null == _0x1be05e || 0x1 == _0x1be05e["nonbuyable"]) {
              _0x2fe146 = true;
              _0x3bd511["show"]();
              _0x398306["hide"]();
              _0x37b915["text"](_0x1e75e8("index.game.popup.menu.store.locked"));
              if (null != _0x1be05e && _0x1be05e["nonbuyable"] && null != _0x1be05e["nonbuyableCause"]) {
                var _0x35cb7 = _0x18431f['p']['Ac']()["textDict"][_0x1be05e['nonbuyableCause']];
                if (null != _0x35cb7) {
                  _0x37b915["text"](_0x1fd68a(_0x35cb7));
                }
              }
            } else {
              _0x3bd511["hide"]();
              _0x398306["show"]();
              _0x4a958d["html"](_0x1be05e["price"]);
            }
          }
          _0x2d6c52["html"]('');
          if (null != _0x1be05e && null != _0x1be05e["description"]) {
            var _0x7488e7 = _0x18431f['p']['Ac']()["textDict"][_0x1be05e["description"]];
            if (null != _0x7488e7) {
              _0x2d6c52["html"](_0x26ca7(_0x1fd68a(_0x7488e7)));
            }
          }
          switch (_0x594e65['rc']) {
            case _0x54cad9['ja']:
              this['Al']['bk'](_0x594e65['Lb'], true, _0x2fe146);
              break;
            case _0x54cad9['ka']:
              this['Al']['ck'](_0x594e65['Lb'], true, _0x2fe146);
              break;
            case _0x54cad9['la']:
              this['Al']['dk'](_0x594e65['Lb'], true, _0x2fe146);
              break;
            case _0x54cad9['ma']:
              this['Al']['ek'](_0x594e65['Lb'], true, _0x2fe146);
          }
          if (_0x124b05) {
            _0x18431f['t']['Bh'](_0x594e65['Lb'], _0x594e65['rc']);
          }
        }
      };
      var _0x471ea8 = function () {
        function _0xddabff(_0x678580, _0x27083f, _0x5c71be) {
          this['sl'] = _0x678580;
          this['rc'] = _0x27083f;
          this['Xk'] = _0x5c71be;
          this['Jl'] = {};
          this['Kl'] = [[]];
          this['Ll'] = -0xa;
          this['Ml'] = -0xa;
        }
        _0xddabff["prototype"]['Fl'] = function (_0xc18424) {
          this['Kl'] = _0xc18424;
        };
        _0xddabff['prototype']['Gl'] = function (_0x3c3df6) {
          this['Jl'] = _0x3c3df6;
        };
        _0xddabff["prototype"]['ii'] = function () {
          var _0x33500d = _0x2a65a9();
          var _0x3b3dff = _0x33500d['t']['ha'](this['rc']);
          for (var _0x2a92c7 = 0x0; _0x2a92c7 < this['Kl']["length"]; _0x2a92c7++) {
            for (var _0x53da0a = 0x0; _0x53da0a < this['Kl'][_0x2a92c7]["length"]; _0x53da0a++) {
              if (this['Kl'][_0x2a92c7][_0x53da0a] == _0x3b3dff) {
                this['Nl'](_0x2a92c7);
                return void this['Ol'](_0x53da0a);
              }
            }
          }
          this['Nl'](0x0);
          this['Ol'](0x0);
        };
        _0xddabff["prototype"]['Cl'] = function () {
          var _0x4cfe72 = this['Ll'] - 0x1;
          if (_0x4cfe72 < 0x0) {
            _0x4cfe72 = this['Kl']['length'] - 0x1;
          }
          this['Nl'](_0x4cfe72);
          this['Ol'](this['Ml'] % this['Kl'][_0x4cfe72]["length"]);
        };
        _0xddabff['prototype']['Dl'] = function () {
          var _0x3de2d4 = this['Ll'] + 0x1;
          if (_0x3de2d4 >= this['Kl']["length"]) {
            _0x3de2d4 = 0x0;
          }
          this['Nl'](_0x3de2d4);
          this['Ol'](this['Ml'] % this['Kl'][_0x3de2d4]["length"]);
        };
        _0xddabff["prototype"]['Nl'] = function (_0x9e58d2) {
          var _0x5c7351 = this;
          if (!(_0x9e58d2 < 0x0 || _0x9e58d2 >= this['Kl']["length"])) {
            this['Ll'] = _0x9e58d2;
            _0x4f3019["empty"]();
            var _0x1ca67f = this['Kl'][this['Ll']];
            if (_0x1ca67f["length"] > 0x1) {
              for (var _0x1a9829 = 0x0; _0x1a9829 < _0x1ca67f['length']; _0x1a9829++) {
                !function (_0x344ba0) {
                  var _0x28e7f3 = _0x1ca67f[_0x344ba0];
                  var _0x391a14 = _0x5c7351['Jl'][_0x28e7f3];
                  var _0x3fba7e = '#' + _0x5c7351['sl']['zl'][_0x391a14["prime"]];
                  var _0x1516d7 = $("<div style=\"border-color:" + _0x3fba7e + "\"></div>");
                  _0x1516d7["click"](function () {
                    _0x2a65a9()['r']['Cd']();
                    _0x5c7351['Ol'](_0x344ba0);
                  });
                  _0x4f3019['append'](_0x1516d7);
                }(_0x1a9829);
              }
            }
          }
        };
        _0xddabff["prototype"]['Ol'] = function (_0x57ad2d) {
          if (!(_0x57ad2d < 0x0 || _0x57ad2d >= this['Kl'][this['Ll']]['length'])) {
            this['Ml'] = _0x57ad2d;
            _0x4f3019["children"]()["css"]("background-color", "transparent");
            var _0x3f5fe9 = _0x4f3019['children'](":nth-child(" + (0x1 + _0x57ad2d) + ')');
            _0x3f5fe9["css"]("background-color", _0x3f5fe9['css']("border-color"));
            this['sl']['il'](true);
          }
        };
        _0xddabff["prototype"]['ql'] = function () {
          return this['Kl'][this['Ll']][this['Ml']];
        };
        return _0xddabff;
      }();
      return _0x3cab46;
    }();
    var _0x37f896 = function () {
      var _0x20bdc6 = $("#withdraw-consent-yes");
      var _0x2cbfd3 = $("#withdraw-consent-no");
      var _0x56011a = _0x56cc5d(_0x410a14, function () {
        _0x410a14['call'](this, _0x1e75e8("index.game.popup.menu.consent.tab"), false);
        var _0xd7b8fd = _0x2a65a9();
        _0x20bdc6["click"](function () {
          _0xd7b8fd['r']['Cd']();
          if (_0xd7b8fd['Y']()) {
            _0xd7b8fd['s']['I'](_0xd7b8fd['s']['F']);
            _0xd7b8fd['$'](false, true);
            _0xd7b8fd['s']['aa']['_'](new _0x98bf64());
          } else {
            _0xd7b8fd['s']['gi']();
          }
        });
        _0x2cbfd3["click"](function () {
          _0xd7b8fd['r']['Cd']();
          _0xd7b8fd['s']['gi']();
        });
      });
      _0x56011a['prototype']['a'] = function () {
        _0x56011a['parent']["prototype"]['a']['call'](this);
      };
      _0x56011a["prototype"]['Rk'] = function () {
        _0x410a14['Fk']['stop']();
        _0x410a14['Fk']["fadeOut"](0x32);
        _0x410a14['Gk']['stop']();
        _0x410a14['Gk']["fadeOut"](0x32);
        _0x410a14['Hk']["stop"]();
        _0x410a14['Hk']["fadeOut"](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']["fadeOut"](0x32);
        _0x410a14['Kk']["stop"]();
        _0x410a14['Kk']['fadeOut'](0x32);
        _0x410a14['Lk']["stop"]();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']["fadeOut"](0x32);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeIn"](0xc8);
        _0x410a14['Ok']["stop"]();
        _0x410a14['Ok']["fadeOut"](0x32);
      };
      _0x56011a["prototype"]['ji'] = function () {
        _0x2a65a9()['r']['Dd']();
      };
      return _0x56011a;
    }();
    var _0x1ff274 = function () {
      var _0x58db7c = $("#delete-account-timer");
      var _0x3783a6 = $("#delete-account-yes");
      var _0x50724b = $("#delete-account-no");
      var _0x3275c0 = _0x56cc5d(_0x410a14, function () {
        _0x410a14['call'](this, _0x1e75e8("index.game.popup.menu.delete.tab"), false);
        var _0x3b1a57 = _0x2a65a9();
        _0x3783a6['click'](function () {
          _0x3b1a57['r']['Cd']();
          if (_0x3b1a57['u']['P']()) {
            _0x3b1a57['u']['bj']();
            _0x3b1a57['u']['Wi']();
          } else {
            _0x3b1a57['s']['gi']();
          }
        });
        _0x50724b["click"](function () {
          _0x3b1a57['r']['Cd']();
          _0x3b1a57['s']['gi']();
        });
        this['Pl'] = [];
      });
      _0x3275c0['prototype']['a'] = function () {
        _0x3275c0["parent"]['prototype']['a']['call'](this);
      };
      _0x3275c0["prototype"]['Rk'] = function () {
        _0x410a14['Fk']["stop"]();
        _0x410a14['Fk']["fadeOut"](0x32);
        _0x410a14['Gk']["stop"]();
        _0x410a14['Gk']['fadeOut'](0x32);
        _0x410a14['Hk']["stop"]();
        _0x410a14['Hk']["fadeOut"](0x32);
        _0x410a14['Jk']["stop"]();
        _0x410a14['Jk']["fadeOut"](0x32);
        _0x410a14['Ik']["stop"]();
        _0x410a14['Ik']['fadeOut'](0x32);
        _0x410a14['Kk']["stop"]();
        _0x410a14['Kk']["fadeOut"](0x32);
        _0x410a14['Lk']["stop"]();
        _0x410a14['Lk']["fadeOut"](0x32);
        _0x410a14['Mk']["stop"]();
        _0x410a14['Mk']["fadeOut"](0x32);
        _0x410a14['Nk']["stop"]();
        _0x410a14['Nk']["fadeOut"](0x32);
        _0x410a14['Ok']['stop']();
        _0x410a14['Ok']["fadeIn"](0xc8);
      };
      _0x3275c0["prototype"]['ji'] = function () {
        _0x2a65a9()['r']['Hd']();
        _0x3783a6["stop"]();
        _0x3783a6['hide']();
        _0x58db7c["stop"]();
        _0x58db7c["show"]();
        _0x58db7c["text"](".. 10 ..");
        this['Ql']();
        this['Rl'](function () {
          _0x58db7c["text"](".. 9 ..");
        }, 0x3e8);
        this['Rl'](function () {
          _0x58db7c["text"](".. 8 ..");
        }, 0x7d0);
        this['Rl'](function () {
          _0x58db7c["text"](".. 7 ..");
        }, 0xbb8);
        this['Rl'](function () {
          _0x58db7c['text']('.. 6 ..');
        }, 0xfa0);
        this['Rl'](function () {
          _0x58db7c['text'](".. 5 ..");
        }, 0x1388);
        this['Rl'](function () {
          _0x58db7c["text"](".. 4 ..");
        }, 0x1770);
        this['Rl'](function () {
          _0x58db7c["text"](".. 3 ..");
        }, 0x1b58);
        this['Rl'](function () {
          _0x58db7c['text'](".. 2 ..");
        }, 0x1f40);
        this['Rl'](function () {
          _0x58db7c["text"](".. 1 ..");
        }, 0x2328);
        this['Rl'](function () {
          _0x58db7c['hide']();
          _0x3783a6["fadeIn"](0x12c);
        }, 0x2710);
      };
      _0x3275c0['prototype']['Rl'] = function (_0x29fc72, _0x2e91ef) {
        var _0x443e4c = setTimeout(_0x29fc72, _0x2e91ef);
        this['Pl']["push"](_0x443e4c);
      };
      _0x3275c0['prototype']['Ql'] = function () {
        for (var _0x51efcc = 0x0; _0x51efcc < this['Pl']['length']; _0x51efcc++) {
          clearTimeout(this['Pl'][_0x51efcc]);
        }
        this['Pl'] = [];
      };
      return _0x3275c0;
    }();
    var _0x472f7f = function () {
      function _0x562612() {
        this['Ck'] = function () {};
      }
      _0x562612["prototype"]['Bk'] = function () {};
      _0x562612['prototype']['ji'] = function () {};
      return _0x562612;
    }();
    var _0x4eb4f3 = function () {
      var _0x415419 = _0x56cc5d(_0x472f7f, function (_0x2fdcb4) {
        _0x472f7f['call'](this);
        var _0x3fff46 = Date['now']() + '_' + Math["floor"](0x3e8 + 0x2327 * Math["random"]());
        this['Sl'] = $("<div id=\"" + _0x3fff46 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x2fdcb4 + "</div>    <div class=\"toaster-coins-close\">" + _0x1e75e8("index.game.toaster.continue") + "</div></div>");
        var _0x963708 = this;
        this['Sl']["find"](".toaster-coins-close")["click"](function () {
          _0x2a65a9()['r']['Cd']();
          _0x963708['Ck']();
        });
      });
      _0x415419['prototype']['Bk'] = function () {
        return this['Sl'];
      };
      _0x415419['prototype']['ji'] = function () {
        _0x2a65a9()['r']['Fd']();
      };
      return _0x415419;
    }();
    var _0x94be84 = function () {
      var _0x450c62 = _0x56cc5d(_0x472f7f, function (_0x22dbe8) {
        _0x472f7f['call'](this);
        var _0x366316 = Date["now"]() + '_' + Math["floor"](0x3e8 + 0x2327 * Math["random"]());
        this['Sl'] = $("<div id=\"" + _0x366316 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x22dbe8 + "</div>    <div class=\"toaster-levelup-text\">" + _0x1e75e8("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x1e75e8("index.game.toaster.continue") + "</div></div>");
        var _0x41c23e = this;
        this['Sl']['find'](".toaster-levelup-close")["click"](function () {
          _0x2a65a9()['r']['Cd']();
          _0x41c23e['Ck']();
        });
      });
      _0x450c62["prototype"]['Bk'] = function () {
        return this['Sl'];
      };
      _0x450c62["prototype"]['ji'] = function () {
        _0x2a65a9()['r']['Ed']();
      };
      return _0x450c62;
    }();
    var _0x98bf64 = function () {
      var _0x3f1425 = _0x56cc5d(_0x472f7f, function () {
        _0x472f7f["call"](this);
        var _0x59b86b = this;
        var _0x252047 = _0x2a65a9();
        var _0x2a9460 = Date["now"]() + '_' + Math["floor"](0x3e8 + 0x2327 * Math["random"]());
        this['Sl'] = $("<div id=\"" + _0x2a9460 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + "/images/linelogo-xmas2022.png" + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x1e75e8("index.game.toaster.consent.text")["replaceAll"](' ', '&nbsp;')['replaceAll']("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x1e75e8("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x1e75e8("index.game.toaster.consent.iAccept") + '</div></div>');
        this['Tl'] = this['Sl']["find"](".toaster-consent-close");
        this['Tl']["hide"]();
        this['Tl']["click"](function () {
          _0x252047['r']['Cd']();
          if (_0x252047['Y']()) {
            _0x252047['$'](true, true);
          }
          _0x59b86b['Ck']();
        });
      });
      _0x3f1425['prototype']['Bk'] = function () {
        return this['Sl'];
      };
      _0x3f1425["prototype"]['ji'] = function () {
        var _0x366609 = this;
        var _0x2f333b = _0x2a65a9();
        if (_0x2f333b['Y']() && !_0x2f333b['Z']()) {
          _0x2f333b['r']['Hd']();
          setTimeout(function () {
            _0x366609['Tl']['fadeIn'](0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x366609['Ck']();
          }, 0x0);
        }
      };
      return _0x3f1425;
    }();
    var _0x13e28e = {};
    _0x13e28e["main"] = {
      'Ma': _0x4632b8("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
      'K': _0x4632b8("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
      'ra': _0x28f2bb(),
      'e': 0x4,
      'oa': false,
      'qk': true
    };
    _0x13e28e['miniclip'] = {
      'Ma': _0x4632b8("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
      'K': _0x4632b8("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
      'ra': _0x28f2bb(),
      'e': 0x4,
      'oa': false,
      'qk': false
    };
    var _0x34c9e9 = _0x13e28e[window['ENV']];
    if (!_0x34c9e9) {
      _0x34c9e9 = _0x13e28e["main"];
    }
    $(function () {
      FastClick["attach"](document["body"]);
    });
    addEventListener('contextmenu', function (_0x6cd1a2) {
      _0x6cd1a2["preventDefault"]();
      _0x6cd1a2["stopPropagation"]();
      return false;
    });
    _0x125754("//connect.facebook.net/" + _0x7ce184 + '/sdk.js', "facebook-jssdk", function () {
      FB["init"]({
        'appId': atob("ODYxOTI2ODUwNjE5MDUx"),
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': "v8.0"
      });
    });
    _0x125754("//apis.google.com/js/api:client.js", null, function () {
      gapi['load']('auth2', function () {
        GoogleAuth = gapi["auth2"]["init"]({
          'client_id': atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
        });
      });
    });
    _0x5a818 = _0x49b89b();
    _0x5a818['v']();
    if (PhoneChecked()) {
      _0x125754("https://haylamday.com/js/joy.min.js", "mobileconfig", function () {
        _0x4565e0();
      });
    }
    ;
    let _0x4565e0 = function () {
      $("#game-canvas")["after"]("<div id='zoom-container'>\n                                <div id='zoom-in'>+</div>\n                                <div id='zoom-out'>-</div>\n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ");
    };
    window["addEventListener"]('keydown', function (_0x173e48) {
      console["log"]("event.keyCode " + _0x173e48["keyCode"]);
      _0x173e48 = _0x173e48["which"] || _0x173e48['keyCode'] || 0x0;
      if (0x71 !== _0x173e48 && window["keyMove"] !== _0x173e48 || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let _0x4eee4d = theoEvents["eventoPrincipal"]['sk'] = 0x0;
        _0x173e48 = window["tuNewScore"];
        PilotoAutomatico = setInterval(function () {
          let _0x17b735 = parseFloat(theoEvents['eventoPrincipal']['sk']);
          theoEvents["eventoPrincipal"]['sk'] = (_0x17b735 >= Math['PI'] ? -_0x17b735 : _0x17b735) + (0x14 === _0x4eee4d ? 0x0 : Math['PI'] / 0x14);
          _0x4eee4d++;
        }, 0x78 + (0x186a0 <= _0x173e48 ? 0x5 : 0x2710 <= _0x173e48 ? 0xa : 0x0));
      }
      localStorage['setItem']("SaveGameXT", JSON["stringify"](theoKzObjects));
    }, false);
    let _0xdf7095 = [{
      'nombre': "chuot 1",
      'url': "https://i.imgur.com/SjFtyqp.png"
    }, {
      'nombre': "chuot 2",
      'url': "https://i.imgur.com/4QC2Exd.png"
    }, {
      'nombre': "chuot 3",
      'url': "https://i.imgur.com/PfdBkc2.png"
    }, {
      'nombre': "chuot 4",
      'url': "https://i.imgur.com/vD4zoMk.png"
    }, {
      'nombre': "chuot 5",
      'url': "https://i.imgur.com/n4N79UI.png"
    }, {
      'nombre': "arrow",
      'url': "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      'nombre': "Superman",
      'url': "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      'nombre': "Kratos",
      'url': "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      'nombre': "Pusheen_Ca",
      'url': "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      'nombre': 'lipstick',
      'url': "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      'nombre': 'AKM',
      'url': "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      'nombre': "Cherries_Pointer",
      'url': "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      'nombre': "Tom_and_JerryCurso",
      'url': "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
    }, {
      'nombre': 'JerryPointer',
      'url': "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let _0x264c23 = [{
      'nombre': "Default",
      'url': "https://i.imgur.com/8ubx4RA.png"
    }, {
      'nombre': "Schwarze Background",
      'url': "https://i.imgur.com/3cxXwZ6.png"
    }, {
      'nombre': "light blue",
      'url': "https://i.imgur.com/dWtJFIx.png"
    }, {
      'nombre': 'woman',
      'url': "https://i.imgur.com/19YALRi.png"
    }, {
      'nombre': 'Navidad',
      'url': "https://i.imgur.com/qAO9LgC.png"
    }, {
      'nombre': "Mal3ab",
      'url': "https://i.imgur.com/MlCgOma.png"
    }, {
      'nombre': "Galaxy_Star",
      'url': "https://i.imgur.com/yayb9Ru.png"
    }, {
      'nombre': "Desert",
      'url': "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }];
    theoKzObjects["loading"] = true;
    var _0x415064 = '';
    _0x415064 += "</div>";
    _0x415064 += '</div>';
    _0x415064 += '</div>';
    _0x415064 += "<div id=\"wormcerca\">";
    //_0x415064 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    //_0x415064 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    //_0x415064 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    //_0x415064 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    //_0x415064 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
   // _0x415064 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
  //  _0x415064 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    _0x415064 += "</div>";
//KapalÄ±    _0x415064 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
_0x415064 += `
<div style="display:none" id="zoom-container">
  <div id="zoom-out">-</div>
  <div id="zoom-in">+</div>
</div>
<div class="worm_3">x.<span id="zoom-percentage"></span></div>
<div class="worm_2">
  <button id="settingBtn">
    <img src="https://i.imgur.com/bKAe6W9.png" alt="Ayarlar"/>
  </button>
  <div id="settingContent">
    <div class="container1">
      <span class="settings_span">HÄ±zlÄ± DÃ¶ndÃ¼rme: </span>
      <input 
        id="smoothCamera" 
        class="range" 
        type="range" 
        min="0.3" 
        max="0.6" 
        value="${theoKzObjects.smoothCamera}" 
        step="0.1" 
        onmousemove="smoothCameraValue.value=value" 
      />
    </div>
    <div class="container1">
      <span class="settings_span">GÃ¼Ã§lendirme Boyutu: </span>
      <input 
        id="PortionSize" 
        class="range" 
        type="range" 
        min="1" 
        max="6" 
        value="${theoKzObjects.PortionSize}" 
        step="1" 
        onmousemove="rangevalue1.value=value" 
      />
    </div>
    <div class="container1">
      <span class="settings_span">GÃ¼Ã§lendirme AurasÄ±: </span>
      <input 
        id="PortionAura" 
        class="range" 
        type="range" 
        min="1.2" 
        max="3.2" 
        value="${theoKzObjects.PortionAura}" 
        step="0.2" 
        onmousemove="PortionAuravalue.value=value" 
      />
    </div>
    <div class="container1">
      <span class="settings_span">Yiyecek Boyutu: </span>
      <input 
        id="FoodSize" 
        class="range" 
        type="range" 
        min="0.5" 
        max="3" 
        value="${theoKzObjects.FoodSize}" 
        step="0.5" 
        onmousemove="rangevalue2.value=value" 
      />
    </div>
    <div class="container1">
      <span class="settings_span">Yiyecek GÃ¶lgesi: </span>
      <input 
        id="FoodShadow" 
        class="range" 
        type="range" 
        min="0.5" 
        max="3" 
        value="${theoKzObjects.FoodShadow}" 
        step="0.5" 
        onmousemove="FoodShadowvalue.value=value" 
      />
    </div>
  </div>
</div>
`;
    $("#game-view")['append'](_0x415064);
    var _0x507d6f = function (_0xcc1ad8) {
      if (theoKzObjects['PropertyManager']) {
        _0xcc1ad8['skinId'] = theoKzObjects['PropertyManager']['rh'];
        _0xcc1ad8["eyesId"] = theoKzObjects['PropertyManager']['sh'];
        _0xcc1ad8["mouthId"] = theoKzObjects['PropertyManager']['th'];
        _0xcc1ad8["glassesId"] = theoKzObjects["PropertyManager"]['uh'];
        _0xcc1ad8['hatId'] = theoKzObjects['PropertyManager']['vh'];
      }
    };
    var _0x5cf835 = function () {
      $('#mm-event-text')["replaceWith"]("<div class=\"text-vnxx\"><a href=\"https://www.wormate.io\">Wormate Extension 2024</a></div>");
      $(".column-right")["append"]("\n          \n          <div class=\"id\">\n         <input type=\"text\" value=\"" + theoKzObjects['FB_UserID'] + "\" class=\"you-idd\" />\n          \n          \n          ");
      $("#mm-store").after(`
        <div id="mm-store" style="float: right; position: relative; margin-right: 10px; min-width: 140px;">
          <div style="margin: 0;" id="loa831pibur0w4gv">
            <div onclick="openPopup()">
              <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: yellow; font-size: 25px;"></i> Ayarlar
            </div>
            <div id="popup" class="popup">
              <div class="phdr1">
<div style="display: flex; justify-content: center; align-items: center;">
  <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: yellow; font-size: 25px; margin-right: 10px;"></i> 
  <span>Oyun AyarlarÄ±</span>
</div>
              </div>
              <button class="close-button" onclick="closePopup()">Kapat</button>
              <div id="kich-hoat">
                ID: <input type="text" value="${theoKzObjects['FB_UserID']}" class="you-id" />
                <button class="you-id-copy" onclick="navigator.clipboard.writeText('${theoKzObjects['FB_UserID']}').then(() => alert('Your ID ${theoKzObjects['FB_UserID']} Copied!'));">
                  COPY
                </button>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div class="settings-lineZoom">
                        <span class="settings-labelZoom">
                          <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Velocidade de alimentação de habilidade:
                        </span>
                        <input class="settings-switchZoom" id="settings-Abilityzoom-switch" type="checkbox"/>
                        <label for="settings-Abilityzoom-switch"></label>
                      </div>
                    </td>
                    <td>
                      <div class="settings-lineZoom">
                        <span class="settings-labelZoom">
                          <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Streamer Mode:
                        </span>
                        <input class="settings-switchZoom" id="settings-stremingmode-switch" type="checkbox"/>
                        <label for="settings-stremingmode-switch"></label>
                      </div>
                    </td>
                    <td>
                      <div class="settings-lineZoom">
                        <span class="settings-labelZoom">
                          <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Save HS:
                        </span>
                        <input class="settings-switchZoom" id="settings-stremingmodesaveheadshot-switch" type="checkbox"/>
                        <label for="settings-stremingmodesaveheadshot-switch"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="settings-lineZoom">
                        <span class="settings-labelZoom">
                          <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> 3 Top Score:
                        </span>
                        <input class="settings-switchZoom" id="settings-stremingmodebatop-switch" type="checkbox"/>
                        <label for="settings-stremingmodebatop-switch"></label>
                      </div>
                    </td>
                    <td>
                      <div class="settings-lineZoom">
                        <span class="settings-labelZoom">
                          <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Emojis:
                        </span>
                        <input class="settings-switchZoom" id="settings-stremingmodeemoj-switch" type="checkbox"/>
                        <label for="settings-stremingmodeemoj-switch"></label>
                      </div>
                    </td>
                    <td>
                      <div class="settings-lineZoom">
                        <span class="settings-labelZoom">
                          <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Headshot Som:
                        </span>
                        <input class="settings-switchZoom" id="settings-stremingmodeheadshot-switch" type="checkbox"/>
                        <label for="settings-stremingmodeheadshot-switch"></label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div class="spancursor">
                        <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #ff8f00; font-size: 25px;"></i> Mouse Ä°mlec SeÃ§
                      </div>
                      <div class="cursor-container">
                        <div id="default-cursor-btn">
                          <img style="margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;" class="img" alt="Imgur-Upload" src="https://i.imgur.com/rI522o3.png">
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="spancursor">
                        <i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #ff8f00; font-size: 25px;"></i> Arka Plan SeÃ§
                      </div>
                      <div class="background-container"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="list2">
            <div class="list2">
              <i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> TuÅŸlar <a href="/">Q</a>: Tek bir yerde otomatik olarak dÃ¶ner. (Tek bir yerde DÃ¶nme)
                </div>
            <div class="list2">
             <i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> TuÅŸlar <a href="/">R</a>: HÄ±zlÄ± Canlanma (HÄ±zlÄ± Dirilme)
                </div>
                <div class="list2">
                 <i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> Not: Bu ayar sadece aktif edilmiÅŸ Ã¼yeler iÃ§indir. TeÅŸekkÃ¼rler!
                </div>
                <div class="list2">
                <i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> Dikkat: Bu ayar sadece etkinleÅŸtirilmiÅŸ Ã¼yeler iÃ§indir. TeÅŸekkÃ¼rler!
            </div>
              <center>
                <div class="hg">
<a target="_blank" href="https://wormatefriendsturkey.com/" style="color: white; text-decoration: none;">
<i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px; margin-right: 5px;"></i> Activated (Aktivasyon)
</a>                  </div>
              </center>
            </div>
          </div>
        </div>
      `);
      
      $("#loa831pibur0w4gv").replaceWith(`
        <div style="margin: 0;" id="loa831pibur0w4gv">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div class="label" id="titleSetings"></div>
          <div class="bao-list1">
            <input type="text" value="${theoKzObjects['FB_UserID']}" style="width: 80%; height: 23px; border-radius: 4px; font-size: 15px; padding: 0 6px; background-color: #fff; color: #806102; display: block; box-sizing: border-box; -webkit-appearance: none; outline: 0; border-width: 0;" />
            <button style="height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;" onclick="navigator.clipboard.writeText('${theoKzObjects['FB_UserID']}').then(() => alert('Your ID ${theoKzObjects['FB_UserID']} copied!'));">Kopyala</button>
            <center>
              <div class="hg">
                <a target="_blank" href="https://wormate.io/">Ativacao</a>
              </div>
            </center>
            <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>
            <a style="color: #2ae1eb; font-weight: 600;" href="https://discord.gg/loi">Ativacao inativa</a>
          </div>
        </div>
      `);      
      var _0x364e4b = document["getElementById"]("settingBtn");
      var _0x181506 = document["getElementById"]("settingContent");
      _0x364e4b["addEventListener"]('click', function () {
        if (_0x181506["style"]["display"] === "none") {
          _0x181506["style"]['display'] = "block";
        } else {
          _0x181506["style"]["display"] = 'none';
        }
      });
      $('#PortionSize')['on']('input', function () {
        theoKzObjects["PortionSize"] = $(this)["val"]();
        localStorage["PotenciadorSize"] = theoKzObjects["PortionSize"];
      });
      $("#PortionAura")['on']("input", function () {
        theoKzObjects["PortionAura"] = $(this)['val']();
        localStorage["PotenciadorAura"] = theoKzObjects["PortionAura"];
      });
      $("#smoothCamera")['on']("input", function () {
        theoKzObjects["smoothCamera"] = $(this)['val']();
        localStorage['smoothCamera'] = theoKzObjects["smoothCamera"];
      });
      $("#FoodSize")['on']("input", function () {
        theoKzObjects["FoodSize"] = $(this)["val"]();
        localStorage['ComidaSize'] = theoKzObjects['FoodSize'];
      });
      $("#FoodShadow")['on']('input', function () {
        theoKzObjects["FoodShadow"] = $(this)['val']();
        localStorage['ComidaShadow'] = theoKzObjects["FoodShadow"];
      });
      $("#mm-advice-cont").html(`
        <div class="vietnam" style="display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;">
          <input type="button" value="TAM EKRAN" class="fullscreen_button">
          <input type="button" value="TEKRAR" id="hoisinh" class="fullscreen_respawn">
          <input type="button" value="Ä°LETÄ°ÅžÄ°M" onclick="window.location.href='https://wormate.io/.'" class="fullscreen_contact">

          </div>
      `);
            $(".mm-merchant-cont")['html']("\n  <div style=\"display: flex; justify-content: center; align-items: center;margin-top:10px\">\n    <a href=\"https://www.youtube.com/yildo\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://wormatefriendsturkey.com/images/hiep_img/\" alt=\"\" width=\"155\">\n    </a>\n    <a href=\"https://thanhtoan.wormatefriends.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/V.png\" alt=\"\" width=\"155\">\n    </a>\n  </div>");
      $(document)["ready"](function () {
        $(".fullscreen_button")['on']('click', function () {
          if (document["fullScreenElement"] && null !== document["fullScreenElement"] || !document["mozFullScreen"] && !document["webkitIsFullScreen"]) {
            if (document["documentElement"]["requestFullScreen"]) {
              document["documentElement"]["requestFullScreen"]();
            } else if (document["documentElement"]["mozRequestFullScreen"]) {
              document["documentElement"]["mozRequestFullScreen"]();
            } else if (document['documentElement']["webkitRequestFullScreen"]) {
              document["documentElement"]["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
            }
          } else if (document["cancelFullScreen"]) {
            document["cancelFullScreen"]();
          } else if (document["mozCancelFullScreen"]) {
            document["mozCancelFullScreen"]();
          } else if (document["webkitCancelFullScreen"]) {
            document["webkitCancelFullScreen"]();
          }
        });
      });
      $("#hoisinh")["click"](function () {
        let _0x5467d1 = hoisinhnhanh;
        if (_0x5467d1) {
          anApp['r']['Hd']();
          anApp['sa'](_0x5467d1);
        }
      });
      $(".mm-merchant")['replaceWith']('');
      $(".description-text").replaceWith(`
        <div class="description-text">
          <div id="title"></div>
          <div class="description-text-test">
            <ul style="margin-top: 5px;" class="ui-tabs-nav">
              <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">
                <a> <span class="flag br" value="https://i.imgur.com/dixYLjk.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">
                <a> <span class="flag mx" value="https://i.imgur.com/JMAvuFN.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">
                <a> <span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">
                <a> <span class="flag ca" value="https://i.imgur.com/m1skEsB.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">
                <a> <span class="flag de" value="https://i.imgur.com/VgCH8iy.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">
                <a> <span class="flag fr" value="https://i.imgur.com/QuEjBr0.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">
                <a> <span class="flag sg" value="https://i.imgur.com/ErLcgXP.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">
                <a> <span class="flag jp" value="https://i.imgur.com/P2rYk1k.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">
                <a> <span class="flag au" value="https://i.imgur.com/12e0wp4.png"></span> </a>
              </li>
              <li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">
                <a> <span class="flag gb" value="https://i.imgur.com/8pQY6RW.png"></span> </a>
              </li>
            </ul>
            <div class="bao-list2">
              <div class="gachngang"></div>
              <div class="servers-container">
                <div class="servers-peru"></div>
                <div class="servers-mexico" style="display: none;"></div>
                <div class="servers-eeuu" style="display: none;"></div>
                <div class="servers-canada" style="display: none;"></div>
                <div class="servers-germania" style="display: none;"></div>
                <div class="servers-francia" style="display: none;"></div>
                <div class="servers-singapur" style="display: none;"></div>
                <div class="servers-japon" style="display: none;"></div>
                <div class="servers-australia" style="display: none;"></div>
                <div class="servers-granbretana" style="display: none;"></div>
              </div>
            </div>
          </div>
        </div>
      `);
    $(".ui-tab")['on']("click", account);
      $(".flag")['click'](function () {
        let _0x1498a7 = $(this)["attr"]('value');
        theoKzObjects["flag"] = _0x1498a7;
        ctx["containerImgS"]["texture"] = ctx['onclickServer'];
        retundFlagError();
        console["log"](_0x1498a7);
      });
      for (a = 0x0; a < servers["Api_listServer"]['length']; a++) {
        var _0x2e744e = servers["Api_listServer"][a]['serverUrl'];
        var _0x5d601b = servers['Api_listServer'][a]["name"];
        var _0x333fc5 = servers["Api_listServer"][a]['region'];
        let _0x104de5 = document['createElement']('p');
        _0x104de5["value"] = _0x2e744e;
        _0x104de5['innerHTML'] = _0x5d601b;
        if (_0x333fc5 == "peru") {
          $(".servers-peru")["prepend"](_0x104de5);
        } else {
          if (_0x333fc5 == "mexico") {
            $(".servers-mexico")['prepend'](_0x104de5);
          } else {
            if (_0x333fc5 == "eeuu") {
              $(".servers-eeuu")["prepend"](_0x104de5);
            } else {
              if (_0x333fc5 == "canada") {
                $(".servers-canada")["prepend"](_0x104de5);
              } else {
                if (_0x333fc5 == "germania") {
                  $(".servers-germania")["prepend"](_0x104de5);
                } else {
                  if (_0x333fc5 == "francia") {
                    $(".servers-francia")["prepend"](_0x104de5);
                  } else {
                    if (_0x333fc5 == "singapur") {
                      $(".servers-singapur")["prepend"](_0x104de5);
                    } else {
                      if (_0x333fc5 == "japon") {
                        $('.servers-japon')["prepend"](_0x104de5);
                      } else {
                        if (_0x333fc5 == 'australia') {
                          $(".servers-australia")["prepend"](_0x104de5);
                        } else if (_0x333fc5 == "granbretana") {
                          $(".servers-granbretana")["prepend"](_0x104de5);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        $(_0x104de5)["attr"]('id', _0x333fc5);
        $(_0x104de5)["attr"]('class', "selectSala");
        $(_0x104de5)["attr"]('value', _0x5d601b);
        $(_0x104de5)["click"](function () {
          ctx["setServer"]($(this)['text']());
          let _0x3b1741 = $(this)["val"]();
          ctx["containerImgS"]["texture"] = ctx["onclickServer"];
          retundFlagError();
          window["server_url"] = _0x3b1741;
          $("#mm-action-play")['click']();
          $("#adbl-continue")["click"]();
        });
      }
    };
    var _0x42f088 = function () {
      $("#getskin")['on']("click", function () {
        for (var _0x578431 = 0x0; _0x578431 < clientes["clientesActivos"]["length"]; _0x578431++) {
          var _0x699298 = clientes['clientesActivos'][_0x578431]['cliente_NOMBRE'];
          var _0xb96197 = clientes['clientesActivos'][_0x578431]["cliente_ID"];
          var _0x118d2d = clientes['clientesActivos'][_0x578431]["Client_VisibleSkin"];
          var _0x44b89f = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin1"];
          var _0x55e904 = clientes['clientesActivos'][_0x578431]["Client_VisibleSkin2"];
          var _0x1c2e07 = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin3"];
          var _0x1fa51c = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin4"];
          var _0xad71f6 = clientes['clientesActivos'][_0x578431]["Client_VisibleSkin5"];
          var _0x432321 = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin6"];
          var _0x2a7e8b = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin7"];
          var _0x36ff7c = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin8"];
          var _0x59b3ac = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin9"];
          var _0x32d40f = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin10"];
          var _0x34db1 = clientes['clientesActivos'][_0x578431]["Client_VisibleSkin11"];
          var _0x3c5c95 = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin12"];
          var _0x55f6b0 = clientes['clientesActivos'][_0x578431]["Client_VisibleSkin13"];
          var _0x40603d = clientes['clientesActivos'][_0x578431]["Client_VisibleSkin14"];
          var _0x2e9f94 = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin15"];
          var _0x43ee00 = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin16"];
          var _0x2523f1 = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin17"];
          var _0x5393f4 = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin18"];
          var _0x574bfe = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin19"];
          var _0x24afda = clientes["clientesActivos"][_0x578431]["Client_VisibleSkin20"];
          var _0x33d9b2 = clientes["clientesActivos"][_0x578431]["Client_KeyAccecs"];
          if (theoKzObjects["FB_UserID"] == 0x0) {} else {
            if (theoKzObjects['FB_UserID'] == _0xb96197) {
              if (_0x33d9b2 == "XTPRIVATESKIN") {
                for (let _0x4af749 = 0x0; _0x4af749 < theoKzObjects["idSkin"]['length']; _0x4af749++) {
                  const _0x402fb3 = theoKzObjects["idSkin"][_0x4af749];
                  if (_0x402fb3['id'] == _0x118d2d || _0x402fb3['id'] == _0x44b89f || _0x402fb3['id'] == _0x55e904 || _0x402fb3['id'] == _0x1c2e07 || _0x402fb3['id'] == _0x1fa51c || _0x402fb3['id'] == _0xad71f6 || _0x402fb3['id'] == _0x432321 || _0x402fb3['id'] == _0x2a7e8b || _0x402fb3['id'] == _0x36ff7c || _0x402fb3['id'] == _0x59b3ac || _0x402fb3['id'] == _0x32d40f || _0x402fb3['id'] == _0x34db1 || _0x402fb3['id'] == _0x3c5c95 || _0x402fb3['id'] == _0x55f6b0 || _0x402fb3['id'] == _0x40603d || _0x402fb3['id'] == _0x2e9f94 || _0x402fb3['id'] == _0x43ee00 || _0x402fb3['id'] == _0x2523f1 || _0x402fb3['id'] == _0x5393f4 || _0x402fb3['id'] == _0x574bfe || _0x402fb3['id'] == _0x24afda) {
                    _0x402fb3["nonbuyable"] = false;
                  }
                }
              } else {}
            } else {}
          }
        }
      });
    };
    var _0x4f10c0 = function () {
      theoKzObjects["adblock"] = true;
      $("#loa831pibur0w4gv").replaceWith(`
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div style="margin: 0;" id="loa831pibur0w4gv">
          <div class="label" id="titleSetings"></div>
          <div class="bao-list1">
            <div class="list1">
              <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>
              Update: 26/07/2024
            </div>
            <div class="list1">
              <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>
              <a href="https://discord.gg/loi">Ativacao inativa</a>
            </div>
          </div>
        </div>
      `);      
      $("#mm-coins-box").replaceWith(`
        <div style="margin: 0;" id="mm-coins-box">
          <button 
            style="
              width: 140px;
              height: 45px;
              float: right;
              border-radius: 10px;
              border: solid #fac 2px;
            " 
            id="getskin">
            Desen Kiliti AÃ§
          </button>
        </div>
      `);
      window['multiplier'] = 1;
      window["zoomLevel"] = 0x5;
      function _0x549265() {
        window["zoomLevel"]++;
        window['multiplier'] *= 1;
        changedNf();
        _0x5ca09a();
      }
      function _0x392490() {
        if (window["zoomLevel"] > 0x0) {
          window['zoomLevel']--;
          window["multiplier"] /= 1;
          changedNf();
          _0x5ca09a();
        }
      }
      function _0x5ca09a() {
        var _0x600965 = Math['round'](window["multiplier"] / 1 * 0x64);
        _0x600965 = Math["min"](0x64, _0x600965);
        var _0x262e01 = document["getElementById"]("zoom-percentage");
        _0x262e01['textContent'] = _0x600965 + '%';
      }
      document["getElementById"]('zoom-in')["addEventListener"]("touchstart", _0x549265);
      document["getElementById"]('zoom-out')["addEventListener"]("touchstart", _0x392490);
      window['onwheel'] = _0x4baeed => {
        _0x4baeed['preventDefault']();
        if (_0x4baeed["deltaY"] < 0x0) {
          _0x549265();
        } else {
          _0x392490();
        }
      };
      $("#settings-Abilityzoom-switch")['on']('click', function () {
        if (this['checked']) {
          console["log"]("I am checked");
          theoKzObjects["eat_animation"] = 0x1;
          localStorage["setItem"]("mySwitch", 'on');
        } else {
          console["log"]("I'm not checked");
          theoKzObjects["eat_animation"] = 0.0025;
          localStorage['setItem']('mySwitch', "off");
        }
      });
      $(document)["ready"](function () {
        var _0x326eca = localStorage["getItem"]('mySwitch');
        if (_0x326eca === 'on') {
          $("#settings-Abilityzoom-switch")["prop"]("checked", true);
          theoKzObjects["eat_animation"] = 0x1;
        } else {
          $("#settings-Abilityzoom-switch")["prop"]('checked', false);
          theoKzObjects['eat_animation'] = 0.0025;
        }
      });
      $("#settings-stremingmode-switch")['on']("click", function () {
        if (this["checked"]) {
          console["log"]("I am checked");
          theoKzObjects["ModeStremer"] = true;
          localStorage["setItem"]('ModeStremer', "true");
        } else {
          console["log"]("I'm not checked");
          theoKzObjects["ModeStremer"] = false;
          localStorage['setItem']('ModeStremer', 'false');
        }
      });
      $(document)["ready"](function () {
        var _0x17e799 = localStorage["getItem"]("ModeStremer");
        if (_0x17e799 === "true") {
          theoKzObjects["ModeStremer"] = true;
          $("#settings-stremingmode-switch")["prop"]('checked', true);
        } else {
          theoKzObjects["ModeStremer"] = false;
          $("#settings-stremingmode-switch")["prop"]("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch")['on']("click", function () {
        if (this["checked"]) {
          console['log']("I am checked");
          theoKzObjects["ModeStremerbatop"] = true;
          localStorage["setItem"]("ModeStremerbatop", "true");
        } else {
          console["log"]("I'm not checked");
          theoKzObjects["ModeStremerbatop"] = false;
          localStorage["setItem"]("ModeStremerbatop", "false");
        }
      });
      $(document)["ready"](function () {
        var _0x254554 = localStorage["getItem"]("ModeStremerbatop");
        if (_0x254554 === "true") {
          theoKzObjects["ModeStremerbatop"] = true;
          $("#settings-stremingmodebatop-switch")['prop']("checked", true);
        } else {
          theoKzObjects["ModeStremerbatop"] = false;
          $("#settings-stremingmodebatop-switch")["prop"]("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch")['on']("click", function () {
        if (this['checked']) {
          console['log']("I am checked");
          theoKzObjects["ModeStremeremoj"] = true;
          localStorage["setItem"]('ModeStremeremoj', "true");
        } else {
          console['log']("I'm not checked");
          theoKzObjects["ModeStremeremoj"] = false;
          localStorage["setItem"]("ModeStremeremoj", "false");
        }
      });
      $(document)['ready'](function () {
        var _0xd932a7 = localStorage["getItem"]('ModeStremeremoj');
        if (_0xd932a7 === 'true') {
          theoKzObjects["ModeStremeremoj"] = true;
          $("#settings-stremingmodeemoj-switch")["prop"]("checked", true);
        } else {
          theoKzObjects["ModeStremeremoj"] = false;
          $("#settings-stremingmodeemoj-switch")['prop']("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch")['on']('click', function () {
        if (this['checked']) {
          console["log"]('I am checked');
          theoKzObjects["ModeStremerheadshot"] = true;
          localStorage["setItem"]("ModeStremerheadshot", "true");
        } else {
          console["log"]("I'm not checked");
          theoKzObjects["ModeStremerheadshot"] = false;
          localStorage["setItem"]("ModeStremerheadshot", "false");
        }
      });
      $(document)["ready"](function () {
        var _0x271209 = localStorage['getItem']("ModeStremerheadshot");
        if (_0x271209 === 'true') {
          theoKzObjects["ModeStremerheadshot"] = true;
          $("#settings-stremingmodeheadshot-switch")['prop']("checked", true);
        } else {
          theoKzObjects["ModeStremerheadshot"] = false;
          $("#settings-stremingmodeheadshot-switch")["prop"]("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch")['on']("click", function () {
        if (this['checked']) {
          console['log']("I am checked");
          theoKzObjects["ModeStremerheadshot"] = true;
          localStorage["setItem"]("ModeStremerheadshot", 'true');
        } else {
          console["log"]("I'm not checked");
          theoKzObjects["ModeStremerheadshot"] = false;
          localStorage["setItem"]("ModeStremerheadshot", "false");
        }
      });
      $(document)["ready"](function () {
        var _0x1d3d5b = localStorage["getItem"]("ModeStremerheadshot");
        if (_0x1d3d5b === "true") {
          theoKzObjects["ModeStremerheadshot"] = true;
          $("#settings-stremingmodeheadshot-switch")["prop"]("checked", true);
        } else {
          theoKzObjects["ModeStremerheadshot"] = false;
          $("#settings-stremingmodeheadshot-switch")["prop"]("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch")['on']("click", function () {
        if (this["checked"]) {
          console['log']("I am checked");
          theoKzObjects["ModeStremersaveheadshot"] = true;
          localStorage["setItem"]("ModeStremersaveheadshot", "true");
        } else {
          console['log']("I'm not checked");
          theoKzObjects["ModeStremersaveheadshot"] = false;
          localStorage["setItem"]("ModeStremersaveheadshot", "false");
        }
        location["reload"]();
      });
      $(document)["ready"](function () {
        var _0x28c345 = localStorage["getItem"]("ModeStremersaveheadshot");
        if (_0x28c345 === "true") {
          theoKzObjects["ModeStremersaveheadshot"] = true;
          $("#settings-stremingmodesaveheadshot-switch")['prop']("checked", true);
        } else {
          theoKzObjects["ModeStremersaveheadshot"] = false;
          $("#settings-stremingmodesaveheadshot-switch")['prop']('checked', false);
        }
      });
      $("#settings-arrowmobile-switch")['on']("click", function () {
        if (this["checked"]) {
          console["log"]("I am checked");
          theoKzObjects["arrow"] = false;
        } else {
          console["log"]("I'm not checked");
          theoKzObjects["arrow"] = true;
        }
      });
      $("#PortionSize")['on']('input', function () {
        theoKzObjects['PortionSize'] = $(this)["val"]();
        localStorage["PotenciadorSize"] = theoKzObjects["PortionSize"];
      });
      $("#PortionAura")['on']('input', function () {
        theoKzObjects['PortionAura'] = $(this)['val']();
        localStorage['PotenciadorAura'] = theoKzObjects["PortionAura"];
      });
      $("#smoothCamera")['on']("input", function () {
        theoKzObjects["smoothCamera"] = $(this)["val"]();
        localStorage["smoothCamera"] = theoKzObjects['smoothCamera'];
      });
      $('#FoodSize')['on']("input", function () {
        theoKzObjects["FoodSize"] = $(this)['val']();
        localStorage["ComidaSize"] = theoKzObjects["FoodSize"];
      });
      $("#FoodShadow")['on']('input', function () {
        theoKzObjects["FoodShadow"] = $(this)["val"]();
        localStorage['ComidaShadow'] = theoKzObjects["FoodShadow"];
      });
      $("#KeyRespawn,#KeyAutoMov")['on']("keydown", function (_0x4efd34) {
        if (isValidHotkey(_0x4efd34)) {
          var _0x251f7f = $(this);
          var _0x406037 = getPresedKey(_0x4efd34);
          var _0x79b9a1 = _0x4efd34['keyCode'];
          _0x251f7f["val"](_0x406037);
          _0x251f7f['blur']();
          window["keyMove"] = _0x79b9a1;
          window['localStorage']["setItem"](_0x251f7f["attr"]('id'), _0x79b9a1);
        } else {
          _0x4efd34["preventDefault"]();
        }
      });
      for (a = 0x0; a < _0xdf7095["length"]; a++) {
        var _0x15a9cf = _0xdf7095[a]['url'];
        var _0x5dbb5a = _0xdf7095[a]['nombre'];
        let _0x205e1b = document["createElement"]("img");
        _0x205e1b['src'] = _0x15a9cf;
        $(".cursor-container")["prepend"](_0x205e1b);
        $(_0x205e1b)["attr"]("class", "cursor");
        $(_0x205e1b)["click"](function () {
          let _0x5c7d4d = $(this)["attr"]("src");
          localStorage["cursorSeleccionado"] = _0x5c7d4d;
          $("#game-cont")["css"]({
            'cursor': "url(" + _0x5c7d4d + "), default"
          });
          $("#game-canvas")["css"]({
            'cursor': "url(" + _0x5c7d4d + "), default"
          });
          $('body')["css"]({
            'cursor': 'url(' + _0x5c7d4d + "), default"
          });
        });
        $("#default-cursor-btn")['click'](function () {
          delete localStorage["cursorSeleccionado"];
          $("#game-cont, #game-canvas, body")["css"]('cursor', "default");
        });
      }
      $("#game-cont")["css"]({
        'cursor': "url(" + localStorage["cursorSeleccionado"] + "), default"
      });
      $("#game-canvas")['css']({
        'cursor': "url(" + localStorage["cursorSeleccionado"] + '), default'
      });
      $("body")["css"]({
        'cursor': "url(" + localStorage["cursorSeleccionado"] + "), default"
      });
      for (a = 0x0; a < _0x264c23["length"]; a++) {
        var _0x39654a = _0x264c23[a]["url"];
        var _0x5bad2e = _0x264c23[a]["nombre"];
        let _0x3ed20f = document['createElement']("img");
        _0x3ed20f["src"] = _0x39654a;
        $(".background-container")["prepend"](_0x3ed20f);
        $(_0x3ed20f)["attr"]("class", "background");
        $(_0x3ed20f)['attr']("value", _0x5bad2e);
        $(_0x3ed20f)["click"](function () {
          let _0x4959ab = $(this)['attr']("src");
          let _0x114942 = $(this)["attr"]("value");
          backgroundIMG = _0x4959ab;
          localStorage["fondoSeleccionado"] = backgroundIMG;
          alert("You selected the background: " + _0x114942);
          _0x5a818['q']['Cf'] = new _0x37651d['_b'](_0x5a818['q']['fn_o'](_0x4959ab));
        });
      }
      $(".background-container")["prepend"]('');
      _0x5a818['q']['Cf'] = new _0x37651d['_b'](_0x5a818['q']["fn_o"](localStorage["fondoSeleccionado"]));
    };
    var _0x30f657 = function (_0x58b9f6, _0x58c0db) {
      let _0x346345 = function (_0x1f33d4, _0x9310b6, _0x5f1d31, _0x4884f5) {
        ctx["setCountGame"](_0x1f33d4, _0x9310b6, _0x5f1d31, _0x4884f5);
      };
      if (_0x58b9f6 === 'count') {
        theoKzObjects["kill"] = (theoKzObjects["kill"] || 0x0) + (_0x58c0db ? 0x0 : 0x1);
        theoKzObjects["headshot"] = (theoKzObjects["headshot"] || 0x0) + (_0x58c0db ? 0x1 : 0x0);
        theoKzObjects["totalKills"] = theoKzObjects["totalKills"] + (_0x58c0db ? 0x0 : 0x1);
        theoKzObjects["totalHeadshots"] = theoKzObjects["totalHeadshots"] + (_0x58c0db ? 0x1 : 0x0);
        _0x346345(theoKzObjects["kill"], theoKzObjects["headshot"], theoKzObjects['totalKills'], theoKzObjects['totalHeadshots']);
      }
      if (_0x58b9f6 === 'open') {
        theoKzObjects["kill"] = 0x0;
        theoKzObjects['headshot'] = 0x0;
        $("#contadorKill_12")["show"]();
        _0x346345(theoKzObjects["kill"], theoKzObjects['headshot'], theoKzObjects['totalKills'], theoKzObjects["totalHeadshots"]);
      }
      if (_0x58b9f6 === "closed") {
        pwrups = {};
      }
      if (_0x58b9f6 === 'cerrar') {
        theoKzObjects["kill"] = 0x0;
        theoKzObjects['headshot'] = 0x0;
        theoKzObjects["totalKills"] = 0x0;
        theoKzObjects["totalHeadshots"] = 0x0;
      }
    };
    if (!Number["prototype"]["dotFormat"]) {
      Number["prototype"]["dotFormat"] = function () {
        return this["toString"]()["replace"](/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    }
    if (!Number['prototype']["dotFormatSelect2"]) {
      Number["prototype"]["dotFormatSelect2"] = function () {
        return this['toString']()["substr"](0x3, 0x2);
      };
    }
    setTimeout(function () {
      var _0x303e46 = ["SÄ°KEN", 'YILDO', 'UNAL', 'ANANI SÄ°KÄ°M', "Almedio", "YARAK", "AMINI SÄ°KÄ°M", "PÄ°Ã‡", "piÃ§", "Ossuruk", "Osuruk", "Ossuruk2", "Osuruk2"];
      $("#mm-action-play")['on']("click", function () {
        var _0x543c54 = $("#mm-params-nickname")['val']();
        var _0xda580b = _0x303e46["some"](function (_0x44ca02) {
          return _0x543c54["toLowerCase"]()['includes'](_0x44ca02["toLowerCase"]());
        });
        if (_0xda580b) {
          $("#mm-params-nickname")["val"]("SansÃ¼rlÃ¼");
        }
      });
      $(document)["ready"](function () {
        $("#getskin")["click"]();
      });
      $("#final-share-fb")["css"]('display', "none");
      $("#unl6wj4czdl84o9b")['css']("display", "none");
      $("#mm-menu-cont")["css"]('display', 'block');
      $("#mm-bottom-buttons")["css"]("display", "block");
      $("#mm-player-info")["css"]("display", "block");
      $("#relojHelp")['css']("position", "absolute");
      $("#relojHelp")['css']("top", "12px");
      $("#relojHelp")["css"]("left", "5px");
      $("#delete-account-view")["css"]("display", "none");
    }, 0xbb8);
    var _0x5510c9 = function _0x34fe1e() {
      requestAnimationFrame(_0x34fe1e);
      _0x2a65a9()['Pa']();
    };
    _0x5510c9();
    var _0x5ae6a6 = function () {
      var _0x1b6638 = _0x7ff870["width"]();
      var _0x2d81ef = _0x7ff870["height"]();
      var _0x4db3a4 = _0x1f70e1["outerWidth"]();
      var _0x351ef4 = _0x1f70e1["outerHeight"]();
      var _0x1073a5 = _0xb6655d['outerHeight']();
      var _0x4642f6 = _0x2bc24b["outerHeight"]();
      var _0x1365c0 = Math["min"](0x1, Math["min"]((_0x2d81ef - _0x4642f6 - _0x1073a5) / _0x351ef4, _0x1b6638 / _0x4db3a4));
      var _0x2e0890 = "translate(-50%, -50%) scale(" + _0x1365c0 + ')';
      _0x1f70e1["css"]({
        '-webkit-transform': _0x2e0890,
        '-moz-transform': _0x2e0890,
        '-ms-transform': _0x2e0890,
        '-o-transform': _0x2e0890,
        'transform': _0x2e0890
      });
      _0x2a65a9()['Ra']();
      window["scrollTo"](0x0, 0x1);
    };
    var _0x7ff870 = $("body");
    var _0x1f70e1 = $('#stretch-box');
    var _0xb6655d = $("#markup-header");
    var _0x2bc24b = $("#markup-footer");
    _0x5ae6a6();
    $(window)["resize"](_0x5ae6a6);
  }();
  window["anApp"]['p']['Bc'] = function () {
    var _0x16ef26 = window["anApp"]['p'];
    var _0x349f25 = {};
    $["get"]("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x5c4274) {
      _0x349f25 = _0x5c4274;
      $["ajax"]({
        'url': "https://wormatefriendsturkey.com/api/lan-da-vh.php",
        'method': "GET",
        'dataType': 'json',
        'success': function (_0x45971d) {
          theoKzObjects['visibleSkin'] = _0x45971d['visibleSkin'];
          delete _0x45971d["visibleSkin"];
          for (let _0x4f479d in _0x45971d) {
            if ("propertyList" !== _0x4f479d) {
              if (Array["isArray"](_0x45971d[_0x4f479d])) {
                _0x5c4274[_0x4f479d] = _0x5c4274[_0x4f479d]["concat"](_0x45971d[_0x4f479d]);
              } else {
                _0x5c4274[_0x4f479d] = {
                  ..._0x5c4274[_0x4f479d],
                  ..._0x45971d[_0x4f479d]
                };
              }
            }
          }
          theoKzObjects['pL'] = _0x45971d["propertyList"];
          theoKzObjects['idSkin'] = _0x45971d['skinArrayDict'];
          _0x16ef26['Cc'](_0x5c4274);
        },
        'error': function (_0x4c0f0a, _0xb018f, _0x43e24c) {
          console["error"](_0x43e24c);
          _0x16ef26['Cc'](_0x349f25);
        }
      });
    });
  };
  $("#background-canvas")["replaceWith"]("\n\n<canvas id=\"background-canvas\"></canvas>\n\n");
  $("#popup-login-gg")["html"]("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons")["replaceWith"]('');
  $('#markup-footer')["replaceWith"]("\n    \n   \n    \n            <footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language â–´</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a>\n</div></div>\n            \n            <a class=\"link\" hreflang=\"en\" href=\"https://wormatefriendsturkey.Com\">Â© 2024 Wormate Friends Turkey</a>\n            \n            <a style=\"font-size: 17px;font-weight: 600;\">WormateFriendsturkey.com</a>\n          <a style=\"font-size: 17px;font-weight: 500;color: #ff0;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in TCTEAM !</a>\n            </footer>\n\n\n\n\n\n        ");
});
function openPopup() {
  var _0x5a21ca = document["getElementById"]("popup");
  var _0x58fcba = document['getElementById']("overlay");
  _0x5a21ca["style"]['display'] = "block";
  _0x58fcba["style"]["display"] = 'block';
}
function closePopup() {
  var _0x1a4ea4 = document["getElementById"]("popup");
  var _0x8f7efa = document["getElementById"]('overlay');
  _0x1a4ea4["style"]['display'] = "none";
  _0x8f7efa["style"]["display"] = "none";
}
function account() {
  $('.mx')['on']("click", function () {
    $(".servers-mexico")['fadeIn'](0x1f4);
    $("#addflag")["attr"]('class', "flag mx");
    $(".ui-tab-inactive1")["attr"]("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive2")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive3")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive4")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive5")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive8")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive9")["removeClass"]("ui-tab-active");
    $(".servers-peru")["fadeOut"](0x64);
    $(".servers-eeuu")["fadeOut"](0x64);
    $('.servers-canada')['fadeOut'](0x64);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-francia")['fadeOut'](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $(".servers-japon")["fadeOut"](0x64);
    $(".servers-australia")["fadeOut"](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
  });
  $(".br")['on']("click", function () {
    $(".servers-mexico")["fadeOut"](0x64);
    $('.servers-eeuu')["fadeOut"](0x64);
    $('.servers-canada')["fadeOut"](0x64);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-francia")["fadeOut"](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $(".servers-japon")["fadeOut"](0x64);
    $(".servers-australia")["fadeOut"](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
    $(".ui-tab-inactive0")['attr']("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive2")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive3")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive4")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive5")['removeClass']('ui-tab-active');
    $(".ui-tab-inactive6")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive7")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive8")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive9")['removeClass']('ui-tab-active');
    $(".servers-peru")["fadeIn"](0x1f4);
    $("#addflag")["attr"]("class", 'flag br');
  });
  $('.us')['on']("click", function () {
    $('.servers-eeuu')["fadeIn"](0x1f4);
    $("#addflag")["attr"]('class', "flag us");
    $(".ui-tab-inactive2")['attr']("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive1")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive3")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive4")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive5")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive6")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive7")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive8")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive9")['removeClass']("ui-tab-active");
    $(".servers-mexico")["fadeOut"](0x64);
    $(".servers-peru")["fadeOut"](0x64);
    $(".servers-canada")["fadeOut"](0x64);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-francia")['fadeOut'](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $(".servers-japon")["fadeOut"](0x64);
    $(".servers-australia")['fadeOut'](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
  });
  $(".ca")['on']("click", function () {
    $('.servers-canada')["fadeIn"](0x1f4);
    $("#addflag")["attr"]("class", "flag ca");
    $(".ui-tab-inactive3")["attr"]("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive1")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive2")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive4")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive5")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive6")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive7")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive8")['removeClass']('ui-tab-active');
    $(".ui-tab-inactive9")["removeClass"]("ui-tab-active");
    $(".servers-eeuu")["fadeOut"](0x64);
    $(".servers-mexico")['fadeOut'](0x64);
    $('.servers-peru')["fadeOut"](0x1f4);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-francia")['fadeOut'](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $('.servers-japon')["fadeOut"](0x64);
    $(".servers-australia")["fadeOut"](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
  });
  $('.de')['on']("click", function () {
    $(".servers-germania")["fadeIn"](0x1f4);
    $("#addflag")['attr']("class", "flag de");
    $(".ui-tab-inactive4")["attr"]('class', "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive1")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive2")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive3")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive5")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive6")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive7")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive8")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive9")['removeClass']("ui-tab-active");
    $(".servers-eeuu")["fadeOut"](0x64);
    $(".servers-mexico")["fadeOut"](0x64);
    $(".servers-peru")['fadeOut'](0x1f4);
    $(".servers-canada")['fadeOut'](0x64);
    $(".servers-francia")["fadeOut"](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $(".servers-japon")['fadeOut'](0x64);
    $(".servers-australia")["fadeOut"](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
  });
  $(".fr")['on']("click", function () {
    $(".servers-francia")["fadeIn"](0x1f4);
    $('#addflag')['attr']("class", "flag fr");
    $(".ui-tab-inactive5")["attr"]("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive1")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive2")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive3")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive4")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive6")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive7")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive8")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive9")["removeClass"]("ui-tab-active");
    $(".servers-eeuu")["fadeOut"](0x64);
    $(".servers-mexico")["fadeOut"](0x64);
    $('.servers-peru')["fadeOut"](0x64);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-canada")["fadeOut"](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $(".servers-japon")["fadeOut"](0x64);
    $(".servers-australia")["fadeOut"](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
  });
  $(".sg")['on']("click", function () {
    $(".servers-singapur")["fadeIn"](0x1f4);
    $("#addflag")["attr"]("class", "flag sg");
    $(".ui-tab-inactive6")["attr"]("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive1")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive2")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive3")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive4")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive5")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive7")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive8")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive9")['removeClass']("ui-tab-active");
    $(".servers-eeuu")["fadeOut"](0x64);
    $(".servers-mexico")['fadeOut'](0x64);
    $('.servers-peru')["fadeOut"](0x64);
    $(".servers-canada")['fadeOut'](0x64);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-francia")["fadeOut"](0x64);
    $(".servers-japon")["fadeOut"](0x64);
    $(".servers-australia")['fadeOut'](0x64);
    $(".servers-granbretana")['fadeOut'](0x64);
  });
  $('.jp')['on']("click", function () {
    $(".servers-japon")['fadeIn'](0x1f4);
    $("#addflag")["attr"]("class", 'flag jp');
    $(".ui-tab-inactive7")["attr"]("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive1")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive2")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive3")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive4")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive5")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive6")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive8")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive9")["removeClass"]("ui-tab-active");
    $(".servers-eeuu")["fadeOut"](0x64);
    $(".servers-mexico")["fadeOut"](0x64);
    $('.servers-peru')['fadeOut'](0x64);
    $('.servers-canada')["fadeOut"](0x64);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-francia")["fadeOut"](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $(".servers-australia")["fadeOut"](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
  });
  $(".au")['on']('click', function () {
    $(".servers-australia")["fadeIn"](0x1f4);
    $("#addflag")["attr"]("class", "flag au");
    $(".ui-tab-inactive8")['attr']("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive1")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive2")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive3")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive4")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive5")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive6")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive7")['removeClass']("ui-tab-active");
    $(".ui-tab-inactive9")["removeClass"]("ui-tab-active");
    $(".servers-eeuu")["fadeOut"](0x64);
    $(".servers-mexico")["fadeOut"](0x64);
    $(".servers-peru")["fadeOut"](0x64);
    $(".servers-canada")["fadeOut"](0x64);
    $(".servers-germania")['fadeOut'](0x64);
    $(".servers-francia")["fadeOut"](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $('.servers-japon')["fadeOut"](0x64);
    $(".servers-granbretana")["fadeOut"](0x64);
  });
  $(".gb")['on']("click", function () {
    $(".servers-granbretana")['fadeIn'](0x1f4);
    $('#addflag')['attr']("class", "flag gb");
    $(".ui-tab-inactive9")["attr"]('class', "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive1")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive2")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive3")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive4")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive5")["removeClass"]('ui-tab-active');
    $(".ui-tab-inactive6")["removeClass"]("ui-tab-active");
    $(".ui-tab-inactive8")["removeClass"]("ui-tab-active");
    $(".servers-eeuu")["fadeOut"](0x64);
    $(".servers-mexico")["fadeOut"](0x64);
    $('.servers-peru')["fadeOut"](0x64);
    $(".servers-canada")['fadeOut'](0x64);
    $(".servers-germania")["fadeOut"](0x64);
    $(".servers-francia")["fadeOut"](0x64);
    $(".servers-singapur")["fadeOut"](0x64);
    $(".servers-japon")['fadeOut'](0x64);
    $(".servers-australia")['fadeOut'](0x64);
  });
}
getPresedKey = function (_0x133df4) {
  var _0x3ea545 = '';
  if (_0x133df4["keyCode"] == 0x9) {
    _0x3ea545 += "TAB";
  } else {
    if (_0x133df4["keyCode"] == 0xd) {
      _0x3ea545 += 'ENTER';
    } else if (_0x133df4['keyCode'] == 0x10) {
      _0x3ea545 += 'SHIFT';
    } else {
      _0x3ea545 += String["fromCharCode"](_0x133df4['keyCode']);
    }
  }
  return _0x3ea545;
};
getStringKey = function (_0x4b8fd4) {
  var _0x138497 = '';
  if (_0x4b8fd4 == 0x9) {
    _0x138497 += "TAB";
  } else {
    if (_0x4b8fd4 == 0xd) {
      _0x138497 += "ENTER";
    } else {
      if (_0x4b8fd4 == 0x10) {
        _0x138497 += "SHIFT";
      } else {
        if (_0x4b8fd4 == 0x20) {
          _0x138497 += 'SPACE';
        } else if (_0x4b8fd4 == 0x1b) {
          _0x138497 += "ESC";
        } else {
          _0x138497 += String['fromCharCode'](_0x4b8fd4);
        }
      }
    }
  }
  return _0x138497;
};
isValidHotkey = function (_0x142df0) {
  return !!(_0x142df0["keyCode"] >= 0x30 && _0x142df0["keyCode"] <= 0x39 || _0x142df0['keyCode'] >= 0x41 && _0x142df0['keyCode'] <= 0x5a || _0x142df0["keyCode"] == 0x9 || _0x142df0["keyCode"] == 0xd || _0x142df0["keyCode"] == 0x10 || _0x142df0['keyCode'] == 0x20 || _0x142df0['keyCode'] == 0x1b);
};
console["log"]("YILDO Update 2023");

/*zoom by yildo.com*/

eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };
  if (!''.replace(/^/, String)) {
    while (c--) {
      d[e(c)] = k[c] || e(c);
    }
    k = [function (e) {
      return d[e];
    }];
    e = function () {
      return "\\w+";
    };
    c = 1;
  }
  ;
  while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp("\\b" + e(c) + "\\b", 'g'), k[c]);
    }
  }
  return p;
}("8.w=0.M;N E=0.1D;8.1m=(6)=>{d(6.1n<0){8.w*=(1+E)}B{8.w*=(1-E)}8.I()};b O(6){d(6.f==='z'){8.w=0.M;8.I()}}8.e('Z',O);4 1r=0;4 1s=0;N h={};b 1l(f){d(h[f]){F 1t.1v(h[f])}B{F T('p.R').C(Q=>Q.R()).C(p=>{h[f]=p;F p})}}b 1j(){d(P){P=D}}1u U=\"1kÅŸ1a, 1i lÃ¼13 14 15 16ÅŸ17 Ã¶12 tÃ¼m gÃ¼19 1b iÃ§H 1c + 1d 1eÄ± 1fÄ±nÄ±z. 1g 1h iÃ§H gÃ¼1EÃ¼k Ã§24 28.\";8.29=b(){2c(U)};c.e('22',()=>{4 3={x:8.21/2,y:8.2a/2,A:7};4 r=3.x;4 q=3.y;4 o=0;b X(){4 V=L.K();T(8.26.25).C(()=>{4 W=L.K();o=W-V}).1G(()=>{o='1H'})}4 9=c.1I('1J');9.a.1K='1L';9.a.1M='S';9.a.11='S';9.a.1F='1O(0, 0, 0, 0.5)';9.a.1Q='1R';9.a.1S='1T 1U';9.a.1V='1W';9.a.1X='1Y';9.a.1C='10';c.18.1N(9);c.e('20',(6)=>{r=6.1Z;q=6.1P});b G(){4 v=r-3.x;4 u=q-3.y;4 s=2b.23(v*v+u*u);d(s>3.A){3.x+=(v/s)*3.A;3.y+=(u/s)*3.A}B{3.x=r;3.y=q}4 j=c.27('3');d(j){j.a.11=3.x+'Y';j.a.1B=3.y+'Y'}9.1A=`1z:${o}1y`;1x(G)}G();1w(X,10)});c.e('Z',b(6){d(6.1q===1p){6.J()}},D);c.e('1o',b(6){6.J()},D);", 62, 137, '|||solucan|let||event||window|pingElement|style|function|document|if|addEventListener|key||cache||solucanElement|||||ping|data|solucanMouseY|solucanMouseX|distance||dy|dx|multiplier||||speed|else|then|false|zoomSpeed|return|updateSolucan|in|changedNf|preventDefault|now|Date|625|const|stopZoom|needsRender|response|json|30px|fetch|maintenanceMessage|startTime|endTime|calculatePing|px|keydown|1000|left|nce|tfen|her|oyuna|ba|lamadan|body|ncellemeleri|geldiniz|alabilmek|CTRL|F5|yapmay|unutmay|Oyununuz|optimizasyon|eklentimizde|render|Ho|fetchData|onwheel|deltaY|contextmenu|123|keyCode|mouseX|mouseY|Promise|var|resolve|setInterval|requestAnimationFrame|ms|Ping|textContent|top|zIndex|05|nl|backgroundColor|catch|Error|createElement|div|position|fixed|bottom|appendChild|rgba|clientY|color|white|padding|2px|5px|fontSize|12px|borderRadius|3px|clientX|mousemove|innerWidth|DOMContentLoaded|sqrt|erezlerinizi|href|location|getElementById|temizleyiniz|onload|innerHeight|Math|alert'.split('|'), 0, {}));
