import Link from "next/link"
const styles = {
  container: "h-screen w-screen bg-gray-100 flex items-center",
  content: "container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700",
  textContent: "max-w-md",
  title: "text-5xl font-dark font-bold",
  description: "text-2xl md:text-3xl font-light leading-normal",
  subText: "mb-8",
  button: "px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700",
  imageContainer: "max-w-lg"
}

export default function NotFound() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.title}>404</div>
            <p className={styles.description}>
              对不起,我们找不到这个页面.
            </p>
            <p className={styles.subText}>
              但不用担心,您可以在我们的主页上找到很多其他内容.
            </p>
            <button className={styles.button}>
                <Link href="/">  返回主页</Link>
            </button>
          </div>
          <div className={styles.imageContainer}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2395 1800" width="400">
              <path d="M1073.3,1016.93c-43.75-72.44-119.63-96.48-144.56-103.2h0a121.1,121.1,0,0,1-6-58.67c5.65-38.81,14.87-101.89,15.77-106.5L750,821.89,558.27,886.31c3.64,3,51.12,45.51,80.31,71.69a121.07,121.07,0,0,1,33,48.89h0c-14.84,21.13-57.72,88.19-44.92,171.84,12.09,79,67.16,129,103.83,162.39a396.42,396.42,0,0,0,88,60.44,121.54,121.54,0,0,0,98.43,19.6c5.76-1.34,16.84-4.18,27.22-7.38,4.58-1.42,10.4-3.23,17.06-5.57v0l1.1-.41,1.1-.39h0c6.61-2.47,12.24-4.8,16.67-6.65,10-4.19,20.35-9.11,25.63-11.77a121.54,121.54,0,0,0,63-78.09,396.28,396.28,0,0,0,28.85-102.77C1104.37,1159.06,1114.61,1085.35,1073.3,1016.93Z" />
              <ellipse cx="748.2" cy="816.89" rx="202.22" ry="30.98" transform="translate(-233.49 303.67) rotate(-19.91)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}