import React from "react"

const Profile = () => {
  return (
    <div className="content">
      <h2 className="heading" id="profile">
        Profile
      </h2>
      <h3 className="subheading">About Me</h3>
      <p>
        大阪の大学に通う大学4年生。
        <br />
        高校生の頃にプログラミングに興味を持ち、独学で勉強しているうちにWebプログラミングが好きになりました。
        現在は<code>JavaScript</code>のフロントエンドフレームワークである
        <code>React</code>
        をメインに学習しています。
        <br />
        音楽が趣味で、フルートとユーフォニアムを11年ほど吹いています。
      </p>

      <h3 className="subheading">Skills</h3>
      <ul>
        <li className="mb-2">
          <i class="devicon-html5-plain colored"></i>HTML5 /{" "}
          <i class="devicon-css3-plain colored"></i>CSS3
        </li>
        <li className="mb-2">
          <i class="devicon-javascript-plain colored"></i>JavaScript /{" "}
          <i class="devicon-react-original colored"></i>React
        </li>
        <li className="mb-2">
          <i class="devicon-illustrator-plain colored"></i>Illustrator /{" "}
          <i class="devicon-photoshop-plain colored"></i>Photoshop
        </li>
        <li className="mb-2">
          <i class="devicon-python-plain colored"></i>Python
        </li>
      </ul>

      <h3 className="subheading">Want to Do</h3>
      <ul>
        <li className="mb-2">・ React Nativeでアプリ開発</li>
        <li className="mb-2">・ サーバーサイドプログラミングの勉強</li>
      </ul>
    </div>
  )
}

export default Profile
