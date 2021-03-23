import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hello my name is Daniel, I am a Back-end developer and Certified in SCRUM methodology. I am available for new challenges, I am studying Information Systems at Nove de Julho University, and I am passionate about technology and programming.<br></br><br></br><strong>Skills:</strong> HTML, CSS, Java, JavaScript, Bootstrap, Node, Typescript, PostgreSQL.<br></br><br></br><strong>Tools:</strong> VSCode, PhotoShop, Figma, GitHub.<br></br>You can contact me on <a target="_blanck" href="https://www.linkedin.com/in/daniel-silva-1a3209196/">Linkedin</a></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}