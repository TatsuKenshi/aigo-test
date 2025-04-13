import { useEffect, lazy, Suspense } from "react";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import testImg from "../assets/images/test-food-1.jpg";
import SectionLoading from "../components/SectionLoading";

const BlogHome = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  const blogPages = [
    {
      title: "Best Homemade Kimchi Recipe",
      image: testImg,
      excerpt:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio placeat quo atque tempora consectetur repellat numquam? Officia, corrupti dignissimos. Assumenda quam dolorum iusto doloribus id recusandae distinctio est autem commodi ipsum natus, voluptate excepturi illum dolores enim omnis rem ratione. Obcaecati voluptate laboriosam quidem unde dignissimos praesentium et ipsa!",
    },
    {
      title: "Top 10 Korean Dishes for Winter",
      image: testImg,
      excerpt:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio placeat quo atque tempora consectetur repellat numquam? Officia, corrupti dignissimos. Assumenda quam dolorum iusto doloribus id recusandae distinctio est autem commodi ipsum natus, voluptate excepturi illum dolores enim omnis rem ratione. Obcaecati voluptate laboriosam quidem unde dignissimos praesentium et ipsa!",
    },
    {
      title: "How to Make a Heartwarming Bowl of Kimbap",
      image: testImg,
      excerpt:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio placeat quo atque tempora consectetur repellat numquam? Officia, corrupti dignissimos. Assumenda quam dolorum iusto doloribus id recusandae distinctio est autem commodi ipsum natus, voluptate excepturi illum dolores enim omnis rem ratione. Obcaecati voluptate laboriosam quidem unde dignissimos praesentium et ipsa!",
    },
    {
      title: "Best Korean Dishes for New Year's Eve",
      image: testImg,
      excerpt:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio placeat quo atque tempora consectetur repellat numquam? Officia, corrupti dignissimos. Assumenda quam dolorum iusto doloribus id recusandae distinctio est autem commodi ipsum natus, voluptate excepturi illum dolores enim omnis rem ratione. Obcaecati voluptate laboriosam quidem unde dignissimos praesentium et ipsa!",
    },
    {
      title: "Quick and Tasty Korean Snacks",
      image: testImg,
      excerpt:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio placeat quo atque tempora consectetur repellat numquam? Officia, corrupti dignissimos. Assumenda quam dolorum iusto doloribus id recusandae distinctio est autem commodi ipsum natus, voluptate excepturi illum dolores enim omnis rem ratione. Obcaecati voluptate laboriosam quidem unde dignissimos praesentium et ipsa!",
    },
    {
      title: "Top 10 Authentic Korean Sweets",
      image: testImg,
      excerpt:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio placeat quo atque tempora consectetur repellat numquam? Officia, corrupti dignissimos. Assumenda quam dolorum iusto doloribus id recusandae distinctio est autem commodi ipsum natus, voluptate excepturi illum dolores enim omnis rem ratione. Obcaecati voluptate laboriosam quidem unde dignissimos praesentium et ipsa!",
    },
  ];

  useEffect(() => {
    changeTitle({
      language: language,
      enTitle: "Blog Home",
      srTitle: "Blog Početna",
    });
  }, [language, changeTitle]);

  return (
    <>
      <div className="h-[300px]">
        <h1>Aigo Blog Home</h1>
      </div>

      <section className="flex flex-wrap justify-center">
        {blogPages.map((page, index) => {
          const { title, image, excerpt } = page;
          return (
            <article key={index} className="mx-8 w-1/4">
              <img src={image} alt={title} className="w-full" />

              <div>
                <h3>{title}</h3>
                <p>{excerpt}</p>
              </div>
              <button>read more</button>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default withNamespaces()(BlogHome);
