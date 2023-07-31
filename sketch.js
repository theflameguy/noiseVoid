var n=50;
var r1=10;
var r2=900;
var scl=10;
var l1=10;
var l2=60;  //l2-l1 should be a multiple of n
var seed=0.01

var th=[]
var px=[]
var py=[]
var xoff=[]
var xoffval=[]
var yoff=[]
var yoffval=[]

function setup() {
  // put setup code here
  createCanvas(window.innerWidth,window.innerHeight);  //full scr
  //createCanvas(700,700);  //test scr 
  noFill();
  colorMode(HSB,100)
  for(var i=0;i<n;i++){
    px[i]=[]
    py[i]=[]
    xoff[i]=[]
    xoffval[i]=[]
    yoff[i]=[]
    yoffval[i]=[]
    var lim=map(i,0,n,l1,l2)
    for(var j=0;j<lim+3;j++){
      th[j]=map(j,0,lim,0,TWO_PI)
      px[i][j]=map(i,0,n,r1,r2)*cos(th[j]);
      py[i][j]=map(i,0,n,r1,r2)*sin(th[j]);
      xoff[i][j]=0//random(0,1)
      xoffval[i][j]=random(0,seed)
      yoff[i][j]=0//random(0,1)
      yoffval[i][j]=random(0,seed)
    }
  }
  
}


function draw() {
  // put drawing code here
  // record the canvas(start)
  
  // if(frameCount===1)
  // capturer.start()
  
  background(50,10,5);

  translate(width/2,height/2);
  for(var i=0;i<n;i++){
    lim=map(i,0,n,l1,l2)
    stroke(map(i,0,n,50,80),map(i,0,n,50,100),map(i,0,n,10,300));
    strokeWeight(map(i,0,n,0.9,1.5));
    for(var j=0;j<lim+3;j++){
      curve(
        px[i][j]+map(noise(xoff[i][j]),0,1,-scl,scl),py[i][j]+map(noise(yoff[i][j]),0,1,-scl,scl),
        px[i][j+1]+map(noise(xoff[i][j+1]),0,1,-scl,scl),py[i][j+1]+map(noise(yoff[i][j+1]),0,1,-scl,scl),
        px[i][j+2]+map(noise(xoff[i][j+2]),0,1,-scl,scl),py[i][j+2]+map(noise(yoff[i][j+2]),0,1,-scl,scl),
        px[i][j+3]+map(noise(xoff[i][j+3]),0,1,-scl,scl),py[i][j+3]+map(noise(yoff[i][j+3]),0,1,-scl,scl)
        )
        if(j==1){
          xoff[i][1]+=xoffval[i][lim+1];
          yoff[i][1]+=yoffval[i][lim+1];}
        else {
          xoff[i][j]+=xoffval[i][j];
          yoff[i][j]+=yoffval[i][j];
          }
        
        
      }
      px[i][1]=px[i][lim+1]
      py[i][1]=py[i][lim+1]
  }
  // console.log(frameRate())
  
  // record the canvas(end)

   // var sec=20
   // if(frameCount< 60*sec){
   //   capturer.capture(canvas)
   // }
   // else if(frameCount ===60*sec ){
   //   capturer.save();
   //   capturer.stop();
   // }


  }
