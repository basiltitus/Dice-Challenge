var no1=Math.random();

no1=no1*6;
no1=Math.floor(no1);
no1++;

var no2=Math.random();

no2=no2*6;
no2=Math.floor(no2);
no2++;
if(no1==1)
{
  var img="images/dice1.png"
}
else if (no1==2) {
  var img="images/dice2.png"
}

else if (no1==3) {
  var img="images/dice3.png"
}
else if (no1==4) {
  var img="images/dice4.png"
}
else if (no1==5) {
  var img="images/dice5.png"
}
else if (no1==6) {
  var img="images/dice6.png"
}document.querySelector("#leftdice").setAttribute("src",img);

if(no2==1)
{
  var img="images/dice1.png"
}
else if (no2==2) {
  var img="images/dice2.png"
}

else if (no2==3) {
  var img="images/dice3.png"
}
else if (no2==4) {
  var img="images/dice4.png"
}
else if (no2==5) {
  var img="images/dice5.png"
}
else if (no2==6) {
  var img="images/dice6.png"
}document.querySelector("#rightdice").setAttribute("src",img);
if(no1>no2)
{
document.querySelector("#flag1").classList.remove("invisible");
document.querySelector("#flag2").classList.add("invisible");
}
else if (no1<no2) {

  document.querySelector("#flag1").classList.add("invisible");
  document.querySelector("#flag2").classList.remove("invisible");

}
else {
  document.querySelector("#flag1").classList.remove("invisible");
  document.querySelector("#flag2").classList.remove("invisible");
}
