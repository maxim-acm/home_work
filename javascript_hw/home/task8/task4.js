function Article() {
  this.created = new Date();
  Article.count++;
  Article.date = this.created;
}

Article.count = 0;

Article.showStats = function() {
  return "All: " + this.count + ", last date: " + this.date;
};

var art1 = new Article();
var art2 = new Article();
var art3 = new Article();

console.log(Article.showStats());
