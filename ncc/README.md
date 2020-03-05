# REST APIs
these are the detailed description of APIs which we had created in this project

### 1) Timer API
    returns HttpResponse with message 'Ready to go' and set start the timer i.e. start time variable to start time

### 2) Time API
    Used by frontend to fetch the time at every page, returns JsonResponse with the JSON format 
    {
        "time": 7201, 
        "hh": 2, 
        "mm": 00, 
        "ss": 01
    }

### 3) Check API
###### POST request:
        receive username from the frontend and return boolean value whether the user is present in the database or not

### 4) Signup API
###### POST request:
        Json Format of receiving data:
        {
            'userName': "coderelay", 
            'password': "12341234",
            'player1Email': "gauravg@iima.ac.in",
            'player2Email': "sanket@hello.com",
            'player1Name': "Gaurav",
            'player2Name': "sankeya",        
            'player1Contact': "9999999999",
            'player2Contact': "9999999999",
            'year': true
        }
             
        returns Json Response, which is not used by the frontend
        {
            "data": {
                "userName": "coderelay",
                "password": "12341234",
                "player1Email": "gauravg@iima.ac.in",
                "player2Email": "sanket@hello.com",
                "player1Name": "Gaurav",
                "player2Name": "sankeya",
                "player1Contact": "9999999999",
                "player2Contact": "9999999999",
                "year": true
            }
        } 
        with status=201

### 5) Code API
###### GET request:
        In Get method the data does not come with request object so we have to send the data into headers or query parameters,
        so username is send into the custom header,
        and attempt as query parameter..
        and question number as a path parameter 
                      
        By default value of Query parameter attempt is -1
    
        below document explains the APIs for HttpRequest and HttpResponse objects:
        https://docs.djangoproject.com/en/3.0/ref/request-response/
        
        read about request.META from above link   
        
        and it returns the data in Json format:
        data = {
            "title": "Question1",
            "question": "This is the text of the Question",
            "code": "# include <iostream> ... return 0; }"
        }                  
        so if the attempt variable is -1 the code = "" i.e. empty string, else it will be send the code in the dict.

###### POST request:
    we can access data of header, from both POST as well as GET! 
    Json Format of receiving data:
    {
        'username': "gauravg"  
        'attempt': 2,
        'content': "999999999",
        'ext': "cpp",
        'runFlag': true
    }
    
    Json Response after calculations by above given data:
    
    if not runflag:    
        dict = {
            "testcases": ['AC', 'WA', 'AC', 'AC', 'AC', 'AC'],
            "status": 'PA',
            "error": "",
            "score": 83,
            "total": 183
        }    
    else:
        dict = {
            "testcases": 'AC',
            "error": ""
        }

### 6) LeaderBoard API
###### GET Request:
    username is send into the header
    
    JSON data which we send in get method,
    d is the array of JSON objects
    [
        {
            'teamName': "gauravg",
            'score': 188,
            'color': "nonTrans"
            'q1': 100,
            'q1': 0,
            'q1': 0,
            'q1': 0,
            'q1': 0,
            'q1': 88    
        },
        l = {
            'teamName': "sankey",
            'score': 266,
            'color': "nonTrans"
            'q1': 100,
            'q1': 100,
            'q1': 0,
            'q1': 0,
            'q1': 0,
            'q1': 66    
        }       
    ]

### 7) Submissions API
###### GET Request:
    username is send into the header
    and question number as a path parameter
    
    usersub is array of Json objects,
    [
        {
            'sn': 1,
            'time': '01:51',
            'rate': 35
        },
        {
            'sn': 2,
            'time': '01:56',
            'rate': 50
        }
    ]   

### 8) Questionhub API
###### GET Request:
    username is send into the header
    
    data is array of Json objects,
    [
        {
            "sn": 1,
            "title": "Question1",
            "accuracy": 50,
            "subm": 3
        },
        {
            "sn": 2,
            "title": "Question2",
            "accuracy": 100,
            "subm": 2
        }        
    ]

### 9) Result API
##### GET Request:
    username is send into the header
    
    Returns data in given Json form 
    {
        "score"=  [          
                    {
                        'id': 1,
                        'range': 100-200,
                        'users': d['score1']                    
                    },
                    {   
                        'id': 2,
                        'range': 200-300,
                        'users': d['score2']                    
                    }
                ],
        "rank": 20,
        "score": 180,
        "attempts": 3          
    }

### 10) Total API
##### GET Request:
    username is send into the header
    
    Returns data in given Json Format
    {
        'total': 200
    }