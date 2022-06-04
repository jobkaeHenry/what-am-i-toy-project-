//----------써클텍스트------------

const circleType = new CircleType(document.getElementById('circleType'));
circleType.radius(1100);


//-------------------문제넘기기-----------------

var questNum = 0;
var next = () => {
  if (questNum == 12) {
    viewResultPage();
    var mbti = "";
    ($("#EI").val() < 2) ? mbti += "I": mbti += "E";
    ($("#SN").val() < 2) ? mbti += "N": mbti += "S";
    ($("#TF").val() < 2) ? mbti += "F": mbti += "T";
    ($("#JP").val() < 2) ? mbti += "P": mbti += "J";
    $("#result_subtitle").html(mbtiResult[mbti]["subtitle"]);
    $("#result_title").html(mbtiResult[mbti]["title"]);
    $("#detail").html(mbtiResult[mbti]["subscription"]);
    $("#character").html(mbtiResult[mbti]["character"]);
    $("#result_card").css({
      'background-image': mbtiResult[mbti]["backgroundImage"]
    });
    $("#result_frame").css({
      'background-image': mbtiResult[mbti]["gemStoneFrame"]
    });
    $("#gemStone").attr("src", mbtiResult[mbti]["gemStoneImage"]);

  } else {
    $("#sheet").html(questionSheet[questNum]["sheet"]);
    $("#whatType").val(questionSheet[questNum]["type"]);
    $("#a").html(questionSheet[questNum]["a"]);
    $("#b").html(questionSheet[questNum]["b"]);
    $(".howMuch").attr("style", "width:calc(100/12*" + (parseInt(questNum)) + "%)");
    $("#howMuchNum").html(parseInt(questNum) + 1 + "/12")
    questNum++
  }
};

// ---------클릭함수----------------------
$("#ans_01").click(function () {
  hoverFunctionA();
  let type = $("#whatType").val();
  let preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next()
});

$("#ans_02").click(function () {
  hoverFunctionB()
  next()
});


// -------------클릭시 색상변경------------------
var hoverFunctionA = () => {
  $("#ans_01").css({
    'background': 'linear-gradient(90deg, #D4B864 0%, #AF854E 50%, #D4B864 100%)'
  })
  $("#upLeft").css({
    'background-image': 'url(../img/left_angle_filled.svg)'
  })
  $("#upRight").css({
    'background-image': 'url(../img/right_angle_filled.svg)'
  })
  setTimeout(function () {
    $("#ans_01").css({
      'background': 'none'
    })
    $("#upLeft").css({
      'background-image': 'url(../img/left_angle.svg)'
    })
    $("#upRight").css({
      'background-image': 'url(../img/right_angle.svg)'
    })
  }, 100)
}

var hoverFunctionB = () => {
  $("#ans_02").css({
    'background': 'linear-gradient(90deg, #D4B864 0%, #AF854E 50%, #D4B864 100%)'
  })
  $("#downLeft").css({
    'background-image': 'url(../img/left_angle_filled.svg)'
  })
  $("#downRight").css({
    'background-image': 'url(../img/right_angle_filled.svg)'
  })
  setTimeout(function () {
    $("#ans_02").css({
      'background': 'none'
    })
    $("#downLeft").css({
      'background-image': 'url(../img/left_angle.svg)'
    })
    $("#downRight").css({
      'background-image': 'url(../img/right_angle.svg)'
    })
  }, 100)
}





// -------------------화면넘기기 함수-----------------------


var main = document.getElementById("main");
var test = document.getElementById("test");
var result = document.getElementById("result");
var resultShare = document.getElementById("result_share");


var startTest = () => {
  main.style.display = "none";
  test.style.display = "flex";
  next();
}

const backToMain = () => {
  main.style.display = "flex";
  test.style.display = "none";
}

const viewResultPage = () => {
  result.style.display = "flex"
  test.style.display = "none"
  resultShare.style.display = "block"
}

//  다운로드함수

function downImg(){
  html2canvas($("#result_card")[0]).then(function(canvas){
      var myImage = canvas.toDataURL();
      downloadURI(myImage, "나의 보석 타입.jpg") 
  });
}

function downloadURI(uri, name){
  var link = document.createElement("a")
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}