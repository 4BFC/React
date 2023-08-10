import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
  const [name, setName] = useState("Mike");//
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  return (
    <div>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
      {/* 여기 컴퍼넌트에선 UserName의 name은 state이지만 UserName입장에선 props이다. */}
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike");
      }}>Change</button>
    </div>
  );
}