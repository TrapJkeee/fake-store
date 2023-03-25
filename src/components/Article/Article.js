import "./Article.css";

const Article = ({ img, date, title, text }) => {
  return (
    <article className="article">
      <div className="article__img">
        <img src={img} alt="article_img" />
      </div>
      <div className="article__date">{date}</div>
      <div className="article__title">{title}</div>
      <div className="article__text">{text}</div>
      <button className="article__button">Подробнее</button>
    </article>
  );
};

export default Article;
