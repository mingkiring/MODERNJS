//클로저 활용의 정보 은닉 
function Counter() {
    // 카운트를 유지하기 위한 자유 변수
    var counter = 0;
  
    // 클로저
    this.increase = function () {
      return ++counter;
    };
  
    // 클로저
    this.decrease = function () {
      return --counter;
    };
  }
  // 생성자 함수 Counter의 변수 counter 는 this 에 바인딩된 프로퍼티가 아니라 변수
  // counter 가 thisdp 바인딩된 프로퍼티라면 생성자함수 Counter가 생성한 인스턴스를통해
  // 외부에서 접슨이 가능한 public 프로퍼티가 되지만 생성자 함수가 Counter 내에서 선언된 변수이므로 접근불가능.
  // But, increase와 decrease가 클로저이기 떄문에 자신이 생성됐을때의 렉시컬 환경인 생성자 함수 
  // Counter 의 변수에 counter에 접근 가능. 즉, 클래스 기반언어 private 키워드를 흉내낼수있음
  const counter = new Counter();
  
  console.log(counter.increase()); // 1
  console.log(counter.decrease()); // 0