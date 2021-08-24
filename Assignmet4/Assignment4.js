console.log("Assignment 4 .......");


let ratingData = [
    {restaurant: 'KFC', rating: 5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating :3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
  

    let averageData = [];   // array which will store the average data
    let copyOfRatingData = ratingData;   // copy of array ratingData 
    let ratingMoreThanFour = [];    // array which will store restaurants with more than rating of 4



    // Questrion 1

    copyOdRatingData.forEach((element,index) => {
            let restaurant = element.restaurant,
            averageRating = element.rating,
            count = 1;
            for (let i = index + 1; i < copyOdRatingData.length; i++){
                if (restaurant === copyOdRatingData[i].restaurant){
                    averageRating += copyOdRatingData[i].rating;
                    count ++;
                    ratingData.splice(i,1);
                }
            } 
            averageRating = averageRating/count; 
            averageData.push({restaurant : restaurant, averageRating : averageRating});
    });
    console.log(averageData);




// Question 2

    averageData.forEach(element => {
            if(element.averageRating >4 )
            {
                ratingMoreThanFour.push(element);
            }
    });

    console.log(ratingMoreThanFour);