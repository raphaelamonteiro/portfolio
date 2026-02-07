'use client'
import { useTranslation } from '@/contexts/TranslationContext'


export default function Loading() {
    const { t } = useTranslation()

    return (
        <div className="loading-container">
            <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Q5OGR6d2t0OWEzcmhzOW5jazBrY3RqMnN3bTNqM2RnZXMzZTVvbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dyLJF4PEsNBeONrPpE/giphy.gif"
                alt="gatinho" width={260} height={260} />

            <div className="loading-text">
                <p className="loading-text">Loading...</p>
            </div >
        </div >
    )
}
