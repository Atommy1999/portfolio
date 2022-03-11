import React from "react"
import { Link } from "gatsby"

const Work = ({ img_url, title, subtitle, description }) => {
  return (
    <div className="group xl:w-1/4 md:w-1/2 w-full p-4 ">
      <Link to="/">
        <div class="bg-silver p-6 rounded-lg">
          <div className="flex justify-center items-center overflow-hidden w-full h-40 rounded mb-6">
            <img
              className="transition duration-200 group-hover:scale-110"
              src={img_url}
              alt="content"
            />
          </div>

          <h3 className="tracking-widest text-gold text-xs font-medium title-font">
            {subtitle}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-3">
            {title}
          </h2>
          <p className="leading-relaxed text-base text-slate-500">
            {description}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Work
