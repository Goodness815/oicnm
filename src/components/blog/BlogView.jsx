import React from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaTwitterSquare } from "react-icons/fa";
import {
  BiMessageDetail,
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { BsEye, BsFillShareFill } from "react-icons/bs";
import styles from "./blog.module.css";
import BlogItemSm from "./BlogItemSm";

import doctor from "../../assets/doctor.webp";
import heart from "../../assets/heart.webp";
import pills from "../../assets/pills.webp";
import CommentItem from "./CommentItem";

function BlogView() {
  const data = useLocation().state;

  const blogItems = [
    {
      tag: "ADMISSION",
      title: "Should you be tested post covid?",
      img: doctor,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Overeating? Mindfulness exercises can support",
      img: heart,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Can vitamin D supplements prevent health issues?",
      img: pills,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Can vitamin D supplements prevent health issues?",
      img: pills,
    },
  ];

  return (
    <div className={styles.blog_view_container}>
      <div className={styles.blog_view_inner}>
        <div className={styles.blog_view_blogcase}>
          <img src={data?.img} alt="blogImg" />
          <div className={styles.blog_view_usercase}>
            <div className={styles.blog_view_usercase_left}>
              <FaUser className={styles.icon} /> samseyi
            </div>
            <div className={styles.blog_view_usercase_right}>
              <div className={styles.blog_view_usercase_right_item}>
                <BiMessageDetail className={styles.icon} /> 12
              </div>
              <div className={styles.blog_view_usercase_right_item}>
                <BsEye className={styles.icon} />
                1230
              </div>
            </div>
          </div>
          <div className={styles.blog_view_main}>
            <h1>{data?.title}</h1>
            <p>
              When it comes to pursuing a career in healthcare, the first and
              most crucial step is selecting the right medical college. Your
              choice of institution will significantly impact your education,
              training, and ultimately, your future as a healthcare
              professional. In this blog, we'll explore the essential factors to
              consider when selecting a medical college, ensuring you make an
              informed decision that paves the way for a successful and
              fulfilling career in medicine.
            </p>

            <ul>
              <li>
                Accreditation Matters: One of the primary considerations when
                choosing a medical college is its accreditation. Accreditation
                ensures that the institution meets certain standards of quality
                in education and facilities. In the United States, the Liaison
                Committee on Medical Education (LCME) accredits medical schools.
                Attending an accredited institution not only ensures the quality
                of your education but also makes you eligible for licensure
                exams and future training opportunities.
              </li>
              <li>
                Curriculum and Specializations: Different medical colleges may
                offer varying curricula and specialization options. Research the
                programs offered by each college and consider your career goals.
                Are you interested in primary care, surgery, or a specific
                specialty like cardiology or pediatrics? Ensure the college you
                choose aligns with your chosen path and provides the necessary
                resources and opportunities for your desired specialization.
              </li>
              <li>
                Clinical Exposure: Hands-on clinical experience is a critical
                aspect of medical education. Look for colleges that provide
                ample opportunities for clinical rotations and clerkships in
                reputable healthcare facilities. Practical experience allows you
                to apply your knowledge, gain valuable skills, and build a
                network of mentors and peers in the field.
              </li>
              <li>
                Faculty Expertise: The quality of faculty members plays a
                pivotal role in your medical education. Experienced and
                knowledgeable professors can provide guidance, mentorship, and
                valuable insights throughout your journey. Research the faculty
                profiles and their areas of expertise at each medical college to
                ensure you'll be learning from the best in the field.
              </li>
              <li>
                Campus Culture and Support: Lastly, consider the campus culture
                and support systems offered by each medical college. A
                supportive and inclusive environment can make a significant
                difference in your overall experience. Look for colleges that
                prioritize student well-being, offer academic support, and
                foster a sense of community among students.
              </li>
            </ul>
            <p>
              Choosing the right medical college is a crucial step on your path
              to becoming a healthcare professional. Take your time to research
              and consider factors like accreditation, curriculum, clinical
              exposure, faculty expertise, and campus culture. By making an
              informed decision, you'll set yourself up for success in your
              medical career and ultimately make a positive impact on the world
              of healthcare. Good luck in your journey toward excellence in
              medicine!
            </p>
            <div className={styles.blog_view_comments}>
              <BsFillShareFill className={styles.icon_black} />
              <BiLogoInstagramAlt className={styles.icon} />
              <BiLogoFacebookSquare className={styles.icon} />
              <FaTwitterSquare className={styles.icon} />
            </div>
            <h3 className={styles.comment_title}>22 comments</h3>
            <CommentItem />
            <CommentItem />

            <form className={styles.make_comment}>
              <div className={styles.form_flex}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <textarea></textarea>
              <button>Submit Now</button>
            </form>
          </div>
        </div>

        <div className={styles.blog_read_more_case}>
          <h2>Read other stories</h2>
          <div className={styles.blog_read_more_flex}>
            {blogItems.map((item, i) => {
              return (
                <BlogItemSm
                  tag={item.tag}
                  title={item.title}
                  img={item.img}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogView;
