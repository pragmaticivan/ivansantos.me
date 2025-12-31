import dog1Image from "./dog1.png";
import dog2Image from "./dog2.png";
import styles from "./styles.module.scss";

const avatars = [dog1Image.src, dog2Image.src];
const BlogAvatar = () => {
  return (
    <div
      className={styles.avatar}
      style={{
        backgroundImage: `url(${
          avatars[Math.floor(Math.random() * avatars.length)]
        })`,
      }}
    />
  );
};

export default BlogAvatar;
