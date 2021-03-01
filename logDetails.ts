// type alias
type Uid = number | string | undefined

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function logDetails(uid: number, item: string){
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has name as ${user}.`)
}

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform("Windows")

logDetails(123, "sapato")