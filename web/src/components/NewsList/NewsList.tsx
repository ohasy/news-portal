import { useAppSelector } from '@/utils/hooks/useAppSelector';
import { Link, useHistory } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import './NewsList.scss';
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
            className="news-item"
            onClick={() => onClickArticle(news.url)}
            tabIndex={0}
            role="button"
            onKeyDown={() => onClickArticle(news.url)}
          >
            <h3> {news.title}</h3>
            <figure>
              <img
                className="article-img"
                src={news.urlToImage || ''}
                alt="article main"
                width="100%"
                height="600px"
              />
            </figure>
            <summary>
              <p>{news.description}</p>
              <Link to={getUrl(news.url)}>Read more</Link>

              <div className="article-details">
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
