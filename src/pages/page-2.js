import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2.A typical essay contains many different kinds of information, often located in specialized parts or sections. Even short essays perform several different operations: introducing the argument, analyzing data, raising counterarguments, concluding. Introductions and conclusions have fixed places, but other parts don't. Counterargument, for example, may appear within a paragraph, as a free-standing section, as part of the beginning, or before the ending. Background material (historical context or biographical information, a summary of relevant theory or criticism, the definition of a key term) often appears at the beginning of the essay, between the introduction and the first analytical section, but might also appear near the beginning of the specific section to which it's relevant.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
