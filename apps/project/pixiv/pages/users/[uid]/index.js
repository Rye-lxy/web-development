import { useRouter } from "next/router"

function ArtworkPage() {
    const router = useRouter()
    const { uid } = router.query

    return (
        <div>
            {uid}
        </div>
    )
}

export default ArtworkPage