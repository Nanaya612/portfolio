import Projeto from "@/app/components/Projeto"


type Props = {
    params: Promise<{Slug: string}>
}
const Page = async ({params} : Props) => {
    const {Slug} = await params

    return(
    <>
        <Projeto slug={Slug}/>
    </>
)
}

export default Page