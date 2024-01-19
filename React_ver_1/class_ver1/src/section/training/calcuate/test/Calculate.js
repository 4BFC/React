import { useState } from "react";
import Form from "./form";
export default function Calculate() {
  const [value, setValue] = useState()
  return (
    <div>
      {/* 결과를 보여주는 부분.. */}
      {/* useState를 사용해서 number일때와 그렇지 않을때로 나누기 -> 왜 useState를 사용해야하는가?*/}
      {/* 식에 맞는.. 함수 작성 */}

      <h3></h3>
      <Form symbols="AC"></Form>
      <Form symbols="+"></Form>
      <Form symbols="-"></Form>
      <Form symbols="x"></Form>
      <Form symbols="/"></Form>
      <Form symbols="="></Form>
      <Form symbols="1" _type="num"></Form>
      <Form symbols="2" _type="num"></Form>
      <Form symbols="3" _type="num"></Form>
      <Form symbols="4" _type="num"></Form>
      <Form symbols="5" _type="num"></Form>
      <Form symbols="6" _type="num"></Form>
      <Form symbols="7" _type="num"></Form>
      <Form symbols="8" _type="num"></Form>
      <Form symbols="9" _type="num"></Form>
      {/* <Form symbols="("></Form>
      <Form symbols=")"></Form> 
      <Form symbols="."></Form>*/}

      {/* <table>
        <tbody>
          <tr>
            <td><Form symbols="+"></Form></td>
            <td><Form symbols="-"></Form></td>
            <td><Form symbols="x"></Form></td>
          </tr>
          <tr>
            <td><Form symbols="/"></Form></td>
            <td><Form symbols="("></Form></td>
            <td><Form symbols=")"></Form></td>
          </tr>
          <tr>
            <td><Form symbols="1"></Form></td>
            <td><Form symbols="2"></Form></td>
            <td><Form symbols="3"></Form></td>
          </tr>
          <tr>
            <td><Form symbols="4"></Form></td>
            <td><Form symbols="5"></Form></td>
            <td><Form symbols="6"></Form></td>
          </tr>
          <tr>
            <td><Form symbols="7"></Form></td>
            <td><Form symbols="8"></Form></td>
            <td><Form symbols="9"></Form></td>
          </tr>
          <tr>
            <td><Form symbols="%"></Form></td>
            <td><Form symbols="."></Form></td>
            <td><Form symbols="="></Form></td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}