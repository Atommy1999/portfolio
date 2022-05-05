import React from "react"

const Profile = () => {
  return (
    <div className="content">
      <h2 className="heading mb-10" id="profile">
        Profile
      </h2>
      <h3 className="subheading">About Me</h3>
      <p className="mb-8">
        こんにちは。Webサイトをご覧いただきありがとうございます。Atommyと申します。
        <br />
        普段は大学生として神経生物学を学んだり、趣味でフルートやユーフォニアムを演奏したりしています。
        <br />
        その一方、個人でWebサイトを作ったりパズルゲームを作ったりもしています。
        <br />
        することが多くて大変ですが、今後も楽しみながら開発を続けていきたいと思っています。
      </p>

      <h3 className="subheading">Skills</h3>
      <div className="flex flex-row flex-wrap justify-center gap-2 text-4xl mt-7 mb-10 md:justify-start">
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-gatsby-plain colored"></i>
        {/* <i class="devicon-nextjs-original colored"></i> */}
        <i class="devicon-wordpress-plain-wordmark colored"></i>
        <i class="devicon-illustrator-plain colored"></i>
        <i class="devicon-photoshop-plain colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>
      </div>

      <h3 className="subheading">Prospect</h3>
      <ul>
        <li className="mb-2">・ アプリを１つ作って公開する</li>
        <li className="mb-2">・ サーバーサイドの学習</li>
      </ul>
    </div>
  )
}

export default Profile
