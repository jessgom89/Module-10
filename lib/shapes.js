class shape {
    constructor( text, textColor,shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
     

    }
    render(){
        return ""
    }
  }
  
  // TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
  class Circle extends Shape {
    constructor(text, textColor, shapeColor,) {
      super(authorName, text, createdOn);
      this.title = title;
      this.comments = [];
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
  }
  
  class Comment extends ForumItem {
    constructor(authorName, text, createdOn, reaction) {
      super(authorName, text, createdOn);
      this.reaction = reaction;
    }
  }