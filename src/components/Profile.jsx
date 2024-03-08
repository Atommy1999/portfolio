import React from "react"

const Profile = () => {
  return (
    <div className="content">
      <h2 className="heading mb-10" id="profile">
        Profile
      </h2>
      <h3 className="subheading">About Me</h3>
      <p className="mb-1">
        はじめまして。この度は私のポートフォリオサイトにお越しいただき、ありがとうございます。
        </p><p className="mb-1">
        私は現在、大学院で生命科学の研究を行っていますが、IT業界でキャリアを作りたいと考え就職活動を行っています。
        </p><p className="mb-1">
        大学学部時代、WebサイトやWebゲームの個人開発を行ってきました。
        新しい知識や技術を学び、手を動かしてつくったものが動くことが私の喜びです。さらに、それで人に喜んでもらえたら、さらにうれしく思います。
        </p><p className="mb-1">
       また、小学生のころから12年間、フルートやユーフォニアムの演奏を続けてきました。楽器演奏を通じた自己表現は何事にも代えがたいものです。より良い演奏・表現を目指す試行錯誤の経験は、私の物事に対する取り組み方の根幹になっています。
       </p><p className="mb-8">
        今後もITの分野でさらなるスキルアップを目指し、社会に貢献できるような有意義な仕事をして行きたいと考えています。
      </p>

      <h3 className="subheading">Skills</h3>
      <div className="flex flex-row flex-wrap justify-center gap-2 text-4xl mt-7 mb-10 md:justify-start">
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-gatsby-plain colored"></i>
        <i class="devicon-nextjs-original colored"></i>
        <i class="devicon-wordpress-plain-wordmark colored"></i>
        <i class="devicon-illustrator-plain colored"></i>
        <i class="devicon-photoshop-plain colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>

      </div>

      <h3 className="subheading">Prospect</h3>
      <ul>
        <li className="mb-2">・ サーバーサイド技術の学習</li>
        <li className="mb-2">・ アプリを１つ作って公開する</li>
      </ul>
    </div>
  )
}

export default Profile
