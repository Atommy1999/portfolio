import React from "react"
import Work from "./Work"

import RAILWORD_IMAGE from "../../static/railword.svg"
import OUWO_IMAGE from "../../static/ouwo.png"

const Works = () => {
  return (
    <div className="content">
      <h2 className="heading" id="works">
        Works
      </h2>

      <div className="flex flex-wrap -m-4">
        <Work
          img_url={RAILWORD_IMAGE}
          title="テツドル - 駅名版Wordle"
          subtitle="Created with React"
          description="Wordleにインスパイアされて制作した、駅名推測パズルゲーム。Reactを用いて実装。"
        />
        <Work
          img_url={OUWO_IMAGE}
          title="大阪大学吹奏楽団 Webサイト"
          subtitle="Created with Wordpress"
          description="吹奏楽団のWebサイトを制作。演奏会に向けたブログの運営やサイトのデザインを担当"
        />
      </div>
    </div>
  )
}

export default Works
