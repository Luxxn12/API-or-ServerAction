export const dynamic = "force-dynamic"
async function getUser() {
    const list = Array.from({ length: 20 }).map((v, k) => ({ data: k }))
    console.log("diminta")
    await new Promise(r => setTimeout(r, 1000))
    console.log("dilanjutkan")
    return list
}
export async function GET() {
    const data = await getUser()
    return Response.json({
        "leng": data.length,
        "success": true,
        data
    })
}