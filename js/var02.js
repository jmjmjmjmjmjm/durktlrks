//1.자바 스크립트는 자료형이 동적으로 정해진다.a-link-facebook

var num=10; //숫자 \ 정수  5Byte
console.log("num",num);

var str="문자열"; //문자열  9Byte
console.log("str",str);

var floatNum=10.5; //실수  8Byte
console.log("floatNum",floatNum);

var charStr="가"; //문자하나 한글은3Byte
console.log("charStr",charStr);


var boolData=true; //bool \ 참 거짓 1Byte(1bit)

console.log("boolData",boolData);
//-----------모든 데이터는 자바스크립트에선 4Byte로한다-----------------


var list=[1,2,3,4,5,6]; //4btyte -> Heap에 저장

console.log("list",list);

console.log("list[0]",list[0]);
console.log("list[5]",list[5]);


var user={  //자바 스크립트 오브젝트 (key : value) 4Byte -->Heap
    name: "홍길동",
    phone: "0111111"
}

console.log("user",user);
console.log("user->name",user.name);
console.log("user->phone",user.phone);

var hello= function(){ //익명 메서드 가능 (add를 생략가능) 이름이 이미hello잇어서
    alert("함수 호출됨");
}

hello();