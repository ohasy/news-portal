import { useAppSelector } from '@/utils/hooks/useAppSelector';
import { Link, useHistory } from 'react-router-dom';
import styles from './NewsList.module.scss';
export const NewsList = () => {
  const history = useHistory();

  const newsList = useAppSelector((state) => state.news.newsList);
  const getUrl = (url: string) => `/article/${encodeURIComponent(url)}`;
  const onClickArticle = (url: string) => history.push(getUrl(url));
  return (
    <>
      {newsList.map((news, index) => (
        <article key={index + news.source.name}>
          <div
            className={styles.newsItem}
            onClick={() => onClickArticle(news.url)}
            tabIndex={0}
            aria-label="clickable article"
            data-testid="clickable-article"
            role="button"
            onKeyDown={() => onClickArticle(news.url)}
          >
            <h3 data-testid="article-title"> {news.title}</h3>
            <figure>
              <img
                className={styles.articleImg}
                src={news.urlToImage || ''}
                alt="article main"
                width="100%"
                height="600px"
              />
            </figure>
            <summary>
              <p>{news.description}</p>
              <Link to={getUrl(news.url)}>Read more</Link>

              <div className={styles.articleDetails}>
                {news.author && <p>{news.author} / </p>}
                {news.source?.name && news.source.name != news.author && (
                  <p> {news.source.name} / </p>
                )}

                <p role="time">
                  {new Date(news.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </summary>
          </div>
        </article>
      ))}
    </>
  );
};
