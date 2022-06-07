async function fetchApi(link,key,bound="",value="",limit="",offset=""){
    const url=`${link}${key}${bound}${value}${limit}${offset}`
    try {
        const response = await fetch(url)
        const responseJSON = await response.json()
        const gifData = responseJSON.data
        return gifData;
    } catch (error) {
        console.error(error)
    }
}