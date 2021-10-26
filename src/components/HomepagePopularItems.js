import React from "react";
import Resource from '../../static/img/resource.png';
import Article from '../../static/img/article.png';
import Video from '../../static/img/video.png';
import styles from './HomepagePopularItems.module.css'

const popularArticles = [
  {
    item: "Finding Your TreeFort Administrator",
    link: "",
  },
  {
    item: "Manage Your User Settings",
    link: "",
  },
  {
    item: "Forgot Account Number",
    link: "",
  },

];

const popularResources = [
  {
    item: "IDENTIFIED RISKS QUICK REFERENCE",
    link: "",
  },
  {
    item: "CLIENT INFORMATION SHEET",
    link: "",
  },
  {
    item: "IDENTIFIED RISKS QUICK REFERENCE",
    link: "",
  },
];

const popularVideos = [
  {
    item: "Create a New Client",
    link: "",
  },
  {
    item: "Suggested Clients",
    link: "",
  },
  {
    item: "Search and Attach an Existing Client",
    link: "",
  },
];

function Item({ item, link }) {
  return <a href={link}>{item}</a>;
}

const HomepagePopularItems = () => {
  return (
    <div className="popularItems container">
      <div className="row margin-horiz--lg">
        <div className="col col--12">
          <div className="row">
            <div
              className=
              "col col--4 d-flex justify-content-center"
            >
              <div
                className="item shadow--lw"
                style={{ border: "1px solid #bebebe" }}
              >
                <img src={Article} alt="article icon" className="img-fluid" />
                <h3
                  className=
                  "padding--md margin-bottom--none text-center "
                >
                  Popular Articles
                </h3>
                <div className="padding--md">
                  {popularArticles.map((props, idx) => (
                    <div className="margin-bottom--md" key={idx}>
                      <Item {...props} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className=
              "col col--4 padding-horiz--md padding-bottom--md p-none"
            >
              <div
                className="item shadow--lw"
                style={{ border: "1px solid #bebebe" }}
              >
                <img src={Resource} alt="Resource icon" />
                <h3
                  className=
                  "padding--md margin-bottom--none"

                >
                  Popular Resources
                </h3>
                <div className="padding--md">
                  {popularResources.map((props, idx) => (
                    <div className="margin-bottom--md" key={idx}>
                      <Item {...props} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className=
              "col col--4 padding-horiz--md padding-bottom--md p-none"
            >
              <div
                className="item shadow--lw"
                style={{ border: "1px solid #bebebe" }}
              >
                <img src={Video} alt="Video icon" />
                <h3
                  className=
                  "padding--md margin-bottom--none"

                >
                  Popular Videos
                </h3>

                <div className="padding--md">
                  {popularVideos.map((props, idx) => (
                    <div className="margin-bottom--md" key={idx}>
                      <Item {...props} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepagePopularItems;