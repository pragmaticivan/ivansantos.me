import NavigationBar from "../../components/NavigationBar";
import styles from "../../styles/blog.module.scss";

export default function BlogLoading() {
  return (
    <>
      <header className={styles.header}>
        <NavigationBar />
      </header>
      <div className={styles.articleList}>
        {/* Render skeleton articles matching the real ArticleItem design */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <article style={{ paddingBottom: "60px" }}>
              {/* Date skeleton */}
              <div
                className="skeleton mb-2 rounded"
                style={{
                  width: "120px",
                  height: "16px",
                  letterSpacing: "4.5px",
                  opacity: 0.5,
                }}
              />

              {/* Title skeleton with flag placeholder */}
              <div className="mb-4 flex items-center">
                {/* Flag placeholder */}
                <div
                  className="skeleton mr-1 shrink-0 rounded"
                  style={{ width: "36px", height: "23px" }}
                />
                {/* Title text */}
                <div
                  className="skeleton rounded"
                  style={{
                    width: `${Math.random() * 200 + 300}px`,
                    height: "36px",
                    maxWidth: "500px",
                    opacity: 0.9,
                  }}
                />
              </div>

              {/* Description skeleton */}
              <div className="space-y-2">
                <div
                  className="skeleton rounded"
                  style={{
                    width: `${Math.random() * 100 + 400}px`,
                    height: "16px",
                    opacity: 0.5,
                  }}
                />
                <div
                  className="skeleton rounded"
                  style={{
                    width: `${Math.random() * 150 + 300}px`,
                    height: "16px",
                    opacity: 0.5,
                  }}
                />
              </div>
            </article>
          </div>
        ))}

        {/* Loading indicator at the bottom */}
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-2">
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
          <span className="ml-3 text-gray-500 text-sm">
            Loading articles...
          </span>
        </div>
      </div>
    </>
  );
}
