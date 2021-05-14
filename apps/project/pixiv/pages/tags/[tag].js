import { useRouter } from "next/router"

function ArtworkPage() {
    const router = useRouter()
    const { tag } = router.query

    return (
        <div>
            {decodeURIComponent(tag)}
        </div>
    )
}

export default ArtworkPage