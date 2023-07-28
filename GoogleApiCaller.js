class GoogleApiCaller{
    

    static async searchByNameTitleAndAutor2(title,authors){
        let url = "https://www.googleapis.com/books/v1/volumes?q=({0}+inauthor:{1})&maxResults=20";
        url = url.replace("{0}",title).replace("{1}",authors);
        try{
        let result = await fetch(url);
        if (!result.ok){
            throw new Error(`HTTP error: ${result}.status}`);
        }
        const response = await result.json();
        return response;
        }
        catch(error){
        console.error(`Could not get products: ${error}`);
        }

    }
}

