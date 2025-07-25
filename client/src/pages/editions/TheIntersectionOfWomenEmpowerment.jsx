import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const TheIntersectionOfWomenEmpowerment = () => {
  const article = articles.find((a) => a.id === 8); // ID 

  return article ? (
    <ArticlePage
      title={article.title}
      author={article.author}
      abstract={article.abstract}
      intro={article.intro}
      content={article.content}
      conclusion={article.conclusion}
      references={article.references}
    />
  ) : (
    <p>Article not found</p>
  );
};

export default TheIntersectionOfWomenEmpowerment;
