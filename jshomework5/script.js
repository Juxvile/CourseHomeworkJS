class Circle {
    setRadius (radius) {
        this.radius = radius;
    }
    getRadius (){
        return this.radius;
    }
    getDiameter (){
        return this.radius * 2;
    }
    square (){
        return (this.radius * this.radius) * Math.PI;
    }
    lenght (){
        return this.radius * Math.PI * 2;
    }

}

let circle = new Circle();
circle.setRadius(8);
document.write(circle.getRadius() + '<br>');
document.write(circle.getDiameter() + '<br>');
document.write(circle.square() + '<br>');
document.write(circle.lenght() + '<br>');