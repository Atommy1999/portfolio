import React from "react"

const Profile = () => {
  return (
    <div className="content">
      <h2 className="heading mb-10" id="profile">
        Profile
      </h2>
      <h3 className="subheading">About Me</h3>
      <p className="mb-8">
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
      <div className="flex flex-row flex-wrap justify-center gap-2 text-4xl mb-10 md:justify-start">
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-wordpress-plain-wordmark colored"></i>
        <i class="devicon-illustrator-plain colored"></i>
        <i class="devicon-photoshop-plain colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>
      </div>
      {/* <ul>
        <li className="mb-2">
          <i class="devicon-html5-plain-wordmark colored"></i>HTML5 /{" "}
          <i class="devicon-css3-plain colored"></i>CSS3
        </li>
        <li className="mb-2">
          <i class="devicon-javascript-plain colored"></i>JavaScript /{" "}
          <i class="devicon-react-original colored"></i>React
        </li>
        <li className="mb-2">
          <i class="devicon-wordpress-plain-wordmark colored"></i>
        </li>
        <li className="mb-2">
          <i class="devicon-illustrator-plain colored"></i>Illustrator /{" "}
          <i class="devicon-photoshop-plain colored"></i>Photoshop
        </li>
        <li className="mb-2">
          <i class="devicon-python-plain-wordmark colored"></i>Python
        </li>
      </ul> */}

      <h3 className="subheading">Prospect</h3>
      <ul>
        <li className="mb-2">・ React Nativeでアプリ開発</li>
        <li className="mb-2">・ サーバーサイドプログラミングの勉強</li>
      </ul>
    </div>
  )
}

export default Profile
