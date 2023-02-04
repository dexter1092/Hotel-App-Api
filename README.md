# Hotel-App-Api
1. Login
        url : http://localhost:3000/api/v1/authentication/login
        Method : POST
        body Example : {
                            "email_id":"ajaychoudhary122@gmail.com",
                            "password" : "admin"
                        }
2. Add Hotel      
        url : http://localhost:3000/api/v1/hotel/addhotel
          Method : POST
          body Example : {
                            "hotel_type" : "1",
                            "domain" : "ah",
                            "name" : "Ajay Hotel",
                            "description" : "Best place to visit in mahableshwar",
                            "lat" : "18.520430",
                            "long": "73.856743",
                            "status" : 1,
                            "Picture":""
                         }
         Authorization : token
         
3. Get Users
        url : http://localhost:3000/api/v1/users/getusers
        Method : GET
        Authorization : token
        
         
