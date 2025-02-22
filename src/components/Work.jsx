import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Work = ({ work }) => {
  const { title, createdWith, featuredImage } = work
  const description = work.description.description
  const pageLink = `/work/${work.slug}`

  const inView = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="group w-full md:w-1/2 xl:w-1/4 p-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={inView}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
      >
        <Link to={pageLink}>
          <div class="relative top-0 bg-slate-100 p-6 rounded-lg shadow-md transition-all ease-out duration-300 hover:shadow-none hover:top-1">
            <div className="flex justify-center items-center overflow-hidden w-full h-40 rounded mb-6">
              <img
                className="rounded transition duration-300 group-hover:scale-95"
                src={featuredImage.file.url}
                alt="content"
              />
            </div>

            <h3 className="tracking-widest text-gold text-xs font-medium title-font">
              Created with {createdWith.join(", ")}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">
              {title}
            </h2>
            <p className="leading-relaxed text-md text-slate-500">
              {description}
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Work
