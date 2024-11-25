import React from "react";
import blogsData from "../../data/blog.json";
const Blogs = () => {
  return (
    <section className="section__container blog__container">
      <h2 className="section__header">Latest blogs</h2>
      <p className="section_subheader mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo minus
        asperiores quaerat ducimus quidem tenetur impedit debitis? Provident
        consectetur incidunt, pariatur facilis nemo adipisci earum repellendus
        maiores quidem alias.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogsData.map((blog, index) => (
          <div
            key={index}
            className="blog__card cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <img src={blog.imageUrl} alt="blog image" />
            <div className="blog__card__content">
              <h6>{blog.subtitle}</h6>
              <h4>{blog.title}</h4>
              <p>{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
