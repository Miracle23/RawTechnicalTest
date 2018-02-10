var unSplash = (function () {
    var client_id = '336214749e10bd2366ac687b9d4fc64b946626b2034089c72d6fcdbf36e9e662';
    var searchType = 'none';

    return {
        getUnsplash: async function (more, limit, search) {
            if(search) {
                searchType = search;
            }
            let result;

            try {
                if (searchType != 'none') {
                    result = await $.ajax({
                        url: 'https://api.unsplash.com/search/photos',
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            client_id: client_id,
                            page: more,
                            per_page: limit,
                            query: searchType
                        }
                    });
                    return result.results;
                }
                else {
                    result = await $.ajax({
                        url: 'https://api.unsplash.com/photos',
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            client_id: client_id,
                            page: more,
                            per_page: limit,
                        }
                    });
                    
                return result;
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
})();
