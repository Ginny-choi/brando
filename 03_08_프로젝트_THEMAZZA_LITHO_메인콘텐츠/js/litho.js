;(function($){

    var litho = {        
        init: function(){
            this.heaerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },
        heaerFn:function(){
 

                //메인메뉴, 서브메뉴 객체와 배열
                var lithoNav = {
                    sub1:[
                      {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                      {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                      {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                      {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                    ],
                    sub2:[
                      {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                      {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                      {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                      {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                    ],
                    sub3:[
                      {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                      {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                      {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                      {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                      {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                      {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                      {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                      {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                    ],
                    sub4:[
                      {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                      {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                      {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                      {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                    ],
                    sub5:[
                      {
                        sub:"Header and menu",
                        subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                        subsubsub:{
                          subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu hal"],
                          subsubsub2:["Left menu classic","Left menu modern"],
                          subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                          subsubsub4:["Classic","Modern","Full screen"]
                        }               
                      },
                      {
                        sub:"Footer", 
                        subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                      },
                      {
                        sub:"Page title", 
                        subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                      },
                      {
                        sub:"Modal popup", 
                        subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                      },
                      {
                        sub:"Icon packs", 
                        subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                      },
                      {
                        sub:"Animations"
                      }
                    ], 
                    sub6:[
                      {sub:"Blog grid"},                      
                      {sub:"Blog masonry"},                      
                      {sub:"Blog classic"},                      
                      {sub:"Blog simple"},                      
                      {sub:"Blog side image"},                      
                      {sub:"Blog metro"},                      
                      {sub:"Blog overlay image"},                      
                      {sub:"Blog modern"},                      
                      {sub:"Blog clean"},                      
                      {sub:"Blog widget"},                      
                      {sub:"Blog standard"},                      
                      {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},                      
                      {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width pos"]},                      
                    ],
                    sub7:[
                      {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                      {sub:["menu-banner-01.jpg"]},
                      {sub:["menu-banner-02.jpg"]}
                    ]
                }  //litho 객체 배열 메뉴


                //litho 객체 배열 서브 메뉴를 
                //콤포넌트 요소에 넣기
                //서브1 코딩
                var $col = $('#nav .col');
                var txt = '';

                    //sub1 :  4열
                    //서브1 그룹 : 1~4열 반복
                    for(var i in lithoNav.sub1){
                      for(var j in lithoNav.sub1[i].sub){
                        if(j==0){
                          txt =  "<dt>" + lithoNav.sub1[i].sub[j] + "</dt>"; //서브메뉴 타이틀
                        }
                        else{
                          txt += "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>"; //서브메뉴 목록                  
                        }
                      }
                      $col.eq(i).html( txt );
                      txt ='';
                    }



                    //sub2 :  4행
                    //subsub 



                    ///////////////////////////////////////////////  
                    //서브2
                    var $subBtn = $('.sub2 .sub-btn'); //서브메뉴버튼 텍스트만
                    var $subsubUl = $('.sub2 .subsub'); //li a 서브서브메뉴 텍스트

                    //서브메뉴
                    for(var i in lithoNav.sub2){ // 0 ~ 3 (4행 반복)
                      txt = lithoNav.sub2[i].sub;
                      $subBtn.eq(i).html(txt);
                      txt = '';
                    }


                    //서브서브메뉴
                    //서브2 : sub2[0] > subsub[0 ~ 3]
                    for(var i in lithoNav.sub2){
                      for(var j in lithoNav.sub2[i].subsub){
                        txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>"
                      }
                      $subsubUl.eq(i).html(txt); //<ul></ul> 태그 사이에 추가(Append)
                      txt = "";  
                    }



                    //서브3 
                    var $sub3Btn =  $('.sub3 .sub-btn');
                    var $sub3Sub =  $('.sub3 .subsub'); //ul
                    var imsi = '';

                        //서브3 > 서브메뉴
                        for(var i in lithoNav.sub3){
                          txt = lithoNav.sub3[i].sub; //서브3 > 서브메뉴
                          imsi = $sub3Btn.eq(i).html(); //버튼 내용이 임시에 저장
                          txt += imsi;  //우측에 화살모양 아이콘 추가 i태그
                          $sub3Btn.eq(i).html( txt );
                          txt = '';  
                        }

                        //서브3 > 서브서브메뉴 8개
                        for(var i in lithoNav.sub3){ //행 0 ~ 7
                          for(var j in lithoNav.sub3[i].subsub){ //열
                            txt += "<li><a href='#'>"+lithoNav.sub3[i].subsub[j]+"</a></li>";
                          }
                          $sub3Sub.eq(i).html(txt);
                          txt = '';
                        }
                        



                    //서브4
                    var $sub4Menu = $('.sub4 .sub-menu');

                        for(var i in lithoNav.sub4){
                          for(var j in lithoNav.sub4[i].sub){
                            if(j==0){
                              txt += "<dt>" + lithoNav.sub4[i].sub[j] + "</dt>";
                            }
                            else{
                              txt += "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>";
                            }
                          }
                         $sub4Menu.eq(i).html( txt );
                          txt ='';
                        }







                    //sub5
                    var $sub5Btn = $('.sub5 .sub-btn');    
                    var $sub5Menu = $('.sub5 .sub-menu');    

                        
                        for(idx in lithoNav.sub5){ //0~5
                          txt = lithoNav.sub5[idx].sub; //서브메뉴 가져오기
                          imsi = $sub5Btn.eq(idx).html(); //아이콘 가져오기
                          txt += imsi;
                          $sub5Btn.eq(idx).html(txt);
                          txt = '';

                          if(idx==0){  //0 서브서브서브

                            for(i in lithoNav.sub5[idx].subsub){
                              if(i < 9){ //0 ~ 8
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                              }
                              else{ //9 ~ 12
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"<i class='fas fa-angle-right'></i></a></li>"; //서브서브 가져오기
                              }
                              
                            }                   
                            $sub5Menu.eq(idx).html(txt);
                            txt = '';
    
    
    
                            //4Depth
                            //서브서브서브 메뉴 10번째
                            txt += $('.sub5-sub1>div>ul>li').eq(9).html(); //10번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(9).html( txt );
                            txt = '';                        
    
    
                            //서브서브서브 메뉴 11번째
                            txt += $('.sub5-sub1>div>ul>li').eq(10).html(); //11번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub11'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(10).html( txt );
                            txt = '';
    
    
    
                            //서브서브서브 메뉴 12번째
                            txt += $('.sub5-sub1>div>ul>li').eq(11).html(); //12번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub12'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(11).html( txt );
                            txt = '';
    
    
                            //서브서브서브 메뉴 13번째
                            txt += $('.sub5-sub1>div>ul>li').eq(12).html(); //13번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub13'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(12).html( txt );
                            txt = '';
                            //서브서브서브 메뉴 13번째 끝
                            //sub5-sub1 끝
    
    
                          }
                          else if(idx>0 && idx<5){  //1 ~ 4
                            for(i in lithoNav.sub5[idx].subsub){
                              txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                            }
                            $sub5Menu.eq(idx).html(txt);
                            txt = '';    
                          }

                        }






                      //서브6
                      var $sub6Btn = $('.sub6 .sub-btn'); //서브메뉴버튼 텍스트만
                      var $ul12 = $('.sub6 .sub6-sub12 ul');    //li a 서브서브메뉴 텍스트
                      var $ul13 = $('.sub6 .sub6-sub13 ul');    //li a 서브서브메뉴 텍스트

                          //서브
                          for(i in lithoNav.sub6){ //0 ~ 12
                              if(i<11){ //0 ~ 10
                                $sub6Btn.eq(i).html( lithoNav.sub6[i].sub );
                              }
                              else{
                                $sub6Btn.eq(i).html( lithoNav.sub6[i].sub + "<i class='fas fa-angle-right'></i>" );      
                              }
                          }                          

                          //서브서브 12
                          for(i in lithoNav.sub6[11].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub6[11].subsub[i] + "</a></li>";   
                          }                         
                          $ul12.html( txt );
                          txt = '';

                          //서브서브 13
                          for(i in lithoNav.sub6[12].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub6[12].subsub[i] + "</a></li>";   
                          }                         
                          $ul13.html( txt );
                          txt = '';




                          //sub7
                          var $sub7Dl1 = $('.sub7 dl').eq(0);
                          var $sub7Img = $('.sub7 dl img');    //이미지 2개
                          

                              for(i in lithoNav.sub7[0].sub){ //0 ~ 9
                                if( i==0 || i==6 ){ // || or 0 또는 6
                                  txt += "<dt>" + lithoNav.sub7[0].sub[i] + "</dt>";
                                }
                                else{ //나머지  1 2 3 4 5 7 8 9
                                  txt += "<dd><a href='#'>" + lithoNav.sub7[0].sub[i] + "</a></dd>";
                                }
                              }
                              $sub7Dl1.html( txt );
                              txt = '';



                              //이미지  
                              for(var i=0; i<$sub7Img.length; i++){
                                txt = $sub7Img.eq(i).attr('src'); //./img/
                                txt += lithoNav.sub7[i+1].sub[0];   //menu-banner-01.jpg  
                                $sub7Img.eq(i).attr('src', txt ); //./img/menu-banner-01.jpg 
                                txt = '';
                              }










              //네비게이션
              //메인버튼(메뉴) - 1 Depth
              var $mainBtn =  $('.main-btn');
              var $sub =  $('.sub');
              var $navUlLi =  $('#nav>ul>li');

                  //1Depth 이벤트
                  $mainBtn.on({
                    mouseenter:function(){
                      $(this).next().stop().show(); //2Depth 보여라
                    }
                  });

                  //메인메뉴와 서브메뉴 영역을 마우스가 떠나면 해당 서브메뉴 숨겨라
                  $navUlLi.on({
                    mouseleave:function(){
                      $sub.stop().hide();   //2Depth 숨겨라
                    }
                  });  
                  




                  //2Depth 이벤트
                  //서브-서브 메뉴 - 3 Depth 보여라
                  // 서브 메뉴 버튼에 마우스 오버스
              var $subBtn = $('.sub-btn');
              var $subSub = $('.sub-sub');
                  
                  $subBtn.on({
                    mouseenter:function(){
                      $subSub.stop().hide();
                      $(this).next().stop().show(); //3 Depth 보여라
                    }
                  });

                  $navUlLi.on({
                    mouseleave:function(){
                      $subSub.stop().hide();  //3 Depth 숨겨라
                    }
                  });





                //3Depth 이벤트
                //서브-서브-서브 메뉴 - 4 Depth 보여라
                var $subSubBtn = $('.sub-sub-btn');  
                var $subSubSub = $('.sub-sub-sub');  
                var $subSub= $('.sub-sub');  

                    $subSubBtn.on({
                      mouseenter:function(){
                        $subSubSub.stop().hide();      //4 Depth 숨겨라
                        $(this).next().stop().show();  //해당 4 Depth만 보여라
                      }
                    });

                    $subSub.on({
                      mouseleave:function(){
                        $subSubSub.stop().hide();      //4 Depth 숨겨라
                      }
                    });


        },
        section1Fn:function(){

          var $slide     = $('#section1 .slide');
          var $window    = $(window);
          var $winW      = $(window).width();
          var $winH      = $(window).height();
          var $nextBtn   = $('#section1 .next-btn');
          var $prevBtn   = $('#section1 .prev-btn');
          var $pageBtn   = $('#section1 .page-btn');
          var $slideWrap = $('#section1 .slide-wrap');
          var $slideView = $('#section1 .slide-view'); //터치 선택자(Touch Selector)
          var $section1 = $('#section1'); 
          var cnt        = 0;
          var n          = $('#section1 .slide').length-2; //2 = 슬라이드 총갯수(5) - 2(맨앞1 맨뒤1)


              function resizeFn(){
                $winW    = $(window).width();
                $winH    = $(window).height();
                $slide.css({width:$winW});
                
                ///가로형 모드 반응형
                console.log(window.orientation );
                if(window.orientation == 0 ){
                  alert('orientation == 0 ');

                }
                else if(window.orientation == 90 ){
                  alert('orientation == 90 ');
                }
                else if(window.orientation == 180 ){
                 alert('orientation == 180 ');
                }
                else if(window.orientation == -90 ){
                  alert('orientation == -90 ');
                }

                ///세로형 모드 반응형

                $section1.css({width:$winW, height:$winH});
                mainSlideFn();
              }

              resizeFn();

              $window.resize(function(){ 
                resizeFn();
              });
              

              //메인슬라이드
              //1. 메인슬라이드함수
              function mainSlideFn(){
                $slideWrap.stop().animate({left:-$winW*cnt }, 600, 'easeInOutExpo', function(){
                  if(cnt>n-1){cnt=0}
                  if(cnt<0){cnt=n-1}
                  $slideWrap.stop().animate({left:-$winW*cnt }, 0);
                });                
                pageBtnColorEventFn(); //페이지 버튼 이벤트 함수 호출
              }

              //2-1. 다음 슬라이드 카운트 함수
              function nextSlidCountFn(){
                  cnt++;
                  mainSlideFn(); //메인 슬라이드 함수 호출
              }
              
              //2-2. 이전 슬라이드 카운트 함수
              function prevSlidCountFn(){
                  cnt--;
                  mainSlideFn(); //메인 슬라이드 함수 호출
              }
              
              //3-1. 다음 화살 버튼 클릭 이벤트
              $nextBtn.on({
                click:  function(){
                  if( !$slideWrap.is(':animated')){
                    nextSlidCountFn(); //다음 슬라이드 카운트 함수 호출
                  }                  
                }
              });

              //3-2. 이전 화살 버튼 클릭 이벤트
              $prevBtn.on({
                click:  function(){
                  if( !$slideWrap.is(':animated')){
                    prevSlidCountFn(); //이전 슬라이드 카운트 함수 호출
                  }
                }
              });


              //4-1 페이지 버튼 이벤트 : 해당 슬라이드에 버튼에 색상 변경
              //페이지 버튼 색상변경 이벤트 함수
              function pageBtnColorEventFn(){
                // var z = cnt;
                // if(z>n-1){z=0;}
                $pageBtn.removeClass('addPage');
                $pageBtn.eq(cnt>n-1?0:cnt).addClass('addPage'); //0 1 2 0 1 2
              }
              pageBtnColorEventFn(); //로딩시 페이지함수 실행

              //4-2 페이지 버튼 클릭 이벤트
              // $pageBtn.each(function(idx){                  
              //   $pageBtn.eq(idx).on({  //첫번째 슬라이드 호출
              //     click:  function(){
              //       cnt = idx;
              //       mainSlideFn()// 슬라이드 메인함수 호출
              //     }
              //   });
              // });

              //4-2 페이지 버튼 클릭 이벤트
              $pageBtn.each(function(idx){                  
                $(this).on({  //첫번째 슬라이드 호출
                  click:  function(){
                    cnt = idx; //클릭한 버튼 인덱스 번호가 슬라이드 번호 
                    mainSlideFn()// 슬라이드 메인함수 호출
                  }
                });
              });


              //5 터치 스와이프
              //슬라이드를 오른쪽에서 왼쪽으로 터치하면 다음슬라이드카운트함수 호출
              //슬라이드를 왼쪽에서 오른쪽으로 터치하면 이전슬라이드카운트함수 호출
              $slideView.swipe({
                swipeLeft:function(e){ //오른쪽에서 왼쪽으로 터치
                  e.preventDefault();
                  if( !$slideWrap.is(':animated')){
                    nextSlidCountFn();
                  }
                },
                swipeRight:function(e){ //왼쪽에서 오른쪽으로 터치
                  e.preventDefault();
                  if( !$slideWrap.is(':animated')){
                    prevSlidCountFn();
                  }
                }
              });


        },
        section2Fn:function(){
            
        },
        section3Fn:function(){
          var $prevBtn    = $('#section3 .prev-btn');
          var $nextBtn    = $('#section3 .next-btn');
          var $slideWrap  = $('#section3 .slide-wrap');
          var $slideView  = $('#section3 .slide-view');
          var cnt         = 0; //카운트 변수는 반드시 숫자로 지정
          var setId       = null; //메모리 할당 전형 안한 상태
          var n = $('#section3 .slide').length-(4+4)-1;  //4개(0,1,2,3)
          console.log('총 슬라이드 갯수 : ' +n);

              //1
              function mainSlideFn(){
                console.log(cnt);
                $slideWrap.stop().animate({left:-390*cnt},600,'easeInOutSine', function(){
                  if(cnt>n){cnt=0}
                  if(cnt<0){cnt=n}
                  console.log(cnt);
                  $slideWrap.stop().animate({left:-390*cnt},0);
                });
              }

              //2 
              function nextCountFn(){
                cnt++;
                mainSlideFn();
              }
              //2 
              function prevCountFn(){
                cnt--;
                mainSlideFn();
              }

              //3 
              $nextBtn.on({
                click:function(){   
                  timerFn();
                  if(!$slideWrap.is(':animated')){
                    nextCountFn();
                  }                  
                }
              });

              //3 
              $prevBtn.on({
                click:function(){  
                  timerFn();                              
                  if(!$slideWrap.is(':animated')){
                    prevCountFn();
                  }                  
                }
              });

              //4
              $slideView.swipe({
                swipeLeft:function(){
                  timerFn();
                  if(!$slideWrap.is(':animated')){
                    nextCountFn();
                  }   
                },
                swipeRight:function(){
                  timerFn();
                  if(!$slideWrap.is(':animated')){
                    prevCountFn();
                  }  
                }                
              });


              //5
              function autoPlay(){
                setId = setInterval(nextCountFn, 4000); 
              }
              autoPlay(); //로딩시 4초후에 4초간격으로 재생

              //6
              //타이머 함수
              //이벤트(클릭 이벤트와 터치 이벤트) 발생하면 애니메이션 일시중지
              //그리고 4초간 이벤트(클릭 이벤트와 터치 이벤트)가 없으면
              //다음 슬라이드 곧바로 실행 nextCountFn()
              //자동 타이머 실행 autoPlay() 
              
              /*
              t = 0;
              setId2 = null;
              function timerFn(){   
                t = 0;             
                clearInterval(setId);
                clearInterval(setId2);
                console.log('일시중지된 메모리 번지 번호 : ', setId );

                setId2 = setInterval(counterFn,1000);
                         console.log('setId2 : ', setId2 );

                         function counterFn(){
                           t++;
                           console.log(t);
                           if(t>=4){
                             t=0;
                             clearInterval(setId);
                             clearInterval(setId2);
                             nextCountFn(); //다음슬라이드
                             autoPlay();  //오토플레이 4초마다 실행
                             console.log('setId2 일시중지 : ', setId2 );
                           }
                         }

              }
              */


            //콜백 타이머
            
            //0타이머 함수

            //1 이벤트(클릭 이벤트와 터치 이벤트) 발생하면 애니메이션 일시중지
            //2 그리고 4초간 이벤트(클릭 이벤트와 터치 이벤트)가 없으면
            //3 다음 슬라이드 곧바로 실행 nextCountFn()
            //4 자동 타이머 실행 autoPlay() 

            var t = 0;
            var setId2 = null;

            function timerFn(){
              clearInterval(setId);
              clearInterval(setId2);
              setId2 = setInterval(function(){
                t++; //1 2 3 4 카운트
                console.log(t);
                if( t>=4 ){
                  clearInterval(setId);
                  clearInterval(setId2);
                  nextCountFn();
                  autoPlay();
                }
              }, 1000);
            }  
              
        },
        section4Fn:function(){
            
        },
        section5Fn:function(){
            
        },
        section6Fn:function(){
            
        },
        section7Fn:function(){
            
        },
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        section10Fn:function(){

        },
        footerFn:function(){

        }
    } //객체 끝


    litho.init();

})(jQuery);