import { NextPage } from "next"
import Layout from "src/layout"

type PageWithMainLayoutType = NextPage & { layout: typeof Layout }

type PageWithLayoutType = PageWithMainLayoutType

export default PageWithLayoutType
