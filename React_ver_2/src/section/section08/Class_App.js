import { useState } from "react";
import UserName from "./UserName";
//props는 컴포넌트 내부에서는 변경 할 수 없다. 변경하기 위해서는 컴포넌트 내부에서 state를 새로 주어야한다.
function Class_App({ age }) { //{age}로 작성해도 된다.
  // props.age = 100; //이렇게 작성하면 에러가 발생한다. 즉 넘겨받은 값은 실제로 변경 할 수 없다. 구현한다면 데이터와 연결을 해서 변경은 가능하겠다.
  const [name, setName] = useState("Mike");
  // const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성입입니다." : "미성년자 입니다."
  return (
    <div>
      <h2>
        {name}({age}) : {msg}
      </h2>{/* props.age */}
      <UserName name={name}></UserName>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          // setAge(age + 1); //이상태에서는 넘겨받은 값을 변경한 것이 아니다.
        }}>Change</button>

    </div>
  );
}

export default Class_App;