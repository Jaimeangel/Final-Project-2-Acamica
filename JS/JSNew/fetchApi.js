async function fetchApi(link,key,bound="",value=""){
    const url=`${link}${key}${bound}${value}`
    console.log(url)
    const response = await fetch(url)
    const responseJSON = await response.json()
    const gifData = responseJSON.data

    return gifData;
}