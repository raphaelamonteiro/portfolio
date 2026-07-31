declare module 'particles.js/particles.js' {
    const particlesJS: {
        load: (tagId: string, path: string, callback?: () => void) => void
    }
    export default particlesJS
}

declare global {
    interface Window {
        particlesJS: (tag_id: string, config: unknown) => void
    }
}

export { }