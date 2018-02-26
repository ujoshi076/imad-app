var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one': {title: 'Article ONE |Utkarsh',
        heading:'Article ONE',
        date: "Feb-2-2018",
        content: ` <p>
            Hello from utkarsh joshi
        </p>
         <p>
              Hello from Mr. X
         </p>
         <p>
            Hello from Joshi
        </p>`},
     'article-two': {title: 'Article Two |Utkarsh',
        heading:'Article Two',
        date: "Feb-2-2018",
        content: ` <p>
            Hello from utkarsh joshi
        </p>
         <p>
              Hello from Mr. X
         </p>
         <p>
            Hello from Joshi
        </p>`},
     'article-three': {title: 'Article THREE |Utkarsh',
        heading:'Article THREE',
        date: "Feb-2-2018",
        content: ` <p>
            Hello from utkarsh joshi
        </p>`}
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;
    
var htmlTemplate= `<!DOCTYPE html>
<html>
    <head>
        <title>
            Article one | Utkarsh
        </title>
        <meta name="viewport" content="width-device-widtth, initial-scale-1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    //articleName== article-one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
