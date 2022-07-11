class FetchData{
    constructor({
        link,
        key="wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM",
        bound="",
        limit="" 
    }){
        this.link=link;
        this.key=key;
        this.bound=bound;
        this.limit=limit;
    }
    
    async fetchApi(value="",callback="",offset=""){
        const url=`${this.link}${this.key}${this.bound}${value}${this.limit}${callback+offset}`;
        try {
            const response = await fetch(url)
            const responseJSON = await response.json()
            const gifData = responseJSON.data
            return gifData; 
        } catch (error) {
            console.error(error)
        }
    };
};
