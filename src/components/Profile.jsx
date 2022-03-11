import React from "react"

const Profile = () => {
  return (
    <div className="content">
      <h2 className="heading" id="profile">
        Profile
      </h2>
      <p>
        ご覧いただきありがとうございます。本サイトは私のこれまでの制作物を紹介するポートフォリオサイトです。
      </p>
      <h3 className="subheading">About Me</h3>
      <p>
        大阪の大学に通う大学4年生。
        プログラミングに興味を持ちで独学で勉強しているうちにWebプログラミングにはまり、
        現在は<code>JavaScript</code>のフロントエンドフレームワークである
        <code>React</code>
        をメインに学習しています。
        今後の目標は、APIの実装をできるようになることや
        <code>React Native</code>
        でアプリをリリースすること。
      </p>

      <h3 className="subheading">Skill</h3>
      <ul>
        <li>HTML5 / CSS3</li>
        <li>JavaScript / React</li>
        <li>Illustrator / Photoshop</li>
        <li>Python</li>
      </ul>
    </div>
  )
}

export default Profile
