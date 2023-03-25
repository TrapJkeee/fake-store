import Article from "./Article";
import CardHeaderIndex from "../CardHeader/CardHeaderIndex";
import "./Articles.css";

const DUMMY_ARTICLES = [
  {
    id: 1,
    img: "#",
    date: "20.02.02",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo ipsam asperiores, modi ipsa eius sapiente neque quidem tempora molestiae.",
  },
  {
    id: 2,
    img: "#",
    date: "20.02.20",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo ipsam asperiores, modi ipsa eius sapiente neque quidem tempora molestiae.",
  },
  {
    id: 3,
    img: "#",
    date: "20.02.22",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo ipsam asperiores, modi ipsa eius sapiente neque quidem tempora molestiae.",
  },
];

const Articles = () => {
  const artiles = DUMMY_ARTICLES.map((item) => (
    <Article
      key={item.id}
      id={item.id}
      img={item.img}
      date={item.date}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <section className="articles">
      <CardHeaderIndex title="Статьи" text="все" />

      <div className="articles__body">{artiles}</div>
    </section>
  );
};

export default Articles;
