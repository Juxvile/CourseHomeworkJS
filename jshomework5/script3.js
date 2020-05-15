class cssClass {
    constructor(name, styles) {
        this.name = name;
        this.styles = styles;
    }

    setStyles (style){
        this.styles.push(style);
    }

    deleteStyle (style) {
        let index = this.styles.indexOf(style);
        if (index !== -1) {
            this.styles = this.styles.slice(index, 1);
        } else {
            console.log ('данный элемент отсутсвует');
        }
    }

    getCss () {
        let styleStr = '';
        for (let style of this.styles) {
            styleStr += style;
        }
        return `${this.name} {${styleStr}}`;
    }
}


